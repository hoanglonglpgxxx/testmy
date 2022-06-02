// filter;

$(document).ready(function () {
    $('.btn__filter').click(function () {
        const value = $(this).attr('data-filter');
        console.log(value);
        if (value === 'all') {
            $('.box__wrapper').show(400);
        } else {
            $('.box__wrapper').not('.' + value).hide(400);
            $('.box__wrapper').filter('.' + value).show(400);

        }

        $('.btn__filter').click(function () {
            $(this).addClass('btn__filter--active').siblings().removeClass('btn__filter--active');
            // console.log(this);
        });
    });
});
