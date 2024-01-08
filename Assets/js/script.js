$(document).ready(function() {

    function displayTime() {
        $( 'currentDay').text(daysjs().format
        (dddd, MMMM D, YYYY))
        $( 'currentTime').text(daysjs().format
        (hh:mm:ss))
    }
    setInterval(displayTime, 1000)
}