// to get current year

  window.addEventListener('load', function () {
    const smoke = document.querySelector('.smoke');
    const img = document.getElementById('biryani-img');

    if (img.complete) {
      smoke.style.opacity = 1;
      smoke.style.animationPlayState = 'running';
    } else {
      img.onload = () => {
        smoke.style.opacity = 1;
        smoke.style.animationPlayState = 'running';
      };
    }
  });


AOS.init();
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();



// isotope js
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

// nice select
$(document).ready(function() {
    $('select').niceSelect();
  });

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

/*global $*/
$(document).ready(function () {
    "use strict";

    var span = $('.letter'),
        tlSmell = new TimelineMax({ repeat: -1 });

    tlSmell
        .staggerFromTo($('svg .smell'), 3, { y: 50, autoAlpha: 0.5 }, { y: -20, autoAlpha: 1 }, 1);

    // tween max pol body 
    TweenMax.fromTo($('svg #body'), 3, { x: -1, repeat: -1, yoyo: true }, { x: 1, repeat: -1, yoyo: true });
});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
  
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});