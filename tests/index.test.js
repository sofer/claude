/**
 * Tests for the index.js module
 */

import { greet, randomInt } from '../src/index.js';

// Simple test implementation - would be replaced with a proper testing framework later
function assertEquals(actual, expected, message) {
  if (actual !== expected) {
    console.error(`❌ ${message}: expected ${expected}, got ${actual}`);
    return false;
  }
  console.log(`✅ ${message}`);
  return true;
}

function test() {
  // Test greeting function
  assertEquals(greet(), 'Hello, World!', 'Default greeting');
  assertEquals(greet('Claude'), 'Hello, Claude!', 'Custom greeting');
  
  // Test random integer function
  const randomValue = randomInt(1, 1);
  assertEquals(randomValue, 1, 'Random value with same min/max');
  
  // Test range
  const manyRandoms = Array.from({ length: 100 }, () => randomInt(1, 10));
  const allInRange = manyRandoms.every(num => num >= 1 && num <= 10);
  assertEquals(allInRange, true, 'All random values in range');
  
  console.log('All tests completed.');
}

// Run tests
test();