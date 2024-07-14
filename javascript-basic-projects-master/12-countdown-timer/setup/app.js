const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const give=document.querySelector(".giveaway")
const deadline=document.querySelector(".deadline")
const items=document.querySelectorAll(".deadline-format h4")

const currentdate=new Date()
const year=currentdate.getFullYear()
const month=currentdate.getMonth()
const day=currentdate.getDate()
const hours=currentdate.getHours()
const min=currentdate.getMinutes()

const futureDate=new Date(year,month,day+10,hours,min,0,0)

const years=futureDate.getFullYear()
const mont=months[futureDate.getMonth()]
const days=futureDate.getDate()
const Dates=weekdays[futureDate.getDay()]
const hour=futureDate.getHours()
const mins=futureDate.getMinutes()
give.innerHTML=`Giveaway Ends On ${Dates},${days} ${mont} ${years}, ${hour}:${mins}am`

function remainingtime(){
  const times=new Date().getTime()
  const t=futureDate.getTime()-times
  const daysi=24*60*60*1000
  const hoursi=60*60*1000
  const minutes=60*1000
  let setdays=Math.floor(t/daysi)
  let sethours=Math.floor((t%daysi)/hoursi)
  let setminutes=Math.floor((t%hoursi)/minutes)
  let setseconds=Math.floor((t%minutes)/1000)
  //console.log(setdays,sethours,setminutes,setseconds);
  let maarkdate=[setdays,sethours,setminutes,setseconds]
  function format(item){
    if(item<10){
      return item=`0${item}`
    }
    return item
  }
  items.forEach(function(item,index){
    item.innerHTML=format(maarkdate[index])
  })
  if(t<0){
    clearInterval(countdownn)
    deadline.innerHTML=`sorry this give away is expired`
  }
}
let countdownn=setInterval(remainingtime,1000)
remainingtime()

