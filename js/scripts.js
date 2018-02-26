$(document).ready(function() {
  // when page is loaded, remove the loading
  $('#page-loader').addClass('loaded');

  /* Hamburger button */
  $('.rd-navbar-toggle').click(function(){
    $(this).toggleClass('active');
    $('.rd-navbar-fixed .rd-navbar-nav-wrap').toggleClass('active');
    $('.rd-navbar-search-wrap').toggleClass('active');
    
    if ($('.rd-navbar-aside__toggle').hasClass('active')) {
      $('.rd-navbar-aside__toggle, .rd-navbar-aside').removeClass('active')
    }
  });

  /* Info Box */
  $('.rd-navbar-aside__toggle').click(function () {
    $(this).toggleClass('active');
    $('.rd-navbar-aside').toggleClass('active');
    if ($('.rd-navbar-toggle').hasClass('active')) {
      $('.rd-navbar-toggle, .rd-navbar-fixed .rd-navbar-nav-wrap, .rd-navbar-search-wrap').removeClass('active');
      $('.rd-navbar--has-dropdown').removeClass('opened');
    }
  });

  /* Menu dropdowns*/
  $('.rd-navbar-submenu-toggle').click(function () {
    if ($(this).parent('li').hasClass("opened")) {
      $('.rd-navbar--has-dropdown').removeClass('opened');
    } else {
      $('.rd-navbar--has-dropdown').removeClass('opened');
      $(this).parent('li').toggleClass('opened');
    }
  });

  /*$("html").click(function() {
    $('.rd-navbar-aside__toggle').removeClass('active');
    $('.rd-navbar-aside').removeClass('active');
  });
  $('.rd-navbar-aside__toggle').click(function (e) {
    e.stopPropagation();
  });*/

  $(document).keyup(function(event){
    if(event.which==27) {
      //Hamburger
      $('.rd-navbar-toggle').removeClass('active');
      $('.rd-navbar-fixed .rd-navbar-nav-wrap').removeClass('active');
      //Info Box
      $('.rd-navbar-aside__toggle').removeClass('active');
      $('.rd-navbar-aside').removeClass('active');
    }
  });

  /*$("html").click(function() {
    $('.rd-navbar-toggle').removeClass('active');
    $('.rd-navbar-fixed .rd-navbar-nav-wrap').removeClass('active');
  });
  $('.rd-navbar-toggle').click(function (e) {
    e.stopPropagation();
  });*/


  /* Back to top on scroll */
  if ($('#back-to-top').length) {
    var scrollTrigger = 200, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show-button');
        } else {
          $('#back-to-top').removeClass('show-button');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

  /* Fixed navbar on scroll */
  if ($('#back-to-top').length) {
    var scrollTrigger = 50, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show-button');
          $('.rd-navbar-original').addClass('rd-navbar--is-stuck');
        } else {
          $('#back-to-top').removeClass('show-button');
          $('.rd-navbar-original').removeClass('rd-navbar--is-stuck');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
  }

  /* LightBox for Images */
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
    /* Hide navbar when the modal is shown*/
   // $('.rd-navbar-wrap').css('display','none');
   $('.modal-header').css('display', 'block');
  });
  
  /* Shown navbar when the modal is close*/
/*
  $(document).on('click', '.close', function(event) {
    event.preventDefault();
    $('.rd-navbar-wrap').css('display','block');
  });
*/
  
   /* Shown navbar when the modal is close*/
/*
  $(document).on('click', '.', function(event) {
    event.preventDefault();
    $('.rd-navbar-wrap').css('display','block');
  });
*/

  /* Pagination Blog */
  $('.blog#pagination').twbsPagination({
    totalPages: 4,
    onPageClick: function (event, page) {
      var tPages = 4;
      $('li.page-item').css('display','none');
      switch (true) {
        case page == 1:
          $("li.page-item:contains('1')").css('display','inline').addClass('first-item');
          $("li.page-item:contains('2')").css('display','inline');
          $('li.page-item.next').css('display','inline');
          $('li.page-item.last').css('display','inline').addClass('last-item');
          break;
        case page == 2:
          $('li.page-item.prev').css('display','inline').addClass('first-item');
          $("li.page-item:contains('1')").css('display','inline');
          $("li.page-item:contains('2')").css('display','inline');
          $("li.page-item:contains('3')").css('display','inline');
          $('li.page-item.next').css('display','inline');
          $('li.page-item.last').css('display','inline').addClass('last-item');
          break;
        case page > 2 && page < tPages:
          pageBefore = page - 1;
          pageAfter = page + 1;
          $('li.page-item.first').css('display','inline').addClass('first-item');
          $('li.page-item.prev').css('display','inline');
          $("li.page-item:contains('"+pageBefore+"')").css('display','inline');
          $("li.page-item:contains('"+page+"')").css('display','inline');
          $("li.page-item:contains('"+pageAfter+"')").css('display','inline');
          $('li.page-item.next').css('display','inline').addClass('last-item');
          break;
        case page == tPages:
          pageBefore = page - 1;
          $('li.page-item.first').css('display','inline').addClass('first-item');
          $('li.page-item.prev').css('display','inline');
          $("li.page-item:contains('"+pageBefore+"')").css('display','inline');
          $("li.page-item:contains('"+page+"')").css('display','inline').addClass('last-item');
          break;
        default:
          alert('Nobody Wins!');
      }
      $('div[id^="page-"]').css('display','none');
      var id = "page-" + page;
      $('#'+id).css('display','block');
      $('html,body').animate({
        scrollTop: 0
      }, 0);
    }
  });

  /* Pagination Services */
  $('.services#pagination').twbsPagination({
    totalPages: 4,
    onPageClick: function (event, page) {
      var tPages = 4;
      $('li.page-item').css('display','none');
      $("li.page-item:contains('1')").css('display','inline').addClass('first-item');
      $("li.page-item:contains('2')").css('display','inline').addClass('last-item');
      $('div[id^="page-"]').css('display','none');
      var id = "page-" + page;
      $('#'+id).css('display','block');
      $('html,body').animate({
        scrollTop: 0
      }, 0);
    }
  });

  /* Years and Months pagination */
  $('.yearsmonths#pagination').twbsPagination({
    totalPages: 2,
    onPageClick: function (event, page) {
      var tPages = 2;
      $('li.page-item').css('display','none');
      $("li.page-item:contains('1')").css('display','inline').addClass('first-item');
      $("li.page-item:contains('2')").css('display','inline').addClass('last-item');
      $('div[id^="page-"]').css('display','none');
      var id = "page-" + page;
      $('#'+id).css('display','block');
      $('html,body').animate({
        scrollTop: 0
      }, 0);
    }
  });

  /* Video player controls */

  //return a jQuery object
  var video = $('#jp_video_0');

  $('.jp-video-play').on('click', function() {
    $("#jp_poster_0").css("display","none");
    video.css({'width': '100%','height': '100%'});
    $(this).css('display','none');
    if(video[0].paused) {
      video[0].play();
      $('.jp-video .jp-play').removeClass('jp-play').addClass('jp-pause');
    }
    else {
      video[0].pause();
      $('.jp-video .jp-pause').removeClass('jp-pause').addClass('jp-play');
    }
    return false;
  });
 
  $('.jp-video .jp-play').on('click', function() {
    playButton= $('.jp-video .jp-play');
    $("#jp_poster_0").css("display","none");
    video.css({'width': '100%','height': '100%'});
    $('.jp-video .jp-video-play').css('opacity','0');
    if(video[0].paused) {
      video[0].play();
      $('.jp-video .jp-play').removeClass('jp-play').addClass('jp-pause');
    }
    else {
      video[0].pause();
      $('.jp-video .jp-pause').removeClass('jp-pause').addClass('jp-play');
    }
    return false;
  });
  // Stop Funcionality
  $('.jp-video .jp-stop').on('click', function() {
    video[0].pause();
    video[0].currentTime = 0;
    if($('.jp-video .jp-pause').length > 0) {
      $('.jp-video .jp-pause').removeClass('jp-pause').addClass('jp-play');
    }
    return false;
  });
  //get HTML5 video time duration
  video.on('loadedmetadata', function() {
    $('.jp-video .duration').text('00:'+(video[0].duration).toFixed());
  });
  
  //update HTML5 video current play time
  video.on('timeupdate', function() {
  var currentPos = video[0].currentTime; //Get currenttime
  var maxduration = video[0].duration; //Get video duration
  var percentage = 100 * currentPos / maxduration; //in %
  $('.jp-video .jp-play-bar').css('width', percentage+'%');
  //update HTML5 video current play time text
  if (currentPos < 10) {
  $('.jp-video .current').text('00:0'+(video[0].currentTime).toFixed());
  }
  else {
    $('.jp-video .current').text('00:'+(video[0].currentTime).toFixed());
  }
  if (currentPos == maxduration) {
    if($('.jp-video .jp-pause').length > 0) {
      $('.jp-video .jp-pause').removeClass('jp-pause').addClass('jp-play');
    }
  }
  });

  var timeDrag = false;   /* Drag status */
    $('.jp-video .jp-progress').mousedown(function(e) {
      timeDrag = true;
      updateVideoBar(e.pageX);
    });
  $(document).mouseup(function(e) {
    if(timeDrag) {
      timeDrag = false;
      updateVideoBar(e.pageX);
    }
  });
  $(document).mousemove(function(e) {
    if(timeDrag) {
      updateVideoBar(e.pageX);
    }
  });
 
  //update Progress Bar control
  var updateVideoBar = function (x) {
    var progress = $('.jp-video .jp-progress');
    var maxduration = video[0].duration; //Video duraiton
    var position = x - progress.offset().left; //Click pos
    var percentage = 100 * position / progress.width();
 
    //Check within range
    if(percentage > 100) {
        percentage = 100;
    }
    if(percentage < 0) {
        percentage = 0;
    }
 
    //Update progress bar and video currenttime
    $('.jp-video .jp-play-bar').css('width', percentage+'%');
    video[0].currentTime = maxduration * percentage / 100;
  };
  
  //Mute/Unmute control clicked
  
  $('.jp-video .jp-mute').on('click', function() {
    video[0].muted = !video[0].muted;
    if(video[0].muted){
      $('.jp-video .jp-mute').removeClass('jp-mute').addClass('jp-unmute');
    }
    if(!video[0].muted){
      $('.jp-video .jp-unmute').removeClass('jp-unmute').addClass('jp-mute');
    }
    return false;
  })
 
  //Volume control clicked
  $('.jp-video .jp-volume-bar').on('mousedown', function(e) {
    var volume = $('.jp-video .jp-volume-bar');
    var position = e.pageX - volume.offset().left;
    var percentage = 100 * position / volume.width();
    $('.jp-video .jp-volume-bar-value').css('width', percentage+'%');
    video[0].volume = percentage / 100;
  });
  
/*
  //Fast forward control
  $('.jp-video .jp-next').on('click', function() {
    video[0].playbackRate = 3;
    return false;
  });
 
  //Rewind control
  $('.jp-video .jp-previous').on('click', function() {
    video[0].playbackRate = -3;
    return false;
  });
*/ 

  /* Audio player controls */
//return a jQuery object
  var audio = $('#jp_audio_1');

  $('.jp-audio-play').on('click', function() {
    $("#jp_audio_1").css("display","none");
    $(this).css('display','none');
    if(audio[0].paused) {
      audio[0].play();
      $('.jp-audio .jp-play').removeClass('jp-play').addClass('jp-pause');
    }
    else {
      audio[0].pause();
      $('.jp-audio .jp-pause').removeClass('jp-pause').addClass('jp-play');
    }
    return false;
  });
 
  $('.jp-audio .jp-play').on('click', function() {
    playButton= $('.jp-audio .jp-play');
    $('.jp-audio .jp-audio-play').css('opacity','0');
    if(audio[0].paused) {
      audio[0].play();
      $('.jp-audio .jp-play').removeClass('jp-play').addClass('jp-pause');
    }
    else {
      audio[0].pause();
      $('.jp-audio .jp-pause').removeClass('jp-pause').addClass('jp-play');
    }
    return false;
  });
  // Stop Funcionality
  $('.jp-audio .jp-stop').on('click', function() {
    audio[0].pause();
    audio[0].currentTime = 0;
    if($('.jp-audio .jp-pause').length > 0) {
      $('.jp-audio .jp-pause').removeClass('jp-pause').addClass('jp-play');
    }
    return false;
  });
  //get HTML5 audio time duration
  audio.on('loadedmetadata', function() {
    $('.jp-audio .duration').text('00:'+(audio[0].duration).toFixed());
  });
  
  //update HTML5 audio current play time
  audio.on('timeupdate', function() {
  var currentPos = audio[0].currentTime; //Get currenttime
  var maxduration = audio[0].duration; //Get audio duration
  var percentage = 100 * currentPos / maxduration; //in %
  $('.jp-audio .jp-play-bar').css('width', percentage+'%');
  //update HTML5 video current play time text
  if (currentPos < 10 ) {
  $('.jp-audio .current').text('00:0'+(audio[0].currentTime).toFixed());
  }
  else {
    $('.jp-audio .current').text('00:'+(audio[0].currentTime).toFixed());
  }
  if (currentPos == maxduration) {
    if($('.jp-audio .jp-pause').length > 0) {
      $('.jp-audio .jp-pause').removeClass('jp-pause').addClass('jp-play');
    }
  }
  });

  var audioTimeDrag = false;   /* Drag status */
    $('.jp-audio .jp-progress').mousedown(function(e) {
      audioTimeDrag = true;
      updateAudioBar(e.pageX);
    });
  $(document).mouseup(function(e) {
    if(audioTimeDrag) {
      audioTimeDrag = false;
      updateAudioBar(e.pageX);
    }
  });
  $(document).mousemove(function(e) {
    if(audioTimeDrag) {
      updateAudioBar(e.pageX);
    }
  });
 
  //update Progress Bar control
  var updateAudioBar = function(x) {
    var progress = $('.jp-audio .jp-progress');
    var maxduration = audio[0].duration; //Video duraiton
    var position = x - progress.offset().left; //Click pos
    var percentage = 100 * position / progress.width();
 
    //Check within range
    if(percentage > 100) {
        percentage = 100;
    }
    if(percentage < 0) {
        percentage = 0;
    }
 
    //Update progress bar and video currenttime
    $('.jp-audio .jp-play-bar').css('width', percentage+'%');
    audio[0].currentTime = maxduration * percentage / 100;
  };
  
  //Mute/Unmute control clicked
  
  $('.jp-audio .jp-mute').on('click', function() {
    audio[0].muted = !audio[0].muted;
    if(audio[0].muted){
      $('.jp-audio .jp-mute').removeClass('jp-mute').addClass('jp-unmute');
    }
    if(!audio[0].muted){
      $('.jp-audio .jp-unmute').removeClass('jp-unmute').addClass('jp-mute');
    }
    return false;
  })
 
  //Volume control clicked
  $('.jp-audio .jp-volume-bar').on('mousedown', function(e) {
    var volume = $('.jp-audio .jp-volume-bar');
    var position = e.pageX - volume.offset().left;
    var percentage = 100 * position / volume.width();
    $('.jp-audio .jp-volume-bar-value').css('width', percentage+'%');
    audio[0].volume = percentage / 100;
  });
});

