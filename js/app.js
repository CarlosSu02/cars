
var cars = new Array( 
  {image: "./img/tarago1990.jpg", mark: "Toyota", model: "Tarago", year: "1990", version: "Microbus"},
  {image: "./img/hiacePanelND.jpg", mark: "Toyota", model: "Hiace", year: "N/D", version: "Panel"},
  {image: "./img/22r1988.jpg", mark: "Toyota", model: "22r", year: "1988", version: "Sencillo"},
  {image: "./img/22r19882.jpg", mark: "Toyota", model: "22r", year: "1988", version: "Sencillo"},
  {image: "./img/corolla1990.jpg", mark: "Toyota", model: "Corolla", year: "1990", version: "Normal"},
  {image: "./img/tercel1996.jpg", mark: "Toyota", model: "Tercel", year: "1996", version: "Cabina Sencilla"},
  {image: "./img/corolla1993.webp", mark: "Toyota", model: "Corolla", year: "1993", version: "Normal"},
  {image: "./img/ranger2000.png", mark: "Ford", model: "Ranger", year: "2000", version: "Cabina y Media Paila Ranchera"},
  {image: "./img/cheyenne1995.jpg", mark: "Chevrolet", model: "Cheyenne", year: "1995", version: "Cabina y Media"}, 
  {image: "./img/montero19892.jpg", mark: "Mitsubichi", model: "Montero", year: "1989", version: "2 puertas"}, 
  {image: "./img/ffocus2005.jpg", mark: "Ford", model: "Focus", year: "2005", version: "Normal"}, 
  {image: "./img/sportage20002.jpg", mark: "Kia", model: "Sportage", year: "2000", version: "Normal"}, 
  {image: "./img/sportage2000.jpg", mark: "Kia", model: "Sportage", year: "2000", version: "Normal"}, 
  {image: "./img/rav41999.jpg", mark: "Toyota", model: "Rav4", year: "1999", version: "Normal"}, 
  {image: "./img/sentra2012.jpg", mark: "Nissan", model: "Sentra", year: "2012", version: "Normal"}, 
  {image: "./img/mariner2009.jpg", mark: "Mercury", model: "Mariner", year: "2009", version: "Normal"},
  {image: "./img/van2004.jpg", mark: "Chrysler", model: "Town & Country", year: "2004", version: "Van"},
  {image: "./img/rogue2010.jpg", mark: "Nissan", model: "Rogue", year: "2010", version: "Normal"}, 
  {image: "./img/santafe2006.jpg", mark: "Hyundai", model: "Santa Fe", year: "2006", version: "Normal"}, 
  {image: "./img/starlet1996.jpg", mark: "Toyota", model: "Starlet", year: "1996", version: "Normal"},
  {image: "./img/mazda62003.jpg", mark: "Mazda", model: "6", year: "2003", version: "Normal"}, 
  {image: "./img/mazda62005.jpg", mark: "Mazda", model: "6", year: "2005", version: "Normal"}, 
  {image: "./img/sentra2005.jpg", mark: "Nissan", model: "Sentra", year: "", version: "Normal"}, 
  {image: "./img/rav41998.jpg", mark: "Toyota", model: "Rav4", year: "1998", version: "Normal"}, 
  {image: "./img/protege2001.jpg", mark: "Mazda", model: "Protege", year: "2001", version: "Normal"}, 
  {image: "./img/corolla2002s.png", mark: "Toyota", model: "Corolla", year: "2002", version: "S"}, 
  {image: "./img/hardbody1993.jpg", mark: "Nissan", model: "Hardbody", year: "1993", version: "Normal"});

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

