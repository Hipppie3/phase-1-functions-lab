// Code your solution in this file!

// 1) Write function distanceFromHqInBlocks --> takes in a pickup location (block)
// 2) Returns the number of blocks from headquarters on 42nd St.
function distanceFromHqInBlocks(block) {
   if (block > 42) {
    return block - 42;
   } else
   return 42 - block;
}
const feetDistance = distanceFromHqInBlocks();
// 1) Use the return value for distanceFromHqInBlocks in the function disanceFromHqInFeet 
// 2) Each block = 264
function distanceFromHqInFeet(block) {
 if (block > 42) {
 return ((block -42)* 264);
 } else 
  return ((42-block) * 264);
}

// 1) Return the distance travelled in feet
// 2) return a distance in feet
// 3) return distance when destination is below distance

function distanceTravelledInFeet(start, dest) {
   if (start < dest) {
      return (dest - start) * 264;
   } else 
   return (start - dest) * 264;

   // const distanceTraveled = ((dest - start) * 264);
   // return distanceTraveled;
}

// 1) give customers a free sample
// 2) charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet is free!)
// 3) charges 25 dollars for a distance over 2000 feet
// 4) does not allow rides over 25000 feet
function calculatesFarePrice(start, dest) {
   const distance = distanceTravelledInFeet(start, dest);
   
   if (distance <= 400) {
      return 0;
   } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
   } else if (distance > 2000 && distance < 2500) {
      return 25;
   } else {
      return "cannot travel that far"
   }
   // const distance = dest - start;
   // if (distance < 400) {
   //    return "The ride is free!";
   // } else if (distance >= 400 && distance <= 2000) {
   //    return "The price is 2 cents";
   // } else if (distance > 2000 && distance <= 2500) {
   //    return 25;
   // } else {
   //    return "cannot travel that far;"
   // }
}
console.log(calculatesFarePrice(100, 1000));



console.log(distanceTravelledInFeet(34,38));