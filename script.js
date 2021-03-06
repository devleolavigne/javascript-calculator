const MAX_VISOR_CHAR = 8
let history = []

function addNum(param) {
  if (document.getElementById('visor').innerHTML.length < MAX_VISOR_CHAR) {
    document.getElementById('visor').innerHTML += param
  }
}

function addAction(action) {
  let currentChar = document.getElementById('visor').innerHTML
  if (currentChar.length === 0) { return }
  history.push(Number(document.getElementById('visor').innerHTML))
  document.getElementById('history').innerHTML += `${document.getElementById('visor').innerHTML} ${action} `
  document.getElementById('visor').innerHTML = ''
  history.push(action)
}

function cleanCurrentEntry() {
  document.getElementById('visor').innerHTML = ''
}

function cleanAll() {
  document.getElementById('visor').innerHTML = ''
  document.getElementById('history').innerHTML = ''
  history = []
}
function equal() {
  let currentNumber = document.getElementById('visor').innerHTML
  if (currentNumber.length === 0) { return }
  history.push(Number(currentNumber))
  let equalSymbol = '='
  document.getElementById('history').innerHTML += `${document.getElementById('visor').innerHTML} ${equalSymbol} `
  document.getElementById('visor').innerHTML = ''
  let equal = eval(history.join(''))
  document.getElementById('visor').innerHTML = equal
}