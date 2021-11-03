class Hero {
    left;
    top;
    width;
    height;
    size;
    image;
    speed;
    constructor(image, left, top,size,speed) {
        this.image = image;
        this.left = left;
        this.top = top;
        this.size = size;
        this.speed = speed
    }
   getImage() {
        return '<img width="' +this.size +'"'+
                      ' height="' + this.size +'"'+
                     'src="' +this.image + '"' +
                     'style=" left:' + this.left + 'px; top:' + this.top + 'px; position: absolute">'
   }

   moveRight(){
        this.left += this.speed
       console.log('ok: ' + this.left);
   }
   moveDown() {
        this.top += this.speed
       console.log('ok: ' + this.left);
   }
   moveLeft() {
        this.left -= this.speed
       console.log('ok: ' + this.left);
   }
   moveTop() {
        this.top -= this.speed
       console.log('ok: ' + this.left);
   }
}
let speed = +prompt("nhập vào tốc độ :")
let totoro = new Hero('totoro.jpg',0,0,200,speed)
function move() {
    if(totoro.top === 0 && totoro.left < window.innerWidth - totoro.size) {
        totoro.moveRight()
    } else if(totoro.top < window.innerHeight - totoro.size && totoro.left > window.innerWidth - totoro.size) {
        totoro.moveDown()
    }else if(totoro.left > 0) {
        totoro.moveLeft()
    }else if( totoro.top > 0 ) {
        totoro.moveTop()
    }
     document.getElementById('game').innerHTML = totoro.getImage()
     setTimeout(move,300)
}
move()