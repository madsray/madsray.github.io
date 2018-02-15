$(()=>{
$(function() {
//----- OPEN
$('[data-popup-open]').on('click', function(e)  {
var targeted_popup_class = jQuery(this).attr('data-popup-open');
$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
e.preventDefault();
});
//----- CLOSE
$('[data-popup-close]').on('click', function(e)  {
var targeted_popup_class = jQuery(this).attr('data-popup-close');
$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
e.preventDefault();
});
});

// $(window).on('scroll',() =>{
//   if($("#work").is(":visible")){
//     console.log("SEAN IS VISIBLE");
//     $( "#headcont" ).css("background-color","red");
//     console.log("change");
// }
// })
// $("#about").on('scroll',() =>{
//   $( "#headcont" ).css("background-color","red");
//   console.log("change");
// })
// $( "#about" ).scroll(function() {
//   $( "#headcont" ).css("background-color","red");
//   console.log("change");
// });

});
