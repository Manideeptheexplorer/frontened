const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btnEl=document.getElementById("btn")
const colorTxt=document.querySelector(".color")
btnEl.addEventListener("click",function(){
    let randome=randomnum()
    document.body.style.backgroundColor=colors[randome]
    colorTxt.textContent=colors[randome]
})
function randomnum(){
    return Math.floor(Math.random()*colors.length)
}