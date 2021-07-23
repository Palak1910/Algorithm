var fixedRect, movingRect



function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600,400,50,80)
  fixedRect.shapeColor="blue"
  movingRect=createSprite(100,100,80,50)
  movingRect.shapeColor="blue"
}


function draw() {
  background(255,255,255);

  //making the movingRect move with the mouse.
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

//algorithm to define how 2 objects are in. 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
     movingRect.shapeColor="red"
     fixedRect.shapeColor="red"
       
  }
  else{
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="blue"

  }









  drawSprites();

}

