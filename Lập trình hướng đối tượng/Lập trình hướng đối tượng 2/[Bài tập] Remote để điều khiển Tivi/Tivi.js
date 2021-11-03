class Television {
    color;
    status;
    chanelTurnOn;
    volume;
    constructor(color,status,chanelTurnOn,volume) {
        this.color = color;
        this.status = status;
        this.chanelTurnOn = chanelTurnOn;
        this.volume = volume;
    }
    setChannel(channel) {
        this.channel = channel
    }
    getChannel(channel) {
        return this.channel
    }
    setVolume(volume) {
        this.volume = volume
    }
    getVolume(volume) {
        return this.volume
    }
    getStatus() {
        return this.status
    }

    checkStatus() {
        if(this.status === false) {
            this.status = !this.status
        }
    }
    chargeChannel(channel) {
        if(this.status) {
            this.chanelTurnOn = channel
            console.log(this.chanelTurnOn)
        }else {
            console.log("bật ti vi lên nèo!!")
        }
    }

    volumeUp() {
        if (this.status) {
            this.volume++
            console.log(this.volume)
        } else {
            console.log("bật ti vi lên nèo!!")
        }
    }
    volumeDown() {
        if (this.status) {
            this.volume--
        } else {
            console.log("bật ti vi lên nèo!!")
        }
    }
}