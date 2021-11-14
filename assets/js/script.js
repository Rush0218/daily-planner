window.onload = function() {
    statusColor(); 
    nineAm(); 
    tenAm(); 
    elevenAm();
    twelvePm(); 
    onePm();
    twoPm(); 
    threePm(); 
    fourPm(); 
    fivePm();
}

var date = document.querySelector("#currentDay"); 
var time = new Date().getHours(); 


//when planner is opened the current date is displayed
var currentDate = moment().format("dddd, LL"); 
date.append(currentDate); 


//create time blocks for standard business hours that are color coded for past, present and future. 
function statusColor() {
    if (time > 9) {
        $("#text9").addClass("past");
      } else if (time >= 9 && time < 10) {
        $("#text9").addClass("present");
      } else if (time < 9) {
        $("#text9").addClass("future");
      }
      if (time > 10) {
        $("#text10").addClass("past");
      } else if (time >= 10 && time < 11) {
        $("#text10").addClass("present");
      } else if (time < 10) {
        $("#text10").addClass("future");
      }
      if (time > 11) {
        $("#text11").addClass("past");
      } else if (time >= 11 && time < 12) {
        $("#text11").addClass("present");
      } else if (time < 11) {
        $("#text11").addClass("future");
      }
      if (time > 12) {
        $("#text12").addClass("past");
      } else if (time >= 12 && time < 13) {
        $("#text12").addClass("present");
      } else if (time < 12) {
        $("#text12").addClass("future");
      }
      if (time > 13) {
        $("#text01").addClass("past");
      } else if (time >= 13 && time < 14) {
        $("#text01").addClass("present");
      } else if (time < 13) {
        $("#text01").addClass("future");
      }
      if (time > 14) {
        $("#text02").addClass("past");
      } else if (time >= 14 && time < 15) {
        $("#text02").addClass("present");
      } else if (time < 14) {
        $("#text02").addClass("future");
      }
      if (time > 15) {
        $("#text03").addClass("past");
      } else if (time >= 15 && time < 16) {
        $("#text03").addClass("present");
      } else if (time < 15) {
        $("#text03").addClass("future");
      }
      if (time > 16) {
        $("#text04").addClass("past");
      } else if (time >= 16 && time < 17) {
        $("#text04").addClass("present");
      } else if (time < 16) {
        $("#text04").addClass("future");
      }
      if (time > 17) {
        $("#text05").addClass("past");
      } else if (time >= 17 && time < 18) {
        $("#text05").addClass("present");
      } else if (time < 17) {
        $("#text05").addClass("future");
      }
};
 
//create functions to save the information in LocalStorage
var nineAm = function() {
    var input = document.querySelector("#text9");
    var output = document.querySelector("#text9");
    var saveBtn = document.querySelector("#button9");

    function update9() {
      localStorage.setItem("content9", input.value);
      output.textContent = input.value;
    }

    saveBtn.addEventListener("click", update9);
    output.textContent = localStorage.getItem("content9");
    input.value = localStorage.getItem("content9");
}; 

var tenAm = function() {
    var input = document.querySelector("#text10");
    var output = document.querySelector("#text10");
    var saveBtn = document.querySelector("#button10");

    function update10() {
        localStorage.setItem("content10", input.value);
        output.textContent = input.value;
    }
    
    saveBtn.addEventListener("click", update10);
    output.textContent = localStorage.getItem("content10");
    input.value = localStorage.getItem("content10");
}; 

var elevenAm = function() {
    var input = document.querySelector("#text11");
    var output = document.querySelector("#text11");
    var saveBtn = document.querySelector("#button11");

    function update11() {
        localStorage.setItem("content11", input.value);
        output.textContent = input.value;
    }
    
    saveBtn.addEventListener("click", update11);
    output.textContent = localStorage.getItem("content11");
    input.value = localStorage.getItem("content11");
}; 

var twelvePm = function() {
    var input = document.querySelector("#text12");
    var output = document.querySelector("#text12");
    var saveBtn = document.querySelector("#button12");

    function update12() {
        localStorage.setItem("content12", input.value);
        output.textContent = input.value;
    }

    saveBtn.addEventListener("click", update12);
    output.textContent = localStorage.getItem("content12");
    input.value = localStorage.getItem("content12");
}; 

var onePm = function() {
    var input = document.querySelector("#text01");
    var output = document.querySelector("#text01");
    var saveBtn = document.querySelector("#button01");

    function update1() {
        localStorage.setItem("content01", input.value);
        output.textContent = input.value;
    }

    saveBtn.addEventListener("click", update1);
    output.textContent = localStorage.getItem("content01");
    input.value = localStorage.getItem("content01");
}; 

var twoPm = function() {
    var input = document.querySelector("#text02");
    var output = document.querySelector("#text02");
    var saveBtn = document.querySelector("#button02");
    
    function update2() {
        localStorage.setItem("content02", input.value);
        output.textContent = input.value;
    }

    saveBtn.addEventListener("click", update2);
    output.textContent = localStorage.getItem("content02");
    input.value = localStorage.getItem("content02");
}; 

var threePm = function() {
    var input = document.querySelector("#text03");
    var output = document.querySelector("#text03");
    var saveBtn = document.querySelector("#button03");

    function update3() {
        localStorage.setItem("content03", input.value);
        output.textContent = input.value;
    }

    saveBtn.addEventListener("click", update3);
    output.textContent = localStorage.getItem("content03");
    input.value = localStorage.getItem("content03");
}; 

var fourPm = function() {
    var input = document.querySelector("#text04");
    var output = document.querySelector("#text04");
    var saveBtn = document.querySelector("#button04");

    function update4() {
        localStorage.setItem("content04", input.value);
        output.textContent = input.value;
    }

    saveBtn.addEventListener("click", update4);
    output.textContent = localStorage.getItem("content04");
    input.value = localStorage.getItem("content04");
}; 

var fivePm = function() {
    var input = document.querySelector("#text05");
    var output = document.querySelector("#text05");
    var saveBtn = document.querySelector("#button05");

    function update5() {
        localStorage.setItem("content05", input.value);
        output.textContent = input.value;
    }

    saveBtn.addEventListener("click", update5);
    output.textContent = localStorage.getItem("content05");
    input.value = localStorage.getItem("content05");
}; 