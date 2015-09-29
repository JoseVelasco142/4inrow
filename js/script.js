/**
 * Created by jose on 26/09/15.
 */

$( document ).ready(function() {

    // Dibujo tablero
    var tablero =  $("#tablero");
    for(i = 0; i < 6; i++)
        for(j = 0; j < 8; j++)
            tablero.append('<div id="cell-'+ j + '-' + i+'" class="cell whiteCell">'+'</div>' );

    tablero.append('<div style="clear:both"></div>');


    var color='darkred';

    // Dibuja ficha
    function drawToken(c, color) {
        var canvas = document.getElementById('uicanvas');
        var context = canvas.getContext('2d');

        context.save();
        context.scale(0.275, 1.15);
        context.beginPath();
        context.lineWidth = 10;
        context.shadowColor = color;
        context.strokeStyle = "rgba(0,0,0,0.8)";
        context.shadowBlur = 5;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 5;
        context.arc(99 + (128 * c), (canvas.height / 2)-12, 55, 0, 2 * Math.PI, false);
        context.stroke();
        context.restore();
        context.fillStyle = color;
        context.fill();
        context.strokeStyle = color;
        context.stroke();

    }

    //Desplaza canvas a la fila
    function moveToken(row) {
        $("#uicanvas").animate({
            top: 50+((row * 78))
        }, 3000, function() {
            clearCanvas();
            $('#uicanvas').removeAttr('style');
        });
    }

    //Limpiar canvas
    function clearCanvas(){
        // Pinto un rectangulo sin color para limpiar
        var canvas = document.getElementById('uicanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width, canvas.height);
    }

    // Pinta la ubicacion seleccionada
    function paintPosition(columna, position,color){
        var coordinateSelected = $('#cell-'+columna+'-'+position);
        coordinateSelected.css('backgroundColor',color);
    }

    //Jugada
    $(".cell").click(function pintar(){
        coordinates = $(this).attr("id").split('-');
        var lastOfColum = ("('#cell-"+coordinates[1]+"-5')");
        if ($(this).css('backgroundColor') != 'rgb(255, 255, 255)') {
            alert('ahi ya hay una ficha ');
        } else {
            //$('.cell').unbind();
            drawToken(coordinates[1], color);
            moveToken(coordinates[2]);
            setTimeout(function () {
                paintPosition(coordinates[1], coordinates[2], color);
            }, 3000)
        }
    });

    // Resetear juego
    $('#reset').click(function() {
        location.reload();
    });

    // Limpiar cajas
    $('input[type=text]').focus(function cleanAutoText(){
        $(this).val('');
    });

    // Funcion de inicio
    function init() {
        //Oculto casi todos los botones
        $('#player1 , #player2 , #comenzar , #reset , #pj1, #pj2, #turn').hide();
        $(' #iniciar').css('visibility','hidden');
        $('.fselected').css('visibility','hidden');

        // Lanzo la demo
        demo();
        //Espero a que se complete para mostrar el boton de inicio
        setTimeout(function(){
            $(' #iniciar').css('visibility','visible');
        }, 3000);

    }

    // Clik en boton iniciar
    $('#iniciar').click(function iniciarJuego() {
        // Muestro los input que recogeran los nombres de usuario
        $('#player1').show();
        $('#player2').show();
        $('#comenzar').show();
        $(this).hide();
    });

    //Inicia la partida
    $('#comenzar').click(function IniciarPartida() {
        //Declaro usuario
        var pj1 = $('#player1');
        var pj2 = $('#player2');

        //Recojo nombres
        var nPj1 = pj1.val();
        var nPj2 = pj2.val();

        //Preparo la interfaz
        $('#reset').show();
        pj1.hide(); pj2.hide();
        $('#turn').show();
        $('#comenzar').hide();
        $(this).hide();
    });

    //Popover Bootstrap
    $(function () {
        $('[data-toggle="popover"]').popover({
            html : true
        })
    });

    //Demo intro
    function demo(){
        drawToken(0,'yellow');
        drawToken(1,'red');
        drawToken(2,'green');
        drawToken(3,'darkblue');
        drawToken(4,'lightred');
        drawToken(5,'lightblue');
        drawToken(6,'grey');
        drawToken(7,'darkgreen');
        moveToken(5);

    }

    init();

});



/*

    //dibuja la ficha en la columna seleccionada hasta la primera fila libre y la dibuja
    $('.fselected').click(function() {
        var columna = this.getAttribute('id');
        var rowClean = checkState(columna);

        if (rowClean >= 0) {
            $('.fselected').css('visibility', 'hidden');
            drawToken(columna, color);
            moveToken(rowClean);
            setTimeout(function () {
                paintPosition(columna, rowClean, color);
                $('.fselected').css('visibility', 'visible');
            }, 5000);
        }
        else {
            alert('columna llena');
        }
    });

    //Comprueba el primer hueco vacio de la columna seleccionada
    function checkState(columna){
        var test = false;
        var row = 4;

        while(!test){
            var fselected = $('#c'+columna+row);

            if (fselected.css('backgroundColor') == 'rgb(255, 255, 255)') {
                test = true;
                return row;
            }
            else {
                if(row != 0) {
                    row = row - 1;
                }
                else{
                    test = true;
                    return -1
                }
            }
        }
    }

   function turnPlayers(Npj1, Npj2){
        //Recojo variables de jugadores
        var PJ1 = [Npj1,'red'];
        var PJ2 = [Npj2,'yellow'];
        //
        $('#pj1,#pj2').show();
        $('.fselected').css('visibility', 'visible');
        // AQUI DEBERIA DE CONTINUAR EL CODIGO, EL TURNO DE JUGADORES, CUANDO SE GANA O PIERDE.....

    }
*/