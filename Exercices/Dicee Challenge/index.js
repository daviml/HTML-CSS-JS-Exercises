let randomNumber1 = Math.floor(Math.random()*6)+1
let randomNumber2 = Math.floor(Math.random()*6)+1

let randomDice1 = "images/dice"+randomNumber1+".png"
let randomDice2 = "images/dice"+randomNumber2+".png"

document.getElementsByClassName("img1")[0].setAttribute("src",randomDice1)
document.getElementsByClassName("img2")[0].setAttribute("src",randomDice2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins"
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins"
}else{
    document.querySelector("h1").innerHTML = "DRAW"
}
