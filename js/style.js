$(window).resize(myF);
$(myF);

function myF() {
    /*======== Smooth Scroll ============*/
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

	if ($(window).width() > 900) {
		/*======== Aspect ratio de Nuestros Servicios ============*/

		var hightIm = $('.imAspRat').width() * .467;
		$('.imAspRat').height(hightIm);
		var hightPar = $('.heightParent').height();
		$('.heightChild').height(hightPar);


		/*======== Boton home ============*/
		$(function () {
			$(window).scroll(function () {
				if ($(window).scrollTop() > 700) {
					$(".botonHome").fadeIn();
				}
				else {
					$(".botonHome").fadeOut();
				}
			});
		});

        /* ======= Alineamiento de los iconos de los clientes ===========*/
        var anchoNavegador = $("#clientes").width();
        $(".linkCliente").css({
            "margin": (((anchoNavegador / 3) - 160) / 2),
            "margin-bottom": 0,
            "margin-top": anchoNavegador / 30
        });

		/* ======= Ancho de barras de Forma de Trabajar ===========*/
		for (var num = 1; num < 5; num++) {
			var widhtDiv = $('.contenido.FormaTrabajar' + num).width();
			var widhtText = $('.contenido.FormaTrabajar' + num + ' h2').width();
			$('.contenido.FormaTrabajar' + num + ' .barra').width(widhtDiv - widhtText - 10);

			/* ======= Alineamiento de icono con content de Forma de Trabajar ===========*/
			var heightDiv = $('.contenido.FormaTrabajar' + num).height();
			var heightIcon = $('.icono.FormaTrabajar' + num).height();
			$('.contenido.FormaTrabajar' + num).css({bottom: (heightDiv - heightIcon) / 2});
		}


		/* ======= Alineamiento de los nuestro equipo ===========*/
		var anchoNavegador = $(".primerDiv").width();
		$("#nuestroEquipo div div").css({"max-width": (anchoNavegador / 3) - 10});
		$("#nuestroEquipo div div").css({
			"margin": (((anchoNavegador / 3) - 5 - $("#nuestroEquipo div div").width()) / 2),
			"margin-bottom": 0,
			"margin-top": anchoNavegador / 150
		});

		/*======== Aspect ratio de contacto============*/
		var hightIm = $('#contacto').width() * .540625;
		$('#contacto').height(hightIm);

	}
	else{
        
        var hightCont = $('.contentItem').outerHeight();
        $('.contentItem').height(hightCont);
        
        
		var hightIm = $('#servicios .content').outerHeight() + $('#servicios .titulo-seccion').outerHeight();
        $('#servicios').css({height:hightIm});

        // ==========================================
        var div1 = $( "#div1" ).replaceWith($("#div2"));

        div1.insertAfter($( "#div2" ));

        // ==========================================

        var altoDivs = $('#nav-trigger').outerHeight() +
            $('#nav-mobile').outerHeight()
            + (5 * 20);
        var altoPant = document.documentElement.clientHeight;
        $("nav#nav-mobile li").css({
            "padding-top": (altoPant - altoDivs)/10,
            "padding-bottom": (altoPant - altoDivs)/10});

        /* ======= Alineamiento de los iconos de los clientes ===========*/
        var anchoNavegador = $("#clientes").width();
        $(".linkCliente").css({
            "margin": (((anchoNavegador / 3)  - anchoNavegador/5) / 2),
            "margin-bottom": 0,
            "margin-top": anchoNavegador / 30
        });
        /* ======= Ancho de barras de Forma de Trabajar ===========*/
        for (var num = 1; num < 5; num++) {
            var widhtDiv = $('.contenido.FormaTrabajar' + num).width();
            var widhtText = $('.contenido.FormaTrabajar' + num + ' h2').width();
            $('.contenido.FormaTrabajar' + num + ' .barra').width(widhtDiv - widhtText - 10);

            /* ======= Alineamiento de icono con content de Forma de Trabajar ===========*/
            var heightDiv = $('.contenido.FormaTrabajar' + num).height();
            var heightIcon = $('.icono.FormaTrabajar' + num).height();
            $('.contenido.FormaTrabajar' + num).css({bottom: (heightDiv - heightIcon) / 2});
        }
    }

}