let player={
    name:"MANIDEEP",
    chips:145
}
let cards=[]
let sum=0
let hasBlackJack=false
let asAlive=false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardEl=document.querySelector("#card-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function getrandom(){
    let random_number=Math.ceil(Math.random()*13)
    if(random_number>10){
        return 10
    }
    else if(random_number===1){
        return 11
    }
    else{
        return random_number
    }
    
}

function startGame() {
    asAlive=true
    let firstcrd=getrandom()
    let secondcrd=getrandom()
    cards.push(firstcrd)
    cards.push(secondcrd)
    sum=cards[0]+cards[1]
    if(cardEl.textContent==="Cards:"){
        stats()
        //cardEl.textContent="cards: "+cards[0]+" "+cards[1]
    }
    
}
function stats(){
    cardEl.textContent="Cards:"
    for(let count=0;count<cards.length;count++){
        cardEl.textContent+=cards[count]+" "
    }
    if(sum<=20){
        message="you are still alive in the game..!"
        
    }
    else if(sum===21){
        message="You have the black jack"
        hasBlackJack=true
    }
    else{
        message="ooff!! out of the game..."
        asAlive=false
    }
    messageEl.textContent=message
    sumEl.textContent="sum:"+sum
}
function newCard(){
    if(sum<21){
        let card=getrandom()
        sum=sum+card
        cards.push(card)
        stats();
        //cardEl.textContent=cardEl.textContent+" "+card
    }
    
    
   

}
