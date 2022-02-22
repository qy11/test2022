export default (functions) => {
  function* generator(arr) {
    for (let i = 0; i < arr.length; i++) {
      yield arr[i]
    }
  }
  const iterator = generator(functions)

  const init = () => {
    nextDo(iterator.next())
  }

  function nextDo(n) {
    n.value(function () {
      const n = iterator.next()
      if (!n.done) {
        nextDo(n)
      } else {
        return
      }
    })
  }

  init()
}