function timeconver(s)
{
    let time = s.split(":");
    let hour = time[0];
    let min = time[1];
    let sec = time[2].slice(0,2);
    let ampm = time[2].slice(2,4);

    if(ampm == "PM" && hour != "12")
    {
        hour = parseInt(hour) + 12;
    }
    if(ampm == "AM" && hour == "12")
    {
        hour = "00";
    }

    let timeconv = hour + ":" + min + ":" + sec;

    let time24 = timeconv.toString();

    return time24;
}

const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = "2:00:00PM";

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();