// Current Day is displayed at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("MMM Do YYYY"));

//get local storage values
$(".task").each(function() {
    var storeName = $(this).attr("id");
    $(this).val(localStorage.getItem(storeName));
})

//set local storage values on save
$(".saveBtn").each(function() {
    $(this).on("click", function() {
        var value = $(this).siblings("input").val();
        var storeName = $(this).prev().attr("id");
        localStorage.setItem(storeName, value);
    })
})

//each timeblock is color coded to indicate whether it is in the past, present, future
function checkTime() {
    var timeSlot = $(".planner");
    //for each timeslot available
    for (i=0; i < timeSlot.length; i++) {
        //military time for current hour
        var nowMil = moment(today).format("HH");
        var taskSlot = $(".task");
        //Mark Past Gray
        if (nowMil > parseInt(timeSlot[i].dataset.hour)) {
            $(taskSlot[i]).addClass("past");
        //Mark Future Green
        } else if (nowMil < parseInt(timeSlot[i].dataset.hour)) {
            $(taskSlot[i]).addClass("future")
        //Mark Present Red
        } else if (nowMil == parseInt(timeSlot[i].dataset.hour)) {
            $(taskSlot[i]).addClass("present")
        }
    }
}

checkTime();