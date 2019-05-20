var colorBtn = document.querySelector('.colorBtn');
var bodyBcg = document.querySelector('body');

var colors = ['yellow', 'red', 'green', '#3b5993'];

colorBtn.addEventListener('click', changeColor);

function changeColor () {
  //  bodyBcg.style.backgroundColor = colors[2];

  var random = Math.floor(Math.random()*colors.length)
  bodyBcg.style.backgroundColor = colors[random];

}