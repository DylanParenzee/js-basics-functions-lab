// Code your solution in this file!

function distanceFromHqInBlocks(distInBlocks){
    if(distInBlocks > 42){
        return distInBlocks - 42
    }
    else if(distInBlocks < 42){
        return 42 - distInBlocks;
    }
    return distInBlocks;
}

const distanceFromHqInFeet = (distInFeet) => {
    return distanceFromHqInBlocks(distInFeet) * 264

}