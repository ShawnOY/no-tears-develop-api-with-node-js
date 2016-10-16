'use strict'

const minStars = 1
const maxStars = 10
let num = minStars

for (; num <= maxStars; num++) {
  for (let j = 1; j <= num; j++) {
    process.stdout.write('*')
  }
  process.stdout.write('\n')
}

for (; num >= minStars; num--) {
  for (let j = 1; j <= num; j++) {
    process.stdout.write('*')
  }
  process.stdout.write('\n')
}
