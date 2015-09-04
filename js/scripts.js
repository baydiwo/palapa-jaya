$(document).ready(function() {

    $("#toslide-1").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    $("#toslide-2").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#slide-2").offset().top
        }, 1000);
    });
    $("#toslide-3").click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#slide-3").offset().top
        }, 1000);
    });
    $("#toslide-4").click(function(event) {
        event.preventDefault();
        winHeight = $(window).height()*2;
        docHeight = $(document).height();
        pos = docHeight - winHeight;
        $('html, body').animate({
            scrollTop: pos
        }, 1000);
    });
    $("#toslide-5").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    });

    //navigation css change after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 630) {
            $("nav").css({position: "fixed", top: "50px"})
        } else {
            $("nav").css({position: "absolute", top: "100%"})
        }
    });
});