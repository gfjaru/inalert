import { InAlertTypes, MainConfig } from './interfaces';

import discord from './webhook-services/discord';
import slack from './webhook-services/slack';

import { ClientError } from './errors/ClientError';

export class InAlert implements InAlertTypes {
  config: MainConfig;

  constructor(config: MainConfig) {
    this.config = config;
  }

  send(message: string) {
    if (!this.config) throw new ClientError('Missing configuration: configure atleast one platform.');
    if (this.config.useDiscord) discord(this.config.useDiscord, message);
    if (this.config.useSlack) slack(this.config.useSlack, message);
  }

  sendOne(platform: string, message: string) {
    switch (platform) {
      case 'discord':
        if (this.config.useDiscord) discord(this.config.useDiscord, message);
        else throw new ClientError('Missing configuration: Discord not configured.');
        break;
      case 'slack':
        if (this.config.useSlack) slack(this.config.useSlack, message);
        else throw new ClientError('Missing configuration: Slack not configured.');
        break;
      default:
        throw new ClientError('Platform not supported or not yet implemented.');
    }
  }
}
