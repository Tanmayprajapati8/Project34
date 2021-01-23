const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, bgS;
var ground;
var hero;
var slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18;
var monster;

function preload() {
    bg = loadImage("GamingBackground.png");
}

function setup() {
    createCanvas(1400, 700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 600, 1400, 10);

    hero = new Hero(280, 380, 300, 200);

    box1 = new Box(600, 560, 60, 60);
    box2 = new Box(600, 500, 60, 60);
    box3 = new Box(600, 440, 60, 60);
    box4 = new Box(600, 380, 60, 60);
    box5 = new Box(600, 320, 60, 60);

    box6 = new Box(720, 560, 60, 60);
    box7 = new Box(720, 500, 60, 60);
    box8 = new Box(720, 440, 60, 60);
    box9 = new Box(720, 380, 60, 60);

    box10 = new Box(840, 560, 60, 60);
    box11 = new Box(840, 500, 60, 60);
    box12 = new Box(840, 440, 60, 60);
    box13 = new Box(840, 380, 60, 60);
    box14 = new Box(840, 320, 60, 60);
    box15 = new Box(840, 260, 60, 60);

    box16 = new Box(960, 560, 60, 60);
    box17 = new Box(960, 500, 60, 60);
    box18 = new Box(960, 440, 60, 60);

    monster = new Monster(1100, 528, 200, 200);



    slingshot = new Fly(hero.body, { x: 280, y: 240 });
}

function draw() {
    background(0);
    image(bg, width / 2, height / 2, 1400, 700);
    Engine.update(engine);

    ground.display();
    hero.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    monster.display();
}


function mouseDragged() {
    Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}


// function mouseReleased() {
//     slingshot.fly();
// }

// function keyPressed(){
//     if(keyCode===32){
//         slingshot.attach(polygon.body);
//     }
// }

