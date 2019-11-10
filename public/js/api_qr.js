/* 
   Creates QR codes when called.
*/

console.log(`--------------------------------------------------------------------------------`);
console.log(`QR codes`);
console.log(`--------------------------------------------------------------------------------`);

$( document ).ready(function() {
console.log(`app.js ready!`);

/* ----- Code Start ----- */

// api credit: QR Code Generator
// https://www.qr-code-generator.com/qr-code-api/
let apiURL = "https://api.qr-code-generator.com/v1/create/"

// make an API call to QR code maker.
// $("button").click(function(){
//     $.ajax({
//         url: apiURL, 
//         method: "POST",
//         "frame_name": "no-frame",
//         "qr_code_text": "https://www.qr-code-generator.com/",
//         "image_format": "SVG"
//     }).then(data, function(){
//         // Post API call.

//         console.log(data);

//     });
// });

let dataToQR = {
    "frame_name": "no-frame",
    "qr_code_text": "https://www.qr-code-generator.com/",
    "image_format": "SVG"
}

$("button").click(function(){
    $.post(apiURL, dataToQR ,function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});



/* ------ Code End ------ */

});
console.log(`loading...`);

