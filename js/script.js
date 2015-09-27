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
        context.strokeStyle = "rgba(0,0,0,0.6)";
        context.shadowBlur = 15;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.arc(70 + (177 * c), canvas.height / 2, 60, 0, 2 * Math.PI, false);
        context.stroke();
        context.restore();
        context.fillStyle = cl;
        context.fill();
        context.strokeStyle = cl;
        context.stroke();

    }

    function moveToken(c, f, cl) {
        drawToken(c, cl);

        $("#uicanvas").animate({
            top: 62 + ((f * 77) + (f + 2))
        });
    }

    function demo(){
        autodraw(0);
        autodraw(1);
        autodraw(2);
        autodraw(3);
        autodraw(4);
    }

    function autodraw(row) {
        var c1 = 'red';
        var c2 = 'yellow';
        moveToken(0, row, c1);
        moveToken(1, row, c2);
        moveToken(2, row, c1);
        moveToken(3, row, c2);
        moveToken(4, row, c1);
        moveToken(5, row, c2);
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



//////////////////////////////////////////////////////////////////////////


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
        }
    });

    $('undo').click(function(){
        var radius = 49;
        create_circle(white, radius);
    });

    $('reset').click(function(){
        var radius = 49;
        for(index = 0; index < canvas.length; index++) {
            create_circle(white,radius, index);
        }
    });*/
