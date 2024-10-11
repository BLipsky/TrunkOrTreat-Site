$(document).ready( () => {

    $('#section1text').hide();
    $('#section2text').hide();
    $('#section3text').hide();

    $('.section1').on('mouseover', () => {
        $('.section1').fadeOut(1000);
        $('#section1text').delay(1000).fadeIn(1500);
        $('.section2').delay(500).fadeIn(500);
        $('#section2text').fadeOut(200);
        $('.section3').delay(500).fadeIn(500);
        $('#section3text').fadeOut(200);
    });
    $('.section2').on('mouseover', () => {
        $('.section2').fadeOut(1000);
        $('#section2text').delay(1000).fadeIn(1500);
        $('.section1').delay(500).fadeIn(500);
        $('#section1text').fadeOut(200);
        $('.section3').delay(500).fadeIn(500);
        $('#section3text').fadeOut(200);
    });
    $('.section3').on('mouseover', () => {
        $('.section3').fadeOut(1000);
        $('#section3text').delay(1000).fadeIn(1500);
        $('.section1').delay(500).fadeIn(500);
        $('#section1text').fadeOut(200);
        $('.section2').delay(500).fadeIn(500);
        $('#section2text').fadeOut(200);
    });


    
});