$(document).ready(function() {


// Hide document title in site header if you're at the top of the page
// This is to avoid duplication with the H1 of the documentation
var $document = $(document);
$('#proposition-name').addClass('visually-hidden');
$document.scroll(function() {
	$('#proposition-name').toggleClass('visually-hidden', $document.scrollTop() <= 60);
});

});