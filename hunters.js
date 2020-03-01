class Hunter {



    constructor(brain) {
        // position and size of bird
        this.score = 0;
        this.fitness = 0;
        this.x = width / 2;
        this.y = height / 2;
        this.w = 5;

        // lav et neuralt netværk med navn "brain" med 4 inputs 6 hidden layers og 4 outputs

        if (brain) {
            this.brain = brain.copy();
        } else {
            this.brain = new NeuralNetwork(2, 4, 4);
        }
        this.up = false;
        this.down = false;
        this.right = false;
        this.left = false;
        this.health = 10;
        this.timer = 0;
        this.dif = 7;

    }



    // Display the Rabbit
    show() {

        fill(255, 100);
        stroke(255);
        rect(this.x, this.y, this.w * 2, this.w * 2);
        fill(255 * (10 / this.health), 255 * (this.health / 10), 0);
        rect(this.x, this.y - 25, this.health, 2);



    }
    mutate() {
        this.brain.mutate(0.1);
    }

    think(rabbitX, rabbitY) {


        let inputs = [];

        inputs[0] = this.x-rabbitX;

        inputs[1] = this.y-rabbitY;



        let output = this.brain.predict(inputs);
        if (output[0] > output[1]) {
            this.up = 1;
        } else this.down = 1

        if (output[2] > output[3]) {
            this.left = 1;
        } else this.right = 1;


    }

    update() {
        this.score++;
        this.health -= 1 / 60;



        if (this.up == 1) {
            this.y--;
            this.up = 0;
        }
        if (this.down == 1) {
            this.y++;
            this.down = 0;
        }
        if (this.left == 1) {
            this.x--;
            this.left = 0;
        }
        if (this.right == 1) {
            this.x++;
            this.right = 0;
        }
    }
    healthUp(rabbitX, rabbitY) {

        this.health += 25 / dist(this.x,this.y,rabbitX,rabbitY);

    }

}