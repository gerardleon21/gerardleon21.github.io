let sc = 5;
let mic;

function setup() {
  createCanvas(200 * sc, 170 * sc);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  // Obtenim el nivell de volum del micròfon
  let vol = mic.getLevel();
  let h = map(vol, 0, 1, 0, 30); // Mapeig del volum per al moviment d'ales

  background(204);

  // Cos de l'ocell 
  fill(0);
  beginShape();
  vertex(80 * sc, 20 * sc);
  vertex(100 * sc, 20 * sc);
  vertex(120 * sc, 30 * sc);
  vertex(130 * sc, 40 * sc);
  vertex(140 * sc, 60 * sc);
  vertex(160 * sc, 70 * sc - h); // Ales de dalt, amb moviment cap amunt
  vertex(140 * sc, 70 * sc);
  vertex(160 * sc, 70 * sc + h); // Ales de baix, amb moviment cap avall
  vertex(140 * sc, 80 * sc);
  vertex(120 * sc, 120 * sc);
  vertex(100 * sc, 140 * sc);
  vertex(95 * sc, 140 * sc);
  vertex(95 * sc, 155 * sc);
  vertex(100 * sc, 150 * sc);
  vertex(98 * sc, 155 * sc);
  vertex(102 * sc, 156 * sc);
  vertex(98 * sc, 157 * sc);
  vertex(100 * sc, 160 * sc);
  vertex(95 * sc, 158 * sc);
  vertex(90 * sc, 158 * sc);
  vertex(90 * sc, 140 * sc);
  vertex(70 * sc, 140 * sc);
  vertex(70 * sc, 155 * sc);
  vertex(75 * sc, 150 * sc);
  vertex(73 * sc, 155 * sc);
  vertex(77 * sc, 156 * sc);
  vertex(73 * sc, 157 * sc);
  vertex(75 * sc, 160 * sc);
  vertex(70 * sc, 158 * sc);
  vertex(65 * sc, 158 * sc);
  vertex(65 * sc, 140 * sc);
  vertex(60 * sc, 140 * sc);
  vertex(40 * sc, 120 * sc);
  vertex(35 * sc, 110 * sc);
  vertex(35 * sc, 80 * sc);
  vertex(40 * sc, 60 * sc);
  vertex(50 * sc, 40 * sc);
  vertex(60 * sc, 30 * sc);
  vertex(80 * sc, 20 * sc);
  endShape(CLOSE);

  // Ull 
  fill(0);
  beginShape();
  vertex(100 * sc, 40 * sc);
  vertex(110 * sc, 50 * sc);
  vertex(100 * sc, 60 * sc);
  vertex(90 * sc, 50 * sc);
  endShape(CLOSE);

  // Pupila 
  fill(255);
  beginShape();
  vertex(100 * sc, 45 * sc);
  vertex(105 * sc, 50 * sc);
  vertex(100 * sc, 55 * sc);
  vertex(95 * sc, 50 * sc);
  endShape(CLOSE);

  // Bec
  fill(255, 0, 0);
  beginShape();
  vertex(120 * sc, 50 * sc); // Part superior del bec
  vertex(130 * sc, 55 * sc); // Punta del bec
  vertex(120 * sc, 60 * sc); // Part inferior del bec
  endShape(CLOSE);

  // Potes 
  stroke(255, 0, 0);
  strokeWeight(2);
  line(80 * sc, 140 * sc, 80 * sc, 160 * sc); // Pota esquerra
  line(90 * sc, 140 * sc, 90 * sc, 160 * sc); // Pota dreta
}

