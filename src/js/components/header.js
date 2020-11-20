$(window).scroll(function () {
	var scroll = $(this).scrollTop();
	if (scroll >= 30) {
		$('.header').addClass('header--sticky');
	} else {
		$('.header').removeClass('header--sticky');
	}
});