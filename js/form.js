class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.right=createButton('Right');
       this.left=createButton('Left');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHING GAME");
        this.title.position(300, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'cyan');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;   
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name+" Please Wait For Other Player")
            this.greeting.position(200,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '40px');
            this.reset.position(1100,20);
            this.reset.style('width', '100px');
            this.reset.style('height', '30px');
            this.reset.style('background', 'cyan');
            this.right.position(300,200);
            this.right.style('width', '100px');
            this.right.style('height', '30px');
            this.right.style('background', 'red');
            this.left.position(1000,200);
            this.left.style('width', '100px');
            this.left.style('height', '30px');
            this.left.style('background', 'red');
        });

        this.reset.mousePressed(() => {
            this.right.hide();
            this.left.hide();
            player.updateCount(0);
            game.update(0);
        });
        this.right.mousePressed(()=>{
            player.distance += 50
            player.update();
        });
        this.left.mousePressed(()=>{
            player.distance -= 50
            player.update();
        });

    }
}