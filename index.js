/**
 *author:doulu
 *create time:2018-07-24
 *description: all js
 */
window.onload = function () {
    // $('#sd_carousel').carousel('pause');

    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        var topH = $('.carousel-inner').height() - 25;
        $('#sd_carousel .carousel-indicators').css('top',topH);
    }
    /*if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        //监听鼠标滚动
        $(window).scroll(function () {
            var winPos = $(window).scrollTop();

            //index page
            var iPos = $('#coop_case').offset().top;
            var d = iPos-winPos;
            if(d>260 || d<150){
                $('.coop-info1').hide();
            }else if(150 < d < 260){
                $('.coop-info1').show();
            }
            if( d>150 || d<50){
                $('.coop-info2').hide();
            }else if( 50 < d < 150){
                $('.coop-info2').show();
            }
            if(d > 50){
                $('.coop-info3').hide();
            }else {
                $('.coop-info3').show();
            }

        })
    }*/

};
$(function () {
    //解决方案
    var clicktag = 0;
    $('.list-group-item').hover(function () {
        if (clicktag == 0) {
            clicktag = 1;
            $(this).click();
            setTimeout(function () { clicktag = 0 }, 500);
        }
        $('.list-group-item').removeClass('active');
        var $_id = $(this).attr('aria-controls');
        $('.bg-img img').each(function () {
            if($(this).attr('data-target') == $_id){
                $(this).show();
            }else {
                $(this).hide();
            }
        });
    },function () {
        $('.tab-pane').each(function () {
            if($(this).hasClass('active')){
                $('#'+$(this).attr('id')+'-list').addClass('active');
            }
        });
    });

    //产品动画
    $('.item-img').on('click',function () {
        var $_id = $(this).attr('id');
        var $_item = $(this).find('.i-img');
        var $_tit = $(this).parent().find('.item-desc').find('h3').text();
        var $_desc = $(this).parent().find('.item-desc').find('p').text();
        switch ($_id){
            case 'item1':
                animation($_item,'translateXY1',$_tit,$_desc,'pro1-desc');
                break;
            case 'item2':
                animation($_item,'translateXY2',$_tit,$_desc,'pro2-desc');
                break;
            case 'item3':
                animation($_item,'translateXY3',$_tit,$_desc,'pro3-desc');
                break;
            case 'item4':
                animation($_item,'translateXY4',$_tit,$_desc,'pro4-desc');
                break;
            case 'item5':
                animation($_item,'translateXY5',$_tit,$_desc,'pro5-desc');
                break;
            default:
                break;
        }
    });

    function animation($_item,translateXY,$_tit,$_desc,$_pro) {
        $('.cen-desc').addClass('fadeLR');
        $('.cen-line').addClass('lineRL');

        $_item.addClass(translateXY);
        $('.guangquan').addClass('scales');
        $('.cen-item').addClass('opacitys');
        $('.pro-info').addClass('translateY');

        setTimeout(function () {
            $('.pro-info-desc').each(function () {
                if($(this).attr('data-target') == $_pro){
                    $(this).show();
                }else {
                    $(this).hide();
                }
            });
        },1000);

        setTimeout(function(){
            $('.cen-item').css('opacity',0);
            $('.cen-desc').find('h3').html($_tit);
            $('.cen-desc').find('p').html($_desc);
        }, 1000);

        setTimeout(function(){
            $('.guangquan').removeClass('scales');
        }, 2000);

        setTimeout(function () {
            $_item.removeClass(translateXY);
            $('.cen-item').removeClass('opacitys');
            $('.cen-desc').removeClass('fadeLR');
            $('.cen-line').removeClass('lineRL');
            $('.pro-info').removeClass('translateY');
        },1500);

        setTimeout(function(){
            $('.cen-item').find('img').attr('src',$_item.attr('src'));
            $('.cen-item').css('opacity',1);
        }, 1600);
    }
});
