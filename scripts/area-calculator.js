// triangle calculator
function calculateTriangleArea() {
  const base = getInputValue("triangle-base");

  const height = getInputValue("triangle-height");

  const area = 0.5 * height * base;
  setElementInnerText("triangle-area", area);
}
// Rectangle Calculator
function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  const area = width * length;
  setElementInnerText("rectangle-area", area);
}
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  const area = base * height;
  setElementInnerText("Parallelogram-area", area);
}

function calculateEllipseArea(){
    const majorRadius = getInputValue("ellipse-major-radius");
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area)
}