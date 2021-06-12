#!/usr/bin/env bash

import real_path

node $(dirname $(real_path $0))/gen-roles-ref.js "$@"

# We were doing this, but it dosen't work with source maps...
# cat <<'EOF' | node - "$@"
# source ./gen-roles-ref.js # bash-rollup-no-recur
# EOF
