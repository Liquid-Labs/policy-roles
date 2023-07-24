SHELL=/bin/bash -o pipefail
.DELETE_ON_ERROR:
.PHONY: all test lint qa example clean

CATALYST_SCRIPTS:=npx catalyst-scripts
BASH_ROLLUP:=npx bash-rollup
SPACE:=$(null) $(null)

TEST_MARKER:=$(shell OUTPUT=$(git status --porcelain) && [ -z "${OUTPUT}" ] && git rev-parse HEAD || echo 'working')
BUILD_TARGETS:=$(DOC_GENERATOR) $(DOC_GENERATOR_JS)
LINT_TARGETS:=.meta/qa-lint.log
# ALL_TARGETS:=$(BUILD_TARGETS) $(TEST_TARGETS) $(LINT_TARGETS)
EXAMPLE_TARGETS:=example.md example-implied.md

all: $(BUILD_TARGETS)

test:
	$(CATALYST_SCRIPTS) pretest
	$(CATALYST_SCRIPTS) test

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

.meta/qa-lint.log: $(JS_SRC)
	echo "TESTED VERSION: $(TEST_MARKER)" > $@
	$(CATALYST_SCRIPTS) lint | tee -a $@
