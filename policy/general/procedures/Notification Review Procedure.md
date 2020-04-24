# Notification Review Procedure

## Purpose and scope

This document describes the procedure to used to review critical alerts from various external sources potentially including service providers, software patch alerts, or other industry specific security announcements. This procedure assumes that all alerts are received as email.

## Procedure

### Setup

1. Identify or create the appropriate email group to receive the notifications.
2. Ensure that the group is subscribed.
{{ if eq .EMAIL_DELEGATION_TOOL "Gmelius" -}}
{{- template "general/procedures/notification_review/Gmelius Setup" . }}
{{ else -}}
TODO
{{ end }}

### Processing

{{ if eq .EMAIL_DELEGATION_TOOL "Gmelius" -}}
{{- template "general/procedures/notification_review/Gmelius Processing" . }}
{{ else -}}
TODO
{{ end }}
