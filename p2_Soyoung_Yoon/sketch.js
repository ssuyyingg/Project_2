
let Bigben;

function preload() {
    Bigben = loadImage("Bigben.jpg");
}   

function setup() {
    createCanvas(1200,975);
    background(255);
    c = Bigben.get(mouseX,mouseY);
}
    
function draw() {
    if (mouseIsPressed) {
        x = random(width);
        y = random(height);
        var size = random(16,25);
        c = Bigben.get(int(x),int(y));
        fill(c);
        stroke(255);
        strokeWeight(1.5);
        ellipse(x,y,size,size);
      }
}
