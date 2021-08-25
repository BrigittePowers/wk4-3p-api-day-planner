//handle elements
var tWrapper = $(".time-block-wrapper");
var timeSlot = $(".planner");
var taskSlot = $(".task");
var nowMil = moment(today).format("HH");

// Current Day is displayed at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("MMM Do YYYY"));

//each timeblock is color coded to indicate whether it is in the past, present, future
function checkTime() {
    // military time for current hour
    
    //for each timeslot available
    for (i=0; i < timeSlot.length; i++) {
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

//clicking timeblock allows entering of an event

// save button on each timeblock

// text is saved to local storage

//on refreshed page, events persist