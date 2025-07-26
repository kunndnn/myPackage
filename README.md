# JS Utils Package

A lightweight JavaScript utility package providing helper functions for common mathematical operations and string manipulations.

## Installation

```bash
npm install rawfx
```

## Usage

### ES6 Module syntax

```javascript
import { sum, multiply, factorial, strToArray } from 'rawfx';

// Mathematical operations
console.log(sum(1, 2, 3, 4));          // Output: 10
console.log(multiply(2, 3, 4));        // Output: 24
console.log(factorial(5));             // Output: 120

// String operations
console.log(strToArray("hello"));      // Output: ['h', 'e', 'l', 'l', 'o']
```

### CommonJS syntax

```javascript
const { sum, multiply, factorial, strToArray } = require('rawfx');

// Mathematical operations
console.log(sum(1, 2, 3, 4));          // Output: 10
console.log(multiply(2, 3, 4));        // Output: 24
```

## Available Functions

1. `getType(value)`: Returns the type of given value ("array", "null", or typeof result)
2. `sum(...numbers)`: Returns sum of given numbers
3. `multiply(...numbers)`: Returns product of given numbers
4. `factorial(number)`: Returns factorial of a number
5. `strToArray(string)`: Converts string to array of characters

## Error Handling

All functions include type checking and will throw errors for invalid inputs:
- "Not a valid number" for non-numeric inputs
- "Not a valid string" for non-string inputs
- "Invalid number to calculate factorial" for factorial of numbers less than 1

## License

MIT
