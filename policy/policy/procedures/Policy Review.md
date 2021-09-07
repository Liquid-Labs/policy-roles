# Policy Review

## Purpose and scope

This document is an addendum to the standard [Source Code Modification]({{ .projects.procedures.SOURCE_CODE_MODIFICATION }}) procedures. Here we specify additional information specific to policy.

## Policy change attestation template

```
{{/* exttmpl */}}{{ template "projects/procedures/Base Change Attestation Template" . }}

### Policy specific verifications

Check _one_ to indicate effect on roles:
* [ ] The changes do not add, create, or modify any role definitions.
* [ ] The Company roles definitions have been updated or a Task has been opened describing the changes needed.
```
