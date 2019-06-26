let dropMenu = $('#drop-menu');

dropMenu.on('click', function() {

  if (dropMenu.data("toggle") == "off"){

    // dropMenu.attr("aria-expanded","true");
    // dropMenu.css("background-color","#fff");
    // $(".flyout").css("display","initial");
    dropMenu.attr("data-toggle","on");
    console.log('Result A');

  } else {

    dropMenu.attr("data-toggle","off");
    // dropMenu.attr("aria-expanded","false");
    // dropMenu.css("background-color","#fff");
    // $(".flyout").css("display","none");
    console.log('Result B');

  };

  // if ($(this).attr("aria-expanded","true")) {
  //
  //   $(this).attr("aria-expanded","false");
  //   $(this).css("background-color","#00467f");
  //   $(".flyout").css("display","none");
  //   console.log('Im working');
  //
  // }

});
