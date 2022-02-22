; (() => {
  const oContent = document.getElementById('content'),
    oBtn = document.getElementById('btn'),
    oList = document.getElementsByClassName('log-list')[0];

  let log = [],
    it = generator(log)

  const init = () => {
    bindEvent()
  }

  function bindEvent() {
    oBtn.addEventListener('click', handleBtnClick, false)
  }

  function handleBtnClick() {
    const value = oContent.value;
    log.push({
      value,
      dateTime: new Date().toLocaleTimeString()
    })
    var val = it.next().value
    _addLog(val)
  }

  function _addLog(log) {
    console.log('lll', log);
    const oLi = document.createElement('li')
    oLi.innerHTML = `
  <p>增加，${log.value}</p>
  <p>增加，${log.dateTime}</p>
    `
    oList.appendChild(oLi)
  }

  function* generator(arr) {
    for (let item of arr) {
      yield item
    }
  }

  init()
})();