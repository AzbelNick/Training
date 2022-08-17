class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn =!this.lightsOn;
    }
    lightStatus() {
        console.log('lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto)
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn =!this.highSpeedOn;
        console.log('high speed status: ', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightStatus();
        console.log('lights are operational.');
    }
}

var myFirstTrain = new Train("red", false);
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);
var train4 = new Train('red', false);
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train4.toggleLights(); 
train4.lightStatus(); 
train4.getSelf(); 
train4.getPrototype();

train5.toggleLights(); 
train5.lightStatus();

highSpeed1.toggleLights();

train5.getPrototype();
highSpeed1.getPrototype();