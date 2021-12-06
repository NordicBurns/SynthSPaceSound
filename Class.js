class Propulsion {
    constructor(
        Speed,
        Power,
        burnTime
    ){
        this.Speed = Speed;
        this.Power = Power;
        this.burnTime = burnTime;
    }
    //Methods
    launch(){
        alert("Spacecarrier Taking Off")
        return true;
    }
    landing(){
        alert("Spacecarrier Landing")
        return true;
    }
    Refueling(fuelType, fuelAnt){
        alert("Loading Spacecarrier with " + fuelAnt + "Gallons of " + fuelType + "fuel.");
        return true;
    }
}