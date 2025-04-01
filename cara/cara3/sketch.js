function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() 
{
  createCanvas(600,400);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  let pseuRan= noise(frameCount*0.1);
  let mx = map(mouseX, 0,600,-10,+10);
  let my = map(mouseY, 0,400,-10,+10);
  let cX =300;
  let cY =250;
  let vol= mic.getLevel();
  let vulls= map(vol,0,1,0,100);
  let vboca= map(vol,0,1,0,300);
  console.log("vulls is "+vulls)
  console.log("vol is "+vol)
  background(127, map(pseuRan, 0,1,0,255), 24);
  
  //Cara
  fill(255,34,103);
  ellipse(cX,cY,270,300);
  // Cellas
  stroke(0);
  strokeWeight(4);
  line(200, 120, 260, 130); 
  line(340, 130, 390, 120); 
  //Ull dret
  fill(200);
  ellipse(cX-50,cY-50,50,50);
  //Pupil·la dreta
  fill(0,0,0);
  ellipse(cX-50+mx,cY-50+my,15,15);
  //Ull esquerra
  fill(200);
  ellipse(cX+50,cY-50,50,50);
  //Pupil·a esquerra
  fill(0,0,0);
  ellipse(cX+50+mx,cY-50+my,15,15);
  //Boca
  fill(0,0,0);
  arc(cX,cY+50,120,30+vboca, 0, PI, CHORD);
  //sombrero
  fill(0);
  rect(220, 70, 140, 30); // Parte superior
  rect(200, 100, 180, 10); // Ala del sombrero
  //nas
  fill(137);
  triangle(cX - 15, cY + 20, cX,  cY, cX +15, cY + 20);  
}
