
let count=0
function responsed(){
    
    count+=1
    var countEl=document.getElementById("count-el")
    countEl.textContent=count
}
function resp(){
    let saveEl=document.getElementById("save-el")
    let s=count+"- "
    saveEl.textContent+=s
    var countEl=document.getElementById("count-el")
    countEl.textContent=0
    count=0
}