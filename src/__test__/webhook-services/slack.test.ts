import slack from '../../webhook-services/slack';

test('should throw error when wrong url passed into config', () => {
  const misconfigUrl = {
    url: 'https://example.com',
  };
  expect(() => {
    slack(misconfigUrl, 'dummy_message');
  }).toThrow('Misconfiguration: discord webhook url is invalid.');
});
