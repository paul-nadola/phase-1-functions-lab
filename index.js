// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let hq = 42;
    let distance;
    if (street > hq) {
        distance = street - hq;
    }
    else{
        distance = hq - street;
    }
    return distance
}
/*let distanceInfeet = distanceFromHqInBlocks(street)*264*/
function distanceFromHqInFeet(destination){
    let feetPerBlock = 264
    let distanceinfeet = distanceFromHqInBlocks(destination) * feetPerBlock;
    return distanceinfeet;
    }
/*console.log(distanceInfeet(43))*/
function distanceTravelledInFeet(start, destination){
    let feetPerBlock = 264;
    let distance;
    if (start > destination) {
        distance = start - destination
    }
    else{
        distance = destination -start;
    }
    return distance * feetPerBlock;
}

function calculatesFarePrice (start, destination){
    let distancetravelled = distanceTravelledInFeet(start, destination);
    let fare;
    if (distancetravelled <= 400){
        fare = distancetravelled * 0;
    }
    else if(distancetravelled > 400 && distancetravelled <= 2000){
        fare = (distancetravelled - 400) * 2/100;
    }
    else if(distancetravelled > 2000 && distancetravelled <= 2500){
        fare = 25
    }
    else{
        fare = "cannot travel that far"
    }
    return fare
}