// triangle calculator
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
// Rectangle Calculator
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
// Parallelogram Calculator
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
// Ellipse Calculator
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

