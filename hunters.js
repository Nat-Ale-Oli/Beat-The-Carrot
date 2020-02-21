class Hunter {



    constructor() {
        // position and size of bird
        this.x = 0;
        this.y = 0;
        this.w = 5;
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;
        this.health = 10;


    }



    // Display the Rabbit
    show(colour) {
        this.x = mouseX;
        this.y = mouseY;
        fill(255, 100);
        stroke(255);
        rect(this.x, this.y, this.w * 2, this.w * 2);
        fill(colour[0], colour[1], colour[2]);
        rect(this.x, this.y - 25, this.health, 2);

        this.health -= 1 / 60;
    }

    move() {



        if (this.up) {
            this.y--;
        }
        if (this.down) {
            this.y++;
        }
        if (this.right) {
            this.x++;
        }
        if (this.left) {
            this.x--;
        }
    }
    healthUp(rabbitX, rabbitY, end) {
        if (end <= 0) {
            this.health += 10 / Math.sqrt(dist(rabbitX, rabbitY, this.x, this.y))
        }
    }

}