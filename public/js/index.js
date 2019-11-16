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
  event.preventDefault();
  // console.log("resume");
  userLogins.user_email = $("#user").val();
  userLogins.password = $("#passwd").val();
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
