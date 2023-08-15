let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 18;

if (runnerAge > 18 && registeredEarly == true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly == true) {
  console.log("Your race number is " + raceNumber + " and your starting time is 9:30 am");
} 

else if (runnerAge > 18 && registeredEarly == false) {
  console.log("Your race number is " + raceNumber + " and your start time is 11:00 am");
}

else if (runnerAge < 18) {
  console.log("Your race number is " + raceNumber + "and your start time is 12:20 pm");
}

else {
  console.log("See help desk")
}