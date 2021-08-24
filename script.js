//generate timeblock container
var tWrapper = $(".time-block-wrapper");


// Current Day is displayed at the top of the calendar
var today = moment();
$("#currentDay").text(today.format("MMM Do YY"));



//timeblocks for standard business hours

//each timeblock is color coded to indicate whether it is in the past, present, future

//clicking timeblock allows entering of an event

// save button on each timeblock

// text is saved to local storage

//on refreshed page, events persist