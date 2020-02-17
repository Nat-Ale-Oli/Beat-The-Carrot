const width = innerWidth-10;
let lose = false;
const height = innerHeight-20;
let score = 1;

var rabbit = new Rabbit(Math.floor(Math.random()*width),Math.floor(Math.random()*height));
function setup() {


   
createCanvas(width , height);




}


function draw() {
    if(score < 0 ){
        lose = true;
    }
    background(51);
    text(score,50,50);
    fill(0,255*score,0);
    rect(mouseX,mouseY-25,100*score,20);

rabbit.show(lose);

score = score-0.01;

if(score<0){
    text("you lose",width/2,height/2);
}
}

function mouseClicked(){
 if(rabbit.die(mouseX,mouseY)){
     score++
     rabbit = new Rabbit(Math.floor(Math.random()*width),Math.floor(Math.random()*height));
 } 

}