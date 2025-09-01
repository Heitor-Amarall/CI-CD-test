// __tests__/index.test.js
const { sayHello } = require('../index');

test('should return "Hello, World!"', () => {
  expect(sayHello()).toBe('Hello, World!');
});