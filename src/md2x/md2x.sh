#!/usr/bin/env bash

# bash strict settings
set -o errexit # exit on errors
set -o nounset # exit on use of uninitialized variable
set -o pipefail

import echoerr
import options
# import prompt

# require-answer "Host OU or context path? (E.g., 'DevOps-ProductionMainApp', 'Security-SDLCTest', etc.)" HOST_OU_PATH
# get-answer ""

# export HOST_OU_PATH

# At one point, we supported the idea of generating "final" yaml files from a gucci processed template file. It turned out to be unecessary (I think), but want to keep this around till confirmed.

# $(npm bin)/gucci ./cloud/auths/environment/devops-admin-auths.yaml.tmpl

eval "$(setSimpleOptions OUTPUT_FORMAT=)"

[[ -n "${OUTPUT_FORMAT}" ]] || OUTPUT_FORMAT='pdf'
[[ "${OUTPUT_FORMAT}" == 'pdf' ]] \
  || [[ "${OUTPUT_FORMAT}" == 'html' ]] \
  || echoerrandexit "Unsupported output format '${OUTPUT_FORMAT}'."

VERSION=$(OUTPUT=$(git status --porcelain) && [ -z "${OUTPUT}" ] && cat package.json | jq '.version' || echo 'working')

while read -r MD_FILE; do
  TITLE=$(basename "${MD_FILE}" .md)

  SETTINGS=$(cat <<"EOF"
title: ${TITLE}
author: TODO: Author Name
header-includes: |
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \fancyfoot[CO,CE]{Version: ${VERSION}}
    \fancyfoot[LE,RO]{\thepage}
EOF

  pandoc -f gfm -t html5 --css github.css <(echo "${SETTINGS}") "${MD_FILE}" -o "${TITLE}.${OUTPUT_FORMAT}"
done < <(find ${ROOT_DIR} -name "*.md")
