//import { getHeapSpaceStatistics } from "v8";

/* eslint-disable camelcase */
// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");
var $questionBtn = $(".question-btn");
var $resumeBtn = $("#resume-btn");
var $homeBtn = $(".home-btn");
var $saveBtn = $("#save");
const userLogins = {};
// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// refreshExamples gets new examples from the db and repopulates the list

// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list

// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

var questionsBtnClick = function() {
  event.preventDefault();
  // console.log("questions");
  window.location = "/question";
  userLogins.user_email = $("#user").val();
  userLogins.password = $("#passwd").val();
  console.log(userLogins);
  $.ajax({
    url: "/user_login",
    method: "POST",
    data: userLogins
  }).then(function(data) {
    window.location = "/question";
  });
};

var resumeBtnClick = function() {
  console.log("LogIn clicked.");
  event.preventDefault();
  // console.log("resume");
  userLogins.user_email = $("#user").val();
  userLogins.password = $("#passwd").val();

  console.log(userLogins.user_email)
  // this call is not returning correctly.

  if (userLogins.user_email.length < 4) {

    console.log("You must enter information first.");
  
  } else {
    //post call is not working. launching to resume for demo day.
    window.location = "/resume";

  }

  $.ajax({
    url: "/protected",
    method: "POST",
    data: userLogins
  }).then(function(data) {
    window.location = "/resume";
    // res.json(data);
    console.log("we work");
  });
};

var homeBtnClick = function() {
  event.preventDefault();
  // console.log("resume");
  window.location = "/";
};

function saveBtnClick() {
  console.log("saved!");
  var doc = new jsPDF();

  var specialElementHandlers = {
    "#editor": function(element, renderer) {
      return true;
    }
  };

  $("#save").click(function() {
    doc.fromHTML($("#content").html(), 15, 15, {
      width: 170,
      elementHandlers: specialElementHandlers
    });
    doc.save("sample-file.pdf");
  });
}

// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
$questionBtn.on("click", questionsBtnClick);
$resumeBtn.on("click", resumeBtnClick);
$homeBtn.on("click", homeBtnClick);
$saveBtn.on("click", saveBtnClick);

$(document).ready(function(){

  // get all the objects we will be moving.
  let nextKeyWord = $("#next");
  let step_s = $("#step_s");
  let step_t = $("#step_t");
  let step_e = $("#step_e");
  let step_p = $("#step_p");
  let resume_r = $("#resume_r");
  let resume_e1 = $("#resume_e1");
  let resume_s = $("#resume_s");
  let resume_u = $("#resume_u");
  let resume_m = $("#resume_m");
  let resume_e2 = $("#resume_e2");

  let start_btn = $("#start_button");
  let about_btn = $("#about_button");

  const tl = gsap.timeline();

  tl.to(nextKeyWord, {duration: 1, x: 0, opacity: 1}, 1);

  tl.to(step_s, {duration: 1, x:0,  y: 0, opacity: 1}, 1);
  tl.to(step_t, {duration: 1, x:0, y:0, opacity: 1}, 1);
  tl.to(step_e, {duration: 1, x:0, y:0, opacity: 1}, 1);
  tl.to(step_p, {duration: 1, x:0, y:0, opacity: 1}, 1);
  tl.to(resume_r, {duration: 1, x:0, y:0, opacity: 1}, 1);
  tl.to(resume_e1, {duration: 1, x:0, y:0, opacity: 1}, 1);
  tl.to(resume_s, {duration: 1, x:0, y:0, opacity: 1}, 1);
  tl.to(resume_u, {duration: 1, x:0, y:0, opacity: 1}, 1);
  tl.to(resume_m, {duration: 1, x:0, y:0, opacity: 1}, 1);
  tl.to(resume_e2, {duration: 1, x:0, y:0, opacity: 1}, 1);

  tl.to(start_btn, {duration: .5, x:0, y:0, opacity: 1}, 2);
  //tl.to(about_btn, {duration: .5, x:0, y:0, opacity: 1}, 2.5);



  start_btn.click(function(){
    let log_in_menu = $("#log_in_menu");

    $("#start_menu").attr("style", "display: none");
    $("#log_in_menu").attr("style", "display: flex");
    tl.to($("#log_in_menu"), {duration: .3, opacity: 1});
    // tl.to($("#start_menu"), {duration: 1, opacity: 0}, .1);

  });

});
