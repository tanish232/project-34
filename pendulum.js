class Pendulum{
    constructor(x,y){
   var op={
    restitution:1,
    frictionAir:0,
    density:0.05,
    slope:1,
    inertia: Infinity
   }
   this.body=Bodies.rectangle(x,y,40,40,op)
   World.add(world,this.body)
    } 
   display(){
   var pos=this.body.position    
   var angle=this.body.angle
   push();
   translate(pos.x,pos.y);
   rotate(angle)
   ellipseMode(CENTER)
   noStroke()
   fill("black")
   ellipse(0,0,60,60)
   pop();
   }   
   }