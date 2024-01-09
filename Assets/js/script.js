$(document).ready(function() {

    // Function to display the current date and time
    function displayTime() {
        $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
        $('#currentTime').text(dayjs().format('h:mm:ss'));
    }

    // Initial call to displayTime and set interval to update every second
    displayTime();
    setInterval(displayTime, 1000);

    // Function to update hour blocks based on the current hour
    function updateHour() {
        let currentHour = dayjs().hour();
        let timeBlocks = $('.time-block');

        timeBlocks.each(function() {
            let blockHour = parseInt($(this).attr('id'));

            if (currentHour > blockHour) {
                $(this).addClass('past');
            } else if (currentHour === blockHour) {
                $(this).removeClass('past').addClass('present');
            } else {
                $(this).removeClass('past present').addClass('future');
            }
        });
    }

    // Initial call to updateHour and set interval to update every 15 seconds
    updateHour();
    setInterval(updateHour, 15000);

    // Click event handler for save button
    $('.saveBtn').click(function () {
        // Retrieve the event text from the corresponding textarea
        const eventText = $(this).siblings('.description').val();
        // Retrieve the hour (ID) associated with the button's parent
        const hour = $(this).parent().attr('id');
        // Save the event text to local storage using the hour as a key
        localStorage.setItem(hour, eventText);
    });
});
