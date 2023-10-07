---
title: Microsoft
---

# Microsoft

## Integrations

:badge[Identity Governance]

## Steps

This provider requires an Enterprise application from Microsoft Entra ID:

1. Create your own [Enterprise Application](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/~/AppAppsPreview)
   1. Provide a custom name e.g., Kantoku
2. Configure an [App Registration](https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM)
   1. Click on *All applications*
   2. Click on the name of the Enterprise Application created at the previous step
   3. Take note of the *Application (client) ID* and *Directory (tenant) ID* required to configure this connector
   4. Click on *Certificates & secrets* in the sidebar
   5. Create a *new client secret* and take note of the *value* that is required below for the *Client Secret Value*
   6. Click on *API permissions* in the sidebar
   7. Click on *Add a permission*, select the Microsoft Graph API, and the following permissions:
      1. Directory.Read.All
      2. Group.Read.All
      3.  GroupMember.Read.All
      4.  User.Read.All
   8. Click on *Grant admin consent for example.com*

## Credentials

|Name|Description|
|---|---|
| Application (client) ID | The previous value retrieved at step 2.3. |
| Client Secret Value | The previous value retrieved at step 2.5. |

## Configs

|Name|Description|
|---|---|
| Directory (tenant) ID | The previous value retrieved at step 2.3. |

## Filters

|Name|Description|
|---|---|
| Groups | This option will retrieve all groups as privileges. |
| Directory Roles | This option will retrieve all directory roles as privileges. |