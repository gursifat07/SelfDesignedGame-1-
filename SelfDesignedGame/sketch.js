var mainCharecter 
var mainCharecterStill, mainCharecterWalk, mainCharecterJump
var box,  boxImage;
var bg1




function preload() {
    bg1= loadImage ("game/Stage 1 bg(1).png")
    mainCharecterStill= loadAnimation("game/animations/Still(1).png","game/animations/Still(2).png")
    boxImage= loadImage ("game/boxes/Asset 2.png");
    

}

function setup() {
    createCanvas(displayWidth,displayHeight-200)


        mainCharecter = createSprite(300,540,50,50);
        mainCharecter.addAnimation("Still",mainCharecterStill);


        box = createSprite(650,540,50,50);
        box.addAnimation("box",boxImage);




}

function draw(){
    background(bg1);






    
    drawSprites();
  
}

