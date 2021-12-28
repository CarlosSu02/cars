
// alert("Footer en prueba");

posicionarMenu();
 
$(window).scroll(function() {    
    posicionarMenu();
});

function posicionarMenu() {
    var altura_del_header = $('header').outerHeight(true);
    // var altura_del_menu = $('nav').outerHeight(true);

    alert("As");

    if ($(window).scrollTop() >= altura_del_header){
        // $('fixed')
        $('.bar').addClass('fixed');
        // $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
        // $('#nav');
        $('.bar').removeClass('fixed');
        // $('.wrapper').css('margin-top', '0');
    }
}