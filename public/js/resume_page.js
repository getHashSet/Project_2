/* 
   this is for loading the 20 questions to build the resume.
*/

console.log(`--------------------------------------------------------------------------------`);
console.log(`questions.js loaded.`);
console.log(`--------------------------------------------------------------------------------`);

$(document).ready(function () {
    console.log(`app.js ready!`);

    /* ----- Code Start ----- */

    let myKey = "HASHKEY123"

    // test to see if we can post the object
    $(".big_red_button").click(function () {

        $.get({
            url: `/testing/${myKey}`
        }).then(function (data) {
            console.log(data);
        });
    });

    $(".save_button").click(function () {

        let updatedValue = $(".update_field").val();

        if (updatedValue.length > 64) {
            alert("that's to long.");
        } else {

            console.log("stuffs n thingz");

            $.ajax({
                method: "PUT",
                url: `/testing/123/${myKey}`,
                data: updatedValue
            }).then(function (returnValue) {

                // then nothin'

            });

        };
        //grab the change and then thing you want to change with that value.
        // oh boy there are going to be a lot of these.

    });


});
