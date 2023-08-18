// triangle area calculator
function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please add number");
    return;
  }
  const area = 0.5 * height * base;
  setElementInnerText("triangle-area", area);
  addToCalculationEntry('Triangle',area);
}
// Rectangle area Calculator
function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  if (isNaN(width) || isNaN(length)) {
    alert("Please add number");
    return;
  }
  const area = width * length;
  setElementInnerText("rectangle-area", area);
  addToCalculationEntry('Rectangle',area);
}
// Parallelogram area Calculator
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please insert number");
    return;
  }
  const area = base * height;
  setElementInnerText("Parallelogram-area", area);
  // add to calculation entry
  addToCalculationEntry('Parallelogram',area);
}
// Ellipse area Calculator
function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");
  if (isNaN(majorRadius) || isNaN(minorRadius)) {
    alert("Please insert number");
    return;
  }
  const area = (3.14 * majorRadius * minorRadius).toFixed(2);
  setElementInnerText("ellipse-area", area);
  addToCalculationEntry('Parallelogram',area);
}
// Data validation
// set the proper type of input field
// check type

// rhombus area calculator
function calculateRhombusArea(){
  const d1 = getInputValue('rhombus-major');
  const d2 = getInputValue('rhombus-minor');
  if(isNaN(d1)||isNaN(d2)){
    alert('Please insert number');
    return;
  }
const area = d1 * d2;
setElementInnerText('rhombus-area',area);
addToCalculationEntry('rhombus',area);
}

// Pentagon area Calculator
function calculatePentagonArea(){
  const p = getInputValue('pentagon-major');
  const b = getInputValue('pentagon-minor');
  if(isNaN(p)||isNaN(b)){
    alert('Please insert number');
    return;
  }
  const area = 0.5 * p * b;
  setElementInnerText('pentagon-area',area);
  addToCalculationEntry('pentagon',area);
}