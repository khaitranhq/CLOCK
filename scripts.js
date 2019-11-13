var clock = document.getElementById('clock');

var showTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var morning = true;
    if (hours >= 12) morning = false;

    if (hours == 24) hours = 0;
        else 
            if (hours > 12) hours -= 12;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    var time = hours + ":" + minutes + ":" + seconds;
    if (morning) time += ' AM!!';
    else time += ' PM!!';
    clock.textContent = time;
}

setInterval(showTime, 1000);