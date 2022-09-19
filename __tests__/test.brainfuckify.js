const {
  compileToJsWeb,
} = require('hirnfick');
const brainfuckify = require('../lib/brainfuckify');

describe('brainfuckify', () => {
  it('Encodes text to correct brainfuck code', () => {
    // A GLaDOS quote
    const inputText = 'Thank you for helping us help you help us all.';
    const generatedBrainfuck = brainfuckify(inputText);
    const generatedJavaScript = compileToJsWeb(generatedBrainfuck);
    const generatedFunction = new Function(`${generatedJavaScript} return main().output;`);
    expect(generatedFunction().trim()).toBe(inputText);
  });
});
