document.addEventListener("DOMContentLoaded",function (){
let box = document.getElementById("color-box");
function clickBTN() {
	box.style.height ="30rem";
    box.style.width ="30rem";
    

}
box.addEventListener("click", clickBTN);

function dblclickBTN() {
	box.style.height ="15rem";
    box.style.width ="15rem";
}
box.addEventListener("dblclick", dblclickBTN);

function getColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }

box.addEventListener("mouseover", function () {
    let bgcolor = getColor()
	box.style.backgroundColor =bgcolor;
    
});
});