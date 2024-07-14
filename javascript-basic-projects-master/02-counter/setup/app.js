const incBtn=document.querySelector(".increase")
const resBtn=document.querySelector(".reset")
const decBtn=document.querySelector(".decrease")
let val=document.getElementById("value")
let value=0
//console.log(incBtn)
incBtn.addEventListener("click",function(){
    value=value+1
    val.textContent=value
    if(value>0){
        val.style.color="green"
    }
    else if(value<0){
        val.style.color="red"
    }
    else{
        val.style.color="#222"
    }

})
resBtn.addEventListener("click",function(){
    value=0
    val.textContent=value
    if(value>0){
        val.style.color="green"
    }
    else if(value<0){
        val.style.color="red"
    }
    else{
        val.style.color="#222"
    }
})
decBtn.addEventListener("click",function(){
    value=value-1
    val.textContent=value
    if(value>0){
        val.style.color="green"
    }
    else if(value<0){
        val.style.color="red"
    }
    else{
        val.style.color="#222"
    }
})