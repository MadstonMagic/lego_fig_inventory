$(document).ready(function() {
	
	function goBack() {
		window.history.back();
	}

	var videoIntake = document.getElementById('intake');

	videoIntake.addEventListener('ended',myHandler,false);

	function myHandler(e) {
		setTimeout( function() { 
			window.history.back();
		}, 1000);
	}
	
})