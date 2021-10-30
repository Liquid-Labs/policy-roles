# Policy Review

## Purpose and scope

This document is an addendum to the standard [Source Code Modification]({{ .projects.procedures.SOURCE_CODE_MODIFICATION }}) procedures. Here we specify additional information specific to policy.

## Pull request format for minor changes

Minor change examples:
* fixing typos, broken links, or grammatical errors
* adding references and cross linking without changing content
* adding or expanding guidelines

```
## Submitter attestation

### Task attestations

{{/* exttmpl */}}{{ template "projects/procedures/Task related change attestations" . }}

### Minor change qualification

This change qualifies as a minor change according to the following criteria:

- [ ] The changes do not modify or add any permissions in fact or documentation.
- [ ] The changes do not add or make functional changes to procedures, standards, or policies.

## Reviewer attestation

By approving this pull request, I concur with the submitter attestations.
```

## Pull request format for major changes

{{ $_ := set . "tmp" dict -}}
{{ $_ := set .tmp "IS_FUNCTIONAL_ATTESTATION" 0 -}}
```
{{/* exttmpl */}}{{ template "projects/procedures/Base Change Attestation Template" . }}

### Policy specific verifications

* [ ] The changes do not add, create, or modify any role definitions _or_ the Company roles definitions have been updated or followup Task(s) have been created and linked to the Task(s) associated with these changes.
```
