$(document).ready(function() {
var stickyNavTop = $('.tocify-wrapper').offset().top;
 
var stickyNav = function(){
	var scrollTop = $(window).scrollTop();
	var $el = $('#breadcrumb');  //record the elem so you don't crawl the DOM everytime  
	var bottom = $el.position().top + $el.outerHeight(true) - scrollTop;
  	      
	if (scrollTop > stickyNavTop) { 
	    $('.tocify-wrapper').addClass('sticky');
	    $('.tocify-wrapper').css("top", 0);
	    $('.dark-box').addClass('sticky');
	    $('.dark-box').css("top", 0);
	} else {
		if (bottom > 0){
			$('.tocify-wrapper').css("top", (bottom - 15) + "px");
			$('.dark-box').css("top", (bottom - 114) + "px");
		}
  		
	    $('.tocify-wrapper').removeClass('sticky'); 
	    $('.dark-box').removeClass('sticky'); 
	}
};
 
//stickyNav();
 
$(window).scroll(function() {

});

var $document = $(document);

$('#proposition-name').addClass('visually-hidden');
$document.scroll(function() {
	$('#proposition-name').toggleClass('visually-hidden', $document.scrollTop() <= 60);
});

});