$(window).resize(myF);
$(myF);

function myF(){
/*======== Aspect ratio de Nuestros Servicios ============*/
var hightIm = $('.imAspRat').width()*.48;
$('.imAspRat').height(hightIm);
var hightPar = $('.heightParent').height();
$('.heightChild').height(hightPar);

/* ======= Ancho de barras de Forma de Trabajar ===========*/
for(var num=1; num<5; num++){
	var widhtDiv = $('.contenido.FormaTrabajar' + num).width();
	var widhtText = $('.contenido.FormaTrabajar' + num +' h2').width();
	$('.contenido.FormaTrabajar' +num+ ' .barra').width(widhtDiv-widhtText-10);

/* ======= Alineamiento de icono con content de Forma de Trabajar ===========*/
	var heightDiv = $('.contenido.FormaTrabajar' + num).height();
	var heightIcon = $('.icono.FormaTrabajar' + num).height();
	$('.contenido.FormaTrabajar' + num).css({bottom:(heightDiv-heightIcon)/2});}

/* ======= Alineamiento de los iconos de los clientes ===========*/
var anchoNavegador = $("#clientes").width();
$(".linkCliente").css({"margin":(((anchoNavegador/3)-160)/2),"margin-bottom":0,"margin-top":anchoNavegador/30});

/* ======= Alineamiento de los contactos de los clientes ===========*/
var anchoNavegador = $(".primerDiv").width();
$("#nuestroEquipo div div").css({"max-width":(anchoNavegador/3)-10});
$("#nuestroEquipo div div").css({"margin":(((anchoNavegador/3)-5-$("#nuestroEquipo div div").width())/2),"margin-bottom":0,"margin-top":anchoNavegador/150});

/*======== Aspect ratio de Nuestros Servicios ============*/
var hightIm = $('#contacto').width()*.4739;
$('#contacto').height(hightIm);

console.log($(window).width())
};