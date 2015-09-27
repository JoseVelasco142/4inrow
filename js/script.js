/**
 * Created by jose on 26/09/15.
 */

$( document ).ready(function() {

    function drawaaa() {

        var canvas = document.getElementById('uicanvas');
        var context = canvas.getContext('2d');

//paint the text
        var centerX = 25;
        var centerY = 28;
        var hradius = 28;
        var vradius = 32;

        drawEllipse(context, 7, 14, 37, 29);
    }



    function drawEllipse(ctx, x, y, w, h) {
        var kappa = .5522848,
            ox = (w / 2) * kappa, // control point offset horizontal
            oy = (h / 2) * kappa, // control point offset vertical
            xe = x + w,           // x-end
            ye = y + h,           // y-end
            xm = x + w / 2,       // x-middle
            ym = y + h / 2;       // y-middle

        ctx.beginPath();
        ctx.moveTo(x, ym);
        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";


        ctx.closePath(); // not used correctly, see comments (use to close off open path)
        ctx.stroke();
    }

    drawaaa();


});
/*

function canvasOver()
{
    // Create a blank div where we are going to put the canvas into.
    var canvasa = document.getElementById("uicanvas");
    // Add the div into the document
    document.body.appendChild(canvasa);
    canvasa.style.position="absolute";
    // Set to 100% so that it will have the dimensions of the document
    canvasa.style.left="0px";
    canvasa.style.top="0px";
    canvasa.style.width="100%";
    canvasa.style.height="100%";
    // Set to high index so that this is always above everything else
    // (might need to be increased if you have other element at higher index)
    canvasa.style.zIndex="1000";

    // Now we create the canvas
    myCanvas = document.createElement('canvas');
    myCanvas.style.width = canvasa.scrollWidth+"px";
    myCanvas.style.height = canvasa.scrollHeight+"px";
    // You must set this otherwise the canvas will be streethed to fit the container
    myCanvas.width=canvasa.scrollWidth;
    myCanvas.height=canvasa.scrollHeight;
    myCanvas.style.overflow = 'visible';
    myCanvas.style.position = 'absolute';
    // Add int into the container
    canvasa.appendChild(myCanvas);
}

canvasOver();*/

/*


    var capa1;
    var brocha1;

    capa1 = document.getElementById("capa1");
    brocha1 = capa1.getContext('2d');
    var radius = 11;

    brocha1.beginPath();
    brocha1.arc(11, 50, radius, 0, 2*Math.PI, false);
    brocha1.fillStyle = 'green';
    brocha1.fill();
*/

/*
    var canvas = document.getElementsByTagName("canvas");
    var red = 'rgb(255, 0, 0)';
    var black = 'rgb(0, 0, 0)';
    var white = 'rgb(255, 255, 255)';

    function create_circle(color, radius, index){
        radius = typeof radius !== 'undefined' ? radius : 48;
        index = typeof  index !== 'undefined' ? index : canvas_number;

        circle = canvas[index].getContext('2d');
        circle.beginPath();
        circle.arc(50, 50, radius, 0, 2*Math.PI, false);
        circle.fillStyle = color;
        circle.fill();
    }

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
