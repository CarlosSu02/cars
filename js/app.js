
var cars = new Array( 
  {image: "./img/cars/tarago1990.jpg", mark: "Toyota", model: "Tarago", year: "1990", version: "Microbus", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://en.wikipedia.org/wiki/Toyota_Tarago"},
  {image: "./img/cars/hiacePanelND.jpg", mark: "Toyota", model: "Hiace", year: "N/D", version: "Panel", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.pinterest.com/pin/567031409313766859/"},
  {image: "./img/cars/22r1988.jpg", mark: "Toyota", model: "22r", year: "1988", version: "Sencillo", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.pinterest.com/pin/373798837801257504/"},
  {image: "./img/cars/22r19882.jpg", mark: "Toyota", model: "22r", year: "1988", version: "Sencillo", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.pinterest.com/pin/630222541580944947/"},
  {image: "./img/cars/corolla1990.jpg", mark: "Toyota", model: "Corolla", year: "1990", version: "Normal", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.pinterest.com/pin/761389880743750572/"},
  {image: "./img/cars/tercel1996.jpg", mark: "Toyota", model: "Tercel", year: "1996", version: "Cabina Sencilla", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://twitter.com/ToyotaCR/status/1112788502347804673"},
  {image: "./img/cars/corolla1993.webp", mark: "Toyota", model: "Corolla", year: "1993", version: "Normal", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.carrosenventasv.com/vendo-toyota-corolla-ano-95-estandar-13/"},
  {image: "./img/cars/ranger2000.png", mark: "Ford", model: "Ranger", year: "2000", version: "Cabina y Media Paila Ranchera", iconMark:"./img/iconCars/Ford 512px.png", linkImage:"https://www.walserhyundai.com/es/inventory/used-2000-ford-ranger-supercab-4wd-manua-4wd-extended-cab-pickup-1ftzr15v5ypc06229"},
  {image: "./img/cars/cheyenne19952.jpg", mark: "Chevrolet", model: "Cheyenne", year: "1995", version: "Cabina y Media", iconMark:"./img/iconCars/Chevrolet 512px.png", linkImage:"https://articulo.mercadolibre.com.mx/MLM-681011092-95-98-chevrolet-cheyenne-manija-interior-derecha-color-tinto-_JM"}, 
  {image: "./img/cars/montero19892.jpg", mark: "Mitsubichi", model: "Montero", year: "1989", version: "2 puertas", iconMark:"./img/iconCars/Mitsubishi 512px.png", linkImage:"https://www.rellasamortiser.gr/assets/uploads/presta/c/269-large_default.jpg"}, 
  {image: "./img/cars/ffocus2005.jpg", mark: "Ford", model: "Focus", year: "2005", version: "Normal", iconMark:"./img/iconCars/Ford 512px.png", linkImage:"http://masbukti.com/ford/ford-focus/2005-ford-focus/13"}, 
  {image: "./img/cars/sportage20002.2.jpg", mark: "Kia", model: "Sportage", year: "2000", version: "Normal", iconMark:"./img/iconCars/Kia 512px.png", linkImage:"https://www.pinterest.com.mx/pin/653725702145152023/"}, 
  {image: "./img/cars/sportage2000.jpg", mark: "Kia", model: "Sportage", year: "2000", version: "Normal", iconMark:"./img/iconCars/Kia 512px.png", linkImage:"https://bestkiasportagereview.blogspot.com/2019/03/kia-sportage-2000-modificada.html"}, 
  {image: "./img/cars/rav41999.jpg", mark: "Toyota", model: "Rav4", year: "1999", version: "Normal", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.pinterest.com/pin/640918590694710514/"}, 
  {image: "./img/cars/sentra2012.jpg", mark: "Nissan", model: "Sentra", year: "2012", version: "Normal", iconMark:"./img/iconCars/Nissan 512px.png", linkImage:"https://co.pinterest.com/pin/609182287074876680/"}, 
  {image: "./img/cars/mariner2009.jpg", mark: "Mercury", model: "Mariner", year: "2009", version: "Normal", iconMark:"./img/iconCars/Mercury 512px.png", linkImage:"https://static.cargurus.com/images/forsale/2021/12/04/18/12/2009_mercury_mariner-pic-1341847474337453176-1024x768.jpeg"},
  {image: "./img/cars/van20042.jpg", mark: "Chrysler", model: "Town & Country", year: "2004", version: "Van", iconMark:"./img/iconCars/Chrysler 650px.png", linkImage:"https://lh3.googleusercontent.com/proxy/tbOv9-YDF5GMpnG0_FmORFRPI1eSHZ_SFHUevp2DQpH2Pr631g938DoV9zJD9fJB7QEpKgsTsORbpg_rEye30qZfJHUsRRF8"},
  {image: "./img/cars/rogue2010.jpg", mark: "Nissan", model: "Rogue", year: "2010", version: "Normal", iconMark:"./img/iconCars/Nissan 512px.png", linkImage:"https://noticias.coches.com/fotos-de-coches/nissan-rogue-2010/65310?foto=5"}, 
  {image: "./img/cars/santafe2006.jpg", mark: "Hyundai", model: "Santa Fe", year: "2006", version: "Normal", iconMark:"./img/iconCars/Hyundai 512px.png", linkImage:"https://lh3.googleusercontent.com/proxy/9ZpQ0WqZZc6I-tXzWOTKiU9U0N7yLgrM3dr8EGvzPRnbY6EYee-e-Hy527zffrnsVIeUkLYdFWMTKhqxhvhG4DhDC1omojF0vjPS"}, 
  {image: "./img/cars/starlet1996.jpg", mark: "Toyota", model: "Starlet", year: "1996", version: "Normal", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.pinterest.com/pin/490399846927690376/"},
  {image: "./img/cars/mazda62003.jpg", mark: "Mazda", model: "6", year: "2003", version: "Normal", iconMark:"./img/iconCars/Mazda 512px.png", linkImage:"https://storage.bhs.cloud.ovh.net/v1/AUTH_e70735f8b712454ba568a52e9776e481/autozin/listing_photo_136605301727289015.jpeg"}, 
  {image: "./img/cars/mazda62005.jpg", mark: "Mazda", model: "6", year: "2005", version: "Normal", iconMark:"./img/iconCars/Mazda 512px.png", linkImage:"https://www.pinterest.com/pin/816770082390002298/"}, 
  {image: "./img/cars/sentra2005.jpg", mark: "Nissan", model: "Sentra", year: "2005", version: "Normal", iconMark:"./img/iconCars/Nissan 512px.png", linkImage:"https://automexico.com/auto-nissan-sentra-tepic/2005-aid134032"}, 
  {image: "./img/cars/rav41998.jpg", mark: "Toyota", model: "Rav4", year: "1998", version: "Normal", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.youtube.com/watch?v=2bdYu7W6qfY"}, 
  {image: "./img/cars/protege2001.jpg", mark: "Mazda", model: "Protege", year: "2001", version: "Normal", iconMark:"./img/iconCars/Mazda 512px.png", linkImage:"https://www.carrosguatemala.com/anuncios/usados-mazda-protege-2001-guatemala/"}, 
  {image: "./img/cars/corolla2002s.png", mark: "Toyota", model: "Corolla", year: "2002", version: "S", iconMark:"./img/iconCars/Toyota 512px.png", linkImage:"https://www.youtube.com/watch?v=I4E5wGgcvV4"}, 
  {image: "./img/cars/hardbody1993.jpg", mark: "Nissan", model: "Hardbody", year: "1993", version: "Normal", iconMark:"./img/iconCars/Nissan 512px.png", linkImage:"https://i.redd.it/6w7b5kz5fnr31.jpg"});

/*
 * Datos e imágenes de los carros. 
*/

function WriteCars(){

  cars.forEach(function(car){

    document.write(`<article class="card" data-aos="fade-up">
                  <div class="face front">
                    <img src="${car.image}">
                    <h3>${car.mark+" "+car.model}</h3>
                  </div>    
                  <div class="face back">
                    <h3>${car.mark+" "+car.model}</h3><br>
                    <p>Marca: ${car.mark}<br>
                      Modelo: ${car.model}<br>
                      Año: ${car.year}<br>
                      Versión: ${car.version}</p><br>
                      <a class="link" href="${car.linkImage}" target="_blank">_Imagen_</a>
                      <img class="iconMark" src="${car.iconMark}">
                  </div>    
                </article>`);

  });

}

WriteCars();

/*
 * Acerca de, contactos y más. 
*/

function about(){

  Swal.fire({
    title: "Acerca de",
    html: `<p>Esta pequeña página ha sido creada desde 0 con estructuras HTML, 
              CSS e inserción de HTML con JavaScript para facilitar el ingreso
              de los datos a las cartas, estas cartas contienen información
              general sobre una serie de carros dichos carros contienen su
              imagen de representación.
              <br><br>*-Contenido de Star Wars añadido de forma extra...</p>`,
    confirmButtonText: "Aceptar"      
  });

}

function contactEmail(){

  Swal.fire({
    // icon: "success",
    title: "Email",
    html:
    `<img class="imgContact" src="./img/others/email 512px.png">
    <form id="contact" action="https://formsubmit.co/carlossu02@protonmail.com" method="POST">
      <input autofocus id="n1" class="textBox" type="text" name="Nombre" placeholder="Nombre" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$" required>
      <input class="textBox" type="email" name="email" placeholder="Correo Electrónico" autofocus pattern="^[A-Za-z0-9]+(\.[A-Za-z0-9]+|-[A-Za-z0-9]+|_[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,15})$" required>
      <input class="textBox" type="text" name="Asunto" placeholder="Asunto" required>
      <textarea class="textBox" name="Comentario" rows="5" cols="50" placeholder="Mensaje" pattern="^(\n|.){1,255}$" required></textarea>
      <button class="btn send" type="submit">Enviar</button>
      <input readonly class="btn cancel" onclick="swal.close()" value="Cancelar">
      <!--<input type="hidden" name="_next" value="http://127.0.0.1:5500/index.html">-->
      <input type="hidden" name="_next" value="https://carlossu02.github.io/cars/">
    </form>`,
    showConfirmButton: false,
    // showCancelButton: true,
    // cancelButtonPosition: "left"
    // showCloseButton: t/rue,
  });  
  
}

function otherContacts(){

  Swal.fire({
    title: "Otros Contactos",
    html: `<div data-aos="zoom-in">
           <a href="https://www.instagram.com/josuesu02/" target="_blank">
           <img class="imgsOtherContacts" src="./img/others/instagram 4096px.png"></a>
           <a href="https://github.com/CarlosSu02/" target="_blank">
           <img class="imgsOtherContacts" src="./img/others/github 512px.png"></a>
          </div>`,
    confirmButtonText: "Aceptar"      
  });

}

function SW(){

  Swal.fire({
    title: "😎",
    html: `<div data-aos="zoom-in">
            <img class="gifYoda" src="https://camo.githubusercontent.com/1df670224134589982a9921a4d2e810a4f9010327fb533b1a104481b6271c3c9/68747470733a2f2f632e74656e6f722e636f6d2f5f72336e766f4a556e446b41414141432f796f64612d6d61792e676966">
          </div>`,
    confirmButtonText: "Aceptar"      
  });

}

/*
 * Audio de Darth Vader. 
*/

function audioDarthVader(){
  
  var audioVader = $("#audio")[0];
  
  $(".imgVader").mouseenter(function(){
    audioVader.play();
  });
  
  $(".imgVader").mouseleave(function(){
    audioVader.pause();
      // audioVader.currentTime = 0;
      // audioVader.load();
  });

}

audioDarthVader();

/*
 * Barra navegadora. 
*/

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

/*
 * Links de las imágenes. 
*/

function linkImages(){

  var links = [];

  cars.forEach(function(car, index) {
    
    if(index == 0){

      links.push(`<h3 align="left">${car.mark+" "+car.model}:</h3>
      <a class="link" href="${car.linkImage}" target="_blank">${car.linkImage}</a>`);

    }else{
        
      links.push(`<br><br><h3 align="left">${car.mark+" "+car.model}:</h3>
      <a class="link" href="${car.linkImage}" target="_blank">${car.linkImage}</a>`);

    }

  });

  Swal.fire({
    title: "Links de Imágenes",
    html: links.join(""),
    confirmButtonText: "Aceptar"
  });  

}