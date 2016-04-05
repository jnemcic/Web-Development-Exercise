var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p>"); 
var $exit = $("<span class=\"exit\">&#10006;</span>");
var $next = $("<span class='next'>&RightTriangle;</span>");
var $prev = $("<span class='prev'>&LeftTriangle;</span>");

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
    console.log(current);

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
  current = current + 1;
  var nextLightbox = $($slides[current]);
  //console.log(nextLightbox);

  var imageLocation = nextLightbox.attr("href");
  $image.attr("src", imageLocation);

  var captionText = nextLightbox.children("img").attr("alt");
  $caption.text(captionText);

});


$exit.click(function() {
  $overlay.hide();
});


/*
$slides.each(function(index, element) {
  $element = $slides[index];
  $overlay.click(function(event) {
  event.preventDefault(); 
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);

  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

  });
});

/*
$slides.each(function(index, element) { 
    $overlay.click(function(event) {
    event.preventDefault(); 
    var imageLocation = $(this).attr("href");
    $image.attr("src", imageLocation);

    $overlay.show();
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);

  });
});
*/   
   
 // $next.click(function(event) {
//  event.preventDefault(); 
//  var imageLocation = $slides[index].attr("href");
//  $image.attr("src", imageLocation);

//  $overlay.show();
//      var captionText = $(this).children("img").attr("alt");
//  $caption.text(captionText);
//  });
//});


