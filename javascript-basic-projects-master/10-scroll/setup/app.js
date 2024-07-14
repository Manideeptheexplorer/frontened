// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date=document.getElementById("date")
// console.log(date)
date.innerHTML=new Date().getFullYear()
// ********** close links ************
const navtoggle=document.querySelector(".nav-toggle")
const listcontainer=document.querySelector(".links-container")
const lists=document.querySelector(".links")
const linksHeight=lists.getBoundingClientRect().height
const containerHeight=listcontainer.getBoundingClientRect().height

navtoggle.addEventListener("click",function(){
    
    if(containerHeight===0){
        listcontainer.style.height=`${linksHeight}px`
    }
    else{
        listcontainer.style.height=0
    }
})
// ********** fixed navbar ************
const nav=document.getElementById("nav")
const arrow=document.querySelector(".top-link")

window.addEventListener("scroll",function(){
    const scrollHeight=window.pageYOffset
    const navHeight=nav.getBoundingClientRect().height
    if(scrollHeight>navHeight){
        nav.classList.add("fixed-nav")
    }
    else{
        nav.classList.remove("fixed-nav")
    }
    if(scrollHeight>500){
        arrow.classList.add("show-link")
    }
    else{
        arrow.classList.remove("show-link")
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks=document.querySelectorAll(".scroll-link")
// console.log(scrollLinks)
scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault()
        const id=e.currentTarget.getAttribute("href").slice(1)
        
        const element=document.getElementById(id)
        const navHeight=nav.getBoundingClientRect().height
        
        

        let heightOfIt=element.offsetTop-navHeight
        
        const trues=nav.classList.contains("fixed-nav")
        
        if(!trues){
            heightOfIt=heightOfIt-navHeight
        }
        if(navHeight>82){
            heightOfIt=heightOfIt+linksHeight
        }
        window.scrollTo({
            left:0,
            top:heightOfIt
        })
        listcontainer.style.height=0
    })
})
