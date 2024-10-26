(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Vendor carousel
  $(".vendor-carousel").owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });

  // Related carousel
  $(".related-carousel").owlCarousel({
    loop: true,
    margin: 29,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  // Product Quantity
  $(".quantity button").on("click", function () {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });
})(jQuery);

/* const testinomials = [
  {
    name: "Ethan Thompson",
    image: "../img/StImg3.webp",
    testinomial:
      "I had a cracked screen on my iPhone, and these guys fixed it within an hour! The staff was super friendly and professional. My phone looks brand new again. I couldn’t be happier with the service. Highly recommended for anyone looking for fast and reliable mobile repair!",
  },
  {
    name: "Emily Wilson",
    image: "../img/StImg1.webp",
    testinomial:
      "I had my phone battery replaced here, and the whole experience was fantastic. The prices were much better compared to other repair shops in the area, and the quality of the work was top-notch. They even gave me tips on how to maintain my phone for a longer lifespan. Will definitely be coming back if I ever need another repair!",
  },
  {
    name: "Lucas Brooks",
    image: "../img/StImg4.webp",
    testinomial:
      "The team at this mobile repair shop is amazing! I had a problem with my phone’s charging port, and they diagnosed and fixed it in no time. They kept me updated throughout the process, and the customer service was truly impressive. If you're looking for a repair shop that values its customers, this is the place.",
  },
  {
    name: "Avery Mitchell",
    image: "../img/StImg2.webp",
    testinomial:
      "I dropped my phone and shattered the screen completely. I thought I would have to replace the entire phone, but they fixed it like it was nothing. The turnaround time was very quick, and the phone works perfectly now. Super happy with the service, and I highly recommend them to anyone needing a repair.",
  },
];

let i = 0;

let j = testinomials.length;

let testinomialContainer = document.getElementById("review");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimnial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimnial();
});

let displayTestimnial = () => {
  testinomialContainer.innerHTML = `
    <div class="peopleImg"> 
    <img src=${testinomials[i].image}>
    </div>
    <span>${testinomials[i].name}</span>
    <p>${testinomials[i].testinomial}</p>
      `;
};

displayTestimnial(); */
