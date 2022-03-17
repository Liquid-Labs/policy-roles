#!/usr/bin/env bash

# bash strict settings
set -o errexit # exit on errors
set -o nounset # exit on use of uninitialized variable
set -o pipefail

MY_PACKAGE='@liquid-labs/policy-core'

SETTINGS="$(cat <<EOF
EMAIL_DELEGATION_TOOL='Gmelius'
USES_GITHUB_REPOS=1
USES_GITHUB_ISSUES=1
USES_GITBUCKET=0
USES_CODECOMMIT=0
USES_OPENPROJECT=0
USES_LIQ=1
HAS_PRODUCT_STRATEGY_COMMITTEE=0
HAS_TECHNICAL_OPS=0
DEVELOPS_APPS=0
USES_RELEASE_NOTES=0
HAS_DRC_BCP=0
TRACKS_APPROVED_TECHNOLOGIES=0
HAS_CARDHOLDER_DATA=0
HAS_SENSITIVE_DATA=0
GITHUB_REPOS_SCOPE='foo'
TASKS_LIMITED_TO_A_SINGLE_PROJECT=0
TRACKS_BACKOUT=0
EOF
)"

cleanup() {
  echo -n "Cleaning up... "
  rm node_modules/${MY_PACKAGE}
  echo "done."

  return ${EXIT}
}

trap cleanup EXIT

BIN="$(npm bin)"
EXIT=0

echo "Preparing..."
rm -rf .build test-out
mkdir test-out
ln -s "$PWD" node_modules/${MY_PACKAGE}
POLICY_COUNT=$(cd node_modules/@liquid-labs && find -L . -path "./policy-*/policy/*" \( -name "*.md" -o -name "*.mmd" \) -not -path "*/node_modules/*" -not -path "*/.yalc/*" -not -path "*/tmpl/*" | wc -l | awk '{print $1}')
mkdir .build
npm explore @liquid-labs/policy-projects -- cat ./test/settings.sh >> .build/settings.sh
echo "$SETTINGS" >> .build/settings.sh

echo -n "Test document parsing: "
{ "${BIN}/liq-init-docs" run test-out > /dev/null || { echo "FAIL"; EXIT=1; false; }; } \
  && make -f .build/main.makefile --silent || { echo "FAIL"; EXIT=1; }
if (( $EXIT == 0 )); then echo "PASS"; fi

EXPECT_OUT=$(( $POLICY_COUNT + 1 )) # for the Glossary.md
echo -n "Expect $EXPECT_OUT files; "
OUT_FILES=$(find test-out -type f | wc -l | awk '{print $1}')
echo -n "found $OUT_FILES: "
if (( $OUT_FILES == $EXPECT_OUT )); then
  echo "PASS"
else
  echo "FAIL"
  EXIT=1
fi

exit $EXIT
