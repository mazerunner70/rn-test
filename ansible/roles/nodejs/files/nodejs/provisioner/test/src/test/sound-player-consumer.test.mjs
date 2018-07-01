import SoundPlayer from '../../../src/test/sound-player.mjs';
import SoundPlayerConsumer from '../../../src/test/sound-player-consumer.mjs';

jest.mock('../../../src/test/sound-player.mjs');

beforeEach(() => {
  SoundPlayer.mockClear();
});

test('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});
