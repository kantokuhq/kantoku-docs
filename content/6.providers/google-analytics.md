---
title: Google Analytics
sitemap: true
---

# Google Analytics

## Integrations

:badge[Identity Governance]

## Credentials

This provider requires a Service Account:

1. Go to [Google Cloud](https://console.cloud.google.com/iam-admin/serviceaccounts) and then select a project
   1. Create a service account
   2. Click on *Keys* tab and then the button *Add Key* with the JSON format
   3. Store the JSON file in a secure location such as a password manager
   4. Go to [Google Analytics](https://analytics.google.com/)
   5. Select an account then *Admin* section
   6. Click on *Account Access Management*
   7. Add the Service Account email address as a Google Analytics user with the *Administrator* role
2. Go to [Google Cloud APIs & Services](https://console.cloud.google.com/apis/dashboard)
   1. Enable the Google Analytics API

|Name|Description|
|---|---|
| Service Account - Client Email | This value is available in the JSON file for the *client_email* property e.g., kantoku@mycompany.iam.gserviceaccount.com |
| Service Account - Private Key | This value is available in the JSON file for the *private_key* property e.g., *-----BEGIN PRIVATE KEY-----\nMIIEvQ[...]MKgrU=\n-----END PRIVATE KEY-----\n* |

## Configs

|Name|Description|
|---|---|
| Google Analytics - Account Id | This value is available on Google Analytics -> Admin -> Account Settings |