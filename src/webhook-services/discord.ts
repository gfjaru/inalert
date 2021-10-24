import axios from 'axios';

import { ClientError } from '../errors/ClientError';
import { InvariantError } from '../errors/InvariantError';
import { PlatformConfig } from '../interfaces';

function discord(config: PlatformConfig, message: string) {
  const format = {
    username: config?.name,
    avatar_url: config?.avatarUrl,
    content: message,
  };

  const { url } = config;

  if (!url.match(/https:\/\/(canary\.|beta\.)?discord\.com\/api\/webhooks\/([0-9]+)\/(.+)/g))
    throw new InvariantError('Misconfiguration: discord webhook url is invalid.');

  try {
    axios.post(url, format);
  } catch (e: any) {
    throw new ClientError(e);
  }
}

export default discord;
