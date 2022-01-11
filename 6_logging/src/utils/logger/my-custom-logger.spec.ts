import { MyCustomLogger } from './my-custom-logger';

describe('MyCustomLogger', () => {
  it('should be defined', () => {
    expect(new MyCustomLogger()).toBeDefined();
  });
});
