// var rotation = 0;

class Planet {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.8,
            'friction': 0.3,
            'density': 1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(color,rotation) {
        var pos = this.body.position;
        
        push();
        rotate(rotation);
        // rotation += speed;
        rectMode(CENTER);
        noStroke();
        fill(color);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
};