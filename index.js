var RandomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceimage = "Dice"+RandomNumber1+".png";
var randomImageSource = randomDiceimage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);

var RandomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceimage = "Dice"+RandomNumber2+".png";
var randomImageSource = randomDiceimage;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource);


if(RandomNumber1>RandomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(RandomNumber1<RandomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
