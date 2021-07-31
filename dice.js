var random_num=Math.random() *6;
var use1 =Math.floor(random_num+1);
var random_img=("dice"+use1+".png");
var random_src=("images/"+random_img);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random_src);

var random_num=Math.random() *6;
var use2 =Math.floor(random_num+1);
var random_img=("dice"+use2+".png");
var random_src=("images/"+random_img);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", random_src);

if(use1>use2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(use2>use1)
{
    document.querySelector("h1").innerHTML = " Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}