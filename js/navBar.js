
posicionarMenu();

$(window).scroll(function() {    
    posicionarMenu();
});

function posicionarMenu() {
    var altura_del_header = $('header').outerHeight(true);
    var altura_del_menu = $('.nav').outerHeight(true);

    if ($(window).scrollTop() >= altura_del_header){
        $('.nav').addClass('fixed');
        $('.section').css('margin-top', (altura_del_menu) + 'px');
    } else {
        $('.nav').removeClass('fixed');
        $('.section').css('margin-top', '0');
    }
}
