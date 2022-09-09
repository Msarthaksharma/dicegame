var randomNumber1 = Math.floor(Math.random() *6 ) +1;

var randomImage= "dice"+ randomNumber1 + ".png";

var diceImage=randomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",diceImage);



var randomNumber2 = Math.floor(Math.random() *6) +1;

var randomImage2 = "dice"+ randomNumber2 + ".png";

var randomGallery=randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomGallery);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}

else if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML="Draw";
}
else
{
  document.querySelector("h1").innerHTML="🚩Player 2 Wins";
}


// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
//
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//
// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
//
// var image1 = document.querySelectorAll("img")[0];
//
// image1.setAttribute("src", randomImageSource);
