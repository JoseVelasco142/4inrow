/**
 * Created by jose on 26/09/15.
 */

$( document ).ready(function() {

    function drawToken(c, cl) {
        var canvas = document.getElementById('uicanvas');
        var context = canvas.getContext('2d');

        context.save();
        context.scale(0.295, 0.795);
        context.beginPath();
        context.lineWidth = 10;
        context.shadowColor = cl;
        context.strokeStyle = "rgba(0,0,0,0.8)";
        context.shadowBlur = 5;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 5;
        context.arc(85 + (169 * c), (canvas.height / 2) +4, 60, 0, 2 * Math.PI, false);
        context.stroke();
        context.restore();
        context.fillStyle = cl;
        context.fill();
        context.strokeStyle = cl;
        context.stroke();

    }

    function moveToken(f) {
        $("#uicanvas").animate({
            top: 60 + ((f * 77) + (f + 2))
            }, 5000, function() {
                clearCanvas();
                $('#uicanvas').removeAttr('style');
        });
    }

    function demo(){
        drawToken(0,'yellow');
        drawToken(1,'red');
        drawToken(2,'yellow');
        drawToken(3,'red');
        drawToken(4,'yellow');
        drawToken(5,'red');
        moveToken(4);
    }

    $('#iniciar').click(function() {
        $('#player1').show();
        $('#player2').show();
        $('#comenzar').show();

        $(this).hide();
    });

    $('#comenzar').click(function() {
        $('#reset').show();
        $('#player1').hide();
        $('#player2').hide();
        $('#comenzar').hide();
        $('#turno').show();
        $('.fselected').css('visibility','visible');
        $(this).hide();
        clearCanvas();
    });

    $('#reset').click(function() {
        location.reload();
    });

    $('input[type=text]').focus(function cleanAutoText(){
                $(this).val('');
    });

    function clearCanvas(){
        var canvas = document.getElementById('uicanvas');
        var context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width, canvas.height);
    }

    $('.fselected').click(function InsertToken() {
        var columna = this.getAttribute('id');
        if(checkState(columna) >= 0){
            drawToken(columna,'red');
            moveToken(checkState(columna));
            paintPosition(columna, checkState(columna), 'red');
        }
        else{
            alert('columna llena');
        }
    });

    function paintPosition(columna, position,color){
        var fselect = $('#c'+columna+position);
         fselect.css('backgroundColor',color);
    }

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

    function init() {
        /*demo();*/
        $('#player1').hide();
        $('#player2').hide();
        $('#comenzar').hide();
        $('#reset').hide();
        $('#turno').hide();
        $('.fselected').css('visibility','hidden');
    }

    init();
});
