class launcher{
    constructor(body,Anchor){
        var options = {
            body: body,
            pointB:anchor,
            stiffness: 0.04,
            length: 2
        }
        this.bodyA=body
        this.pointB = Anchor
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    attach(body)
    {
        this.launcher.bodyA = body;
    }
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            
                strokeWeight(3);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
 
        }
    }
    
