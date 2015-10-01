/**
 * Created by jose on 26/09/15.
 */

$( document ).ready(function() {

    // Dibujo tablero
    var tablero =  $("#tablero");
    var color='red';
    var turno = true;
    var Player1 = $('#pj1');
    var Player2 = $('#pj2');

    for(i = 0; i < 6; i++)
        for(j = 0; j < 8; j++)
            tablero.append('<div id="cell-'+ j + '-' + i+'" class="cell">'+'</div>' );

    tablero.append('<div style="clear:both"></div>');


    // Funcion de inicio
    function init() {
        //Oculto botones
        $('#comenzar , #reset , #pj1, #pj2, #turn').hide();
        $(' #iniciar').css('visibility','hidden');
        // Lanzo la demo
        demo();
        //Espero a que se complete para mostrar el boton de inicio
        setTimeout(function(){
            $(' #iniciar').css('visibility','visible');
            $('#tablero').css('visibility','hidden');
        }, 3000);

    }

    //Demo intro
    function demo(){
        drawToken(0,'yellow');
        drawToken(1,'red');
        drawToken(2,'green');
        drawToken(3,'darkblue');
        drawToken(4,'purple');
        drawToken(5,'lightblue');
        drawToken(6,'grey');
        drawToken(7,'darkgreen');
        moveToken(5);

    }


    // Resetear juego
    $('#reset').click(function() {
        location.reload();
    });

    //Popover Bootstrap
    $(function () {
        $('[data-toggle="popover"]').popover({
            html : true
        })
    });

    // Clik en boton iniciar
    $('#iniciar').click(function iniciarJuego() {

        // Muestro los input que recogeran los nombres de usuario
        $(this).hide();
        $('#tablero').css('visibility','visible');
        $('#reset').show();
        $('#turn').show();
        $('#pj1').show();
        $('#pj2').show();
        turnPlayers()
    });

    //Turno de jugadores
    function turnPlayers(){

        if(turno){
            Player1.show();
            Player2.hide();
            color = 'red';
            turno=false;
        }else{
            Player1.hide();
            Player2.show();
            color = 'yellow';
            turno=true;
        }
    }

    //Jugada
    $(".cell").click(function pintar(){

        coordinates = $(this).attr("id").split('-');
        if (!checkState(coordinates[1], coordinates[2])) {
            alertify.error("Debes de ponerla encima de otra o empezar por abajo");
        } else if ($(this).css('backgroundColor') != 'rgb(255, 255, 255)') {
            alertify.error("No puedes poner dos fichas en el mismo sitio");
        } else {
            drawToken(coordinates[1], color);
            moveToken(coordinates[2]);
            setTimeout(function () {
                paintPosition(coordinates[1], coordinates[2], color);
                if (checkHorizontalWin(coordinates) || checkVerticallWin(coordinates) || checkDiagonalWin(coordinates)) {
                    $('.cell').unbind("click");
                    alertify.alert("El jugador de color " + color + " ha ganado");
                    alertify.success("Pulsa el boton RESET para jugar de nuevo");
                }
                turnPlayers();
            }, 3000);
        }
    });

    //Compruebo si la siguiente celda tiene y ficha o es la ultima
    function checkState(col,row){
        row++;
        nextSelected = $('#cell-'+col+'-'+(row));

        if(row == 6){
            return true
        }else{
            return nextSelected.css('backgroundColor') != 'rgb(255, 255, 255)';
        }
    }

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

    // Comprueba victoria horizontal
    function checkHorizontalWin(coordinates){
        lastMoveColor = $('#cell-'+coordinates[1]+'-'+coordinates[2]).css('backgroundColor');
        hcounter = 0;
        for(i=0; i<=7; i++) {
            var currentCell = $('#cell-' + i + '-' + coordinates[2]);
            if (currentCell.css('backgroundColor') == lastMoveColor) {
                hcounter++;
            } else if (currentCell.css('backgroundColor') != 'rgb(255, 255, 255)') {
                hcounter = 0;
            }
            if (hcounter == 4) return true;
        }
    }

    // Comprueba victoria vertical
    function checkVerticallWin(coordinates){
        lastMoveColor = $('#cell-'+coordinates[1]+'-'+coordinates[2]).css('backgroundColor');
        vcounter = 0;
        for(i=0; i<=5; i++) {
            var currentCell = $('#cell-'+ coordinates[1] + '-' + i);
            if (currentCell.css('backgroundColor') == lastMoveColor) {
                vcounter++;
            } else if (currentCell.css('backgroundColor') != 'rgb(255, 255, 255)') {
                vcounter = 0;
            }
            if (vcounter == 4) return true;
        }
    }

    function checkDiagonalWin(coordinates){
        /*lastMoveColor = $('#cell-'+coordinates[1]+'-'+coordinates[2]).css('backgroundColor');
        dcounter = 0;
        for(j=0; j<=7; j++) {
            for (i = 0; i <= 7; i++) {
                var currentCell = $('#cell-' + j + '-' + i);
                console.log(currentCell);
                if (currentCell.css('backgroundColor') == lastMoveColor) {
                    dcounter++;
                } else if (currentCell.css('backgroundColor') != 'rgb(255, 255, 255)') {
                    dcounter = 0;
                }
                if (dcounter == 4) return true;
            }
        }*/
    }
    //Llamada al inicio de la aplicación
    init();

});
