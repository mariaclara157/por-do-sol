let posicaoVertical;

function setup() {
 createCanvas(500, 500)
  posicaoVertical = 250;
 }
  
function draw () {
  if (posicaoVertical < 400) {
   background ("lightblue");
  posicaoVertical = posicaoVertical + 1;
 }
  fill("orange");
  background;
  circle(250, posicaoVertical, 300);
  