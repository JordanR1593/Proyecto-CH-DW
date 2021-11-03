 /*Script para crear el js que me premite desplazar el carrusel con el movimiento del mouse- - #imgs es el id que identifica al ul
        en donde esta contenidas las imagenes del carrusel*/
$(document).ready(function() {
    var docWidth = $('body').width(),
    slidesWidth = $('#imgs').width(),
    rangeX = slidesWidth - docWidth,
    $images = $('#imgs');
    // El metodo .on() recibe como primer parametro los eventos que va a capturar js - como segundo parametro el selector - como tercer parametro los datos
    //-como cuarto parametro el controlador o la funcion a ejecutar
    // El segundo parametro que aparece en esta funcion .on() que no estoy claro si es el selector o los datos me permitio que el js solo se ejecute cuando..
    //..el mouse se posa encima del carrusel y no ocurre lo que ocurria anteriormente que incluso estando ubicado el mouse en el header y desplazandolo..
    //.. horizontalmente se movia el carrusel, situacion que no queria
    //Importante los ids no se el porque se ponen con un #antes de, en este caso el id del (ul) es imgs y se debe poner #imgs
    $(document).on('mousemove',"#imgs", function(e) {
        var mouseX = e.pageX,
        offset = mouseX / docWidth * slidesWidth - mouseX / 2;

        $images.css({
            '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
            'transform': 'translate3d(' + -offset + 'px,0,0)'
        });
    });
 });