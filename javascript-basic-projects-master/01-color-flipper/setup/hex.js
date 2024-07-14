const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnEl=document.getElementById("btn")
const colorTxt=document.querySelector(".color")

btnEl.addEventListener("click",function(){
    let hexs="#"
    for(let i=0;i<6;i++){
        hexs+=hex[randomnum()]
        
    }
    document.body.style.backgroundColor=hexs
    colorTxt.textContent=hexs
})
function randomnum(){
    return Math.floor(Math.random()*hex.length)
}