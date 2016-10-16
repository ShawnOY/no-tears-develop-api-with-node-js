function step1 (callback) {
  setTimeout(function () {
    console.log('Step 1')
    callback()
  }, 5000)
}

function step2 () {
  setTimeout(function () {
    console.log('Step 2')
  }, 2000)
}

step1(step2)
