/*! shows hidden emails in page */
$(function(){
  $('span.linkmail').each(function() {
	  var at = / at /;
	  var dot = / dot /g;

	  var linkRealMail = $(this).text().replace(at,"@").replace(dot,".");

	  $(this).after('<a class="btn btn-info" href="mailto:'+linkRealMail+'">Email</a>');
	  $(this).remove();
  });
});