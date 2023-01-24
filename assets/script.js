// prints to the header element the date by calling day.js and displays the month, day, year and seconds
var currentDay = function () {
  var todayHeader = dayjs();
  $('#currentDay').text(todayHeader.format('MMM D, YYYY h:mm:ss a'));
};
// interval update for seconds
setInterval(currentDay, 1000);
//uses day.js to find out the time and gives us an hour
var currentTime = parseInt(dayjs().format('H'))
let time = [9, 10, 11, 12, 13, 14, 15, 16, 17]

const containerElements = $('#container')

function workHours() {
  //for loop
  for (let i = 0; i < time.length; i++) {
    //creates a new html <div> element and sets the class to 'row'
    var row = $("<div class='row'>");
    row.attr('id', 'hour-' + [i + 9])

    var colTimer = $("<div class='col-sm-2 col-md-1 py-3 hour text-center'>")

    var dayTime = time[i] + 'AM'

    if (time[i] >= 12) {
      dayTime = time[i] + ' PM';
      if (time[i] >= 13) {
        dayTime = time[i] - 12 + ' PM';
      }
    }
    colTimer.append(dayTime)

    //var colMemo = $("<div class='col-8 col-md-10'>")

    var textArea = $("<textarea class='col-8 col-md-10 description time-block' rows='3'>")
    textArea.attr('id', 'hour-' + [i + 9])

      .append(textArea)

    //colMemo.append(textArea)

    if (currentTime > time[i]) {
      textArea.addClass('past')
    }

    if (currentTime == time[i]) {
      textArea.addClass('present')
    }

    if (currentTime < time[i]) {
      textArea.addClass('future')
    }

    let colSave = $("<div class='col 8 '>")
    let button = $("<button>")
    button.addClass("saveBtn btn fas fa-save col-sm-2 col-md-1 py-3")
    button.attr('id', 'hour-' + [i + 9])
    colSave.append(button)



    containerElements.append(row.append(colTimer, textArea, button))
  }
  $(".saveBtn").on("click", function () {
    var textPlanner = $(this).siblings("textarea").val();
    var timePlanner = $(this).parent().attr("id");
    localStorage.setItem(timePlanner, textPlanner);
  })


  // here we are getting the local storage key and value pairs and setting the value to it. 
  $("#hour-9").children("textarea").val(localStorage.getItem("hour-9"));
  $("#hour-10").children("textarea").val(localStorage.getItem("hour-10"));
  $("#hour-11").children("textarea").val(localStorage.getItem("hour-11"));
  $("#hour-12").children("textarea").val(localStorage.getItem("hour-12"));
  $("#hour-13").children("textarea").val(localStorage.getItem("hour-13"));
  $("#hour-14").children("textarea").val(localStorage.getItem("hour-14"));
  $("#hour-15").children("textarea").val(localStorage.getItem("hour-15"));
  $("#hour-16").children("textarea").val(localStorage.getItem("hour-16"));
  $("#hour-17").children("textarea").val(localStorage.getItem("hour-17"));

}

workHours()
/*$(function () {



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

*/