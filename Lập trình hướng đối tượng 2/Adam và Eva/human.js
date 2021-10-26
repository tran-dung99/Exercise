class Human {
    name;
    gender;
    weight;
    apple;
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    setName(name){
        this.name = name
    }
    getName() {
        return this.name
    }
    setWeight(weight){
        this.weight = weight
    }
    getWeight(){
        return this.weight
    }
    say(messega){
        console.log(messega)
    }
    eatApple(apple){
        if(apple.weight > 0) {
        apple.decrease()
        this.weight ++
            console.log(this.weight)
            console.log(apple.weight)
        }else if(apple.weight == 0) {
            console.log("ăn hết rồi")
        }
    }
    ckeckWeightApple(apple){
        console.log("còn " + apple.weight + " miếng nữa nè ")
    }


}