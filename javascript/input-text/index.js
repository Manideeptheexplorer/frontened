let myLeads=[]
const buttontxt=document.getElementById("input-el")
const buttonEl=document.getElementById("button-el")
const ulel=document.getElementById("ul-el")
const tabEl=document.getElementById("tab-btn")
const deleteEl=document.getElementById("delete-btn")
const vales=JSON.parse(localStorage.getItem("myLeads"))
if(vales){
    myLeads=vales
    render(myLeads)
}
tabEl.addEventListener("click",function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)
    });
    

})
function render(leads){
    let listitems=""
    for (let i=0;i<leads.length;i++){
   // ulel.innerHTML+="<li>"+myLeads[i]+"</li>"  !-- 1st method
  /* const li=document.createElement("li")
   li.textContent=myLeads[i]
   ulel.append(li) 2nd method*/  
        listitems+=`
        <li>
        <a href='' target='_blank'>${leads[i]}</a>
        </li>`
    }
    ulel.innerHTML=listitems
}
buttonEl.addEventListener("click",function(){
    myLeads.push(buttontxt.value)
    buttontxt.value=" "
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    
    
})
deleteEl.addEventListener("dblclick",function(){
    console.log("double clicked!")
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})



