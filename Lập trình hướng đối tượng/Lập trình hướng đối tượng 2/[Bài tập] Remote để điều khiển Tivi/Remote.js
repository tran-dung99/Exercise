class Remote {
    code;
    television;
    constructor(code) {
     this.code = code;
    }
    chargeChannel(channel,television) {
        television.setChannel(channel)
        console.log(television.getChannel())
    }
    volumeUp(television) {
        if (television.getStatus() === true) {
            if (television.volume >= 100) {
                console.log("Đạt mực tối đa zồi!!")
            } else if (100 > television.volume > 0) {
                television.volume++
                console.log(television.getVolume())
            }
        } else {
            console.log("bật tivi lên nèo")
        }
    }

    volumeDown(television) {
        if(television.getStatus() === true) {
            if(television.volume === 0) {
                console.log("Đạt mực tối thiểu zồi!!")
            }else if( 100 > television.volume > 0) {
                television.volume--
                console.log(television.getVolume())
            }
        } else {
            console.log("bật tivi lên nèo")
        }
    }

    turnOn_OfTelevision(television) {
        television.status = !television.status
        console.log(television.getStatus())
    }
}