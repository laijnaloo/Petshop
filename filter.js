/**
 * Created by Lina Andersson on 2017-03-30.
 */

/* Creates and changes the look of the price slider original code from: https://jqueryui.com/slider/#range */
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 15000,
        values: [ 75, 5000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ]+" KR" );
        }
    });
    $( "#amount" ).val($( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) +" KR" );
} );


/*Change look of scrollbar */

$( document ).ready(function() {


    $('.filterOptionContainerScroll').jScrollPane();
    loop();

    createAnimalFrames();

    addScrollDownListener();

});
