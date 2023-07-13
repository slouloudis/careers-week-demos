let rows = 5; 

for (let i = 3; i < rows; i++) {
  let str = ''
  // spaces       1   4
  for (let j = 1; j<= rows - i; j++) {
    str += ' ';
  }
  // add hashes
  // 1
  for (let k = 0; k != (2 * i - 1); k++) {
    str += '#'
  }
  console.log(str)
}


  