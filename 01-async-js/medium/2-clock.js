// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// clock

function showTime(){
    console.log('--');
    const date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let am_pm = "AM";
    
    if(hrs >= 12){
        if (hrs > 12) hrs -= 12;
        am_pm = 'PM';
    }
    else if(hrs == 0){
        hrs = 12;
        am_pm = 'AM';
    }

    hrs < 10 ? '0' + hrs : hrs;
    mins < 10 ? '0' + mins : mins;
    sec < 10 ? '0' + sec : sec;

    console.log(hrs + ':' + mins + ':' + sec , am_pm);
}

setInterval(showTime, 1000);
// showTime();

