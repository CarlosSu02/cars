
var cars = new Array( 
  {image: "./img/cars/tarago1990.jpg", mark: "Toyota", model: "Tarago", year: "1990", version: "Microbus"},
  {image: "./img/cars/hiacePanelND.jpg", mark: "Toyota", model: "Hiace", year: "N/D", version: "Panel"},
  {image: "./img/cars/22r1988.jpg", mark: "Toyota", model: "22r", year: "1988", version: "Sencillo"},
  {image: "./img/cars/22r19882.jpg", mark: "Toyota", model: "22r", year: "1988", version: "Sencillo"},
  {image: "./img/cars/corolla1990.jpg", mark: "Toyota", model: "Corolla", year: "1990", version: "Normal"},
  {image: "./img/cars/tercel1996.jpg", mark: "Toyota", model: "Tercel", year: "1996", version: "Cabina Sencilla"},
  {image: "./img/cars/corolla1993.webp", mark: "Toyota", model: "Corolla", year: "1993", version: "Normal"},
  {image: "./img/cars/ranger2000.png", mark: "Ford", model: "Ranger", year: "2000", version: "Cabina y Media Paila Ranchera"},
  {image: "./img/cars/cheyenne1995.jpg", mark: "Chevrolet", model: "Cheyenne", year: "1995", version: "Cabina y Media"}, 
  {image: "./img/cars/montero19892.jpg", mark: "Mitsubichi", model: "Montero", year: "1989", version: "2 puertas"}, 
  {image: "./img/cars/ffocus2005.jpg", mark: "Ford", model: "Focus", year: "2005", version: "Normal"}, 
  {image: "./img/cars/sportage20002.jpg", mark: "Kia", model: "Sportage", year: "2000", version: "Normal"}, 
  {image: "./img/cars/sportage2000.jpg", mark: "Kia", model: "Sportage", year: "2000", version: "Normal"}, 
  {image: "./img/cars/rav41999.jpg", mark: "Toyota", model: "Rav4", year: "1999", version: "Normal"}, 
  {image: "./img/cars/sentra2012.jpg", mark: "Nissan", model: "Sentra", year: "2012", version: "Normal"}, 
  {image: "./img/cars/mariner2009.jpg", mark: "Mercury", model: "Mariner", year: "2009", version: "Normal"},
  {image: "./img/cars/van2004.jpg", mark: "Chrysler", model: "Town & Country", year: "2004", version: "Van"},
  {image: "./img/cars/rogue2010.jpg", mark: "Nissan", model: "Rogue", year: "2010", version: "Normal"}, 
  {image: "./img/cars/santafe2006.jpg", mark: "Hyundai", model: "Santa Fe", year: "2006", version: "Normal"}, 
  {image: "./img/cars/starlet1996.jpg", mark: "Toyota", model: "Starlet", year: "1996", version: "Normal"},
  {image: "./img/cars/mazda62003.jpg", mark: "Mazda", model: "6", year: "2003", version: "Normal"}, 
  {image: "./img/cars/mazda62005.jpg", mark: "Mazda", model: "6", year: "2005", version: "Normal"}, 
  {image: "./img/cars/sentra2005.jpg", mark: "Nissan", model: "Sentra", year: "", version: "Normal"}, 
  {image: "./img/cars/rav41998.jpg", mark: "Toyota", model: "Rav4", year: "1998", version: "Normal"}, 
  {image: "./img/cars/protege2001.jpg", mark: "Mazda", model: "Protege", year: "2001", version: "Normal"}, 
  {image: "./img/cars/corolla2002s.png", mark: "Toyota", model: "Corolla", year: "2002", version: "S"}, 
  {image: "./img/cars/hardbody1993.jpg", mark: "Nissan", model: "Hardbody", year: "1993", version: "Normal"});

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
                      Versión: ${car.version}</p>
                  </div>    
                </article>`);

  });

}

WriteCars();

function contactEmail(){

  Swal.fire({
    // icon: "success",
    title: "Email",
    html:
    `<img class="imgContact" src="./img/others/email 512px.png">
    <form id="contact" action="https://formsubmit.co/saberparaque11@gmail.com" method="POST">
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
           <img class="imgsOtherContacts" src="/img/others/instagram 4096px.png"></a>
           <a href="https://github.com/CarlosSu02/" target="_blank">
           <img class="imgsOtherContacts" src="/img/others/github 512px.png"></a>
          </div>`,
    confirmButtonText: "Aceptar"      
  });

}