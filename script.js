//initialize

//handle elements
var tWrapper = $(".time-block-wrapper");
var timeSlot = $(".planner");
var taskSlot = $(".task");
var nowMil = moment(today).format("HH");

// Current Day is displayed at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("MMM Do YYYY"));

//array of save buttons
/* var saveArr = [];
$(".saveBtn").each(function(){
    var saveBtn = $(this).attr("id");
    saveArr.push(saveBtn);
})

//array of input fields
var inputArr = [];
$(".task").each(function(){
    var taskText = $(this).val();
    inputArr.push(taskText);
})
*/

//set local storage values
$(".task-0").val(localStorage.task0)
$(".task-1").val(localStorage.task1)
$(".task-2").val(localStorage.task2)
$(".task-3").val(localStorage.task3)
$(".task-4").val(localStorage.task4)
$(".task-5").val(localStorage.task5)
$(".task-6").val(localStorage.task6)
$(".task-7").val(localStorage.task7)
$(".task-8").val(localStorage.task8)


//save input values
$("#save-0").on("click", function() {
    localStorage.task0 = $(".task-0").val()
})

$("#save-1").on("click", function() {
    localStorage.task1 = $(".task-1").val()
})

$("#save-2").on("click", function() {
    localStorage.task2 = $(".task-2").val()
})

$("#save-3").on("click", function() {
    localStorage.task3 = $(".task-3").val()
})

$("#save-4").on("click", function() {
    localStorage.task4 = $(".task-4").val()
})

$("#save-5").on("click", function() {
    localStorage.task5 = $(".task-5").val()
})

$("#save-6").on("click", function() {
    localStorage.task6 = $(".task-6").val()
})

$("#save-7").on("click", function() {
    localStorage.task7 = $(".task-7").val()
})

$("#save-8").on("click", function() {
    localStorage.task8 = $(".task-8").val()
})

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