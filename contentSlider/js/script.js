$(document).ready(function(){

	// options

	var speed=500;  			// fade speed
	var autoswitch =true;		// autoslide option
	var autoswitch_speed=5000;	// autoslide speed

	// Add initial active class

	$('.slide').first().addClass('active');

	// hide all slides

	$('.slide').hide();

	// show first slide

	$('.active').show();

	// Next Handler
	$('#next').on('click', nextSlide);

	//Previous Handler
	$('#prev').on('click', prevSlide);

	//Auto Handler
	if(autoswitch==true){
		setInterval(nextSlide,autoswitch_speed);
	}

	// nextSlide Function

	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		}

		else{
			$('.oldActive').next().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	// prevSlide Function
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		}

		else{
			$('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});
