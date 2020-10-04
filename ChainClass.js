class Chain {
    constructor(body1,body2){
    var options = {
        bodyA: body1,

        bodyB: body2,

        stiffness: 0.04,

        length: 10
    }

    this.chain = Constraint.create(options); 

    World.add(world,this.chain);
    }
    display(){
    strokeWeight(3);
    line(bird.body.position.x,bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);

    }


}
