class Cat {
    name;
    weight;
    maxspeed;
    mouse;

    constructor(name,weight,maxspeed) {
        this.name = name;
        this.weight = weight;
        this.maxspeed = maxspeed
    }

    setName(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    getWeight() {
        return this.weight
    }
    setSpeed(speed) {
        this.speed = speed
    }
    getSpeed() {
        return this.speed
    }
    catCall() {
        console.log("meo meo")
    }
    catchMouse(mouse) {
        if (mouse.checkStatus()) {
            if (this.maxspeed > mouse.speed) {
                mouse.mouseCall()
                this.catCall()
                console.log("bắt được chuột")
            } else {
                console("tăng tốc độ mèo lên")
            }
        }else {
          console.log("chết rồi k ăn nữa")
        }
    }
    eatMouse(mouse) {
        if(mouse.status === true) {
            console.log("ăn chuột")
            this.weight += mouse.weight
            mouse.status = false
        }else {
            console.log("chết rồi không ăn")
        }
    }
}