var fired = false;
var i = 0;

function setup() {
    createCanvas(400 , 400);

}

function draw() {
    background(0,22,53);
    noFill();
    stroke(200,200,123);
    curve(50,200,200,100,200,300,50,200);
    
    if(fired == true){
        ellipse(mouseX,mouseY,30,30);
    }
    
    arrow();
    
    
}

function arrow(){
   // var x = 200;
    
    if(fired == false){
        if(mouseX <= 200 && mouseX != 0){
        if(mouseX >= 80) x = mouseX;
        if(mouseX <= 80) x = 80;
        
    }else{
        x = 200;
    }
        line(200,100,x,200);
        line(x,200,200,300);
        line(x,200,x+160,200);
        line(x+160,200,x+140,195);
        line(x+160,200,x+140,205);
    }else{
        var y = x;
        i+=1 + (300-x)/20;
            if(x+i<= 200){
            line(200,100,x+i,200);
            line(x+i,200,200,300);
            }else{
                line(200,100,200,200);
                line(200,200,200,300);
            }
            line(x+i,200,x+160+i,200);
            line(x+i + 160,200,x+140+i,195);
            line(x+i + 160,200,x+140+i,205);
        
       if(i >= 600){
            fired = false;
            i = 0;
       }
    }
    
}


function mouseClicked(){
    fired = true;
    return false;
}