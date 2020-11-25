$(document).ready(function () {


    //h3 - width ------------------------------------------------------------------------------------------------------


    $('.block h3').after('<div class="title_lines"></div>');


    //popup
    function popup(obj) {
        $(obj).css('top', ($(window).height() - $(obj).height()) / 2);
        $(obj).before('<div class="blue_wrap"></div>')
        $(obj).append('<span class="close">×</span>')
        $('.blue_wrap, .close').click(function () {
            $('.popup, .blue_wrap').fadeOut(200);
            $('.blue_wrap').remove();
            $(obj).remove();
        })
    }
    //add comment 

    $('.add_comment textarea').keyup(function () {
        number = $(this).val().length;
        $(".add_comment span").html(100 - number);
    })


    //Photo
    $('.user_photo_more[style]').click(function () {

        $(".more_photos").clone().appendTo(".more_photos").addClass('popup').addClass('opening'); //Clone
        $('.opening').find('[style]').css('display', 'inline-block'); //remove null elements
        popup('.opening');
        $('.opening .title_lines').after('<div class="full_size"></div>');
        var curent_pic = $(this).attr("style");
        $('.full_size').attr("style", curent_pic);

        $('.opening .user_photo_more').click(function () {
            var curent_pic = $(this).attr("style");
            $('.full_size').attr("style", curent_pic);
            $('.opening .user_photo_more').removeClass('photo_active');
            $(this).addClass('photo_active');
        })


    })

    //open menu
    var menu = false;
    var profile_open = false;

    function hide_menu() {
        $(".menu_fixed").animate({ left: "-300px" }, 500);
        $(".body_container").animate({ marginLeft: "0" }, 500);
        menu = false;
        $('.opacity_wrap').removeClass('menu_op_wrap');
        $('.for_open_menu').removeClass('for_open_menu_active');
    }

    $('.for_open_menu').click(function () {
        if (menu) {
            hide_menu();
        }
        else {
            $('.opacity_wrap').show();
            $('.opacity_wrap').addClass('menu_op_wrap');
            $('.for_open_menu').addClass('for_open_menu_active');
            $(".menu_fixed").animate({ left: "0" }, 500);
            $(".body_container").animate({ marginLeft: "300" }, 500);
            menu = true;
        }
    })

    $('.opacity_wrap').click(function () {
        hide_menu();
        hide_profile();
    })


    //top_right_open
    function hide_profile() {
        $('.top_right').removeClass('top_right_open');
        profile_open = false;
        $('.opacity_wrap').hide();
    }


    $('.top_right span').click(function () {
        if (profile_open) {
            hide_profile();
        }
        else {
            $('.top_right').addClass('top_right_open');
            profile_open = true;
            $('.opacity_wrap').show();
        }

    })



});

