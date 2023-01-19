// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let time = [9, 10, 11, 12, 13, 14, 15, 16, 17]

const containerElements = ('#container')

function workHours() {
  //for loop
  for (let i = 0; i < time.length; i++) {
    let row = $("<div class='row'>");
  }
}

$(function () {



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  //
  // TODO: Add code to display the current date in the header of the page.
  // the save button will now save the textarea to the local storage
  $(".saveBtn").on("click", function () {
    var eventText = $(this).siblings("textarea").val();
    var timeBlock = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, eventText);
  })


  // setting value to the local storage 
  $("#hour-9").children("textarea").val(localStorage.getItem("hour-9"));
  $("#hour-10").children("textarea").val(localStorage.getItem("hour-10"));
  $("#hour-11").children("textarea").val(localStorage.getItem("hour-11"));
  $("#hour-12").children("textarea").val(localStorage.getItem("hour-12"));
  $("#hour-13").children("textarea").val(localStorage.getItem("hour-13"));
  $("#hour-14").children("textarea").val(localStorage.getItem("hour-14"));
  $("#hour-15").children("textarea").val(localStorage.getItem("hour-15"));
  $("#hour-16").children("textarea").val(localStorage.getItem("hour-16"));
  $("#hour-17").children("textarea").val(localStorage.getItem("hour-17"));

});
