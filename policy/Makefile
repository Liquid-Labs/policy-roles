DOC_GENERATOR := ../bin/gen-roles-ref.js

default: Company\ Roles\ Reference.md

.DELETE_ON_ERROR:

$(DOC_GENERATOR): ../js/index.js
	npm run build

Company\ Roles\ Reference.md: roles.json $(DOC_GENERATOR)
	node $(DOC_GENERATOR) "$<" > "$@"
