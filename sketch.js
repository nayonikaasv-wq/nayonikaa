let BODY_D_MIN = 90,  BODY_D_MAX = 120;     
let EYE_MIN    = 15,   EYE_MAX    = 35;    
let EYE_GAP    = 0.40;
let SKIN = ['#FFFF00', '#87CEEB', '#FF69B4'];
let BAND_MIN = 50;       
let BAND_MAX = 200;
let W = 500;              
let H = 500;   
let BANDCO = [ '#D6C7DE', '#734F96', '#BF94E4'];

let N = 20

function setup() {
  createCanvas(W, H);
  let cnv = createCanvas(500, 500);
  cnv.parent('sketch-holder');  
  noLoop(); 
}

function draw() {
  background(240);

   let bandW = random(BAND_MIN, BAND_MAX);
   let bandX = random(W * 0.10, W * 0.90);

   noStroke();
  fill (random(BANDCO));
  rect(bandX - bandW / 2, 0, bandW, H);
  
  noStroke();
  fill(random(SKIN));
  circle(250,310,240)

  let bodyD = random(BODY_D_MIN, BODY_D_MAX);
  let eyeD  = random(EYE_MIN, EYE_MAX);

  let cx = width / 2;
  let cy = height / 2-100;

  noStroke();
  fill(random(SKIN));
  circle(cx,cy,bodyD)

  let eyeX = bodyD * EYE_GAP / 2;    
  let eyeY = cy - bodyD * 0.12; 
  
  fill('#000000');
  circle(cx - eyeX, eyeY, eyeD);
  circle(cx + eyeX, eyeY, eyeD);

   let coin = floor(random(2)); 

  if (coin === 0) {
    N = +N
    } 
  else {
    N = -N
  }
    

  noFill();
  stroke(0);
  strokeWeight(2);
  bezier(233, 170 , 213 , 140 , 193, 210 + N , 173 , 150 );
  bezier(233, 170 , 223 , 150 , 203, 200 + N , 183 , 170 );
  bezier(270, 170, 290 , 140, 310, 210 + N , 330, 150);
  bezier(270, 170, 280, 150, 300, 200 + N, 320, 170);

  noFill();
  stroke(0);
  strokeWeight(13);
  bezier(328, 405 , 350 , 390 ,370 , 450 + N , 440 , 400 );
  
  }

function mousePressed() {
  redraw();
}

