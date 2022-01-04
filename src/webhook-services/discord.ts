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

  if (!url.match(/(https?):\/\/((?:ptb\.|canary\.)?discord(?:app)?\.com)\/api(?:\/)?(v\d{1,2})?\/webhooks\/(\d{17,19})\/([\w\-]{68})/g))
    throw new InvariantError('Misconfiguration: discord webhook url is invalid.');

  try {
    axios.post(url, format);
  } catch (e: any) {
    throw new ClientError(e);
  }
}

export default discord;
