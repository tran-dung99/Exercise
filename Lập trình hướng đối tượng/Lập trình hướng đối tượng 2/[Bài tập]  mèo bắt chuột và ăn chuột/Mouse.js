class Rat {
    name;
    weight;
    speed;
    status;
    constructor(name,weight,speed,status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status;
    }

    setName(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    setSpeed(speed) {
        this.speed = speed
    }
    getSpeed() {
        return this.speed
    }
    checkStatus() {
        if(this.status == false) {
            console.log("chuột " + this.name + " đã chết")
            return false
        }else {
            console.log("chuột " + this.name + " còn sống")
            return true
        }
    }
    // kêu chít chít
    mouseCall() {
        console.log("chít....chít")
    }
}