$(function() {
    $(".reply").click(function(e){
      e.preventDefault();
      $(".answer").addClass('d-none');
      $('.editor').removeClass('d-none');
      $('.mark').addClass('d-none');
      $('.cancel').removeClass('d-none');
    })
    $(".cancel").click(function(e){
      e.preventDefault();
      $(".answer").removeClass('d-none');
      $('.editor').addClass('d-none');
      $('.cancel').addClass('d-none');
      $('.mark').removeClass('d-none');
    })
  });