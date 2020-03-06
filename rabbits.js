class Rabbit {



    constructor(x,y) {
      // position and size of bird
      this.x = x;
      this.y = y;
     this.r = 10;
     this.alive = true;
     this.end = 5;
    }
  
    // Displays the ellipse, on with the image of the carrot is placed.
    show() {
        if(this.alive == true&& this.end > 0){
      fill(0, 0, 0);
      noStroke();
      ellipse(this.x, this.y, this.r * 2, this.r * 2);

      
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
    update(){
        this.end -= 1/60;
    }
}