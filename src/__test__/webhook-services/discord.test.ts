import discord from '../../webhook-services/discord';

test('should throw error when wrong url passed into config', () => {
  const misconfigUrl = {
    url: "https://example.com"
  };
  expect(() => {
    discord(misconfigUrl, 'dummy_message')
  }).toThrow('Misconfiguration: discord webhook url is invalid.');
});
