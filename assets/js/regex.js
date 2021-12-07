let regularExpression = null;

const entrances = [];
const validEntrances = [];

function testEntrances () {
  setRegularExpression()
  const expression = new RegExp(regularExpression);
  
  const entrance = document.getElementsByClassName('entrada')[0].value;
  
  expression.test(entrance) ? colorizeSuccess() : colorizeFailed()
  

}

function setRegularExpression () {
  regularExpression = document.getElementById('expressaoRegular').value;
}

function colorizeSuccess () {
  document.getElementsByClassName('entrada')[0].style.borderColor = 'green'
}

function colorizeFailed () {
  document.getElementsByClassName('entrada')[0].style.borderColor = 'red'
}