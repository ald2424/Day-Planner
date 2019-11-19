// *****************TODOS*********************
// Figure out why 9am is showing as a future time
// Find a to connect button in table row to the user input field

// Current day and time
var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayMoment');
 eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm a");



// This variable compares the current hour to the hour within the times array
 var h = NowMoment.format('HH');


  // ***********************Set up table data*******************
  var hours;
  
var times = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

// Creates table rows for each hour
for(var i = 0; i < times.length; i++){
  var tRow = $("<tr class='tRowClass'>");
  
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
  var x = times[i] - 12;
  hours = $("<td>").text(x + ":00");

}



  var form = $("<td>").append(
    
 $("<textarea/>", {
    type: 'text',
    name: 'userInput',
    id: times[i],
    placeholder: 'Text Goes Here'
    }), $("<input/>", {
    type: 'submit',
    id: times[i],
    onClick: 'submitInput()',
    value: 'Submit',
    addClass: 'saveBtn'
    }))
  
  
  // appends hours, inputfield, and save button to table row
  tRow.append(hours, form);
    $(".table").append(tRow);

  
    
  }

  // ******************************** Code for saving user input to local storage on button click...... doesn"t work properly!!!!*********
 
 
 
 
 
  renderSavedData();
// saves and returns user input as local storage
  function renderSavedData(){
      var input = localStorage.getItem("x");

      console.log(input);

      if (input === null) {
        return;
      }

      $("#09").replaceWith("<div>" + input + "</div>");

     
  }
 
  function submitInput(){
      
    var x = $("#09").val();
            localStorage.setItem("x", x);
            
             renderSavedData();
  }

  

   

   
  

  

  