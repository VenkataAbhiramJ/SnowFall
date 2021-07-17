class snow{
    constructor(x,y,r){
        var opt={
            friction:0.1,
            density:0.1,
            restitution:0.1,
        }
        this.body=Bodies.circle(x,y,r,opt)
        this.r=r
        this.image=loadImage("snow4.webp")
        World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image (this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}