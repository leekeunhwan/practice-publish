// Bind as an event handler
$(document).ready(function() {
  $(".slider").bxSlider({
    auto: true,
    speed: 1500,
    infiniteLoop: true,
    autoHover: true
  });
  $(".mobile-slider").bxSlider({
    auto: true,
    speed: 1500,
    infiniteLoop: true
  });
  $(".sum-slider").bxSlider({
    auto: true,
    speed: 1000,
    //slideWidth : 1000,
    infiniteLoop: true
  });

  //$(".regular").slick();
});
$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  console.log(scroll);
  if (document.body.clientWidth < 550) {
    if (scroll > 600) {
      $(".nav-header").addClass("sub-header");
      $("#main-logo").attr("src", "assets/img/blocko-logo-black.png");
      $(".hambtn").attr("src", "assets/img/hamburgerBtnBlack.png");
      $(".select-language").css("color", "black");
    } else {
      $(".nav-header").removeClass("sub-header");
      $("#main-logo").attr("src", "assets/img/blocko-logo-white.png");
      $(".hambtn").attr("src", "assets/img/hamburgerBtn.png");
      $(".select-language").css("color", "white");
    }
  } else {
    if (scroll > 750) {
      $(".nav-header").addClass("sub-header");
      $(".my-popup").removeClass("main-my");
      $(".my-popup").css("background-color", "white");
      $("#main-logo").attr("src", "assets/img/blocko-logo-black.png");
      $("#main-logo").attr(
        "onmouseover",
        "this.src='assets/img/blocko-logo-black-hover.png'"
      );
      $("#main-logo").attr(
        "onmouseout",
        "this.src='assets/img/blocko-logo-black.png'"
      );
      $(".select-language").css("color", "black");
    } else {
      $(".nav-header").removeClass("sub-header");
      $(".my-popup").addClass("main-my");
      $(".my-popup").css("background-color", "transparent");
      $("#main-logo").attr("src", "assets/img/blocko-logo-white.png");
      $("#main-logo").attr(
        "onmouseover",
        "this.src='assets/img/blocko-logo-hover.png'"
      );
      $("#main-logo").attr(
        "onmouseout",
        "this.src='assets/img/blocko-logo-white.png'"
      );
      $(".select-language").css("color", "white");
    }
  }
});

// script2

function onClickLang(language) {
  //toggleMenu();
  /*
			$.ajax('/api/language/set/' + language, {
				ignoreLoading: true,
				success: function() {
					location.reload();
				}
			});
			*/
  alert("It doesn't support now yet.");
}

$(".select-language").change(function() {
  language = $(this).val();

  /*
			$.ajax('/api/language/set/' + language, {
				ignoreLoading: true,
				success: function() {
					location.reload();
				}
			});
			*/
  alert("It doesn't support now yet.");
});

var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");

function toggleMenu() {
  $(".my-popup").slideToggle();
}

/* 언어 선택 영역 로직 */

$(document).ready(function() {
  var $body = $("body");
  var isActive = $(".hamburger").hasClass("toggler_active");
  var $sidebar = $body.find(".sidebar__menu");
  var takePosition = isActive ? "-200px" : "0px";
  var $window = $(window);
  var timeout = false;
  var delay = 250;
  var windowsize;

  /*function scrollTo(target) {
		if ($(target).length) {
			$('html, body').stop().animate({
				scrollTop: $(target).offset().top}, 500);
		}
	}*/

  $(".hamburger").click(function() {
    $(this).addClass("toggler_active");
    $(".sidebar__menu").animate({ right: "0" }, 200);
    $(".wrapper").addClass("screen");
    $(".cover-layout")
      .css({ visibility: "visible" })
      .animate({ opacity: "1" }, 100);
  });

  $(".wrapper").click(function() {
    $(".sidebar__menu").removeClass("active");
    $(this).removeClass("screen");
  });

  $(document).mouseup(function(e) {
    var $sidebar = $(".sidebar__menu");

    if (!$sidebar.is(e.target) && $sidebar.has(e.target).length === 0) {
      $sidebar.animate({ right: "-200" }, 200);
      $(".hamburger").removeClass("toggler_active");
      $(".cover-layout")
        .css({ visibility: "hidden" })
        .animate({ opacity: "0" }, 100);
    }
  });

  /* tabs switcher in faq page */
  $(".contents__sidebar_list > li > a")
    .click(function(event) {
      event.stopPropagation();
      event.preventDefault();
      $(".contents__sidebar_list > li > a").removeClass("active");
      $(this).tab("show");
    })
    .first()
    .trigger("click");

  function checkWidth() {
    windowsize = $window.width();

    if (windowsize < 1200 && windowsize > 768) {
      $(".contents__sidebar").css("padding-top", "70px");
    } else if (windowsize < 768) {
      $(".contents__sidebar").removeClass("fixedsticky");
      $(".contents__sidebar").css("padding-top", "0");
    } else {
      $(".contents__sidebar").addClass("fixedsticky");
    }
  }

  // window.resize event listener
  window.addEventListener("resize", function() {
    clearTimeout(timeout);
    timeout = setTimeout(checkWidth, delay);
  });

  // Execute on load
  checkWidth();

  $(".sidebar__navigation_icon").click(function() {
    $(".cover-layout")
      .css({ visibility: "visible" })
      .animate({ opacity: "1" }, 10);
    $(".sidebar__navigation__list").css({ right: "0" });
  });

  $(".sidebar__navigation__list").click(function() {
    $(this).css({ right: "-250px" });
    $(".cover-layout")
      .css({ visibility: "hidden" })
      .animate({ opacity: "0" }, 50);
  });

  $(".sidebar__navigation__list .contents__sidebar_list_inset a").click(
    function() {
      $(".sidebar__navigation__list").css({ right: "-250px" });
      $(".cover-layout")
        .css({ visibility: "hidden" })
        .animate({ opacity: "0" }, 50);
    }
  );

  $(".cover-layout").click(function() {
    $(this)
      .css({ visibility: "hidden" })
      .animate({ opacity: "0" }, 450);
    $(".sidebar__navigation__list").css({ right: "-250px" });
  });

  /* smooth scroll */
  $("#sidebarScroll")
    .find(".contents__sidebar_list_inset li a[href^='#']")
    .on("click", function(e) {
      e.preventDefault();

      // store hash
      var hash = this.hash;

      // animate
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 10
        },
        500,
        function() {
          // when done, add hash to url
          // (default click behaviour)
          // window.location.hash = hash;
        }
      );
    });
});
