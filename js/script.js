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
        context.lineWidth = 7;
        context.shadowColor = 'black';
        context.strokeStyle = "rgba(0,0,0,0.8)";
        context.shadowBlur = 7;
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 5;
        context.arc(75 + (173 * c), canvas.height / 2, 60, 0, 2 * Math.PI, false);
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
        });

    }

    function demo(){
        drawToken(0,'darkred');
        drawToken(2,'yellow');
        drawToken(4,'green');
        moveToken(4);
        moveToken(1);
        moveToken(3);
        moveToken(2);
        moveToken(0);
        moveToken(4);



    }

    $('#iniciar').click(function() {
        $('#player1').show();
        $('#player2').show();
        $('#comenzar').show();

        $(this).hide();
    });

    $('#comenzar').click(function() {
        play();
        $('#reset').show();
        $('#player1').hide();
        $('#player2').hide();
        $('#comenzar').hide();
        $('#turno').show();
        $(this).hide();
    });

    $('#reset').click(function() {
        location.reload();
    });

    $('input[type=text]').focus(function(){
                $(this).val('');
    });

    function play(){
        console.log("y funcionaaaaaa");
    }

    function init() {
        demo();
        $('#player1').hide();
        $('#player2').hide();
        $('#comenzar').hide();
        $('#reset').hide();
        $('#turno').hide();
    }

    init();
});


/*


    $(canvas).click(function() {
        canvas_clicked = $(this).attr('id');
        canvas_number = canvas_clicked - 1;
        canvas_above_id = $(this).attr('id') - 7;
        canvas_above = $('this').parent().parent().prev().find('#' + canvas_above_id);

        if (canvas_clicked > 35 || $(this).hasClass('can_place')) {
            $(this).attr('class', 'has_chip');
            canvas_above.attr('class', 'can_place');
            create_circle(red);
        }
    }).dblclick(function() {
        if (canvas_clicked > 35 || $(this).hasClass('can_place') || $(this).hasClass('has_chip')) {
            $(this).attr('class', 'has_chip');
            canvas_above.attr('class', 'can_place');
            create_circle(black);
*/