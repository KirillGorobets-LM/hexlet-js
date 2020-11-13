
const formatTime = (minute) => {
    let hour = Math.floor(minute / 60);
    let minuteRemain = minute % 60;
    if (hour >= 24) {
       hour -= 24;
    };
    if (hour < 10) {
        hour = `0${hour}`;
    };
    if (minuteRemain < 10) {
        minuteRemain = `0${minuteRemain}`;
    }
    return `${hour}:${minuteRemain}`;
};
export default formatTime;