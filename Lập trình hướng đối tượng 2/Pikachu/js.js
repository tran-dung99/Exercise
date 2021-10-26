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
        this.left += 20
   }
   moveDown() {
        this.top += 10
   }
   moveLeft() {
        this.left -= 20
   }
}
let totoro = new Hero('totoro.jpg',20,20,200,500)
function move() {
    if(totoro.left < window.innerWidth - totoro.size) {
        totoro.moveRight()
    }
     document.getElementById('game').innerHTML = totoro.getImage()
     setTimeout(move,500)
}

function moveDown() {
if(totoro.top < window.innerHeight - totoro.size) {
    totoro.moveDown()
}
// if(totoro.left < window.innerWidth - totoro.size) {
//     totoro.moveRight()
// }
    document.getElementById('game').innerHTML = totoro.getImage()
    setTimeout(moveDown,500)
}
move()
moveDown()