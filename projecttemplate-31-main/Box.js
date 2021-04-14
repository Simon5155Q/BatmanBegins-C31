class Box{
    constructor(x, y) {
        var options = {
            'isStatic' : true,
        }
        this.body = Bodies.circle(x, y,30 , options);
        World.add(world, this.body);
        
      }
  
      
      display(){    
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0, 0, 30, 30);      
      }
  }
  
  