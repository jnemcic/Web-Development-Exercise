var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>");
var $exit = $("<a href='#' class=\"exit\">&#10006;</a>");
var $next = $("<a href='#' class='next'>&RightTriangle;</a>");
var $prev = $("<a href='#' class='prev'>&LeftTriangle;</a>");

$overlay.append($exit);
$overlay.append($image);
$overlay.append($caption);
$overlay.append($next);
$overlay.append($prev);

$("#gallery").append($overlay);

var $slides = $("a.lightbox");

var current;

var motion = function(current){ 
    var imageLocation = $($slides[current]).attr("href");
    $image.attr("src", imageLocation);
    var captionText = $($slides[current]).children("img").attr("alt");
    $caption.text(captionText);
}

$slides.each(function(i, el) {
  $(el).click(function(event){
    event.preventDefault();
    current = i;
    motion(current);
    $overlay.show();
  });
});

$next.click(function(event) {
  event.preventDefault();
  
  if (current < 6) {
    current = current + 1;
      motion(current);
      }
    else return;
});

$prev.click(function(event) {
  event.preventDefault();

  if (current > 0) {
      current = current - 1;
      motion(current);
    }
    else return;
});

$exit.click(function() {
  $overlay.hide();
});