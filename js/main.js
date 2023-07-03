(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Related Post carousel
    $(".related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    const form = document.querySelector('form');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

})(jQuery);

/*Lista de seguros*/

var listaSeguros = ["VIDA", "SALUD", "VEHÍCULO", "HOGAR", "DEUDORES", "INTERNACIONAL", "EDUCACIÓN","MASCOTAS","PENSIÓN", "PYME"]
var selectSeguro = document.getElementById("selectSeguro");

for (var i = 0; i < listaSeguros.length; i++) {
    var opcion = document.createElement("option");
    opcion.value = listaSeguros[i];
    opcion.text = listaSeguros[i];
    selectSeguro.appendChild(opcion);
}

selectSeguro.addEventListener("change", function() {
    var valorSeleccionado = selectSeguro.value;
    console.log(valorSeleccionado);
});

/*Lista de aseguradora*/

/*var listaCompañia = ["ALLIANZ SEGUROS S.A.", "ASEGURADORA SOLIDARIA DE COLOMBIA",
"AXA COLPATRIA SEGUROS S.A.", "BBVA SEGUROS COLOMBIA S.A.", "BERKLEY INTERNATIONAL SEGUROS COLOMBIA S.A.",
"BMI COMPAÑIA DE SEGUROS","CARDIF COLOMBIA SEGUROS GENERALES S.A","CHUBB SEGUROS COLOMBIA S.A.",
"COFACE COLOMBIA SEGUROS DE CRÉDITO S.A","COLMENA SEGUROS","COMPAÑÍA DE SEGUROS DE VIDA AURORA S.A.",
"COMPAÑÍA MUNDIAL DE SEGUROS S.A", "SEGUROS CONFIANZA S.A.", "GLOBAL SEGUROS DE VIDA S.A.", "HDI SEGUROS S.A.",
"JMALUCELLI TRAVELERS SEGUROS S.A", "LA EQUIDAD SEGUROS","LA PREVISORA COMPAÑÍA DE SEGUROS","LIBERTY SEGUROS S.A.",
"MAPFRE COLOMBIA S.A.","METLIFE COLOMBIA SEGUROS DE VIDA S.A","NACIONAL DE SEGUROS S.A.","OLD MUTUAL","PAN AMERICAN LIFE DE COLOMBIA",
"POSITIVA COMPAÑÍA DE SEGUROS","SBS SEGUROS COLOMBIA S.A","SEGUREXPO DE COLOMBIA S.A.","SEGUROS ALFA S.A","SEGUROS COMERCIALES BOLÍVAR S.A.",
"SEGUROS DEL ESTADO S.A. ","SURAMERICANA S.A","SOLUNION COLOMBIA SEGUROS DE CRÉDITO S.A.","ZURICH COLOMBIA SEGUROS S.A."];

var selectCompañia = document.getElementById("selectCompañia");

for (var i = 0; i < listaCompañia.length; i++) {
    var opcion = document.createElement("option");
    opcion.value = listaCompañia[i];
    opcion.text = listaCompañia[i];
    selectCompañia.appendChild(opcion);
}

selectCompañia.addEventListener("change", function() {
    var valorSeleccionado = selectCompañia.value;
    console.log(valorSeleccionado);
});*/

function scrollToSection() {
    const seccion = document.getElementById("service");
    seccion.scrollIntoView({ behavior: 'smooth' });
}


