// triangle calculator
function calculateTriangleArea (){
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value ;
    const base = parseFloat(baseValueText);
    

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    
    const area = 0.5 * height * base;
    console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}
function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    
    const area = width * length;
    const areaField = document.getElementById('rectangle-area');
    areaField.innerText = area;
}