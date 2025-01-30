

function updateClock() {
     let date = new Date();
     let hour = date.getHours();
     let minute = date.getMinutes();
     let amPm = hour < 12 ? "AM" : "PM";
     let day = date.getDay();

     hour = hour % 12 || 12;

     console.log(day + " " + hour + " : " + minute);
     
     document.getElementById("hour").innerText = hour.toString().padStart(2, "0");
     document.getElementById("minute").innerText = minute.toString().padStart(2, "0");

     document.getElementById("amPm").innerText = amPm;
     let days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
     console.log(days[day]);
     document.getElementById(days[day]).classList.add("active");
}

setInterval(updateClock, 1000);

