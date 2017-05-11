/**
 * Created by Lina Andersson on 2017-03-31.
 */

//animation for the down arrow on the start side. Moves up and down 20px in 1 sec intervals
function loop() {
    $('#dvisa').animate({'top': '20'}, {
        duration: 1000,
        complete: function() {
            $('#dvisa').animate({top: 0}, {
                duration: 1000,
                complete: loop});
        }});
}

function addScrollDownListener() {
    $("#downArrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#buyContent").offset().top
        }, 2000);
    });
}