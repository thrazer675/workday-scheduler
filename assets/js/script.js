var today = moment().format("dddd, MMM Do YYYY");

$(window).on("load", function() {

    $("#currentDay").text(today);
})