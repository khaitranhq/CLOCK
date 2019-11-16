var clock = document.getElementById('clock');
var inParty = false;

var showTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var morning = true;
    if (hours >= 12 && hours < 24) morning = false;

    if (hours == 24) hours = 0;
        else 
            if (hours > 12) hours -= 12;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    var time = hours + ":" + minutes + ":" + seconds;
    if (morning) time += ' AM!!';
    else time += ' PM!!';
    clock.textContent = time; 
    hour = 5;
}

var updateTime = function(){
    var currentDate = new Date();

    var link = ["https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/1920614_597571763672665_1790518123_n.jpg?_nc_cat=111&_nc_eui2=AeHdf5j-YIZw3_Y8bSJwQzTj5wza_SyOU6EEfwHCSYcjLTAvJjrJaJvJHLtwxk8s_N4HQJw7nEXlX1VDoSW7zx-OifOwgdkySevgHWIM4f-Kew&_nc_oc=AQlBdCz1Ch2niGT5LeL8TtYTjQT7QpaMvPfbGS0XXn_cOi_z3k0uDcxY-Pya9nXJclw&_nc_ht=scontent.fsgn2-1.fna&oh=9f27d59105d66940643137e1ae6a747d&oe=5E59404C", "https://i.ytimg.com/vi/Fk0wMVnXp3o/maxresdefault.jpg", "http://www1.pictures.zimbio.com/mp/2IsUbzfNI5Ll.jpg", "https://media1.tenor.com/images/1ffaf0fc004176a6977cf3c49cd78edc/tenor.gif?itemid=12724216", "http://www.pethealthnetwork.com/sites/default/files/why-does-my-cat-sleep-so-much-461771577.jpg"]; //Morning, lunch, afternoon, evening, sleep
    var message = ["Good morning", "LET'S HAVE SOME LUNCH", "Good afternoon", "Good evening", "Sleep tights!!"];
    var time = [[6, 11], [11, 12], [12, 17], [17, 21], [21, 6]];

    var imgCat = document.getElementById('imgCat');
    var timeEvent = document.getElementById('timeEvent');

    if (inParty)
        imgCat.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    else        
        for(var i = 0 ; i < 5 ; ++i)
            if (currentDate.getHours() >= time[i][0] && currentDate.getHours() < time[i][1]){
                console.log(1)
                imgCat.src = link[i];
                timeEvent.textContent = message[i];
                break;
            }
    showTime();
}

updateTime();
setInterval(updateTime, 1000);

var partyButton = document.getElementById('partyButton');
var party = function(){
    var imgCat = document.getElementById('imgCat');
    if (inParty){
        inParty = false;
        partyButton.innerText = "PARTY OVER";
        partyButton.style.backgroundColor = "#66ccff";
    } else {
        inParty = true;
        partyButton.innerText = "PARTY TIME";
        partyButton.style.backgroundColor = "#111";
    }
}

partyButton.addEventListener("click", party);