const ruleta = document.querySelector('#ruleta');




ruleta.addEventListener('click', girar);

//Prguntas 
var preguntas =[
'¿Cuándo y dónde nació Manuel Eduardo Arias?',
'¿Qué cargo militar tiene Manuel Eduardo Arias?',
'¿Cuándo fue la batalla de Humahuaca?',
'¿Qué condecoración le otorga el General Manuel Belgarno?', 
'¿Qué cargo le asigna Juan Ignacio Gorriti a Manuel Eduardo Arias?',
'¿Cuándo y donde falleció Manuel Eduardo Arias?'
];

var respuestas =[
['1875 en Yavi','1785 en Humahuaca','1788 en Tarija'],
['General','Cabo','Coronel'],
['1 de marzo de 1817','1 de Febrero de 1820','26 de Mayo de 1810'],
['La Estrella del Sur','Basto del Mando del Ejercito del Norte','La Estrella de Humahuaca'],
['Director de las Escuelas de la Quebrada de Humahuaca','Comandante Militar y Político de la Quebrada de Humahuaca, la Puna y Orán.','General del Ejercito del Alto Perú'],
['Jujuy 23 de Agosto 1835','Salta 16 de Junio 1822','Huacalera 19 de Abril 1829'],

];
giros = 0;
suma = 0;
function girar(){
  if (giros < 5) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
	  document.querySelector('.total').innerHTML = 'TOTAL: ' + suma; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = '';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;    
		  document.querySelector('.pregunta').innerHTML = '';
		   document.querySelector('.respuesta').innerHTML = '';
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'PREMIO: ' + premios;
 
}


 function calcular(rand) {

///calculo rand de prguntas
     var indice_aleatorio = Math.floor(Math.random()*  preguntas.length);
	
	 // document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
  ///calculo rand de respuestas
     var respuestas_posibles =respuestas[indice_aleatorio];
	 var txt_respuesta ="";
	 for(i in respuestas_posibles){
		 txt_respuesta+= '<input type="radio"><label>'+respuestas_posibles[i]+'</label><br>';
     }    
    //  document.querySelector('.respuesta').innerHTML = txt_respuesta;

  

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 45:
     premio("5 medallas");
	// premio("5 estrellas");
	
    document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
	document.querySelector('.respuesta').innerHTML = txt_respuesta;

	  suma=suma +5;
     break;
     case valor > 45 && valor <= 90:
     premio("10 Medallas");
	//   premio("5 Piezas");
	
    document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
	document.querySelector('.respuesta').innerHTML = txt_respuesta;
	 suma=suma +10;
	 break;
     case valor > 90 && valor <= 135:
     premio("15 Medallas"); 
	//    premio("2 Corazón"); 
    document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
	document.querySelector('.respuesta').innerHTML = txt_respuesta;
	suma=suma +15;
	break; 
     case valor > 135 && valor <= 180:
     premio("20 Medallas");
	//  premio("2 Nigiri");
    document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
	document.querySelector('.respuesta').innerHTML = txt_respuesta;
   suma=suma +20;
   break;
     case valor > 180 && valor <= 225:
     premio("25 medallas");
   //    premio("Handroll Mini");
    document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
	document.querySelector('.respuesta').innerHTML = txt_respuesta;
  suma=suma +25;
  break; 
     case valor > 225 && valor <= 270:
    premio(" 30 Medallas");
	//premio("NO HAY CORTESIAS ESTA VEZ");
    document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
	document.querySelector('.respuesta').innerHTML = txt_respuesta;
 suma=suma +30;
 break;
     case valor > 270 && valor <= 315:
     premio("35 Medallas");
   //  premio("Una Coca Cola de 2L");
    document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
	document.querySelector('.respuesta').innerHTML = txt_respuesta;
  suma=suma +35;
  break;
     case valor > 315 && valor <= 360:
     premio("40 Medallas"); 
	//   premio("2 Enjoy"); 
    document.querySelector('.pregunta').innerHTML = preguntas[indice_aleatorio] ;
	document.querySelector('.respuesta').innerHTML = txt_respuesta;
  suma=suma +40;
  break;
  }

 }, 5000);

  
}
}