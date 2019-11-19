
$(document).ready(function () {

    const tl = gsap.timeline();

    tl.from( $("#please_no"), { duration: 1, y: -400, opacity: 0 }, 1);
    tl.from( $("#green_sock"), { duration: 1, x: -400, opacity: 0 }, 2);
    tl.from( $("#scss"), { duration: .9, x: -300, opacity: 0 }, 2);
    tl.from( $("#prepros"), { duration: .9, x: 300, opacity: 0 }, 2);
    tl.from( $("#heroku"), { duration: 1, x: 400, opacity: 0 }, 2);
    tl.from( $("#sup"), { duration: 1.2, y: 400, opacity: 0 }, 2);


    tl.to(start_btn, { duration: .5, x: 0, y: 0, opacity: 1 }, 2);
    //tl.to(about_btn, {duration: .5, x:0, y:0, opacity: 1}, 2.5);


});
