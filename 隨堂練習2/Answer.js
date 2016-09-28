'use strict'

/*
*
**
***
****
*****
******
*/

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write('*')
  }
  process.stdout.write('\n')
}

for (let i = 10; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write('*')
  }
  process.stdout.write('\n')
}
