const regularExpression = null;

const entrances = [];
const validEntrances = [];

function testEntrances () {
  const expression = new RegExp(regularExpression);
  for(let entrance of regularExpression) {
    validEntrances[entrance] = expression.test(entrance); 
  }
  colorizeInputs(validEntrances)
}

function colorizeInputs(validEntrances) {
  validEntrances.forEach(validEntrance => {
    const input = document.querySelector(`input${validEntrance.input}`)
    validEntrance ? input.style.backgroundColor = 'green' : input.style.backgroundColor = 'red' 
  })
}

function setEntrance () {
  if(!exp){
    regularExpression = ''
  }
}

function addEntrances () {
  const entradas = document.getElementById('entradas');
  const newEntrance = '<div><input type="text" class="form-control entrada" placeholder="baab"> <button class="btn btn-danger">X</button></div>'
  entradas.innerHTML +=newEntrance;
}

function removerEntradas (event) {
  console.log(event)
}