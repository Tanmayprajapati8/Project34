class Monster {
    constructor(x,y,widht,height) {
        var options = {
            isStatic: false,
            // restitution: 0,
            // friction: 1,
        }
        this.body=Bodies.rectangle(x,y,widht,height,options);
        this.widht=widht;
        this.height=height;
        this.image=loadImage("Monster-01.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.widht,this.height);
    }

    
}