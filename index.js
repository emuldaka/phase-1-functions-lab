// Code your solution in this file!
const start = 42;

function distanceFromHqInBlocks(destination) {
  const distance = destination - start;
  return Math.abs(distance);
}

function distanceFromHqInFeet(destination) {
  const distance = distanceFromHqInBlocks(destination);
  return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
  const distance = destination - start;
  return Math.abs(distance * 264);
}

function calculatesFarePrice(start, destination) {
  let distance = Math.abs(destination - start) * 264;
  let fare;
  if (distance <= 400) {
    fare = 0;
  } else if (distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    fare = 25;
  } else {
    fare = "cannot travel that far";
  }
  return fare;
}
