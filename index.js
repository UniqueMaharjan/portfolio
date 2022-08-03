function changeColor(){
    // var element = document.body;
    var color = document.getElementById('color').value;
    console.log(color);
    document.body.style.backgroundColor = color; 

    // element.classList.toggle("dark-mode");

}
function textColor(){
   var color = document.getElementById('text-color').value;
   document.body.style.color = color;
}