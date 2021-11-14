var date = document.querySelector("#currentDay"); 
var time = new Date().getHours(); 


//when planner is opened the current date is displayed
var currentDate = moment().format("dddd, LL"); 
date.append(currentDate); 

//create time blocks for standard business hours that are color coded for past, present and future. 
var statusColor = function() {
    if (now > 9) {
        $("#text9").addClass("past");
      } else if (now >= 9 && now < 10) {
        $("#text9").addClass("present");
      } else if (now < 9) {
        $("#text9").addClass("future");
      }
      if (now > 10) {
        $("#text10").addClass("past");
      } else if (now >= 10 && now < 11) {
        $("#text10").addClass("present");
      } else if (now < 10) {
        $("#text10").addClass("future");
      }
      if (now > 11) {
        $("#text11").addClass("past");
      } else if (now >= 11 && now < 12) {
        $("#text11").addClass("present");
      } else if (now < 11) {
        $("#text11").addClass("future");
      }
      if (now > 12) {
        $("#text12").addClass("past");
      } else if (now >= 12 && now < 13) {
        $("#text12").addClass("present");
      } else if (now < 12) {
        $("#text12").addClass("future");
      }
      if (now > 13) {
        $("#text01").addClass("past");
      } else if (now >= 13 && now < 14) {
        $("#text01").addClass("present");
      } else if (now < 13) {
        $("#text01").addClass("future");
      }
      if (now > 14) {
        $("#text02").addClass("past");
      } else if (now >= 14 && now < 15) {
        $("#text02").addClass("present");
      } else if (now < 14) {
        $("#text02").addClass("future");
      }
      if (now > 15) {
        $("#text03").addClass("past");
      } else if (now >= 15 && now < 16) {
        $("#text03").addClass("present");
      } else if (now < 15) {
        $("#text03").addClass("future");
      }
      if (now > 16) {
        $("#text04").addClass("past");
      } else if (now >= 16 && now < 17) {
        $("#text04").addClass("present");
      } else if (now < 16) {
        $("#text04").addClass("future");
      }
      if (now > 17) {
        $("#text05").addClass("past");
      } else if (now >= 17 && now < 18) {
        $("#text05").addClass("present");
      } else if (now < 17) {
        $("#text05").addClass("future");
      }
};
 
//create functions to save the information in LocalStorage
var nineAm = function() {
    var input = document.querySelector("#text9");
    var output = document.querySelector("#text9");
    var saveBtn = document.querySelector("#button9");
    
    output.textContent = localStorage.getItem("content");
    input.value = localStorage.getItem("content");

    function update() {
      localStorage.setItem("content", input.value);
  
      output.textContent = input.value;
    }
    saveBtn.addEventListener("click", update);
}; 

var tenAm = function() {
    var input = document.querySelector("#text10");
    var output = document.querySelector("#text10");
    var saveBtn = document.querySelector("#button10");
    
    output.textContent = localStorage.getItem("content");
    input.value = localStorage.getItem("content");

    function update() {
      localStorage.setItem("content", input.value);
  
      output.textContent = input.value;
    }
    saveBtn.addEventListener("click", update);
}; 

var nineAm = function() {
    var input = document.querySelector("#text9");
    var output = document.querySelector("#text9");
    var saveBtn = document.querySelector("#button9");
    
    output.textContent = localStorage.getItem("content");
    input.value = localStorage.getItem("content");

    function update() {
      localStorage.setItem("content", input.value);
  
      output.textContent = input.value;
    }
    saveBtn.addEventListener("click", update);
}; 