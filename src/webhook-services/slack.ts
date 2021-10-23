import axios from 'axios';

import { InvariantError } from '../errors/InvariantError';
import { PlatformConfig } from '../interfaces';

function slack(config: PlatformConfig, message: string) {
  const format = {
    text: message,
  };

  const { url } = config;

  try {
    axios.post(url, format);
  } catch (e: any) {
    throw new InvariantError(e);
  }
}

export default slack;
