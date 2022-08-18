// Code your solution in this file!
const hqDistance = 42;
function distanceFromHqInBlocks(distance) {
if (distance<hqDistance) {
    return (hqDistance-distance);
} else {
    return (distance-hqDistance);
}
}
function distanceFromHqInFeet (distance) {
    if (distance<hqDistance) {
        return (hqDistance-distance)*264;
    } else {
        return (distance-hqDistance)*264
    }
}
function distanceTravelledInFeet(start, destination ) {
    if (start<destination) {
        return (destination-start)*264;
    } else {
        return (start-destination)*264
    }
}
function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance<=400) {
        return 0;
    } else if (distance>=400 && distance<=2000) {
        return (distance-400)*0.02;
    }else if (distance>2000 && distance<2500) {
        return 25;
    }else { distance>2500
        return ('cannot travel that far')
    }

}