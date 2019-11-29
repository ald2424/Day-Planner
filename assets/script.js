// *****************TODOS*********************
// Figure out why 9am is showing as a future time
// Find a to connect button in table row to the user input field

// Current day and time
var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayMoment');
 eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm a");

renderTasks();

// This variable compares the current hour to the hour within the times array
 var h = NowMoment.format('HH');


  // ***********************Set up table data*******************
  var hours;
  
  
var times = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var form;
var x;
var tRow;
// Creates table rows for each hour
for(var i = 0; i < times.length; i++){
  tRow = $("<tr class='tRowClass'>");
  
  // Adding CSS based on current time
  if(times[i] == h){
    tRow.addClass("present");
  }
  else if(times[i] > h){
    tRow.addClass("future");
  }
  else{
    tRow.addClass("past");
  }
  

  // Converting military time to standard time
if(times[i] <= 12){
  hours = $("<td>").text(times[i] + ":00");
}
else{
  x = times[i] - 12;
  hours = $("<td>").text(x + ":00");

}



  form = $("<td>").append(
    
 $("<textarea/>", {
    type: 'text',
    name: 'userInput',
    id: 'input' + times[i],
    class:'textArea'
    // placeholder: 'Text Goes Here'
    }), $("<input/>", {
    type: 'submit',
    id: times[i],
    value: 'Submit',
    addClass: 'saveBtn'
    }))
  
  
  // appends hours, inputfield, and save button to table row
  tRow.append(hours, form);
    $(".table").append(tRow);

  
    
  }

  // ******************************** Code for saving user input to local storage on button click...... doesn"t work properly!!!!*********
 var task09;
 var task10;
 var task11;
 var task12;
 var task13;
 var task14;
 var task15;
 var task16;
 var task17;

//  Finds an input field with an id number the same as the button id, 
// checks to see if text was entered, if so, it saves to local storage

  $( ".saveBtn" ).click(function() {
      var btn = $(this).attr("id");
      if(btn == 09){
        task09 = $("#input09").val().trim();
        if(task09.length != 0){
        localStorage.setItem('task9a', task09);
        }
      }
      if(btn == 10){
        task10 = $("#input10").val().trim();
        if(task10.length != 0){
        localStorage.setItem('task10a', task10);
        }
      }
      if(btn == 11){
        task11 = $("#input11").val().trim();
        if(task11.length != 0){
        localStorage.setItem('task11a', task11);
        }
      }
      if(btn == 12){
        task12 = $("#input12").val().trim();
        if(tas12.length != 0){
        localStorage.setItem('task12p', task12);
        }
      }
      if(btn == 13){
        task13 = $("#input13").val().trim();
        if(task13.length != 0){
        localStorage.setItem('task13', task13);
        }
      }
      if(btn == 14){
        task14 = $("#input14").val().trim();
        if(task14.length != 0){
        localStorage.setItem('task14', task014);
        }
      }
      if(btn == 15){
        task15 = $("#input15").val().trim();
        if(task15.length != 0){
        localStorage.setItem('task15', task15);
        }
      }
      if(btn == 16){
        task16 = $("#input16").val().trim();
        if(task16.length != 0){
        localStorage.setItem('task16', task16);
        }
      }
      if(btn == 17){
        task17 = $("#input17").val().trim();
        if(task17.length != 0){
        localStorage.setItem('task17', task17);
        }
      }
      renderTasks();
  })
  

function renderTasks(){
var storedTask09 = localStorage.getItem('task9a');
$("#input09").text(storedTask09);

console.log(storedTask09);
}
   

   
  

  

  