class tree{

    constructor(x,y){

        this.x=x
        this.y=y
        this.treeWidth=450
        this.treeHeight=600
        this.treeThickness=10

        this.image=loadImage("Images/tree.png")
        this.body=Bodies.rectangle(this.x,this.y,this.treeWidth,this.treeHeight,this.treeThickness)
        World.add(world,this.body)
    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,this.treeheight/2,this.treeWidth,this.treeThickness)
        pop();
    }

}