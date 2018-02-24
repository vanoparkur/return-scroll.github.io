$(window).scroll(function(){
		var _windowScroll = $(this).scrollTop();



		function browser(){
			var ua = navigator.userAgent;

			if (ua.search(/MSIE/) != -1) return 'Internet Explorer';
			if (ua.search(/Firefox/) != -1) return 'Firefox';
			if (ua.search(/Opera/)  != -1) return 'Opera';
			if (ua.search(/Chrome/) != -1) return 'Google Chrome';
			if (ua.search(/Safari/) != -1) return 'Safari';
			if (ua.search(/Konqueror/) != -1) return 'Konqueror';
			if (ua.search(/Iceweasel/) != -1) return 'Debian Iceweasel';
			if (ua.search(/SeaMonkey/) != -1) return 'SeaMonkey';

			if (ua.search(/Gecko/) != -1) return 'Gecko';

			return 'Search Bot';
		}

		if(browser() == 'Google Chrome'){
			$('.site').css({
						'transform':'translateX('+_windowScroll+'px)',
			});
		}else if(browser() == 'Internet Explorer'){
			$('.site').css({
						'-ms-transform':'translateX('+_windowScroll+'px)',
			});
		}

		

	});

			_widthSect = $('section').width();
			_heighthSect = $('section').height();
			_countSect = $('section').length;
			_widthContainer = _widthSect * _countSect ;
			_heightContainer = _heighthSect * _countSect;
			_outHeight = _widthSect - _heighthSect

			$('body').css({
				//'width':+_widthContainer+'px',
				'height':+_widthContainer - _outHeight+'px'
			});

			$('.site').css({
				'width':+_widthContainer+'px',
				'height':+_heighthSect+'px',
			});
			$('section').css({
				'width':+_widthSect+'px'
			});
