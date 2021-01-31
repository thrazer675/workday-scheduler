var today = moment().format("dddd, MMM Do YYYY");
var time = moment().format("H");
var events = JSON.parse(localStorage.getItem("taskObject")) || [];


$(window).on("load", function() {

    $("#currentDay").text(today);

    $(".input-block").each(function() {
        var hour = parseInt($(this).prev().attr("data-hour"));

        if (hour < time) {
            $(this).addClass("past");
        } else if (hour > time) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }

    });

});