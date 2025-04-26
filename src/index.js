/**
 * Claude Best Practices Demo
 * 
 * This module demonstrates clean code organization, proper documentation,
 * and modern JavaScript patterns following ES Module standards.
 */

/**
 * Formats a greeting message with the provided name
 * @param {string} [name='World'] - The name to greet
 * @returns {string} The formatted greeting
 * @example
 * // Returns "Hello, Claude!"
 * greet('Claude');
 */
export function greet(name = 'World') {
  return `Hello, ${name}!`;
}

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} A random integer between min and max
 * @example
 * // Returns a number between 1 and 10
 * randomInt(1, 10);
 */
export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage when run directly
if (import.meta.url === import.meta.main) {
  console.log(greet());
  console.log(`Random number between 1 and 10: ${randomInt(1, 10)}`);
}