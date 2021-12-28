
// alert("Footer en prueba");

posicionarMenu();
 
$(window).scroll(function() {    
    posicionarMenu();
});

function posicionarMenu() {
    var altura_del_header = $('header').outerHeight(true);
    // var altura_del_menu = $('nav').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header){
        // $('fixed')
        $('ul').addClass('fixed');
        // $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
    } else {
        // $('#nav');
        $('ul').removeClass('fixed');
        // $('.wrapper').css('margin-top', '0');
    }
}