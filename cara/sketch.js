function setup() 
{
  createCanvas(600,400);
  mic=new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol= mic.getLevel();
  let vulls= map(vol,0,1,0,100);
  let vboca= map(vol,0,1,0,300);
  console.log(vulls)
  console.log(vol)
  background(127);
  fill(227,192,139);
  ellipse(300,200,350,300);
  fill(19,293,29);
  ellipse(250,150,30,50);
  fill(200,42,14);
  ellipse(250,150,10*sin(frameCount*0.1)+15,15);
  fill(190,29,389);
  ellipse(350,150,30,50);
  fill(200,42,14);
  ellipse(3700,170,20*cos(frameCount*0.1)+15,15);
  fill(200,150,15);
  arc(300,250,200,3+vboca,0,PI,CHORD);
 
}
