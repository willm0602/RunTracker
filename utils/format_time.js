/**
     * takes a time in minutes and makes a string representation of it
     */

function formatTime(mins)
{
    var min = Math.floor(mins)
    var secs = (mins-min)*60
    var time = `${min}:${secs < 60 ? '0' : ''}${secs}`
    return(time)
}


export default formatTime