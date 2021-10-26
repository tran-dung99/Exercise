class Apple {
    weight;
    status;
    constructor(weight) {
       this.weight = weight
    }

    decrease() {
        this.weight--
    }
    isEmty() {
        if(this.weight === 0) {
            this.status = false
        }else if( this.weight > 0 ) {
            this.status = true
        }
    }
    getWeight() {
        return this.weight
    }
}