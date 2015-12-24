(function() {
	const ARROW_LEFT = 37;
	const ARROW_UP = 38;
	const ARROW_RIGHT = 39;
	const ARROW_DOWN = 40;
	const PAGE_NUM = 1;

	var currentPage = 0;

	var $main = $('#mainFrame');

	$.ajax({
		url: 'slide/slide0.html',
		dataType: 'html'
	}).then(function(data){
		$main.html(data);
	});

	$(document).on('keyup', function(e) {
		switch(e.keyCode) {

			case ARROW_RIGHT:
				slideNext();
				break;

			case ARROW_LEFT:
				slidePrev();
				break;

			default:
				break;
		}
	});

	function slideNext() {

		currentPage = Math.min(PAGE_NUM, currentPage + 1);

		var $mainSlide = $('<div class="main-slide"></div>');
		var $next = $mainSlide;

		$.ajax({
			url: 'slide/slide' + currentPage + '.html',
			dataType: 'html'
		}).then(function(data) {
			$next.html(data);
			$main.html($next);
		});
	}

	function slidePrev() {
		currentPage = Math.max(0, currentPage - 1);

		var $mainSlide = $('<div class="main-slide"></div>');
		var $next = $mainSlide;

		$.ajax({
			url: 'slide/slide' + currentPage + '.html',
			dataType: 'html'
		}).then(function(data) {
			$next.html(data);
			$main.html($next);
		});
	}
})();