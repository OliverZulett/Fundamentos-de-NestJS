import { ValidatorMiddleware } from './validator.middleware';

describe('ValidatorMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidatorMiddleware()).toBeDefined();
  });
});
