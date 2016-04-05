var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>"); 
var $exit = $("<a href='#' class=\"exit\">&#10006;</a>");
var $next = $("<a href='#' class='control_next'>&#35;</a>");
var $prev = $("<a href='#' class='control_prev'>&ang;</a>");

var slideCount = $('#gallery li').length;
var slideWidth = $('#gallery li').width();
var slideHeight = $('#gallery li').height();
var sliderUlWidth = slideCount * slideWidth;

$overlay.append($exit);
$overlay.append($image);
$overlay.append($caption);
$overlay.append($next);
$overlay.append($prev);

$("#gallery").append($overlay);

var $slides = $("a.lightbox");

$("#gallery li a:first-child").click(function(event) {
  event.preventDefault(); 
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
    
  function moveLeft() {
    $('#gallery').animate({
        left: + slideWidth
    }, 200, function () {
        $('#gallery').css('left', '');
    });
    };

    function moveRight() {
        $('#gallery').animate({
            left: - slideWidth
        }, 200, function () {
            $('#gallery').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
    
});

$exit.click(function(){
    $overlay.hide();
});