function setup() {
  createCanvas(128,128);
}

function draw() {
  background(0);
  strokeWeight(4);
  fill(199, 247, 136);
  triangle(12,118,116,118,116,10);
  fill(232, 111, 146);
  triangle(0,108,106,108,106,0);
  fill(255);
  textSize(25);
  textFont("serif");
  text("46+1", 53, 85);
  fill(79, 79, 79);
  textSize(18);
  textFont("serif");
  text("sato", 75, 100);
}
