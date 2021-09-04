
if (window.performance && performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  var a = Math.random();
  var b = Math.random();

  a = (a*5) + 1;
  b = (b*5) + 1;
  a = Math.floor(a);
  b = Math.floor(b);

  var image1 = "images/dice" + a.toString() + ".png";
  var image2 = "images/dice" + b.toString() + ".png";

  document.querySelector(".img1").src = image1;
  document.querySelector(".img2").src = image2;

  var p1 = "🚩 Play 1 Wins!";
  var p2 = "Player 2 Wins! 🚩";
  var draw = "Draw!";

  if(a>b)
  {
    document.querySelector("h1").innerHTML = p1;
  }
  else if (a == b)
  {
    document.querySelector("h1").innerHTML = draw;
  }
  else
  {
    document.querySelector("h1").innerHTML = p2;
  }
}
