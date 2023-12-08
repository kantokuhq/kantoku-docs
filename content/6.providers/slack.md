---
title: Slack
sitemap: true
---

# Slack

## Integrations

:badge[Identity Governance]

## Credentials

This provider requires a App: https://api.slack.com/apps

1. Create New App
2. Click on *OAuth & Permissions* in the sidebar
   1. Select *users:read* and *users:read.email" scopes
3. Click on *Basic Information*
   1. Click on *Install your app*
   2. Install it for a workspace

|Name|Description|
|---|---|
| Bot User OAuth Token | This value is available on App -> OAuth & Permissions -> OAuth Tokens for Your Workspace |

## Configs

|Name|Description|
|---|---|
| Domains | Slack can often be used with external collaborators or clients. These accounts should probably not be retrieved by Kantoku. This filter allows to configure domains (separated by a comma) that must be included. For example, if the domain kantoku.io is configured, all Slack accounts with an email address @kantoku.io will be retrieved and reconciled. |