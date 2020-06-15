$(document).ready(function () {
    $("html").css("opacity", "1");

    $('#modal-newsletter').modal('show')


    // HEADER

    $(".header--navegacion .btn").on("click", function () {
        $(".header").toggleClass("headerOn");
    });


    /// NOTICIAS


    $('#carrusel-noticias').owlCarousel({
        autoplay: false,
        nav: false,
        loop: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
                margin: 0
            },
        
            992: {
                items: 3,
                dots: false
                
            }
        }
    });

});