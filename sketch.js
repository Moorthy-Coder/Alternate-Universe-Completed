const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world, engine;

var sun;

var m = v = e = ma = j = s = u = n = 0;


// var rotation = 0;

function setup() {
  createCanvas(1350, 650);
  angleMode(DEGREES);

  engine = Engine.create();
  world = engine.world;

  sun = new Star(0, 0, 100, 100);

  mercury = new Planet(115, 0, 20, 20);
  venus = new Planet(145, 0, 25, 25);
  earth = new Planet(180, 0, 25, 25);
  mars = new Planet(225, 0, 22.5, 22.5);

  Jupiter = new Planet(285, 0, 35, 35);
  saturn = new Planet(325, 0, 30, 30);
  uranus = new Planet(365, 0, 27, 27);
  neptune = new Planet(405, 0, 27, 27);
}

function draw() {
  background(0);
  Engine.update(engine);
  translate(675, 325);

  sun.display(rgb(255, 175, 20));
  // Touching(sun, mercury);

  mercury.display(rgb(215, 210, 210), m);
  m += 5;
  Touching(sun, mercury);
  venus.display(rgb(225, 160, 30), v);
  v += 4.5;
  Touching(sun, venus);
  earth.display(rgb(0, 100, 100), e);
  e += 4;
  Touching(sun, earth);
  mars.display(rgb(160, 25, 35), ma);
  ma += 3.5;
  Touching(sun, mars);

  Jupiter.display(rgb(125, 120, 100), j);
  j += 2.5;
  Touching(sun, Jupiter);
  saturn.display(rgb(200, 170, 110), s);
  s += 2;
  Touching(sun, saturn);
  uranus.display(rgb(200, 240, 240), u);
  u += 1.5;
  Touching(sun, uranus);
  neptune.display(rgb(60, 90, 240), n);
  n += 1;
  Touching(sun, neptune);
}