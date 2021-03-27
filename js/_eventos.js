$(function(){
    $('.coordenadas').mouseenter(function(){
        $('.valores').fadeIn();
    });
    $('.coordenadas').mousemove(function(e){

        var positions = $(this).offset();

        var x = e.clientX - positions.left;
        var y = e.clientY - positions.top;
        $('.valores').html(`coordenadas x: ${x} e y:${y}`);
        //console.log(x,y);
    });
    $('.coordenadas').mouseout(function(){
        $('.valores').fadeOut();
    });
});