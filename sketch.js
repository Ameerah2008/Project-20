 var bgImg;
 var cat;



function preload() {
    //load the images here
   bgImg = loadImage("garden.png");
   catimg1 = loadAnimation("cat1.png");
   mouseimg1 = loadAnimation("mouse1.png");
   catimg2 = loadAnimation("cat2.png","cat3.png");
   mouseimg2 = loadAnimation("mouse2.png", "mouse3.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
      //create tom and jerry sprites here
   background1 = createSprite(500,400,10,50);
   background1.addImage(garden);
   cat1 = createSprite(700,660)
   cat1.addImage(cat);
   cat1.scale = 0.1;
 
   mouse1 = createSprite(100,660)
   mouse1.addImage(mouseStanding);
   mouse1.scale = 0.1;

}

function draw() {

    background("255");
    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX=0;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if (keyCode === Right_Arrow){
     mouse.addAnimation("mouseTeasing",mouseimg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay=25;
 }
 if (keyCode === Left_Arrow){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
}
