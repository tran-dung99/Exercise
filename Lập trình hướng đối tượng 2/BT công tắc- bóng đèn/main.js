let lamp = new Lamp(false);
let switchbutton = new SwitchButton(false)
// switchbutton.connectToLamp(lamp);
// switchbutton.switchOn()
// console.log(switchbutton.status)
// console.log(lamp.status)
switchbutton.switchOn(lamp)
console.log(lamp.status)