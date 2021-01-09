class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(x,y,width,height,options);
    //  this.width = width;
    //  this.height = height;
      World.add(world, this.ground);
    }
    display(){
    //  var pos =this.body.position;
      rectMode(CENTER);
      fill(175,70,60);
      rect(this.ground.position.x,this.ground.position.y,900,20);
    }
  };
