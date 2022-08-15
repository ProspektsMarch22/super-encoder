// Import encryption functions
const { caesarCipher, symbolCipher, reverseCipher } = require('./encryptors');

const encodeMessage = (str) => {
  let first = caesarCipher(str, 24);
  let second = symbolCipher(first);
  let final = reverseCipher(second);
  return final;
}

const decodeMessage = (str) => {
  let first = reverseCipher(str);
  let second = symbolCipher(first);
  let final = caesarCipher(second, -24);
  return final;
}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);