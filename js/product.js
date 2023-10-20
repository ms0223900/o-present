$(function() {


    // 搜尋細項
    $('.showMenu').click(function() {
        searchMenu = $('.searchMenu').css('display');
        $('.searchMenu').toggle(200);

        if (searchMenu == 'none') {
            $('.showMenu').children('span').text('收合');
            $('.showMenu').children('svg').css('transform', 'rotate(180deg)')
            searchMenu = 'block';



        } else {
            $('.showMenu').children('span').text('展開');
            $('.showMenu').children('svg').css('transform', 'rotate(0deg)')

            searchMenu = 'none';

        }
    })







    // 768以下右上功能



    filter_display = $('.rightTopBox .filter').css('display');
    $('#rightTopFunctionFilter').click(function() {

        if (filter_display == 'inline-block') {
            $('.rightTopBox').css('display', 'none');
            $('.rightTopBox .filter').css('display', 'none');
            $('#rightTopFunctionFilter').html('<img src="./img/topSideBar_filter.svg" alt="">')
            filter_display = 'none';
            console.log('hide');

        } else {



            $('.rightTopBox').css('display', 'inline-block');
            $('.rightTopBox .filter').css('display', 'inline-block');
            $('#rightTopFunctionFilter').text('取消');
            filter_display = 'inline-block';
            console.log('show');

        }

    })



});