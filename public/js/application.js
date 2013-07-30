$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
	$('#awesomeness_holder').text($(this).data('heading'));
  });
  
  $('.skill_teller').on('click', function() {
  	var skill = $(location).attr('pathname').split("/")[2];
	$('#skill_holder').text(skill);
  });
  
  $('.meal_teller').on('click', function() {
  	var meal = meals[Math.floor(Math.random()*meals.length)];
	$('#meal_holder').text(meal);
  }); 
  
  $('.change-color').on('click', function() {
	$('body').css('background-color', $.cookie('fav_color'));
  });

});
