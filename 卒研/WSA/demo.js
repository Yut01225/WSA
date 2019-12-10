/*メニューボタン*/
$(document).ready(function() {
  $(".trigger").click(function() {
    $(".menu").toggleClass("active"); 
  });
});


$(document).on('click','#login-button',function(event){
  //クリック後の動作を記述
  event.preventDefault();
  $("form").fadeOut();
  $('.wrapper').addClass('form-success');
});
