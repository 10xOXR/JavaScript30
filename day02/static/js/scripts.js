
function setDate() {
    const now = new Date();

    // Set seconds and Second hand position
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds * 6) + 90; // (1/60th of a rotation around the clock is 6 degrees)
    document.querySelector(".sec-hand").style.transform = `rotate(${secondsDegrees}deg)`;

    // Prevent Second hand from appearing to jump backward between 59s and 0s
    if (seconds == 0) {
        document.querySelector(".sec-hand").style.transition = "none";
    } else {
        document.querySelector(".sec-hand").style.transition = "all 0.5s cubic-bezier(0.1, 2.7, 0.58, 1)";
    };

    // Set minutes and Minute hand position
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes * 6) + (seconds * 0.1) + 90;
    document.querySelector(".min-hand").style.transform = `rotate(${minutesDegrees}deg)`;

    // Set hours and Hour hand position
    const hours = now.getHours();
    const hoursDegrees = (hours * 30) + (minutes * 0.5) + (seconds * 0.00833) + 90;
    document.querySelector(".hour-hand").style.transform = `translateX(25%) rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
