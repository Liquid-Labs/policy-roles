DOC_GENERATOR := bin/gen-roles-ref.js

default: policy/Company\ Roles\ Reference.md

.DELETE_ON_ERROR:

$(DOC_GENERATOR): js/index.js
	npm run build:js

policy/Company\ Roles\ Reference.md: policy/roles.json $(DOC_GENERATOR)
	node $(DOC_GENERATOR) "$<" > "$@"
