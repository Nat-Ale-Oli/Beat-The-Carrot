const width = innerWidth-10;
let lose = false;
const height = innerHeight-20;
let score = 1;
var hunter;
var colour = [0,255,0]
var rabbit = new Rabbit(Math.floor(Math.random()*width),Math.floor(Math.random()*height));
function setup() {


   
createCanvas(width , height);

hunter = new Hunter();


}


function draw() {
  

    if(hunter.health < 0 ){
        lose = true;
    }
    background(51);
    text(Math.floor(hunter.health),50,50);
    fill(0,255*score,0);
  //  rect(mouseX,mouseY-25,100*score,20);

rabbit.show(lose);



if(score<0){
    text("you lose",width/2,height/2);
}
hunter.show(colour);
hunter.move();
hunter.healthUp(rabbit.x,rabbit.y,rabbit.end);

if(rabbit.end <= 0){
    hunter.health += 10/dist(rabbit.x,rabbit.y,hunter.x,hunter.y);
    rabbit = new Rabbit(Math.floor(Math.random()*width),Math.floor(Math.random()*height));
} 

}
// dette er blot fibunacci
function factorial(n) {
    let ny = 1;
    let gammell = 0;
    let gammel2 = 0;
    console.log(ny);

    for (let i = n; i > 1; i--) {
        
        gammel2 = gammell;
        gammell = ny
       
        ny = gammell + gammel2
       
       console.log(ny);
    }
    
}