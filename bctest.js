// test.js (CommonJS形式)
const bcryptjs = require('bcryptjs');

async function testBcryptjs() {
  const plainText = 'password123';

  const hashed = await bcryptjs.hash(plainText, 10);
  console.log('Hashed:', hashed);

  const isMatch = await bcryptjs.compare(plainText, hashed);
  console.log('Match:', isMatch);
}

testBcryptjs();
