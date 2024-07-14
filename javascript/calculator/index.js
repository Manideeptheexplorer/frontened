//onload=()=>{
    let num1=8
    let num2=2
    document.getElementById("num1").textContent=num1
    document.getElementById("num2").textContent=num2

//}
let res=document.getElementById("sol")
    function add(){
        let result=num1+num2
        res.textContent="sum:"+ result
    }
    function sub(){
        let result=num1-num2
        res.textContent="diff:"+result

    }
    function mul(){
        let result=num1*num2
        res.textContent="multiplication:"+result
    }
    function div(){
        let result=num1/num2
        res.textContent="division:"+result
    }




