class BoxPink {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        strokeWeight(2);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);
        
        console.log(thid.body.speed)
        if(this.body.speed>3)
        {var angle=this.body.angle;
            var position=this.body.position;
            Push();
            Translate(position.x,position.y)
           rotate(angle) ;
           rectMode(center);
           rect(0,0,this.width,this.height);
           Pop();
        }else{
world.remove(world.this.body)
push();
this.visibility=this.visibility-5
pop();

        }

    }
}