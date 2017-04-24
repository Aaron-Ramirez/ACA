$(document).ready(function(){
  //hide divs to load later
  $('.work-hero').hide();

  // runner delay
  $("#runbtn").click(function () {
    $('.work-hero').hide();
    setTimeout(function(){
      $('.run').fadeIn(1000);
      $("#runframe").attr("src", "https://aaron-ramirez.github.io/ACA/03week/blog/index.html");
  }, 1000);
});
// yamaha delay
  $("#yambtn").click(function () {
    $('.work-hero').hide();
    setTimeout(function(){
      $('#yamrow').fadeIn(1000);
      $("#yamframe").attr("src", "https://aaron-ramirez.github.io/ACA/04week/01Checkpoint/index.html");
  }, 1000);
  });
  // welcome delay
    $("#welbtn").click(function () {
      $('.work-hero').hide();
      setTimeout(function(){
        $('.welcome').fadeIn(1000);
        $("#welframe").attr("src", "https://aaron-ramirez.github.io/ACA/04week/welcome/index.html");
    }, 1000);
    });
    // foundry delay
      $("#drybtn").click(function () {
        $('.work-hero').hide();
        setTimeout(function(){
          $('.dryrow').fadeIn(1000);
          $("#dryframe").attr("src", "https://aaron-ramirez.github.io/ACA/07week/Checkpoint2/index.html");
      }, 1000);
      });
    // tictactoe delay
    $("#toebtn").click(function () {
      $('.work-hero').hide();
      setTimeout(function(){
        $('.tictac').fadeIn(1000);
        $("#toeframe").attr("src", "https://aaron-ramirez.github.io/ACA/09week/tictactoe/index.html");
    }, 1000);
  });
    // me and carousel delay
    $("#mebtn").click(function () {
      $('.work-hero').hide();
      setTimeout(function(){
        $('.merow').fadeIn(1000);
        //$("#toeframe").attr("src", "https://aaron-ramirez.github.io/ACA/09week/tictactoe/index.html");
    }, 1000);
  });

  $(".carousel-indicators").click(function(){
           $(".carousel").carousel('prev');
         })
         $(".left").click(function(){
           $(".carousel").carousel('prev');
         })
         $(".right").click(function(){
           $(".carousel").carousel('next');
         });
});
