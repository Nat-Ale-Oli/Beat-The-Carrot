class Rabbit {



    constructor(x,y) {
      // position and size of bird
      this.x = x;
      this.y = y;
     this.r = 10;
     this.alive = true;
     this.end = 5;
  

    }
  

  
    // Display the Rabbit
    show(lose,) {
        if(this.alive == true&&lose == false && this.end > 0){
      fill(255, 100);
      stroke(255);
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
      this.end -= 1/60;
    }}
  
  
    die(x,y){
        if(this.r > dist(this.x,this.y,x,y)){
            console.log("hit");
            this.alive == false;
            return true
            
        } else{
            console.log("miss");
            return false

        }
    }
}