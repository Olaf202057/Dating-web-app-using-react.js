

$(document).ready(function () {

    var gender_filter = 'Women';
    var s_age = 18;
    var f_age = 30;

    //Gender filter-------------------------------------------------------------------------------------------------

    $('.gender .link').click(function () {
        $('#gender').fadeIn(100);
        $('.opacity_wrap').fadeIn(100);
        $('#age_filter').fadeOut(100);
    })
    $('#gender span').click(function () {
        $('#gender span').removeClass('filter_selected');
        $(this).addClass('filter_selected');
        gender_filter = $(this).text();
        $('.gender .link').text(gender_filter);
        $('#gender').fadeOut(100);
    })
    $('.opacity_wrap').click(function () {
        $('#gender, #age_filter, .opacity_wrap').fadeOut(100);
    })



    //Age filter----------------------------------------------------------------------------------------------------

    $('.age_filter .link').click(function () {
        $('#age_filter').fadeIn(100);
        $('.opacity_wrap').fadeIn(100);
        $('#gender').fadeOut(100);
    })

    $('.age_input input').focus(function () {
        $(this).val('');
    });
    $('#age_start').change(function () {
        s_age = $(this).val();
        $(this).val($(this).val() + ' y.o.');
        $('.s_age').text(s_age);
    })

    $('#age_finish').change(function () {
        f_age = $(this).val();
        $(this).val($(this).val() + ' y.o.');
        $('.f_age').text(f_age);
    })

    $('.age_input input').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        if (s_age > f_age) {
            $('.age_input').addClass('filter_error');
        }
        else {
            $('.age_input').removeClass('filter_error');
        }
    });











});