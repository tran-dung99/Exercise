class Ball {
    x;
    y;
    radius;
    color;
    speed;
    xSpeed;
    ySpeed;


    constructor(x,y,radius,color,speed) {
       this.x = x
       this.y = y
       this.radius = radius
       this.color = color
       this.speed = speed
       this.xSpeed = speed
       this.ySpeed = speed
    }

    showBall(canvas) {
        let pen = canvas.getContext('2d')
        pen.beginPath()
        pen.fillStyle = this.color
        pen.arc(this.x,this.y,this.radius,0,2*Math.PI)
        pen.fill()
        pen.closePath()
    }

    moveRight() {
        this.x += this.xSpeed
        this.y += this.ySpeed
    }
}