function executeExample(emailInput){
	
  // Swal.fire({title: "Hola!"});

  // const { value: email } = await Swal.fire({
  //   title: 'Input email address',
  //   input: 'email',
  //   inputLabel: 'Your email address',
  //   inputPlaceholder: 'Enter your email address'
  // })
  
  // if (email) {
  //   Swal.fire(`Entered email: ${email}`)
  // }

  // (async () => {

  //   const { value: name } = await Swal.fire({
  //     title: 'Input name',
  //     input: 'text',
  //     inputLabel: 'Your name',
  //     inputPlaceholder: 'Enter your name',
  //     // name: "name"
  //   })

  //   const { value: email } = await Swal.fire({
  //     title: 'Input email address',
  //     input: 'email',
  //     inputLabel: 'Your email address',
  //     inputPlaceholder: 'Enter your email address',
  //     // name: "email"
  //   })

  //   const { value: comments } = await Swal.fire({
  //     input: 'textarea',
  //     inputLabel: 'Message',
  //     inputPlaceholder: 'Type your message here...',
  //     inputAttributes: {
  //       'aria-label': 'Type your message here'
  //     },
  //     showCancelButton: true,
  //     // name: "text",
  //     confirmButtonText: "Enviar"
  //   })
     
  //   // Swal.fire(`Entered email: ${email} - ${name} - ${text}`);

  //   Swal.fire({
      
  //     html:
  //     `<form style="display:none;" action="https://formsubmit.co/saberparaque11@gmail.com" method="POST">
  //     <!-- <input type="text" name="name" required>
  //       <input type="email" name="email" required>
  //       <br><br><textarea name="comments" rows="5" cols="50" placeholder="Mensaje" required></textarea>
  //       <input type="text" name="name" value="${name}" required>
  //       <input type="email" name="email" value="${email}" required>
  //       <br><br><textarea value="${comments}" rows="5" cols="50" placeholder="Mensaje" required>${comments}</textarea> -->
  //       <input type="hidden" name="email" value="${email}">
  //       <input type="hidden" name="name" value="${name}">
  //       <input type="hidden" name="comments" value="${comments}">
  //       <br><button id="sE" type="submit">Send</button>
  //     </form>`

  //   });  

  // })();
  
  // Swal.fire({
    
  //   html:
  //   `<label>Su nombre: <input type="text" autofocus placeholder="Nombre"><label>
  //    <label>Su email: <input type="email" autofocus placeholder="Email"><label>
  //    <textarea id="swal-input2" rows="10" cols="30" class="swal2-input" placeholder="Mensaje">`

  // });

  // var name = "Prueba1";
  // var email = "saberparaque1@gmail.com";
  // var comments = "prueba de correo 13";

  // Swal.fire({
    
  //   html:
  //   `<form action="https://formsubmit.co/saberparaque11@gmail.com" method="POST">
  //   <!-- <input type="text" name="name" required>
  //     <input type="email" name="email" required>
  //     <br><br><textarea name="comments" rows="5" cols="50" placeholder="Mensaje" required></textarea>
  //     <input type="text" name="name" value="${name}" required>
  //     <input type="email" name="email" value="${email}" required>
  //     <br><br><textarea value="${comments}" rows="5" cols="50" placeholder="Mensaje" required>${comments}</textarea> -->
  //     <input name="email" value="${email}">
  //     <input name="name" value="${name}">
  //     <input name="comments" value="${comments}">
  //     <br><button type="submit">Send</button>
  //   </form>`

  // });  
  

  Swal.fire({
    // icon: "success",
    html:
    `<form id="contact" action="https://formsubmit.co/saberparaque11@gmail.com" method="POST">
      <input autofocus id="n1" class="textBox" type="text" name="Nombre" placeholder="Nombre" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,50}$" required>
      <input class="textBox" type="email" name="email" placeholder="Correo Electrónico" autofocus pattern="^[A-Za-z0-9]+(\.[A-Za-z0-9]+|-[A-Za-z0-9]+|_[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,15})$" required>
      <input class="textBox" type="text" name="Asunto" placeholder="Asunto" required>
      <textarea class="textBox" name="Comentario" rows="5" cols="50" placeholder="Mensaje" pattern="^(\n|.){1,255}$" required></textarea>
      <button class="btn send" type="submit">Enviar</button>
      <button class="btn cancel" onclick="swal.close()">Cancelar</button>
    </form>`,
    showConfirmButton: false,
    // showCancelButton: true,
    // cancelButtonPosition: "left"
    // showCloseButton: t/rue,
  });  
  
}
