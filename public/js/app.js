
// $(function() {
//     // esta parte es la que controla cuando se mueve el scroll y ejecuta una función
//     $(document).scroll(function() {
//       // aca se pregunta si el scroll se movio de pa bajo.
//       if ($(this).scrollTop() > 1) {
//         // esta parte cambia el atributo "src" de la etiqueta "img" 
//         $('.titlelImg').attr('src', 'public/img/IMG_1805.jpg');
//         // document.getElementById("img0").src = "public/img/IMG_1805.jpg";
//       }
//       if ($(this).scrollTop() < 1) {
//         $('.titleImg').attr('src', 'css/const2.jpg');
//       }
//     });
//   });


// function title1(click){

//     alert((click.id).toString());
// }

// function write(){
//   `<div class="card" data-aos="fade-up">
//   <div class="face front">
//       <img src="img/IMG_1805.JPG" alt="">
//   </div>    
//   <div class="face back">
//       <p>HOlaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//   </div>    
// </div>`
// }

var write =   `<div class="card" data-aos="fade-up">
<div class="face front">
    <img src="img/sportage20002.png" alt="">
</div>    
<div class="face back">
    <p>Marca: x <br>
       Modelo: y <br>
       Año: 19 o 20 <br></p>
</div>    
</div>`;

var cardsArray = new Array({ name: './img/card1.jpg', selection: false }, { name: './img/card2.jpg', selection: false }, { name: './img/card3.jpg', selection: false }, { name: './img/card4.jpg', selection: false }, { name: './img/card5.jpg', selection: false }, { name: './img/card6.jpg', selection: false }, { name: './img/card7.jpg', selection: false }, { name: './img/card8.jpg', selection: false }, { name: './img/card1.jpg', selection: false }, { name: './img/card2.jpg', selection: false }, { name: './img/card3.jpg', selection: false }, { name: './img/card4.jpg', selection: false }, { name: './img/card5.jpg', selection: false }, { name: './img/card6.jpg', selection: false }, { name: './img/card7.jpg', selection: false }, { name: './img/card8.jpg', selection: false });

var cardsArray2 = [["s","s", "s", "s", "s"],
                   ["s","s", "s", "s", "Hola"]];

const dimensions = [
  cardsArray2.length,
  cardsArray2.reduce((x, y) => Math.max(x, y.length), 0)
];                   

// document.write(`${write}<br>`);
document.write(`<div class="card" data-aos="fade-up">
                  <div class="face front">
                    <img src="img/sportage20002.png" alt="">
                    <h3>Mit</h3>
                  </div>    
                  <div class="face back">
                    <h3>Mit</h3>
                    <p>Marca: x <br>
                      Modelo: y <br>
                      Año: 19 o 20 o 201 <br>
                      len: ${cardsArray[1].name}</p>
                  </div>    
                </div>`);
