// reusable input value function
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = "";
    return value;
  }

// reusable set innerText
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}

// calculation entry
// get the element where you want to add the dynamic html
// create an element you want to add
// if needed add some class
// set inner html it could be dynamic string
// append child
function addToCalculationEntry(areaType, area){
  console.log(areaType + ' '+ area)
  const calculationEntry = document.getElementById('calculation-entry');
  const count = calculationEntry.childElementCount;
  
  const p = document.createElement("p");
  p.classList.add('my-4');
  // p.innerHTML =areaType + ' ' + area;
  p.innerHTML =`${count +1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">convert</button>`;
  calculationEntry.appendChild(p);

}