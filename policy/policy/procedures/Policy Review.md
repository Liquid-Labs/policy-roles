# Policy Review

## Purpose and scope

This document is an addendum to the standard [Source Code Modification]({{ .projects.procedures.SOURCE_CODE_MODIFICATION }}) procedures. Here we specify additional information specific to policy.

## Policy change attestation template

{{ $_ := set . "tmp" dict -}}
{{ $_ := set .tmp "IS_FUNCTIONAL_ATTESTATION" 0 -}}
```
{{/* exttmpl */}}{{ template "projects/procedures/Base Change Attestation Template" . }}

### Policy specific verifications

* Check _one_:
  * [ ] The changes do not add, create, or modify any role definitions.
  * [ ] The Company roles definitions have been updated or followup Task(s) have been created and linked to the Task(s) associated with these changes.
```
