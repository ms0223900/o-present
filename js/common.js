$(function() {

    // styleBtn按鈕
    $('.styleBtn').children('.btn').click(function() {
        $('.styleBtn').children('.btn').removeClass('act');
        $(this).addClass('act');
    })


    // 漢堡menu
    $('.menuNav').click(function() {
        $('.menu').toggle();
        activeMenu = $('.menu').css('display');

        if (activeMenu == 'block') {
            $(this).children('img').attr('src', './img/close.svg')

        } else {
            $(this).children('img').attr('src', './img/menu.svg')

        }
    })


});