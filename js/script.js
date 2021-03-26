$(function(){
    $("#txt").val('Texto Alterado');
    $('.email').val('Email, morô?');

    $('p:not(.destaque), li').css('color','#999');
    $('li:first').css('color','pink');
    //$('body').css('background-color','#888');
    $('li:first-child').css('color','pink');

    $('p:gt(2)').css({
        "color": "orange",
        fontSize: "22px"
    });
    $('a[title]').css('color','red');
    $('a:not([title])').hide();
    $('li:odd').css('background-color','#ccc');
//  $('li:even').css('background-color','purple');
    $('p:contains(afo 6)').css('color','blue');
    $('p:hidden').show();
});