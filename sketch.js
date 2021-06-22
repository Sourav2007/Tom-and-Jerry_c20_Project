var canvas, bg;
var tom, tom1, tom2;
var jerry, jerry1, jerry2;
var tomImg, jerryImg;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImg  = loadAnimation("images/cat1.png");
    tom1 = loadAnimation("images/cat2.png","images/cat3.png");
    tom2 = loadAnimation("images/cat4.png");
    jerryImg  = loadAnimation("images/mouse1.png");
    jerry1 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry2 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg);
    tom.scale = 0.2;
    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImg)
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (tom.x - jerry.x < tom.width/2 - jerry.width/2){

    tom.velocityX = 0;
    tom.addAnimation("tomLastImg",tom2);
    tom.x = 300;
    tom.scale = 0.2;
    tom.changeAnimation("tomLastImg");

    jerry.addAnimation("jerryLastImg",jerry2);
    jerry.scale = 0.15;
    jerry.changeAnimation("jerryLastImg");
    
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if (keyCode === LEFT_ARROW){

    tom.velocityX = -3;
    tom.addAnimation("tomRunning",tom1);
    tom.changeAnimation("tomRunning");
    //tom.scale = 0.2;

    jerry.addAnimation("jerryTeasing",jerry1);
    jerry.changeAnimation("jerryTeasing");

    
}


}
