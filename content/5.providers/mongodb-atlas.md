---
title: MongoDB Atlas
sitemap: true
---

# MongoDB Atlas

## Integrations

:badge[Identity Governance]

## Credentials

This provider requires an API Key created at the organization level:

1. Access Manager
2. Organization Access
3. API Keys
4. Create API Key
5. Organization Permissions with *Organization Read Only*
6. API Access List with our worker [IP addresses](/organization/connectors#ip-addresses)
7. Take note of the API private key since it's only shown once

|Name|Description|
|---|---|
| API Public Key | Access Manager -> API Keys |
| API Private Key | The value obtained in previous step 7 |

## Configs

|Name|Description|
|---|---|
| Organization ID | Organization -> Settings -> Organization ID |

## Filters

|Name|Description|
|---|---|
| Organization Users | This option will retrieve all teams and users from Atlas Organization. |
| Database Users | This option will retrieve all groups and users from databases. |
| API Keys | This option will retrieve all API keys from Atlas Organization. |