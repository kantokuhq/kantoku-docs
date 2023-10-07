---
title: Atlassian
---

# Atlassian

## Integrations

:badge[Identity Governance]

## Credentials

This provider requires a personal API token created by an administrator account.

https://id.atlassian.com/manage-profile/security/api-tokens

|Name|Description|
|---|---|
| Email | The administrator email address. |
| API Token | The API key provided by Atlassian. |

::alert{type="info"}
The organization's API key required the use of the Atlassian Access product for user management. However, a personal API token provides a workaround for this restriction. A provider will be soon developed for users using the Atlassian Access product.
::

## Configs

|Name|Description|
|---|---|
| Domain | Your Atlassian domain e.g., mycompany.atlassian.net |

## Filters

|Name|Description|
|---|---|
| Confluence | This filter will retrieve all groups and users who have access to the Confluence product. |
| Jira | This filter will retrieve all groups and users who have access to the Jira product. |