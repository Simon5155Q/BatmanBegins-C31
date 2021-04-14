var raining = [];
class Rain{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,3 , options);
      World.add(world, this.body);
      
    }

    reposition(){
      if(this.body.position.y > 400 ){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
      }
    }

   /* rainDrop(){
      for(var i = 0; i < 100; i++){
        raining.push
        Matter.Body.setPosition(this.body, {x:random(0,300), y:random(0,300)});
      }
    }*/
    
    display(){
      
      push();     
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(0, 0, 3, 3);      
      pop();
    }
}

