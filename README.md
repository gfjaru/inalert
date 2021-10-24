# InAlert

Webhook wrapper for your application, 🐙 bonk your error message to your favorite platform (see Supports).

![inanis-bonk](https://walfiegif.files.wordpress.com/2020/11/out-transparent-17.gif?w=220)

(Image by walfie, https://twitter.com/walfieee/status/1320231399467683842)

## Supports

Currently InAlert support 2 platform, Slack and Discord.

## Usage

To use this you need webhook url from Discord or Slack, refer to their official documentation about webhook.

Discord: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks

Slack: https://slack.com/intl/en-id/help/articles/115005265063-Incoming-webhooks-for-Slack

### Install

```
npm install inalert
```

### Using all platform

```
const { InAlert } = require('inalert');

const config = {
  useDiscord: {
    url: "YOUR_WEBHOOK_URL",
    name: "CUSTOM_NAME", // optional
    avatarUrl: "CUSTOM_AVATAR_URL" // optional
  },
  useSlack: {
    url: "YOUR_WEBHOOK_URL",
  },
}

const alert = new InAlert(config)

// Sending alert to all platform
alert.send('ERROR_MESSAGE_HERE');

// Sending to one platform
alert.sendOne('discord', 'ERROR_MESSAGE-HERE');
```


### Using with one Platform

Please take a note, this app require atleast one platform enabled, useDiscord/useSlack

```
const { InAlert } = require('inalert');

const config = {
  useDiscord: {
    url: "YOUR_WEBHOOK_URL",
    name: "CUSTOM_NAME", // optional
    avatarUrl: "CUSTOM_AVATAR_URL" // optional
  }
}

const alert = new InAlert(config)

// Sending alert to all platform
alert.send('ERROR_MESSAGE_HERE');

// If you force to use slack while only discord configured
// The app will return error
// So this line is no use.
alert.sendOne('slack', 'ERROR_MESSAGE-HERE'); 
```

