'use strict'

function getHeight (topLine, baseLine) {
  return baseLine - topLine + 1
}

function calc1 (topLine, baseLine) {
  const height = getHeight(topLine, baseLine)
  console.log((topLine + baseLine) * height / 2)
}

function calc2 (topLine, baseLine) {
  const height = getHeight(topLine, baseLine)
  return (topLine + baseLine) * height / 2
}

calc1(1, 100)
console.log(calc2(1, 100))
