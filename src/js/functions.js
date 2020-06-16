
$(document).ready(function () {
    $("html").css("opacity", "1");

    // $('#modal-newsletter').modal('show')


     /// ANIMACIONES


     function efectoFade(inicioFade) {

         inicioFade = 200;

         setTimeout(function () {
             $(".home--hero--copy h1").addClass("transition1");
             if ($(window).height() > 700) {

                 $(".row.objetFade").addClass("transition1");
                 $(".noticias--notas .objetFade").addClass("transition1");
                 $(".multimedia--carrusel .objetFade").addClass("transition1");
                 
                 $(document).scroll(function () {
                     $(".home--noticias--notas__nota").addClass("transition1");
                     $(".noticias--notas .objetFade").addClass("transition1");
                     $(".multimedia--carrusel .objetFade").addClass("transition1");
                 });
            }
         }, 500);
         

        

        function sectionFade() {
            var sectionFade = $(".sectionFade");
            sectionFade.each(function () {
                var posSection = $(this).offset().top - 500;
                var scrolleo = $(window).scrollTop();

                if (scrolleo > posSection) {
                    $(this).find($(".objetFade")).addClass("transition1");
                } else {
                    $(this).find($(".objetFade")).removeClass("transition1");
                }

            });
        }

        sectionFade();

        $(document).scroll(function() {
            sectionFade();
        });
     }
    
    efectoFade();

    
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
                margin: 20,
                autoWidth: true,
                center: true
            },
        
            992: {
                items: 3,
                dots: false
                
            }
        }
    });

});