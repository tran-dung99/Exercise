function square(number){
    let a = number**2
    return a
}
function start(){
    let value = document.getElementById('input').value;
    let squareOf = square(value)
    document.getElementById('result').innerHTML = squareOf
}