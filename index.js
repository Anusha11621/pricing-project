function toggle(){
let toggleButton = document.getElementById("toggle-button")
if(toggleButton.checked == true){
    document.querySelector(`.card1`).textContent = "$19.99"
    document.querySelector(`.card2`).textContent = "$24.99"
    document.querySelector(`.card3`).textContent = "$39.99"
}
else{
    document.querySelector(`.card1`).textContent = "$199.99"
    document.querySelector(`.card2`).textContent = "$249.99"
    document.querySelector(`.card3`).textContent = "$399.99"
}
}