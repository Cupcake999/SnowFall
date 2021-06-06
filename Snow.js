
class Snow{
    constructor(x, y, r, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':1.0
        }
        this.body = Bodies.circle(x,y,r,options)
        this.radius = r;
        
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        fill("white");
       strokeWeight("2")
       ellipseMode(CENTER)
        ellipseMode(CENTER)
        ellipse(0,0,this.radius)
        
          pop();
      }
}