$('.product-categories__navigation--desktop a').on('click', function(e){

	$('.header').addClass('header--sticky');
	var scrollName = $(this).attr('href');
	var scrollElem = $(scrollName);
	var scrollTop = scrollElem.offset().top - 60;
	
	$('html, body').animate({
		scrollTop: scrollTop
	}, 500);

});

$('.product-categories__navigation--mobile select').on('change', function(e){

	$('.header').addClass('header--sticky');
	var scrollName = $( ".product-categories__navigation--mobile select option:selected" ).val();
	var scrollElem = $(scrollName);
	var scrollTop = scrollElem.offset().top - 60;
	
	$('html, body').animate({
		scrollTop: scrollTop
	}, 500);
	
});