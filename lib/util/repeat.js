function repeat(str, times) {
  return Array(times).fill(0).map(() => str).join('');
}

module.exports =  repeat;