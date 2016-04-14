//lightbox

(function($){
    

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

$("body").append($overlay);

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

$next.click(function(event){
    event.stopPropagation();
});

$prev.click(function(event){
    event.stopPropagation();
});

$image.click(function(event){
    event.stopPropagation();
});

$overlay.click(function(event) {
    $(this).hide();
    event.preventDefault();
});


//mobile menu

var $menuIcon = $("<img class='menuIcon' src='./img/menu.png' />");
$("#menu").append($menuIcon);
var $select = $("<select class='menuSelect' multiple></select>");
$("#menu").append($select);

$("#menu a").each(function() {
    var $option = $("<option></option>");
    var $anchor = $(this);
    if($anchor.parent().hasClass("selected")) {
        $option.prop("selected",true);
    };

    $option.val($anchor.attr("href"));
    $option.text($anchor.text());
    $select.append($option);
});

$select.change(function(){
    window.location = $select.val();
});
    
$menuIcon.click( function(){ 
    $select.toggle();
    $("header > a > h2").toggle();
    $("header").css("margin-bottom", "60px");
});

$(window).resize(function(){
    $select.hide();
});


//basic information - picture changing

var $sideimg =$(".sideimg");
var index;

$sideimg.each(function(i,el) {
    $(el).click(function(){
        var tmp = $(this).attr("src");
        index = i%2 ? i/2-1/2 : i/2;
        $(this).attr("src", $($(".mainimg")[index]).attr("src"));
        $($(".mainimg")[index]).attr("src", tmp);
    });
});
    
    
})(jQuery);