$(function(){
	
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		if (scroll >= 30) {
			$('.header').addClass('header--sticky');
		} else {
			$('.header').removeClass('header--sticky');
		}
	});
	$('.header__burger').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('header__burger--close');
		$('body').toggleClass('scroll-disabled');
		$('.header__menu').toggleClass('header__menu--open');
	});
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

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cdFxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIHNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblx0XHRpZiAoc2Nyb2xsID49IDMwKSB7XHJcblx0XHRcdCQoJy5oZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyLS1zdGlja3knKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGVhZGVyLS1zdGlja3knKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQkKCcuaGVhZGVyX19idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnaGVhZGVyX19idXJnZXItLWNsb3NlJyk7XHJcblx0XHQkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3Njcm9sbC1kaXNhYmxlZCcpO1xyXG5cdFx0JCgnLmhlYWRlcl9fbWVudScpLnRvZ2dsZUNsYXNzKCdoZWFkZXJfX21lbnUtLW9wZW4nKTtcclxuXHR9KTtcclxuXHQkKCcucHJvZHVjdC1jYXRlZ29yaWVzX19uYXZpZ2F0aW9uLS1kZXNrdG9wIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcclxuXHRcdCQoJy5oZWFkZXInKS5hZGRDbGFzcygnaGVhZGVyLS1zdGlja3knKTtcclxuXHRcdHZhciBzY3JvbGxOYW1lID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblx0XHR2YXIgc2Nyb2xsRWxlbSA9ICQoc2Nyb2xsTmFtZSk7XHJcblx0XHR2YXIgc2Nyb2xsVG9wID0gc2Nyb2xsRWxlbS5vZmZzZXQoKS50b3AgLSA2MDtcclxuXHRcdFxyXG5cdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3A6IHNjcm9sbFRvcFxyXG5cdFx0fSwgNTAwKTtcclxuXHRcclxuXHR9KTtcclxuXHRcclxuXHQkKCcucHJvZHVjdC1jYXRlZ29yaWVzX19uYXZpZ2F0aW9uLS1tb2JpbGUgc2VsZWN0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG5cdFxyXG5cdFx0JCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXItLXN0aWNreScpO1xyXG5cdFx0dmFyIHNjcm9sbE5hbWUgPSAkKCBcIi5wcm9kdWN0LWNhdGVnb3JpZXNfX25hdmlnYXRpb24tLW1vYmlsZSBzZWxlY3Qgb3B0aW9uOnNlbGVjdGVkXCIgKS52YWwoKTtcclxuXHRcdHZhciBzY3JvbGxFbGVtID0gJChzY3JvbGxOYW1lKTtcclxuXHRcdHZhciBzY3JvbGxUb3AgPSBzY3JvbGxFbGVtLm9mZnNldCgpLnRvcCAtIDYwO1xyXG5cdFx0XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogc2Nyb2xsVG9wXHJcblx0XHR9LCA1MDApO1xyXG5cdFx0XHJcblx0fSk7XHJcblxyXG59KTsiXX0=
