import { ClientError } from './ClientError';

export class InvariantError extends ClientError {
  constructor(message: any) {
    super(message);
    this.name = 'InvariantError';
  }
}
