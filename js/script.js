$(document).ready( function() {
	//-----------------------------------------------------------------------------------
	/* ======================== */
	/* ======= Subpages ======= */
	/* ======================== */		
	
	// Pictures on the sub-pages
	$('.content .contentImg').on('click', function() {
		var source = $(this).attr('src');
		
		$('#img-large img').attr('src', source);
		$('#img-large').addClass('visible');
		$('#img-large').removeClass('hidden');
		
		$('#img-large').fadeIn(300);
		
		$('#img-large .exit').on('click', function() {
			$('#img-large').removeClass('visible');
			$('#img-large').addClass('hidden');
			
			$('#img-large').fadeOut(300);
		});
	});	
	$('.toTopWrapper').css("display","none");
	$('.toTopWrapper i').on('click', function() {
		window.scrollTo(0,0);	
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 800) {
			$('.toTopWrapper').css("display","block");
		} else {
			$('.toTopWrapper').css("display","none");
		}
	});
})