class Box {
  constructor(x, y, width, height) {
      var options = {
         restitution :0.4,
         friction :0.0,
         //isStatic:true
         }
      
         this.body = Bodies.rectangle(x, y, width, height, options);
         this.width = width;
         this.height = height;
         this.visiblity = 255;
         World.add(world, this.body);
    }
    
    display(){

      if(this.body.velocity <= 3){
        this.visiblity = 255;
      }
      else {
        this.tint(255);
      }
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }

    score(){
      if(this,visiblity < 0 && this.visiblity >= 105){
        score++
      }
    }
}