$(document).ready(function() {
  if ($(window).width() >= 992) {
    $('.rd-navbar-original').removeClass('rd-navbar-fixed').addClass('rd-navbar-static');
  } else {
    $('.rd-navbar-original').removeClass('rd-navbar-static').addClass('rd-navbar-fixed')
  }
});

/* Change between menu mobile and desktop */
$(window).resize(function() {
  if ($(window).width() >= 992) {
    $('.rd-navbar-original').removeClass('rd-navbar-fixed').addClass('rd-navbar-static');
  } else {
    $('.rd-navbar-original').removeClass('rd-navbar-static').addClass('rd-navbar-fixed')
  }
});

/* Second level menu desktop */
var hoverTimeout;
$('.rd-navbar--has-dropdown').hover(function() { //mouse enter

  clearTimeout(hoverTimeout); //remove timeout, we're taking over control
  $('.rd-navbar--has-dropdown').removeClass('focus'); //clear all that are hovered
  $(this).addClass('focus'); //add class to all our parents

},function() { //mouse leave

  var $this=$(this); //create local copy
  hoverTimeout = setTimeout(function() {
    $this.removeClass('focus'); //un-hover all parents
  },1000); //1 second after we remove our mouse

});

/* Search button in desktop */
$('.rd-navbar-search-toggle').click(function () {
  $(this).toggleClass('active');
  $(this).parent().toggleClass('active');
});

/* Category filter section */
$(document).ready(function(){
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

$(".filter-button").click(function(){
  var value = $(this).attr('data-filter');
  $('.filtros li').removeClass('active');
  $(this).parent().addClass('active');
  if (value == "all") {
    //$('.filter').removeClass('hidden');
    $('.filter').show('1000');
  } else {
    //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
    $(".filter").not(value).hide('3000');
    $('.filter').filter(value).show('3000');
  }
});

/* Hide label in search input */
$("#rd-navbar-search-form-input").on({
  keydown: function() {
    $(".form-label.rd-input-label").hide();
  },
  keyup: function() {
    if($("#rd-navbar-search-form-input").val() == "") {
      $(".form-label.rd-input-label").show();
    }
  }
});

/* Archives Filter */
/*
$(".filter-files").click(function(){
  var value = $(this).attr('data-filter');
  $('.filters-files li').removeClass('active');
  $(this).parent().addClass('active');
  if (value == "all") {
    //$('.filter').removeClass('hidden');
    $('.filter').css('1000');
  } else {
    //$('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
    $(".filter").not(value).hide('3000');
    $('.filter').filter(value).show('3000');
  }
});
*/
