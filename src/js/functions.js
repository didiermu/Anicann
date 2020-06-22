
$(document).ready(function () {
    $("html").css("opacity", "1");

    $('#modal-newsletter').modal('show');

    if (window.location.href.indexOf("noticias") > -1 ) {
        $("body").addClass("noticias");
        $("body").removeClass("home");
        $("#menuNoticias").addClass("menuActivo");
    }

    if (window.location.href.indexOf("multimedia") > -1 ) {
        $("body").addClass("multimedia");
        $("body").removeClass("home");
        $("#menuMultimedia").addClass("menuActivo");
    }

    if (window.location.href.indexOf("reporte-verde") > -1 ) {
        $("body").addClass("multimedia reporte");
        $("body").removeClass("home");
        $("#menuReporte").addClass("menuActivo");
    }

    if (window.location.href.indexOf("articulos") > -1 ) {
        $("body").addClass("articulos");
        $("body").removeClass("home");
        $("#menuArticulos").addClass("menuActivo");
    }

    if (window.location.href.indexOf("contacto") > -1 ) {
        $("body").addClass("contacto");
        $("body").removeClass("home");
        $("#menuContacto").addClass("menuActivo");
    }

     /// ANIMACIONES


     function efectoFade() {

         setTimeout(function () {
             $(".home--hero--copy h1").addClass("transition1");

             if ($(window).height() > 700) {

                 $(".row.objetFade").addClass("transition1");
                 $(".noticias--notas .objetFade").addClass("transition1");
                 $(".multimedia--carrusel .objetFade").addClass("transition1");
                 
                 $(document).scroll(function () {
                    $(".row.objetFade").addClass("transition1");
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

    /// ARTCICULOS

    $(".articulos--notas--buttons .widgettitle").remove();
    noCats = $(".multimedia--carrusel--filtros__item").length;
    $(".articulos--notas--filtros").addClass("col-lg-3");
    
    if (noCats <= 2) {
        // $(".articulos--notas--title").addClass("col-lg-3");
        $(".articulos--notas--filtros").removeClass("minCat");
    }

});