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

$slides.each(function(i, el) {

  $(el).click(function(event){
    event.preventDefault();

    current = i;

    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);

    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

    $overlay.show();
  });

});



$next.click(function(event) {
  event.preventDefault();
  
  //var next = current + 1;
  if (current < 6) {
    current = current + 1;
      var nextLightbox = $($slides[current]);
      //console.log(nextLightbox);

      var imageLocation = nextLightbox.attr("href");
      $image.attr("src", imageLocation);

      var captionText = nextLightbox.children("img").attr("alt");
      $caption.text(captionText);
      }
    else return;
});

$prev.click(function(event) {
  event.preventDefault();

  //var next = current + 1;
  if (current > 0) {
      current = current - 1;
      var nextLightbox = $($slides[current]);
      //console.log(nextLightbox);

      var imageLocation = nextLightbox.attr("href");
      $image.attr("src", imageLocation);

      var captionText = nextLightbox.children("img").attr("alt");
      $caption.text(captionText);
    }
    else return;
});


$exit.click(function() {
  $overlay.hide();
});