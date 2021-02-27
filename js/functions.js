$(function() {

  var stupidWidth = 0;
  var progresses = [];
  var bodymovins = [];

  function AnimateIn() {
    $('.logo').addClass('fadeIn1000');
    $('.parallax').each(function(i) {
      setTimeout(function() {
        $('.parallax').eq(i).removeClass("fadeSlide300");
      }, 350 * (i+1));
    });
  }

  function resizedWindow() {
    // winWidth = $(window).width();
    // stupidWidth = $('.stupid').width() * 2 + 97;
    //
    // console.log($('.stupid').width());
    //
    // $('.white-box').css('width', stupidWidth);
    // $('.white-box').css('min-width', stupidWidth);
    // $('.white-box').css('max-width', stupidWidth);

  }

  $(window).resize(function() {
    resizedWindow();
  })
  resizedWindow();


  var spin_offset_top;
  $('.menu-bars').on('click', function(event) {
    scroll = $(window).scrollTop();
    event.preventDefault();

    $('.nav-ul').slideToggle();
    if(scroll == 0) {
      $("nav").toggleClass("scrolled");
      if($("nav").hasClass("scrolled")) {
        $('#logo').attr("src", "style/img/SelfBasedDesigns.png");
      } else {
        $('#logo').attr("src", "style/img/SelfBasedDesignsWhite.png");
      }
    }
  })


  var scroll = 0;
  var progress_width;
  var progressed = false;
  function Scrolling() {
    scroll = $(window).scrollTop();
    spin_offset_top = $('.parallax2').offset().top - ($(window).height() - 100);

    if(scroll > 0) {
      $('#logo').attr("src", "style/img/SelfBasedDesigns.png");
      $("nav").addClass("scrolled");
    } else {
      $('#logo').attr("src", "style/img/SelfBasedDesignsWhite.png");
      $("nav").removeClass("scrolled");
    }

    if(scroll > spin_offset_top) {
      $('.parallax2').each(function(i) {
        setTimeout(function() {
          $('.parallax2').eq(i).removeClass("fadeSlideUp");
        }, 350 * (i+1));
      });
    }

    if(scroll > spin_offset_top + 250) {
      $('.progress').each(function(i) {
        progress_width = $('.progress').eq(i).children().attr('data-width');
        $('.progress').eq(i).children().animate({
          width: progress_width+"%"
        }, 2000);
      });
    }

    if(scroll > spin_offset_top + 1000 && !progressed) {
      for(var i = 0; i < bodymovins.length; i++) {
        var final = progresses[i].getAttribute('data-final');
        final = parseInt(final) / 2;
        myMove(final, bodymovins[i]);
      }
      progressed = true;
    }


    function sleep(miliseconds) {
      var currentTime = new Date().getTime();

      while (currentTime + miliseconds >= new Date().getTime()) {
      }
    }

  }

  $(window).scroll(function() {
    Scrolling();
  })

  //- Header links section
  $('.home-link').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  })

  $('.about-link').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('.parallax2').offset().top
    }, 500);
  })

  $('.work-link').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('.work-area').offset().top
    }, 500);
  })

  $('.template-link').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('.template-area').offset().top
    }, 500);
  })

  $('.contact-link').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $('footer').offset().top
    }, 500);
  })


  var svgContainer = document.getElementById('background_lines');
  var animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: 'style/json/background_lines.json'
  });

  animItem.addEventListener('DOMLoaded', function() {
    animItem.play();
  })

  var galaxy = document.getElementById('galaxy');
  var animGalaxy = bodymovin.loadAnimation({
    wrapper: galaxy,
    animType: 'svg',
    loop: true,
    autoplay: false,
    path: 'style/json/galaxy.json'
  });

  animGalaxy.addEventListener('DOMLoaded', function() {
    animGalaxy.setSpeed(0.01);
    animGalaxy.play();
  })


  for(var i = 1; i < 9; i++) {
    progresses.push(document.getElementById('circle_progress'+i));
  }

  for(var i = 0; i < progresses.length; i++) {
    var final = progresses[i].getAttribute('data-final');
    final = parseInt(final) / 2;
    var circleProgress = bodymovin.loadAnimation({
      wrapper: progresses[i],
      animType: 'svg',
      loop: false,
      autoplay: false,
      path: 'style/json/circular_progress.json'
    });
    bodymovins.push(circleProgress);
  }



  function myMove(final, animation) {
    var prog = 0;
    var id = setInterval(frame, 20);
    function frame() {
      if (prog == final) {
        clearInterval(id);
      } else {
        prog++;
        animation.goToAndStop(prog, true);
      }
    }
  }


  var pc = [];
  var element;
  window.onload = function() {
    Scrolling();
    $.when($('.background-loader').fadeOut(300)).done(function() {
      for(var i = 1; i < 9; i++) {
        element = document.getElementById('circle_progress'+i).childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[0];
        pc.push(element);
        console.log(i+"\n")
      }
      pc[0].setAttribute('stroke', '#e44d26');
      pc[1].setAttribute('stroke', '#379ad6');
      pc[2].setAttribute('stroke', '#ffda3e');
      pc[3].setAttribute('stroke', '#e01e22');
      pc[4].setAttribute('stroke', '#5f81ba');
      pc[5].setAttribute('stroke', '#02536c');
      pc[6].setAttribute('stroke', '#00c8ff');
      pc[7].setAttribute('stroke', '#ff7c00');
    })
    AnimateIn();

  }
});
