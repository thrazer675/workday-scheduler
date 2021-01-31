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

    $(".saveBtn").on("click", function() {

        var hour = $(this).prev().prev().attr("data-hour");
        var input = $(this).prev().val().trim();
        var task = events.find((t) => t.time === hour);

        if (input === "") {
            if (task) {
                events = events.filter((t) => t.time !== hour);
                localStorage.setItem("taskObject", JSON.stringify(events));
            }
            return;
        }

        if (task) {
            task.description = input;
        } else {
            var newTask = {
                "time": hour,
                "description": input
            };

            events.push(newTask);
        }

        localStorage.setItem("taskObject", JSON.stringify(events));
    });

    events.forEach(task => {

        $("div[data-hour=" + task.time +"]").next().val(task.description);
    });

});