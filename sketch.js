var jack, jack_running;
var jungle,jungleImage;
var jungle2;
var netImage;
var trapImage;
var rockImage;

function preload(){
  jack_running = loadAnimation("Images/jack_running_right.png","Images/jack_running_left.png","Images/jack_landing.png");
  
  jungleImage = loadImage("Images/jungle_bg.jpg");
  
  
  netImage = loadImage("Images/net_trap.png");
  trapImage = loadImage("Images/trap.png");
  rockImage = loadImage("Images/rock.png");
}

function setup() {
  createCanvas(1000,473);
    
  jungle = createSprite(615,235,1228,473);
  jungle.addImage("jungle",jungleImage);

  jungle2 = createSprite(1615,1235,1228,473);
  jungle2.addImage("jungle2",jungleImage);

  jack = createSprite(90,350,20,50);
  
  jack.addAnimation("running", jack_running);
  
  jack.scale = 0.5;
  
}

function draw() {
  background("green");

  jungle.velocityX = -2;
  if (jungle.x <= 400){
    jungle.x = 600
  }

  jungle2.velocityX = -2;
  if (jungle2.x <= 900){
    jungle2.x = 1200;
  }
  console.log(jungle.x)
  drawSprites();
}
