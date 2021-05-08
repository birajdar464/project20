var canvas, bg;
var together;
var tom,tomImg, tomImg1, tomImg2;
var jerry,jeryImg, jerryImg1,jerryImg2;




function preload() {
    bg = loadImage("garden.png");
   tomImg = loadImage("cat1.png");
   tomImg1 =loadAnnimation("cat2.png","cat3.png");
   tomImg2 =loadImage("cat4.png");
   jeryImg = loadImage("mouse1.png");
   jerryImg1 = loadAnnimation("mouse2.png","mouse3.png");
   jerryImg2 =loadImage("mouse4.png");
}

function setup(){
 canvas =   createCanvas(1000,800);
 tom = createSprite(870,600);
 tom.addImage("tomLastImg",tomImg1);
 tom.scale = 0.2;
 tom.changeImage("tomLastImg")

 jerry = createSprite(200,600);
 jerry.addImage("jerryLastImg",jerryImg1);
jerry.changeImage("jerryLastImg");
 jerry.scale = 0.15;
    

}

function draw() {

    background(bg);
     if(tom.x- jerry.x < (tom.width - jerry.width)/2)
     {
         tom.velocity = 0;
         tom.changeImage(tomImg2);
         tom.x = 300;
         tom.scale = 0.2;
         jerry.changeImage(jerryImg2);
         jerry.scale = 0.15;

   }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    
    tom.velocityX = -5;
    tom.addAnnimation("tomRunning",tomImg1);
    tom.changeAnnimation("tomRunning");

    jerry.addAnnimation("jerryTeasing",jerryImg1);
    jerry.frameDelay = 25;
    jerry.changeAnnimation("jerryTeasing");


  }


}
