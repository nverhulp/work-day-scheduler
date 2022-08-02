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

    function timeTracker() {
        var timeNow = moment().hour();

        $(".time-blcok").each(function()) {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        }
    }
}