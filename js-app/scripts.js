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
	if ($('#dateAbout')) {
		new AirDatepicker('#dateAbout', {
			toggleSelected: false,
			autoClose: true,
		});
	}
	if ($('#dateTo')) {
		new AirDatepicker('#dateTo', {
			toggleSelected: false,
			autoClose: true,
		});
	}
	if ($('#dateAbout2')) {
		new AirDatepicker('#dateAbout2', {
			toggleSelected: false,
			autoClose: true,
			position: 'top center',
		});
	}
	if ($('#dateTo2')) {
		new AirDatepicker('#dateTo2', {
			toggleSelected: false,
			autoClose: true,
			position: 'top center',
		});
	}

});