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

blockInFeet = 264;

 function distanceTravelledInFeet(block1, block2){
      if(block1 < block2){
         return (block2 - block1) * blockInFeet

     } else{
         return (block1 - block2) * blockInFeet
     }
     

 }


 const calculatesFarePrice = (start, destination) => {
     res = distanceTravelledInFeet(start, destination)
     if(res > 2500){
         return `cannot travel that far`
     }
     else if(res <= 400){
         return `gives customer a free sample`
     } 
     else if(res >= 401 && res < 2000){
         return res * 2
     }
     else if( res > 2001 && res < 2500){
         return 25
     }
 }