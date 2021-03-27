SHELL=/bin/bash -o pipefail
DOC_GENERATOR:=bin/gen-roles-ref.js
HTML_GENERATOR:=bin/md2x
NPM_BIN:=$(shell npm bin)
CATALYST_SCRIPTS:=$(NPM_BIN)/catalyst-scripts
BASH_ROLLUP:=$(NPM_BIN)/bash-rollup
SPACE:=$(null) $(null)
POLICY_SRC:=$(shell find policy -type f | sed 's/ /\\ /g')
TEST_MARKER:=$(shell OUTPUT=$(git status --porcelain) && [ -z "${OUTPUT}" ] && git rev-parse HEAD || echo 'working')
BUILD_TARGETS:=$(DOC_GENERATOR) $(HTML_GENERATOR)
TEST_TARGETS:=.meta/test-roles.json.log .meta/test-policy.log
LINT_TARGETS:=.meta/qa-lint.log
# ALL_TARGETS:=$(BUILD_TARGETS) $(TEST_TARGETS) $(LINT_TARGETS)
EXAMPLE_TARGETS:=example.md example-implied.md

JS_SRC=js/index.js js/gen-doc.js
TEST_SRC=js/roles.test.js js/gen-doc.test.js

all: $(BUILD_TARGETS)

test: $(TEST_TARGETS)

lint: $(LINT_TARGETS)

qa: test lint

example: $(EXAMPLE_TARGETS)

clean: clean-build clean-qa clean-example
clean-build:
	rm -f $(BUILD_TARGETS)
clean-test:
	rm -f $(TEST_TARGETS) $(patsubst %, %.*, $(TEST_TARGETS))
clean-lint:
	rm -f $(LINT_TARGETS) $(patsubst %, %.*, $(LINT_TARGETS))
clean-qa: clean-test clean-lint
clean-example: $(EXAMPLE_TARGETS)
	rm -f $(EXAMPLE_TARGETS)

.DELETE_ON_ERROR:

.PHONY: all test lint qa example clean

$(DOC_GENERATOR): package.json $(JS_SRC)
	$(CATALYST_SCRIPTS) build

$(HTML_GENERATOR): src/md2x/md2x.sh
	$(BASH_ROLLUP) $< $@

.meta/test-roles.json.log: policy/roles.json $(JS_SRC) $(TEST_SRC) package.json
	$(CATALYST_SCRIPTS) pretest
	echo "TESTED VERSION: $(TEST_MARKER)" > $@
	$(CATALYST_SCRIPTS) test | tee -a $@

.meta/test-policy.log: ./test/test-policy.sh $(POLICY_SRC)
	echo "TESTED VERSION: $(TEST_MARKER)" > $@
	$< | tee -a $@

.meta/qa-lint.log: $(JS_SRC)
	echo "TESTED VERSION: $(TEST_MARKER)" > $@
	$(CATALYST_SCRIPTS) lint | tee -a $@

example.md: $(DOC_GENERATOR) $(shell find ./js/test/data-simple -name "*.json")
	node $(DOC_GENERATOR) ./js/test/data-simple ./js/test/data-simple/orgs/staff.json > $@

example-implied.md: $(DOC_GENERATOR) $(shell find ./js/test/data-implied -name "*.json")
	node $(DOC_GENERATOR) ./js/test/data-implied ./js/test/data-implied/orgs/staff.json > $@
