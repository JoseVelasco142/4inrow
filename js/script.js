/**
 * Created by jose on 26/09/15.
 */


$( document ).ready(function() {
    init();
});
/*
/* Declaracion de variables */

var brush1;
var brush2;
var brush3;
var backg = new Image();

function init() {
    brush1 = document.getElementById("layer1").getContext("2d");
    brush2 = document.getElementById("layer2").getContext("2d");
    brush3 = document.getElementById("layer3").getContext("2d");

    drawAll();

}

function drawAll() {
    draw1();

}

function draw1(){
    backg.onload = function() {
        brush1.drawImage(backg, 0, 0, 320, 150);
    };
    backg.src = "imgs/background.png";

}
