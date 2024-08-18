let length;
let width;

function calculateArea(){
    l = parseFloat(document.getElementById('length').value);
    w = parseFloat(document.getElementById('width').value);

    let area = l*w;
    // console.log(area);
    document.getElementById('result').innerHTML = `The area of the rectangle is : ${area}`;
}