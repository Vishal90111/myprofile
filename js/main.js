$(document).ready(function () {
    $('.closeMenu').hide();
    $('.closeMegaMenu').hide();
    $('.v-nav-menu-icon .nav-item .mega-menu-overlay').hide();
    $(".v-nav-menu .nav-item a").click(function () {
        if (screen.width < 992) {
            $('#vishalJoshiNav').hide();
            $('.navbar-toggler').show();
        }
    });

    $(".v-nav-menu-icon .nav-item a").click(function () {
        $(this).siblings('.mega-menu-overlay').slideDown("slow");
        $('.closeMegaMenu').show();
        $('body').css('overflow', 'hidden');
    })

    $(".closeMegaMenu").click(function () {
        $('.v-nav-menu-icon .nav-item .mega-menu-overlay').slideUp("slow");
        $(this).hide();
        $('body').css('overflow', 'visible');
    })

    $('.navbar-toggler').click(function () {
        $('#vishalJoshiNav').slideDown("slow");
        $(this).hide();
        $('.closeMenu').show();
    });

    $('.closeMenu').click(function () {
        $('#vishalJoshiNav').slideUp("slow");
        $('.navbar-toggler').show();
    });

});


$(document).ready(function () {
    if ($(this).scrollTop() == 0) {
        $('#toTopBtn').hide();
    }

    if ($(this).scrollTop() > 0) {
        $('nav').addClass('scrolled');
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600 && $(this).scrollTop() != 0) {
            $('#toTopBtn').fadeIn();
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
            $('#toTopBtn').fadeOut();

        }
    });

    $('#toTopBtn').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $('body').scrollspy({
        target: '.navbar'
    });

    $('.v-nav-menu a.nav-link').on('click', function () {
        var clickedItem = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(clickedItem).offset().top
        }, 1500);
    });
});

$(document).ready(function () {

    $('.education').hide();
    $('.experience').show();
    $('button#experience').addClass('active');

    $('button#experience').click(function () {
        $('button#education').removeClass('active');
        $(this).removeClass('active');
        $(this).addClass('active');
        $('.education').hide();
        $('.experience').show();
    });

    $('button#education').click(function () {
        $('button#experience').removeClass('active');
        $(this).removeClass('active');
        $(this).addClass('active');
        $('.experience').hide();
        $('.education').show();
    });
});
