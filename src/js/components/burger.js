$('.header__burger').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('header__burger--close');
	$('body').toggleClass('scroll-disabled');
	$('.header__menu').toggleClass('header__menu--open');
});