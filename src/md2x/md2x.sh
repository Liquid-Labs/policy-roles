#!/usr/bin/env bash

# bash strict settings
set -o errexit # exit on errors
set -o nounset # exit on use of uninitialized variable
set -o pipefail

import echoerr
import lists
import options
# import prompt

source ./lib/index.sh

# require-answer "Host OU or context path? (E.g., 'DevOps-ProductionMainApp', 'Security-SDLCTest', etc.)" HOST_OU_PATH
# get-answer ""

# export HOST_OU_PATH

# At one point, we supported the idea of generating "final" yaml files from a gucci processed template file. It turned out to be unecessary (I think), but want to keep this around till confirmed.

# $(npm bin)/gucci ./cloud/auths/environment/devops-admin-auths.yaml.tmpl

# extract options
# TODO: SET_TITLE should be just TITLE, but we use that var and don't want to change it just now.
eval "$(setSimpleOptions --script KEEP_INTERMEDIATE: OUTPUT_FORMAT= SET_TITLE:t= SINGLE_PAGE -- "$@")"

# process options
[[ -n "${OUTPUT_FORMAT}" ]] || OUTPUT_FORMAT='pdf'
[[ "${OUTPUT_FORMAT}" == 'pdf' ]] \
  || [[ "${OUTPUT_FORMAT}" == 'html' ]] \
  || [[ "${OUTPUT_FORMAT}" == 'opendocument' ]] \
  || [[ "${OUTPUT_FORMAT}" == 'docx' ]] \
  || echoerrandexit "Unsupported output format '${OUTPUT_FORMAT}'."

SEARCH_DIRS=''
MD_FILES=''
# process args
while (( $# > 0 )); do
  TEST_PATH="${1}"; shift
  if [[ -d "${TEST_PATH}" ]]; then
    list-add-item SEARCH_DIRS "${TEST_PATH}"
  elif [[ -f "${TEST_PATH}" ]]; then
    list-add-item MD_FILES "${TEST_PATH}"
  else
    echoerrandexit "'${TEST_PATH}' is neither a file nor a directory. Bailing out."
  fi
done

VERSION=$(OUTPUT=$(git status --porcelain) && [ -z "${OUTPUT}" ] && cat package.json | jq '.version' || echo 'working')

case "${OUTPUT_FORMAT}" in
  pdf|html)
    INTERMEDIDATE_FORMAT=html5;;
  *)
    INTERMEDIDATE_FORMAT="${OUTPUT_FORMAT}";;
esac

if [[ -n "${SINGLE_PAGE}" ]]; then
  COMBINED_FILE="${SET_TITLE:-input}.md"
  ! [[ -f "${COMBINED_FILE}" ]] || rm "${COMBINED_FILE}"
fi

{
  while read -r MD_FILE; do
    [[ -n "${MD_FILE}" ]] || continue
    # --to html5 : uses the HTML 5 engine. Yes, even when rendering PDF. It renders and
    #              prints and saves us the hassle of having to install pdflatex

    if [[ -n "${SINGLE_PAGE}" ]]; then
      { cat "${MD_FILE}"; echo; } >> "${COMBINED_FILE}"
    else
      TITLE=$(basename "${MD_FILE}" .md)
      
      BASE_OUTPUT="${TITLE}"
      if [[ "${OUTPUT_FORMAT}" == 'html' ]]; then BASE_OUTPUT="${BASE_OUTPUT}-base"; fi
      BASE_OUTPUT="${BASE_OUTPUT}.${OUTPUT_FORMAT}"
      
      generate-page
    fi
  done
  
  if [[ -n "${SINGLE_PAGE}" ]]; then
    TITLE="${SET_TITLE:-output}"
    BASE_OUTPUT="${TITLE:-output}.${OUTPUT_FORMAT}"
    MD_FILE="${TITLE:-input}.md"
    generate-page
  fi
} < <(echo "${MD_FILES}"; for ROOT_DIR in $SEARCH_DIRS; do find ${ROOT_DIR} -name "*.md"; done | sort)
