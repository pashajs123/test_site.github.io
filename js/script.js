//var button = document.getElementById("button")
//button.onclick = function () {
//    document.getElementById("menu").classList.add("open_menu")
//    document.getElementById("main_text").classList.add("main_text_pos")
//    document.getElementById("overlay").classList.add("overlay_pos")
//    document.getElementById("body").classList.add("body_overflow")
//}
//let button_close = document.getElementById("close")
//button_close.onclick = function () {
//    document.getElementById("menu").classList.remove("open_menu")
//    document.getElementById("main_text").classList.remove("main_text_pos")
//    document.getElementById("overlay").classList.remove("overlay_pos")
//    document.getElementById("body").classList.remove("body_overflow")
//}
//let overlay = document.getElementById('overlay')
//overlay.onclick = function () {
//        document.getElementById("menu").classList.remove("open_menu")
//        document.getElementById("main_text").classList.remove("main_text_pos")
//        document.getElementById("overlay").classList.remove("overlay_pos")
//        document.getElementById("body").classList.remove("body_overflow")
//    }



$(document).ready(function () {
    $("a[href*=#]").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        e.preventDefault();
        return false;
    });
});



var one = document.getElementById("one_link")
one.onclick = function () {
    document.getElementById("one_link").classList.add('active')
    document.getElementById("two_link").classList.remove('active')
    document.getElementById("three_link").classList.remove('active')
    document.getElementById("four_link").classList.remove('active')
}
var one = document.getElementById("two_link")
one.onclick = function () {
    document.getElementById("two_link").classList.add('active')
    document.getElementById("one_link").classList.remove('active')
    document.getElementById("three_link").classList.remove('active')
    document.getElementById("four_link").classList.remove('active')
}
var one = document.getElementById("three_link")
one.onclick = function () {
    document.getElementById("three_link").classList.add('active')
    document.getElementById("two_link").classList.remove('active')
    document.getElementById("one_link").classList.remove('active')
    document.getElementById("four_link").classList.remove('active')
}
var one = document.getElementById("four_link")
one.onclick = function () {
    document.getElementById("four_link").classList.add('active')
     document.getElementById("two_link").classList.remove('active')
       document.getElementById("three_link").classList.remove('active')
       document.getElementById("one_link").classList.remove('active')
}
