var backImage,backgr;
var player, player_running;
var ground,ground_img;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;


function preload(){
  backImage=loadImage("jungle2.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,390,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,395,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  if(keyDown("space") && player.y >= 359){
      player.velocityY = -12 ;
    }

    player.velocityY = player.velocityY + 0.8;
  
    if(FoodGroup.isTouching(player)){
      FoodGroup.destroyEach();
      obstaclesGroup.velocityX=obstaclesGroup.velocityX+5
      score = score + 1;
    }
    switch(score){
       case 2: obstaclesGroup.velocityX=-8;
                break;
      case 4: player.scale=0.12;
                break;
       case 6: obstaclesGroup.velocityX=-10;
                break;
       
        case 8: player.scale=0.14;
                break;
       
       case 10: obstaclesGroup.velocityX=-12;
                break;
        case 12: player.scale=0.16;
                break;
       
       case 14: obstaclesGroup.velocityX=-14;
                break;
        case 16: player.scale=0.18;
                break;
       
       case 18: obstaclesGroup.velocityX=-16;
                break;
        case 20: player.scale=0.20;
                break;
        
       case 22: obstaclesGroup.velocityX=-18;
                break;
        case 24: player.scale=0.22;
                break;
                
       case 26: obstaclesGroup.velocityX=-20;
                break;
        default: break;
    }
  
    if(keyDown("space") && player.y >= 359){
    player.velocityY = -23;
  }
  
  
    player.collide(ground);
    spawnFood();
    spawnObstacles();
 
    if(obstaclesGroup.isTouching(player)){ 
           score=score-0.5;
    }
  player.scale=0.08;
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var banana = createSprite(750,250,40,10);
    banana.y = random(210,280);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -12;
     //assign lifetime to the variable
    banana.lifetime = 750;
    player.depth = banana.depth + 1;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 50=== 0) {
    var obstacle = createSprite(750,250,40,10);
     obstacle.y = random(210,280);  
    obstacle.velocityX = -15;
    obstacle.addImage(obstacle_img);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.3;
    obstacle.lifetime = 789;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}


  
