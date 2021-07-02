$( document ).ready(function() {
    $('#openNav').on('click', function() {
    $('#myNav').css("width", "100%");
  });
  
  $('#closeNav').on('click', function() {
    $('#myNav').css("width", "0%");
  });
 // $('[data-toggle="tooltip"]').tooltip();
});