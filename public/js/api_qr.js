/* 
   Creates QR codes when called.
*/

console.log(`--------------------------------------------------------------------------------`);
console.log(`QR codes`);
console.log(`--------------------------------------------------------------------------------`);

$( document ).ready(function() {
console.log(`app.js ready!`);

/* ----- Code Start ----- */


// make an API call to QR code maker.
const formatData = (str) => {
    //remove white space
    return str.trim().replace(/" "/g,"");
};

let urlBase = "https://api.qrserver.com/v1/create-qr-code/"
let totalPixels = 200;
let qrSize = `${totalPixels}x${totalPixels}`;
let qrData = `https://linkedin.com/in/matthewcarpenter22`;
let qrCleanedData = formatData(qrData);
let qrColor = "000";
let qrBgColor = "fff";
let urlFinal = `<img src="${urlBase}?size=${qrSize}&data=${qrCleanedData}&color=${qrColor}&bgcolor=${qrBgColor}" />`;


$(".footer").append(urlFinal);

/* ------ Code End ------ */

});
console.log(`loading...`);

