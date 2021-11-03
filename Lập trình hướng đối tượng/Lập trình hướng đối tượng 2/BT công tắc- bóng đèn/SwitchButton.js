class SwitchButton {
    status;
    lamp;
    constructor(status) {
       this.status = status
    }

    connectToLamp(lamp) {
      this.lamp = lamp
    }
    switchOff(lamp) {
        this.status = false
        lamp.turnOff()
    }
    switchOn(lamp) {
        this.status = true
        lamp.turnOn()
    }
}