function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const points = Math.floor((speed - speedLimit) / 5);
        if (points > 12) {
            return "License suspended";
        } else {
            return `Points: ${points}`;
        }
    }
}

const speed = parseInt(prompt("Enter the car's speed in km/h: "), 10);

if (isNaN(speed) || speed < 0) {
    console.log("Please enter a valid speed.");
} else {
    console.log(checkSpeed(speed));
}
