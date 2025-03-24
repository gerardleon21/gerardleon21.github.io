let mic;

function setup() {
  createCanvas(600, 400);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  let ullsAmp = map(vol, 0, 1, 0, 15); 
  let bocaAmp = map(vol, 0, 1, 10, 100); 
  background(127);

  // Cara
  fill(255, 204, 153);
  noStroke();
  ellipse(300, 200, 350, 300);

  // Ull esquerre
  fill(255);
  ellipse(230, 150, 50, 70); 
  fill(20, 42, 14);
  ellipse(230 + ullsAmp, 150, 20, 30); // Pupil·la

  // Ull dret
  fill(255);
  ellipse(370, 150, 50, 70); // 
  fill(20, 42, 14);
  ellipse(370 + ullsAmp, 150, 20, 30); // Pupil·la 

  // Boca
  fill(0);
  arc(300, 250, 200, bocaAmp, 0, PI, CHORD);

  // Cellas
  stroke(0);
  strokeWeight(4);
  line(200, 120, 260, 130); 
  line(340, 130, 390, 120); 
}
