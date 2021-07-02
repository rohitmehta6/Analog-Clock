setInterval(()=>{

    let curr_hours=new Date().getHours();
    let curr_minutes=new Date().getMinutes();
    let curr_seconds=new Date().getSeconds();

    let hours_rotate=30*curr_hours + curr_minutes/2;
    let minutes_rotate= 6*curr_minutes;
    let seconds_rotate=6*curr_seconds;

    hour.style.transform=`rotate(${hours_rotate}deg)`;
    minute.style.transform=`rotate(${minutes_rotate}deg)`;
    second.style.transform=`rotate(${seconds_rotate}deg)`;

},1000);