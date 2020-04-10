class Star {
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
    display(color) {
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        fill(color);
        rect(pos.x, pos.y, this.width, this.height);
        this.width += 0.07;
        this.height += 0.07;
    }
};