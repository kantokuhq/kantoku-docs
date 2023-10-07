---
title: AWS Identity Center
---

# AWS Identity Center

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
This provider can be only used to retrieve groups and users from AWS Identity Center service. For anything else, please configure the AWS IAM provider. 
::

## Configs

These values are available on the AWS Management Console -> IAM Identity Center -> Settings -> Identity source.

|Name|Description|
|---|---|
| Region | This is the region where your IAM Identity Center instance is located. |
| Identity store ID | This is the globally unique identifier for the Identity Center directory of your IAM Identity Center instance. |