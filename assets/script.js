// Present Day and Time
var todayDate = moment().formant('dddd, MMM do YYYY');
$("#currentDay").html(todayDate);

// Save Button
$(document).ready(functio()) {
    $(".saveBtn").on("click", function()) {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    }
}