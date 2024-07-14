//using selectors inside the element
const questions=document.querySelectorAll(".question")
questions.forEach(function(question){
    const btns=question.querySelector(".question-btn")
    console.log(btns)
    btns.addEventListener("click",function(){
        questions.forEach(function(icons){
            if(icons!=question){
                icons.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })
})
// traversing the dom
// const btns=document.querySelectorAll(".question-btn")
// // console.log(btns)
// btns.forEach(function(e){
//     e.addEventListener("click",function(btn){
//         const ques=btn.currentTarget.parentElement.parentElement
//         ques.classList.toggle("show-text") 
//     })
// })