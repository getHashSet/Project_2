/* 
   this is for loading the 20 questions to build the resume.
*/

console.log(`--------------------------------------------------------------------------------`);
console.log(`questions.js loaded.`);
console.log(`--------------------------------------------------------------------------------`);

$( document ).ready(function() {
console.log(`app.js ready!`);

    /* ----- Code Start ----- */

    let myKey = "HASHKEY123"

    // test to see if we can post the object
    $(".big_red_button").click(function() {

        $.get({
            url: `/testing/${myKey}`
        }).then(function(data){
            console.log(data);
        });
    });

    $(".save_button").click(function() {

        let updatedValue = $(".update_field").val();

        if (updatedValue.length > 64){
            alert("that's to long.");
        } else {
            
            console.log("stuffs n thingz");

            $.ajax({
                method: "PUT",
                url: `/testing/123/${myKey}`,
                data: updatedValue
            }).then(function(returnValue){

                // then nothin'

            });

        };
        //grab the change and then thing you want to change with that value.
        // oh boy there are going to be a lot of these.

    });

    $(`.email`).click(function(event){
        event.preventDefault();
        let email = '';
        let subject = `myResume_2019`;
        let emailBody = '[see attached file]';
        window.location = 'mailto:'+ email + '?subject=' + subject + '&body=' +   emailBody;;
    });


    $("#card").click(function(){
        $("#resume").css("display", "none");
        $("#business_card").css("display", "flex");
    });

    $("#back_to_resume").click(function(){
        $("#resume").css("display", "flex");
        $("#business_card").css("display", "none");
    });

    $("#qr_code").click(function(){
        let qr_new = prompt("What do you want the QR to link to?", "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://linkedin.com/in/matthewcarpenter22");
        console.log(qr_new);
        $("#qr_code").attr("src", `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${qr_new}`);
    });

});
