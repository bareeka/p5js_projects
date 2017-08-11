function setup() {
    createCanvas(400 , 400);

}

function draw() {
    background(0,22,53);
    noFill();
    stroke(200,200,123);
    curve(50,200,200,100,200,300,50,200);
    arrow();
    
    
    
}

function arrow(){
    var x = 200;
    if(mouseX <= 200 && mouseX != 0){
        x = mouseX;
    }else{
        x = 200;
    }
    line(200,100,x,200);
    line(x,200,200,300);
    line(x,200,x+160,200);
    line(x+160,200,x+140,195);
    line(x+160,200,x+140,205);
}

function doubleClicked(){
    line(200,200,300,300);
}