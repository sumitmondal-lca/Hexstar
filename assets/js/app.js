// Stellarnav----------------------------
jQuery('.stellarnav').stellarNav({
    theme: 'plain', // adds default color to nav. (light, dark)
    breakpoint: 1230, // number in pixels to determine when the nav should turn mobile friendly
    menuLabel: '', // label for the mobile nav
    sticky: false, // makes nav sticky on scroll (desktop only)
    position: 'static', // 'static', 'top', 'left', 'right' - when set to 'top', this forces the mobile nav to be placed absolutely on the very top of page
    openingSpeed: 250, // how fast the dropdown should open in milliseconds
    closingDelay: 250, // controls how long the dropdowns stay open for in milliseconds
    showArrows: true, // shows dropdown arrows next to the items that have sub menus
    phoneBtn: '', // adds a click-to-call phone link to the top of menu - i.e.: "18009084500"
    phoneLabel: 'Call Us', // label for the phone button
    locationBtn: '', // adds a location link to the top of menu - i.e.: "/location/", "http://site.com/contact-us/"
    locationLabel: 'Location', // label for the location button
    closeBtn: false, // adds a close button to the end of nav
    closeLabel: 'Close', // label for the close button
    mobileMode: false,
    scrollbarFix: false // fixes horizontal scrollbar issue on very long navs
  });


// Sticky Header ----------------------------
  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    let header = $('header');

    if(scroll >= 50){
        header.addClass('sticky');
    }else{
        header.removeClass('sticky');
    }

})


// Typed Js ---------------------------------------
$(function() {
	$(".typed").typed({
		strings: ["Astronomy", "Astronomy", "Astronomy"],
		typeSpeed: 50,
		startDelay: 1200,
		backSpeed: 40,
		backDelay: 500,
		loop: true,
		showCursor: false
	});
});



// Number Counter ------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? Math.ceil(range / (duration / 10)) : Math.floor(range / (duration / 10)),
            step = 10,  // Faster update interval
            timer = setInterval(() => {
                current += increment;
                if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                    current = end;
                    clearInterval(timer);
                    obj.textContent = current + "+"; // Add "+" when the count reaches the end
                } else {
                    obj.textContent = current;
                }
            }, step);
    }
    counter("count1", 9500, 10000, 500);  // Increased speed
    counter("count2", 50, 100, 1500);     // Faster
    counter("count3", 0, 50, 1000);       // Faster
});



// Slick Slider ----------------------------------------------------------------------

// Learn from industry Section Slider
$('#learn-from-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



//   Listen To Your Section Slider
  $('#listen-to-your-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2200,
    dots: false,
    arrows: false,
    infinite: true, // Enables looping
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  // Community Reflections Section Slider
$('#community-reflections-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 715,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
          