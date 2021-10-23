export class ClientError extends Error {
  constructor(message: any) {
    super(message);
    this.name = 'ClientError';
  }
}
