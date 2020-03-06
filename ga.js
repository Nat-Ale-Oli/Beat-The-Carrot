function nextGeneration() {

    calculateFitness();


    for (let i = 0; i < population; i++) {
        hunters[i] = pickOne();
    }
    savedHunters = [];
}

function pickOne() {
    var index = 0;
    var r = random(1);

    while (r > 0) {


        r = r - savedHunters[index].fitness;
        index++;

    }
    index--;
    let hunter = savedHunters[index];
    let child = new Hunter(hunter.brain);
    child.mutate();
    return child;

}

function calculateFitness() {
    



    let sum = 0;

    for (let i = 0; i < savedHunters.length; i++) {
        sum += savedHunters[i].score;
    }
    for (let i = 0; i < savedHunters.length; i++) {
        savedHunters[i].fitness = savedHunters[i].score / sum;
    }
}