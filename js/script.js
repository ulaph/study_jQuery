$(function() {
  $("a").click(function() {
    $("body")
      .append('<div id="bg">')
      .append('<div id="photo">')
      .css("overflow", "hidden");

    $("#bg").hide();
    $("#photo").hide();

    var photoTop = (window.innerHeight - 420) / 2;

    $("#photo").html("<img>")
    .css("top", photoTop + $(window).scrollTop());

    $("#photo img").attr("src", $(this).attr("href"));

    $("#photo img").attr("width", 640);
    $("#photo img").attr("height", 420);
    $("#photo img").attr("alt", "Photo");

    $("#bg").fadeIn();
    $("#photo").fadeIn();

    $("#bg").click(function() {
      $(this).fadeOut(function() {
        $(this).remove();
      });
      $("#photo").fadeOut(function() {
        $(this).remove();
      });

      $("body").css("overflow", "visible");
    });

    return false;
  });
});

function animation() {
  $("body")
    .prepend($('<section id="sakura">').append('<div class="inner">'));

  for (var i = 0; i < 100; i++) {
    $(".inner").append('<div class="flake' + i + '">"');

    if (i % 2 == 0) {
      $(".flake" + i).css("background-size", 5 + "px " + 6 + "px");
    }

    var duration = Math.floor(Math.random()*(9 - 5) + 5) + Math.random();
    var delay = Math.random() * i;
    $(".flake" + i).css("left", 40 + 20 * i + "px")
                   .css("-webkit-animation-duration", duration + "s")
                   .css("animation-duration", duration + "s")
                   .css("-webkit-animation-delay",  delay + "s")
                   .css("animation-delay", delay + "s");
  }
}

// $(window).on("scroll", function(){
//   var photoTop = (window.innerHeight - 420) / 2;
//
//   $("#photo")
//   .css("top", photoTop + $(window).scrollTop());
// })
