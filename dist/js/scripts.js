$(document).ready(function () {

	// Стрелка прокрутки вверх страницы
	$(function () {
		$(window).scroll(function () {
			if ($(window).scrollTop() > 100) {
				$('#scroll_top').addClass('show');
			} else {
				$('#scroll_top').removeClass('show');
			}
		});

		$('#scroll_top').click(function () {
			$('html, body').animate({ scrollTop: 0 }, 600);
			return false;
		});
	});

	// Календарь в выборе дат
	if ($('#dateAbout').length) {
		new AirDatepicker('#dateAbout', {
			toggleSelected: false,
			autoClose: true,
		});
	}
	if ($('#dateTo').length) {
		new AirDatepicker('#dateTo', {
			toggleSelected: false,
			autoClose: true,
		});
	}
	if ($('#dateAbout2').length) {
		new AirDatepicker('#dateAbout2', {
			toggleSelected: false,
			autoClose: true,
			position: 'top center',
		});
	}
	if ($('#dateTo2').length) {
		new AirDatepicker('#dateTo2', {
			toggleSelected: false,
			autoClose: true,
			position: 'top center',
		});
	}
	
	// Cкролл карточек мышкой
	function scrollCards() {
		var scr = $(".cards00__scroll ");
		scr.mousedown(function () {
			var startX = this.scrollLeft + event.pageX;
			var startY = this.scrollTop + event.pageY;
			scr.mousemove(function () {
				this.scrollLeft = startX - event.pageX;
				this.scrollTop = startY - event.pageY;
				return false;
			});
		});
		$(window).mouseup(function () {
			scr.off("mousemove");
		});
	}
	scrollCards();


});