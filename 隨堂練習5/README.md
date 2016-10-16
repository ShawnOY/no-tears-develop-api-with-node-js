下面分別有step1和step2兩個函式，step1需要執行5秒鐘，step2需要執行2秒鐘，請嘗試修改程式碼讓兩函式可以按照順序執行。

```js
function step1() {
  setTimeout(function() {
    console.log('Step 1')
  }, 5000)
}

function step2() {
  setTimeout(function() {
    console.log('Step 2')
  }, 2000)
}

step1()
step2()
```
