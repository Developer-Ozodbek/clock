function showTime() {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    timeType = "AM";

    if (h == 0) {
        h = 12
    } else if(h > 12){
        h = h - 12;
        timeType = "PM"
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + timeType;
    document.getElementById('timer').innerHTML = time;

    setTimeout(showTime, 1000);
}

showTime();

function thedate() {
    let date = new Date,
    month = date.getMonth() + 1,
    day = date.getDay(),
    year = date.getFullYear();
    
    let dataYear = month + "/" + day + "/" + year;

    document.querySelector('#theDate').innerHTML = dataYear;

    setTimeout(thedate, 86400)
}
thedate()