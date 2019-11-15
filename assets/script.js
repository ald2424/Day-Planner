// *****************TODOS*********************
// Color code
// Fix buttons to only affect their sibling input field

// Current day and time
var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayMoment');
 eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm a");



// *******************us this to try to compare h to i to change css******************
 var h = NowMoment.format('h');

  // ***********************Set up table data*******************
  var hours;
  var userInput;
  var save;
var index = 1;
var times = ["9:00am", "10:00am","11:00am", "12:00pm","1:00pm","2:00pm", "3:00pm", "4:00pm", "5:00pm"];

// Creates table rows for each hour
for(var i = 0; i < times.length; i++){
  var tRow = $("<tr class='tRowClass'>");
  hours = $("<td>").text(times[i]);
  userInput = $("<td>").append("<input class='userInput'>");
  save = $("<td>").append("<button class='btnClass'>" + "Save" + "</>");

  tRow.append(hours, userInput, save);
    $(".table").append(tRow);

    

// Checks if the hour is one digit. If so, if the hour is current the font changes
    if(times[i].charAt(1) == ":"){
    
      if (times[i].charAt(0) == h){ 
         tRow.addClass("present");         
      }
    }
  // else if the number is two digits, this code pulls the first two digits (first to chars) and changes the font of what matches the current time
    else{
      var x = times[i].slice(0,2);
       if(x == h){
          tRow.addClass("present");          
        }
      }
    
  }
  renderSavedData();
// saves and returns user input as local storage
  function renderSavedData(){
      var input = localStorage.getItem("x");

      if (input === null) {
        return;
      }

      $(".userInput").replaceWith("<div>" + input + "</div>");

     
  }

  $(".btnClass").on("click", function(event){
      event.preventDefault();
      var x = $(".userInput").val();
      localStorage.setItem("x", x);
      
       renderSavedData();
      
  })

   

   
  

  

  