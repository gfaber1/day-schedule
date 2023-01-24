// prints to the header element the date by calling day.js and displays the month, day, year and seconds
var currentDay = function () {
  var todayHeader = dayjs();
  $('#currentDay').text(todayHeader.format('MMM D, YYYY h:mm:ss a'));
};

// interval update for seconds
setInterval(currentDay, 1000);

//uses day.js to find out the time and gives us an hour
var currentTime = parseInt(dayjs().format('H'))

//an array for the hours from 9-5
let time = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//this const is selecting the html div element that will hold the dynamically rendered code
const containerElements = $('#container')

function workHours() {
  //for loop
  for (let i = 0; i < time.length; i++) {
    //creates a new html div element and sets the class to row
    var row = $("<div class='row'>");
    row.attr('id', 'hour-' + [i + 9])

    // creates a div element to hold the time of day
    colTimer = $("<div class='col-sm-2 col-md-1 py-3 hour text-center'>")

    var dayTime = time[i] + 'AM'

    if (time[i] >= 12) {
      dayTime = time[i] + ' PM';
      if (time[i] >= 13) {
        dayTime = time[i] - 12 + ' PM';
      }
    }
    colTimer.append(dayTime)

    // creates a textarea for the user to type in their TODO
    var textArea = $("<textarea class='col-8 col-md-10 description time-block' rows='3'>")
    textArea.attr('id', 'hour-' + [i + 9])

      .append(textArea)

    // if statements to read the time of day and change the class of the html elements so that the css can interact with it properly
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

    // appends all of the elements to the page inside of the container
    containerElements.append(row.append(colTimer, textArea, button))
  }

  // event listener for a click on the button, when clicked it will save the textarea contents to the local storage 
  $(".saveBtn").on("click", function () {
    var textPlanner = $(this).siblings("textarea").val();
    var timePlanner = $(this).parent().attr("id");
    localStorage.setItem(timePlanner, textPlanner);
  })


  // here the code gets the value of the text area from the local storage
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

//calls the function
workHours()