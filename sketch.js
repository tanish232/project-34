var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Composites = Matter.Composites,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  World = Matter.World,
  Constraint = Matter.Constraint,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

// create engine
var engine = Engine.create(), world = engine.world;

// create renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 400,
    wireframes: false
  }
});


Engine.run(engine);

Render.run(render);

var cradleA = Composites.newtonsCradle(200, 15, 5, 20, 250);
Body.translate(cradleA.bodies[0], { x: -100, y: -100 });

//var cradleB = Composites.newtonsCradle(550, 15, 4, 20, 140);

//Body.translate(cradleB.bodies[0], { x: -80, y: -40 });


World.add(world, [
  cradleA,
  //cradleB,
  // walls
  Bodies.rectangle(400, 0, 810, 30, { isStatic: true }),
  Bodies.rectangle(400, 400, 810, 30, { isStatic: true }),
  //Bodies.rectangle(800, 200, 30, 420, { isStatic: true }),
  //Bodies.rectangle(0, 200, 30, 420, { isStatic: true })
]);
