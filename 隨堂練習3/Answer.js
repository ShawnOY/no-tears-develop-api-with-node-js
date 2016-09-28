'use strict'

let num = 1
const minStars = 1
const maxStars = 10

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
