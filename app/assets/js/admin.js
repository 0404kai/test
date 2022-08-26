$(function() {
    $('.arrow').click(function(e){
      e.preventDefault();
      $('.up-arrow').toggleClass('d-none');
      $('.down-arrow').toggleClass('d-none');
    })
  });