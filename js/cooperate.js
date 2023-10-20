$(function() {


    // 768以下右上功能
    search_display = $('.rightTopBox .searchBox').css('display');
    filter_display = $('.rightTopBox .filter').css('display');


    function search_display_show() {
        $('.rightTopBox').css('display', 'inline-block');
        $('.rightTopBox .searchBox').css('display', 'inline-block');
        $('#rightTopFunctionSearch').text('取消');
        search_display = 'inline-block';
    }

    function search_display_hide() {
        $('.rightTopBox').css('display', 'none');
        $('.rightTopBox .searchBox').css('display', 'none');
        $('#rightTopFunctionSearch').html('<img src="./img/topSideBar_search.svg" alt="">')
        search_display = 'none';
    }


    function filter_display_show() {
        $('.rightTopBox').css('display', 'inline-block');
        $('.rightTopBox .filter').css('display', 'inline-block');
        $('#rightTopFunctionFilter').text('取消');
        filter_display = 'inline-block';
    }

    function filter_display_hide() {
        $('.rightTopBox').css('display', 'none');
        $('.rightTopBox .filter').css('display', 'none');
        $('#rightTopFunctionFilter').html('<img src="./img/topSideBar_filter.svg" alt="">')
        filter_display = 'none';
    }




    $('#rightTopFunctionSearch').click(function() {

        if (search_display == 'inline-block') {
            filter_display_hide()
            search_display_hide();
        } else {
            filter_display_hide()
            search_display_show();

        }




    })


    $('#rightTopFunctionFilter').click(function() {

        if (filter_display == 'none') {
            search_display_hide();
            filter_display_show();

        } else {
            filter_display_hide();

            search_display_hide();

        }

    })

});