$('#search').on('click', function(e) {
	e.preventDefault();
	$('.search__wrapper').addClass('search__wrapper--open');
	$('body').addClass('scroll-disabled');
	$('.search__input').focus();

	if($('.search__wrapper').hasClass('search__wrapper--open')) {
		$(document).mouseup(function (e){ 
			var div = $('.search__wrapper'); 
			if (!div.is(e.target) 
					&& div.has(e.target).length === 0) { 
						$('.search__wrapper').removeClass('search__wrapper--open');
						$('body').removeClass('scroll-disabled');
					}
		});

		$(document).keyup(function(e) {
			if (e.key === "Escape" || e.keyCode === 27) {
				$('.search__wrapper').removeClass('search__wrapper--open');
				$('body').removeClass('scroll-disabled');
			}
		});
	
	}

});

$('#c').on('click', function(e) {
	e.preventDefault();
	$('.search__wrapper').removeClass('search__wrapper--open');
	$('body').removeClass('scroll-disabled');
});






