$('.header__burger').on('click', function (e) {

	// if($('body').hasClass('scroll-disabled')){
	// 	$('body').removeClass('scroll-disabled');
	// }

	e.preventDefault();
	$(this).toggleClass('header__burger--close');
	$('body').toggleClass('scroll-disabled');
	$('.header__menu').toggleClass('header__menu--open');
});