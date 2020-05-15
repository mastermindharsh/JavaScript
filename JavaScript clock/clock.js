console.log("This is clock.js")

function updateClock(){

    // Get the current Date
    let currentTime = new Date();

    // Extract hour, minute, second from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if minute or second is single digit
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Convert 24-hour clock to AM/PM clock and chosing it according to the time of day
    let timeofDay = (currentHour < 12) ? "AM" : "PM";
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour==0) ?  12 : currentHour;

    // Preparing the time string to display
    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeofDay;

    // Inserting the time string into DOM
    document.getElementById("clock").innerHTML = currentTimeStr;

}