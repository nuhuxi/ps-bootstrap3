(function(){
  "use strict";
  
  var $pickButton = $('#pickButton');
  
  $("#reasonDropdown li a").on('click',  function(){
    var reason = $(this).text();      
    $pickButton.text(reason);                           
  });
  
  var $sentDialog = $("#sentDialog");
  
  $sentDialog.on("hidden.bs.modal", function(){

    alert("This could be JS that does something else - changes pages etc");

  });
  
})();