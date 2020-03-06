const population = 10;
const width = 300;

let lose = false;

const height = 300;

let score = 1;

let hunters = [];
let savedHunters = [];

var colour = [0, 255, 0]

var rabbit;

let slider;
let rabbitImage;




function setup() {
    //We load the image og the carrot(rabbitIamge) and the rabbit(hunterImage).
    rabbitImage =   loadImage('Sprites/Sprite1.png');
    hunterImage = loadImage('Sprites/Sprite6.png');
    
    for (i = 0; i <= population; i++) {
        
        hunters[i] = new Hunter();

    }

    rabbit = new Rabbit(Math.floor(Math.random() * width), Math.floor(Math.random() * height));

    slider = createSlider(1, 100, 100);

    createCanvas(width, height);





}


function draw() {


    for (let n = 0; n < slider.value(); n++) {
        for (let i = hunters.length - 1; i >= 0; i--) {
            let hunter = hunters[i];

            hunter.think(rabbit.x, rabbit.y);

            hunter.update();


            if (hunter.health < 0) {
                savedHunters.push(hunters.splice(i, 1)[0]);
            } else
            if (hunter.x < 0||hunter.x > width ) {
                savedHunters.push(hunters.splice(i, 1)[0]);
            } else
            if (hunter.y < 0||hunter.y > height ) {
                savedHunters.push(hunters.splice(i, 1)[0]);
            } 


            if (hunters.length === 0) {
                console.log("next gen please")
                nextGeneration();
            }

        }
        rabbit.update();
        if (rabbit.end <= 0) {
            for (let i = hunters.length - 1; i >= 0; i--) {
                let hunter = hunters[i];
                hunter.healthUp(rabbit.x, rabbit.y);
            }
            rabbit = new Rabbit(Math.floor(Math.random() * width), Math.floor(Math.random() * height));
        }
    }
    background(0);
    //The image og the carrot is placed on top of the ellipse.
    rabbit.show();
    image(rabbitImage, rabbit.x-25, rabbit.y-25, 50, 50);
    for (let hunter of hunters) {
        
        //The image og the rabbit is placed on top of the square.
        hunter.show();
        image(hunterImage, hunter.x-35, hunter.y-35, 70, 70);
    }


   
}