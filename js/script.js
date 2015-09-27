/**
 * Created by jose on 26/09/15.
 */



function draw()
{

//paint the text

}

function createCanvasOverlay()
{
    // Create a blank div where we are going to put the canvas into.
    var canvasContainer = document.createElement('div');
    // Add the div into the document
    document.body.appendChild(canvasContainer);
    canvasContainer.style.position="absolute";
    // Set to 100% so that it will have the dimensions of the document
    canvasContainer.style.left="0px";
    canvasContainer.style.top="0px";
    canvasContainer.style.width="100%";
    canvasContainer.style.height="100%";
    // Set to high index so that this is always above everything else
    // (might need to be increased if you have other element at higher index)
    canvasContainer.style.zIndex="1000";

    // Now we create the canvas
    myCanvas = document.createElement('canvas');
    myCanvas.style.width = canvasContainer.scrollWidth+"px";
    myCanvas.style.height = canvasContainer.scrollHeight+"px";
    // You must set this otherwise the canvas will be streethed to fit the container
    myCanvas.width=canvasContainer.scrollWidth;
    myCanvas.height=canvasContainer.scrollHeight;
    myCanvas.style.overflow = 'visible';
    myCanvas.style.position = 'absolute';
    // Add int into the container
    canvasContainer.appendChild(myCanvas);
}

createCanvasOverlay();

draw();

/*
$( document ).ready(function() {

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
