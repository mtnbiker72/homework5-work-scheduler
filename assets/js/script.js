// Set the current time to display
var currentTime = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(currentTime);

// Get the save button configured

$(document).ready(function () {
    // Listen for click on save button
    $(".saveBtn").on("click", function () {
        // Get time and description
        console.log($(this));
        var text = $(this).siblings(".description").val();
        var time = $(this).siblings(".description").attr("id");

        // Save the time and text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        // Get the current hour of the day
        var timeNow = moment().hour();

        // Determine if time blocks are past, present, or future
        $(".time-block").each(function () {
            var checkCalTime = $(this).attr("id");

            // To check the time and add the classes for background colors
            if (timeNow > checkCalTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            // Since "#id" is a character, convert to integer before comparison
            else if (timeNow === parseInt(checkCalTime)) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    // Retrieve from local storage so it displays on refresh

    $("#8.description").val(localStorage.getItem("8"));
    $("#9.description").val(localStorage.getItem("9"));
    $("#10.description").val(localStorage.getItem("10"));
    $("#11.description").val(localStorage.getItem("11"));
    $("#12.description").val(localStorage.getItem("12"));
    $("#13.description").val(localStorage.getItem("13"));
    $("#14.description").val(localStorage.getItem("14"));
    $("#15.description").val(localStorage.getItem("15"));
    $("#16.description").val(localStorage.getItem("16"));
    $("#17.description").val(localStorage.getItem("17"));

    timeTracker();
})
