// *****************TODOS*********************
// Figure out why 9am is showing as a future time
// Find a to connect button in table row to the user input field

// Current day and time
var NowMoment = moment();
var eDisplayMoment = document.getElementById('displayMoment');
 eDisplayMoment.innerHTML = NowMoment.format("dddd, MMMM Do YYYY, h:mm a");



// This variable compares the current hour to the hour within the times array
 var h = NowMoment.format('H');

  // ***********************Set up table data*******************
  var hours;
  var userInput;
  var save;
var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
var inputArr = [];

// Creates table rows for each hour
for(var i = 0; i < times.length; i++){
  var tRow = $("<tr class='tRowClass'>");
  
  // Adding CSS based on current time
  if(times[i] == h){
    tRow.addClass("present");
  }
  else if(times[i] < h){
    tRow.addClass("past");
  }
  else{
    tRow.addClass("future");
  }
  

  // Converting military time to standard time
if(times[i] <= 12){
  hours = $("<td>").text(times[i] + ":00");
}
else{
  var x = times[i] - 12;
  hours = $("<td>").text(x + ":00");

}


  // Creates input field for middle row
    //  adding data-index that will match button's data-index
  // var input = $("<input class='userInput'>");
  // input.attr("data-index", times[i]);
  // inputArr.push(input.attr("data-index"));
  // console.log(inputArr[i]);
  // userInput = $("<td>").append(input);
  
  // // Creates save button for last row that has the same data-index has input field
  // var saveInput = $("<button class='btnClass'>" + "Save" + "</>")
  // saveInput.attr("data-index", times[i]);
 
  // save = $("<td>").append(saveInput);


  var form = $("<td>").append(
    
 $("<textarea/>", {
    type: 'text',
    id: 'inputField',
    name: 'userInput',
    placeholder: 'Text Goes Here'
    }), $("<input/>", {
    type: 'submit',
    id: 'submit',
    onClick: 'submitInput()',
    value: 'Submit'
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

      $("#inputField").replaceWith("<div>" + input + "</div>");

     
  }

  function submitInput(){
    var x = $("#inputField").val();
            localStorage.setItem("x", x);
            
             renderSavedData();
  }

  // $(".btnClass").on("click", function(event){
  //   // var input = $(".userInput").attr("data-index");
  //   var saveButton = $(this).attr("data-index");
  //   // console.log(saveButton);
  //   for(var i = 0; i < inputArr.length; i++){
  //     if (saveButton == inputArr[i]){
  //       event.preventDefault();
  //         var x = $(".userInput").val();
  //         localStorage.setItem("x", x);
          
  //          renderSavedData();

  //     }
    // }
    // console.log(test);
    // if (input == saveButton){
    //   event.preventDefault();
    //   var x = $(".userInput").val();
    //   localStorage.setItem("x", x);
      
    //    renderSavedData();
    // }
      
  // })

   

   
  

  

  