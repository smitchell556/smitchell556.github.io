//Some function that fades contact button in and out on hover

//Function to the css rule
//$(document).ready(function() {
//    // run test on initial page load
//    checkSize();

// run test on resize of the window
$(window).resize(checkSize);

function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}

function checkSize(){
    if ($(".header-background").css("height") != "250px" ){
        $(".link-button").css("opacity", "1");
    }
}

function contactButton(visibility) {
    if (isTouchDevice()) {
      $(".link-button").css("opacity", "1");
    } else {
        if ($(".header-background").css("height") == "250px"){
              if (visibility == "show") {
                $(".link-button").fadeTo("slow", 1, "linear");
              } else {
                $(".link-button").fadeTo("slow", 0, "linear");
              }
        }
    }
}