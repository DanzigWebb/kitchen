
 $(document).ready(function() {
    $("#my-menu").mmenu({
        extensions: ['effect-menu-slide', 'pagedim-black', "fx-listitems-fade", 'position-right'],
        navbar: {
            //title: '<img src="/assets/img/main/logo-1.png">'
        },
    }, {
        // configuration
        offCanvas: {
            pageSelector: "#my-page"
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:start', function() {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:before', function() {
        $('.hamburger').removeClass('is-active');
    })
});

$(document).ready(function(){
    $('.recipes-carousel').owlCarousel({
        loop:true,
        margin:15,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                dots:false,
                nav:false
            },
            400:{
                items:2,
                dots:false,
                nav:false
            },
            600:{
                items:3,
                dots:false,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                dots:false,
                loop:true
            }
        }
    });
})