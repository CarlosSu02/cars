
positionBarNav();

$(window).scroll(function() {    
  positionBarNav();
});

function positionBarNav() {
  
  var heightHeader = $("header").outerHeight(true);
  var heightNav = $(".nav").outerHeight(true);

  if($(window).scrollTop() >= heightHeader){
    
    $(".nav").addClass("fixed");
    $(".section").css("margin-top", (heightNav) + "px");
  
  }else {
  
    $(".nav").removeClass("fixed");
    $(".section").css("margin-top", "0");
  
  }

}
