var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftwall;
var rightwall;
var bottomwall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	leftwall = createSprite(300,610,20,100);
	bottomwall = createSprite(400,650,200,20);
	rightwall = createSprite(500,610,20,100);


	engine = Engine.create();
	world = engine.world;

	//creating the box
	leftwall.shapeColor = color(255,0,0);
	leftwall = Bodies.rectangle(300, 610, 20, 100, {isStatic:true});

    bottomwall.shapeColor = color(255,0,0);
	bottomwall = Bodies.rectangle(400, 650, 200, 20, {isStatic:true});
	
    rightwall.shapeColor=color(255,0,0);
	rightwall = Bodies.rectangle(500, 610, 20, 100, {isStatic:true});
	
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 


	Matter.Body.setStatic(packageBody,false);

    textSize(20);
	text("You have successfully defeated the zombies!",200,100);
	fill("red");
	
    
  }
}



