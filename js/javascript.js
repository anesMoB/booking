$( function() {
    $( "#inputCheckOut" ).datepicker();
    $( "#inputCheckIn" ).datepicker();

     $('.level-slider').slick({
        dots:true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,     
        fade :false,
        speed:600,
        autoplaySpeed: 3000,
        infinite: true,
        centerMode: false,
        autoplay: true,
    });

    function videoToggel(){
        video = $('.video-level').get(0)
        if (video.paused){
            video.play();
            $('.video-play-controler').hide();
            $('.video-pause-controler').show();
        }else {
            video.pause();
            $('.video-play-controler').show();
            $('.video-pause-controler').hide();

        }

    }
    
    $('.video-play-controler').click(function(){
        videoToggel()
    })
    $('.video-pause-controler').click(function(){
        videoToggel()
    })



  /*   var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
      } else {
        document.getElementById("nav").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }
 */





} );

