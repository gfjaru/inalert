import axios from 'axios';

import { ClientError } from '../errors/ClientError';
import { InvariantError } from '../errors/InvariantError';
import { PlatformConfig } from '../interfaces';

function slack(config: PlatformConfig, message: string) {
  const format = {
    text: message,
  };

  const { url } = config;

  if (!url.match(/https:\/\/hooks\.slack\.com\/services\/([\w\d+]+)\/([\w\d+]+)\/([\w\d+]+)/g))
    throw new InvariantError('Misconfiguration: discord webhook url is invalid.');

  try {
    axios.post(url, format);
  } catch (e: any) {
    throw new ClientError(e);
  }
}

export default slack;
