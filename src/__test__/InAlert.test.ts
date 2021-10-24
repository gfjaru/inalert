import { InAlert } from '../index';

test('should throw error when zero config passed into InAlert', () => {
  const emptyConfig = {};
  expect(() => {
    return new InAlert(emptyConfig);
  }).toThrow('Missing configuration: configure atleast one platform.');
});
