
$(function() {
    // esta parte es la que controla cuando se mueve el scroll y ejecuta una función
    $(document).scroll(function() {
      // aca se pregunta si el scroll se movio de pa bajo.
      if ($(this).scrollTop() > 1) {
        // esta parte cambia el atributo "src" de la etiqueta "img" 
        $('.titlelImg').attr('src', 'public/img/IMG_1805.jpg');
        // document.getElementById("img0").src = "public/img/IMG_1805.jpg";
      }
      if ($(this).scrollTop() < 1) {
        $('.titleImg').attr('src', 'css/const2.jpg');
      }
    });
  });


function title1(click){

    alert((click.id).toString());
}
