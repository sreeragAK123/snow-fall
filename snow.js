class Snow{
constructor(x,y,width,height){
    var options = {
        'restitution':0.3,
        'friction':1.0,
        'density':1.0,
    }
    this.image = loadImage("snow5.webp");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    
}
display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
}

}