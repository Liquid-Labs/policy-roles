SHELL=/bin/bash -o pipefail
DOC_GENERATOR:=bin/gen-roles-ref.js
NPM_BIN:=$(shell npm bin)
CATALYST_SCRIPTS:=$(NPM_BIN)/catalyst-scripts $@
SPACE:=$(null) $(null)
POLICY_SRC:=$(shell find policy -type f | sed 's/ /\\ /g')
TEST_MARKER:=$(shell OUTPUT=$(git status --porcelain) && [ -z "${OUTPUT}" ] && git rev-parse HEAD || echo 'working')

BUILD_TARGETS:=$(DOC_GENERATOR) policy/Company\ Roles\ Reference.md
TEST_TARGETS:=.meta/test-roles.json.log .meta/test-policy.log
LINT_TARGETS:=.meta/qa-lint.log
ALL_TARGETS:=$(BUILD_TARGETS) $(TEST_TARGETS) $(LINT_TARGETS)

JS_SRC=js/index.js js/roles.test.js

all: $(BUILD_TARGETS)

test: $(TEST_TARGETS)

lint: $(LINT_TARGETS)

qa: test lint

clean:
	rm $(ALL_TARGETS)
clean-build:
	rm $(BUILD_TARGETS)
clean-test:
	rm $(TEST_TARGETS) $(patsubst %, %.*, $(TEST_TARGETS))
clean-lint:
	rm $(LINT_TARGETS) $(patsubst %, %.*, $(LINK_TARGETS))
clean-qa: clean-test clean-lint

.DELETE_ON_ERROR:

.PHONY: all test lint qa clean

$(DOC_GENERATOR): js/index.js
	$(CATALYST_SCRIPTS) build

policy/Company\ Roles\ Reference.md: policy/roles.json $(DOC_GENERATOR)
	node $(DOC_GENERATOR) "$<" > "$@"

test-staging/index.js: $(JS_SRC) package.json
	$(CATALYST_SCRIPTS) pretest

.meta/test-roles.json.log: policy/roles.json test-staging/index.js
	echo "TESTED VERSION: $(TEST_MARKER)" > $@
	$(CATALYST_SCRIPTS) test | tee -a $@

.meta/test-policy.log: ./test/test-policy.sh $(POLICY_SRC)
	echo "TESTED VERSION: $(TEST_MARKER)" > $@
	$< | tee -a $@

.meta/qa-lint.log: $(JS_SRC)
	echo "TESTED VERSION: $(TEST_MARKER)" > $@
	$(CATALYST_SCRIPTS) lint | tee -a $@
