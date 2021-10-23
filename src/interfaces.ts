export interface PlatformConfig {
  url: string;
  avatarUrl?: string;
  name?: string;
}

export interface MainConfig {
  useDiscord?: PlatformConfig;
  useSlack?: PlatformConfig;
}

export interface InAlertTypes {
  send(message: string): any;
  sendOne(platform: string, message: string): any;
}
