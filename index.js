// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    let distanceInBlocks = Math.abs(pickUp - 42)
    return distanceInBlocks
}

function distanceFromHqInFeet(pickUp) {
    let distanceInFeet = distanceFromHqInBlocks(pickUp) * 264
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination) {
    let distanceTravelled = Math.abs(destination - start) * 264
    return distanceTravelled
}

function calculatesFarePrice(start, destination) {
    let fareDistance = Math.abs(destination - start) * 264;
    let fare;
    if (fareDistance <= 400) {
        fare = 0;
    }
    else if (fareDistance <= 2000) {
        fare = (fareDistance - 400) * 0.02;
    }
    else if (fareDistance < 2500) {
        fare = 25;
    }
    else {
        fare = 'cannot travel that far';
    }
    return fare
}
