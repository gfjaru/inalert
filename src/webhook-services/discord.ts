import axios from 'axios';

import { InvariantError } from '../errors/InvariantError';
import { PlatformConfig } from '../interfaces';

function discord(config: PlatformConfig, message: string) {
  const format = {
    username: config?.name,
    avatar_url: config?.avatarUrl,
    content: message,
  };

  const { url } = config;

  try {
    axios.post(url, format);
  } catch (e: any) {
    throw new InvariantError(e);
  }
}

export default discord;
