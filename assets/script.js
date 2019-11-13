// *****************TODOS*********************
// make save buttons
// make save button work to save user input to local storage <--- Might have to save this for last
// color code each table row depending on if it is past, present, or future
// fix for loops that create table rows and data to make it less code

// Current day and time
var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayMoment');
 eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm a");



// *******************us this to try to compare h to i to change css******************
 var h = NowMoment.format('h');

  // ***********************Set up table data*******************

  // // 9am to 11 am
    for(var i = 9; i < 12; i++){
      var tRow = $("<tr>");
      var hours = $("<td>").text(i + ":00 am");
      var userInput = $("<td>").append("<input />");
      var save = $("<td>").append("<button />");

      tRow.append(hours, userInput, save);
      $(".table").append(tRow);

      if(i == h){
        hours.css("color", "red");
        }
    }

    // 12 pm
    var tRow = $("<tr>");
    var hours = $("<td>").text("12:00 pm");
    var userInput = $("<td>").append("<input />");
    var save = $("<td>").append("<button />");

    tRow.append(hours, userInput, save);
    $(".table").append(tRow);

    if(i == h){
      tRow.css("color", "red");
      }

    // 1pm to 5pm
    for(var i = 1; i < 6; i++){
      var tRow = $("<tr>");
      var hours = $("<td>").text(i + ":00 pm");
      var userInput = $("<td>").append("<input />");
      var save = $("<td>").append("<button />");

      tRow.append(hours, userInput, save);
      $(".table").append(tRow);

      if(i == h){
        tRow.css("color", "red");
        }

    }


  

   

   
  

  

  