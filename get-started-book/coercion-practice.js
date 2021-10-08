const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeetings(startTime, durationMinutes) {
    let time = startTime.split(':');
    time[0] = String((durationMinutes+Number(time[1])>59)? Number(time[0])+Math.ceil(durationMinutes/60): time[0]);
    time[1] = String((durationMinutes+Number(time[1]))%60);
    time = [((time[0].length)<2?'0':'')+time[0],((time[1].length)<2?'0':'')+time[1]]
    time = Number(time.join(':'));
    console.log(dayStart<=startTime && startTime<=dayEnd);
    //console.log(dayStart<=startTime && startTime<=dayEnd && dayStart<=time && time<=dayEnd);
}

scheduleMeetings("07:00",15);
scheduleMeetings("07:15",30);
scheduleMeetings("7:30",30);
scheduleMeetings("11:30",60);
scheduleMeetings("17:00",45);
scheduleMeetings("17:30",30);
scheduleMeetings("18:00",15);