import { capitalize, multiply } from './functions';
import { messageWeather } from './show-weather';
const weatherAPI = require('./get-weather');

test('capitalize function capitalizes the first letter of a word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('multiply function multiplies two numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('multiply function multiplies two numbers correctly', () => {
  expect(multiply(6, 2)).toBeGreaterThan(10);
});

test('multiply function multiplies two numbers correctly', () => {
  expect(multiply(8, 3)).toBeLessThan(30);
});

test('asserts the number is within range', () => {
  expect(5).toBeWithinRange(3, 5);
});

test('should return weather message with celsius temperature', () => {
  weatherAPI.getWeather = jest.fn(() => `20`);

  const result = messageWeather();
  const expected = `Today weather is 20, have a nice day!`;

  expect(result).toBe(expected);
  weatherAPI.getWeather.mockRestore();
});
