// Allowing the user to type in each letter

$(window).keypress(function(event) {
  var newLetter;
  if (event.which == 97 || event.which == 65) {
    newLetter = $(".letter-wrapper .a").clone();
    $(".new").append(newLetter);
  }

  if (event.which == 98) {
    newLetter = $(".letter-wrapper .b").clone();
    $(".new").append(newLetter);
  }

  if (event.which == 99) {
    newLetter = $(".letter-wrapper .c").clone();
    $(".new").append(newLetter);
  }

  if (event.which == 100) {
    newLetter = $(".letter-wrapper .d").clone();
    $(".new").append(newLetter);
  }

  if (event.which == 101) {
    newLetter = $(".letter-wrapper .e").clone();
    $(".new").append(newLetter);
  }

  if (event.which == 102) {
    newLetter = $(".letter-wrapper .f").clone();
    $("new").append(newLetter);
  }

  if (event.which == 103) {
    newLetter = $(".letter-wrapper .g").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 104) {
    newLetter = $(".letter-wrapper .h").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 105) {
    newLetter = $(".letter-wrapper .i").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 106) {
    newLetter = $(".letter-wrapper .j").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 107) {
    newLetter = $(".letter-wrapper .k").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 108) {
    newLetter = $(".letter-wrapper .l").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 109) {
    newLetter = $(".letter-wrapper .m").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 110) {
    newLetter = $(".letter-wrapper .n").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 111) {
    newLetter = $(".letter-wrapper .o").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 112) {
    newLetter = $(".letter-wrapper .p").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 113) {
    newLetter = $(".letter-wrapper .q").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 114) {
    newLetter = $(".letter-wrapper .r").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 115) {
    newLetter = $(".letter-wrapper .s").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 116) {
    newLetter = $(".letter-wrapper .t").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 117) {
    newLetter = $(".letter-wrapper .u").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 118) {
    newLetter = $(".letter-wrapper .v").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 119) {
    newLetter = $(".letter-wrapper .w").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 120) {
    newLetter = $(".letter-wrapper .x").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 121) {
    newLetter = $(".letter-wrapper .y").clone();
    $(".new").append(newLetter);
  }
  if (event.which == 122) {
    newLetter = $(".letter-wrapper .z").clone();
    $(".new").append(newLetter);
  }

  if (event.which == 32) {
    newLetter = $(".letter-wrapper .letter .space").clone();
    $("new").append(newLetter);
  }

  console.log(event.which);

});

