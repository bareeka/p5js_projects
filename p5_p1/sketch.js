function setup() {
    createCanvas(400 , 400);
    print("setup function");

}

function draw() {
    background(0,22,53);
    stroke(200);
    fill(20,50,200);
    ellipse(200,200,mouseY,mouseX);
}