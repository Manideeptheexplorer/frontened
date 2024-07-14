// ****** SELECT ITEMS **********
const alert=document.querySelector(".alert")
const clearBtn=document.querySelector(".clear-btn")
const list=document.querySelector(".grocery-list")
const form=document.querySelector(".grocery-form")
const grocery=document.querySelector("#grocery")
const container=document.querySelector(".grocery-container")
const submitBtn=document.querySelector(".submit-btn")


// edit option
let editElement
let editFlag=false
let editId=""


// ****** EVENT LISTENERS **********
form.addEventListener("submit",addtoList)
clearBtn.addEventListener("click",removetheItem)
window.addEventListener("DOMContentLoaded",setupItems)

// ****** FUNCTIONS **********
function addtoList(e){ 
    e.preventDefault()
    const value=grocery.value
    const id=new Date().getTime().toString()
    if(value && !editFlag){
        createElement(id,value)
        alerts("element successfully added","success")
        container.classList.add("show-container")
        addtoLocalStorage(id,value)
        setBackToDefault()

    }
    else if(value && editFlag){
        editElement.innerHTML =value
        alerts("value changed", "success")
    // edit  local storage
       editLocalStorage(editId, value)
        setBackToDefault()
        

    }
    else{
        alerts("enter the item","danger")
    }
}
function removetheItem(){
    const item=document.querySelectorAll(".grocery-item")
    if(item.length>0){
        item.forEach(function(items){
            list.removeChild(items)
        })
    }
    container.classList.remove("show-container")
    setBackToDefault()
    alerts("all items cleared","success")
    localStorage.removeItem("list")
}
function editItem(e){
    const element=e.currentTarget.parentElement.parentElement
    editElement=e.currentTarget.parentElement.previousElementSibling
    grocery.value=editElement.innerHTML
    editFlag=true
    editId=element.dataset.id
    submitBtn.textContent="edit"
}
function alerts(text,action){
    alert.textContent=text
    alert.classList.add(`alert-${action}`)
    setTimeout(function(){
    alert.textContent=""
    alert.classList.remove(`alert-${action}`)
    },1000)
}
function deleteItem(e){
    const element=e.currentTarget.parentElement.parentElement
    const id=element.dataset.id
    list.removeChild(element)
    if(list.children.length==0){
        container.classList.remove("show-container")
    }
    alerts("element removed","danger")
    setBackToDefault()
    deleteFromLocalStorage(id)
    
}
function setBackToDefault(){
    grocery.value=""
    editFlag=false
    editId=""
    submitBtn.textContent="submit"
}
// ****** LOCAL STORAGE **********
function addtoLocalStorage(id,value){
   const groc={id,value}
   let items=getLocalStorage()
   items.push(groc)
   localStorage.setItem("list",JSON.stringify(items))

}
function deleteFromLocalStorage(id){
    let items=getLocalStorage()
    items=items.filter(function(item){
        if(item.id!==id){
            return item
        }
    })
    localStorage.setItem("list",JSON.stringify(items))

}
function editLocalStorage(id,value){
    let items=getLocalStorage()
    items=items.map(function(item){
        if(item.id==id){
            item.value=value
        }
        return item
    })
    
    localStorage.setItem("list",JSON.stringify(items)
)
}
function getLocalStorage(){
    return localStorage.getItem("list")?JSON.parse
    (localStorage.getItem("list")):[]
}
// ****** SETUP ITEMS **********
function setupItems(){
    let items=getLocalStorage()
    if(items.length>0){
        items.forEach(function(item){
            createElement(item.id,item.value)
        })
        container.classList.add("show-container")
    }

    
}
function createElement(id,value){
    const element=document.createElement("article")
       element.classList.add("grocery-item")
       const attr= document.createAttribute("data-id")
       attr.value=id
       element.setAttributeNode(attr)
       element.innerHTML=
       `<p class="title">${value}</p>
       <div class="btn-container">
         <button type="button" class="edit-btn">
           <i class="fas fa-edit"></i>
         </button>
         <button type="button" class="delete-btn">
           <i class="fas fa-trash"></i>
         </button>
       </div>`
       const deleteBtn=element.querySelector(".delete-btn")
       const editBtn=element.querySelector(".edit-btn")

       deleteBtn.addEventListener("click",deleteItem)
       editBtn.addEventListener("click",editItem)

        list.appendChild(element)
}