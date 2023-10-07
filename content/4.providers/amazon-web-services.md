---
title: Amazon Web Services
---

# Amazon Web Services (AWS)

## Integrations

:badge[Identity Governance]

## Credentials

This provider requires an access key which can be created in the security credentials section for an IAM user:

https://us-east-1.console.aws.amazon.com/iamv2/home

|Name|Description|
|---|---|
| Access Key | The access key identifier. |
| Secret Access Key | The access key secret. |

::alert{type="info"}
The AWS Identity Center provider must be configured to retrieve groups and users from AWS IAM Identity Center service.
::

## Tags

The following AWS tags can be added directly on users to inform Kantoku on some behaviours:

|Key|Values|
|---|---|
| KantokuExcluded | :badge[true] :badge[false] |
| KantokuIdentityType | :badge[ServiceAccount] |