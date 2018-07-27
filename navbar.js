/**
 *author:doulu
 *create time:2018-07-27
 *description:导航浮上显示
 */
//导航浮上显示
$('#navbarSupportedContent .dropdown').hover(function () {
    $(this).find('.dropdown-toggle').click();
},function () {
    var $_this = $(this);
    $_this.find('.dropdown-menu').on('mouseleave',function () {
        $_this.find('.dropdown-toggle').click();
    });
});