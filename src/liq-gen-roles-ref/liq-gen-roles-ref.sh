#!/usr/bin/env bash

cat <<'EOF' | node - "$@"
source ../../bin/gen-roles-ref.js # bash-rollup-no-recur
EOF
