const validatorMiddleware = require('../src/middleware/validator.js');

describe('Validation Middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeEach(() => {
    // Attach to the console (take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Put the console back
    consoleSpy.mockRestore();
  });

  it('runs a test', () => {
    expect(true).toBe(true);
  });
})