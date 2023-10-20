$(function() {
    //輪播
    var carousel = $('#carousel'),
        threshold = 1,
        slideWidth = $(window).width(),
        dragStart,
        dragEnd,
        page = 1;


    // 更新頁
    function pageGroupBtn() {
        $('.pageGroup').children().removeClass('act');
        $('#bp' + page).addClass('act');
        // console.log('reset');
    }


    pageTimer = window.setInterval(
        function() {
            addPage();
            pageGroupBtn();
        }, 3000);

    function pageTimerRenew() {

        pageTimer = window.setInterval(
            function() {
                addPage();
                pageGroupBtn();
            }, 3000);

    }




    // 移入banner
    carousel.mouseenter(function() {
        window.clearInterval(pageTimer);
        // console.log('stop');

    });

    // 移出banner
    carousel.mouseleave(function() {
        window.clearInterval(pageTimer);
        pageTimerRenew();
        // console.log('start');
    });


    // 下一頁
    function addPage() {
        shiftSlide(-1);
        if (page < 6) {
            page++;
        } else {
            page = 1;
        }
        // console.log('addPage:' + page);
    }

    // 上一頁
    function reducePage() {
        shiftSlide(1);
        if (page == 1) {
            page = 6;
        } else {
            page--;
        }
        // console.log('reducePage:' + page);
    }


    if ($(window).width() >= 1280) {
        slideWidth = 1200;
    }

    function next() {
        addPage();
        pageGroupBtn();
    }

    function prev() {
        reducePage();
        $('.pageGroup').children().removeClass('act');
        pageGroupBtn();
    }

    $('#next').click(function() {
        next();

    });
    $('#prev').click(function() {
        prev();
    })


    // 頁籤
    $('.pageGroup').children().click(function() {
        $('.pageGroup').children().removeClass('act');
        $(this).addClass('act');
        buttonPage = $(this).attr('id');
        buttonPage = buttonPage.substr(-1);

        buttonPage = parseInt(buttonPage);
        console.log('buttonPage:' + buttonPage);
        console.log('page:' + page);
        count = buttonPage - page;
        console.log('count:' + count);
        while (count > 0) {
            addPage();
            count--;
            console.log('countpage:' + count);

        }
        while (count < 0) {
            reducePage();
            count++;
            console.log('countpage:' + count);

        }
        window.clearInterval(pageTimer);
        pageTimerRenew();

    });

    $('#topSearchImg').click(function() {
        $('.searchBox').toggle();
    })



    function QRCodeAnimate() {
        $('.QRCode').children('img').attr('src', './img/' + imgName + 'QRcode.png')
        $('.QRCode').stop();
        $('.QRCode').animate({ width: 'toggle' }, 200);
        // console.log('src', './img/' + imgName + 'QRcode.png');
    }
    var imgName;

    $('.rightSideBar').children('a').hover(function() {
        imgName = $(this).attr('id');
        if (imgName == 'fb' || imgName == 'ig') {
            QRCodeAnimate();
            $('.QRCode').children('span').text('');
        } else if (imgName == 'line') {
            QRCodeAnimate();
            $('.QRCode').children('span').text('@947atjvi');

        }

    })

    // 拖曳

    bannerwindow = document.querySelector("#carousel");

    //按下時開始監聽在文件中滑鼠移動的事件
    bannerwindow.onmousedown = function(e1) {
        staryX = e1.pageX;

        console.log('onmousedown');
        // // 當滑鼠在文件移動時，不能再div上移動，因為滑鼠可能離開div，造成無法拖拽
        document.onmousemove = function(e) {
                //         // 當滑鼠移動時，將當前滑鼠相對視口的座標賦值給元素的left和top
                //         // 因為我們需要在按下的位置拖拽，因此我們還需要獲取按下鍵滑鼠相對div的左上角位置
                //         // 使用當前滑鼠位置減去這個相對元素的左上角位置，保證滑鼠所按位置拖拽

                moveX = e.clientX - staryX;
            }
            // 當釋放滑鼠鍵時，刪除滑鼠移動事件和刪除滑鼠釋放事件
        document.onmouseup = function(e) {
            if (moveX > 0) {
                next();

            } else if (moveX < 0) {
                prev();
            }

            window.clearInterval(pageTimer);
            document.onmousemove = null;
            document.onmouseup = null;

        }

        return false;
    }


    // 滑鼠放開的函數
    var timmerHandle = null; // 設定定時器
    var isDrag = false; //拖動的默認狀態
    // 被點擊的函數
    function entranceDivDown() {

        isDrag = false;
        // 延遲100ms
        timmerHandle = setTimeout(setDragTrue, 200);

    }

    function setDragTrue() {
        isDrag = true;

    }
    //被拖動的函數
    // function entranceDivMove() {
    //     // 使用isDrag來判斷是移動還是拖動

    //     bannerSearch.onmousedown = function(ev) {
    //         var oevent = ev;
    //         var distanceX = oevent.clientX - bannerSearch.offsetLeft;
    //         var distanceY = oevent.clientY - bannerSearch.offsetTop;
    //         document.onmousemove = function(ev) {
    //             var oevent = ev;
    //             bannerSearch.style.left = oevent.clientX - distanceX + 'px';

    //             bannerSearch.style.top = oevent.clientY - distanceY + 'px';

    //             bannerSearch.style.bottom = 'unset';
    //             console.log('onmousemove');


    //         };
    //         document.onmouseup = function(ev) {
    //             document.onmousemove = null;
    //             document.onmouseup = null;
    //         };


    //     };
    // }

    //放開函數
    function entranceDivUp() {
        // 使用isDrag來判斷是移動還是拖動

        if (!isDrag) {
            // 先把doMouseDownTimmer清除,不然200毫秒後setDragTrue方法還是會被調用
            clearTimeout(timmerHandle);

        } else {
            isDrag = false;

        }
    }



    // 拖曳
    /* bottom: 60px;
           left: 80px; */

    bannerSearch = document.querySelector(".bannerSearch");
    bannerSearch.style.left = '80px';
    bannerSearch.style.bottom = '60px';
    //按下時開始監聽在文件中滑鼠移動的事件
    bannerSearch.onmousedown = function(ev) {

        entranceDivDown();
        //被拖動的函數
        var oevent = ev;
        var distanceX = oevent.clientX - bannerSearch.offsetLeft;
        var distanceY = oevent.clientY - bannerSearch.offsetTop;

        document.onmousemove = function(ev) {
            var oevent = ev;
            bannerSearch.style.left = oevent.clientX - distanceX + 'px';

            bannerSearch.style.top = oevent.clientY - distanceY + 'px';

            bannerSearch.style.bottom = 'unset';


        };
        document.onmouseup = function(ev) {
            document.onmousemove = null;
            document.onmouseup = null;
        };

        entranceDivUp();

        return false;

    }






    function shiftSlide(direction) {
        // if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup')
        carousel.off('mousemove')
            .addClass('transition')
            .css('transform', 'translateX(' + (direction * slideWidth) + 'px)');
        setTimeout(function() {
                if (direction === 1) {
                    $('.slide:first').before($('.slide:last'));
                } else if (direction === -1) {
                    $('.slide:last').after($('.slide:first'));
                }
                carousel.removeClass('transition')
                carousel.css('transform', 'translateX(0px)');
            }, 500)
            // console.log('direction:' + direction);
    }


    $('.BannerBox_search').click(function() {
        $('.menu').children().removeClass('act');
        $(this).addClass('act');
        $('.searchFunction').css('display', 'inline-block');
        $('.productFunction').css('display', 'none');
        // console.log('BannerBox_search');
    })

    $('.BannerBox_product').click(function() {
        $('.menu').children().removeClass('act');
        $(this).addClass('act');
        $('.productFunction').css('display', 'inline-block');
        $('.searchFunction').css('display', 'none');
        // console.log('BannerBox_product');
    })





    bannerBox = 'on';
    $('.bannerSearch_collapse').click(function() {
        console.log('click');

        console.log('test' + bannerBox);
        if (bannerBox == 'on') {
            $(this).css('transform', 'scale(-1)');
            $('.bannerBox').children('.title').children('.menu').css('display', 'none');
            $('.bannerBox').children('.content').css('display', 'none');
            $('.bannerBox').children('.title').removeClass('act');
            bannerBox = 'off';
            console.log('bannerBoxOff');

        } else {
            $(this).css('transform', 'scale(1)');
            $('.bannerBox').children('.title').children('.menu').css('display', 'flex');
            $('.bannerBox').children('.content').css('display', 'block');
            $('.bannerBox').children('.title').addClass('act');
            bannerBox = 'on';
            console.log('bannerBoxOn');

        }
    })



})