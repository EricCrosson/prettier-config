const test = require('node:test');
const fs = require('node:fs');

const config = './index.json';

test('should be a valid JSON file', () => {
  const contents = fs.readFileSync(config, 'utf8');
  JSON.parse(contents);
})
