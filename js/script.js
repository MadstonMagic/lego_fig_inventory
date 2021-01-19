


function goBack() {
	window.history.back();
}


$(document).ready( function() {
	
	/********************/
	/* Back Home Button */
	/********************/
	
	$('.back_to_home').on('click', function() {
		goBack();
	});
	
	/* =========================== */
	/*= Disable Accidental CTRL+A =*/
	/* =========================== */	
	document.body.addEventListener('keydown', event => {
		if (event.ctrlKey && 'asp'.indexOf(event.key) !== -1) {
			event.preventDefault();
		}
	});
	//-----------------------------------------------------------------------------------
		
	
	/* ======================== */
	/* ======= Subpages ======= */
	/* ======================== */		
	
	// Pictures on the sub-pages
	//$('.posts-collection .post-img .content-img').on('click', function() {
	$('.content-img').on('click', function() {
		var source = $(this).attr('src');
		
		$('#imgLarge img').attr('src', source);
		$('#imgLarge').addClass('visible');
		$('#imgLarge').removeClass('hidden');
		
		$('#imgLarge').fadeIn(300);
		
		
		$('#imgLarge .background').on('click', function (){
			closeImg();			
		});
		
		$('#imgLarge .exit').on('click', function() {
			closeImg();
		});
		
		function closeImg() {
			$('#imgLarge').removeClass('visible');
			$('#imgLarge').addClass('hidden');
			$('#imgLarge').fadeOut(300);			
		}
	});	
	//-----------------------------------------------------------------------------------
	
	
	/* ========================= */
	/* ===== To Top Button ===== */
	/* ========================= */	
	$('.toTopWrapper').css("display","none");
	$('.toTopWrapper i').on('click', function() {
		window.scrollTo(0,0);	
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 800) {
			$('.toTopWrapper').fadeIn(200);
		} else {
			$('.toTopWrapper').fadeOut(200);
		}
	});
	//-----------------------------------------------------------------------------------
	
	
	/* ======================= */
	/* ===== Sticky Menu ===== */
	/* ======================= */	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 390) {
			$('.stickyMenuWrapper').addClass("visible");
		} else if(y < 485) {
			$('.stickyMenuWrapper').removeClass("visible");
		}
	});
	
	/* Mobile Menu */
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 400) {
			$('.sticky-mobile-menu-wrapper').addClass("visible");
			$('.sticky-mobile-menu-wrapper').removeClass("hiddenMobileSticky");
		} else if(y < 500) {
			$('.sticky-mobile-menu-wrapper').removeClass("visible");
			$('.sticky-mobile-menu-wrapper').addClass("hiddenMobileSticky");
		}
	});	
	//-----------------------------------------------------------------------------------
	
	
	
	
	$(function () {
		count = 0;
		textArray = [
			'Online known as: MadstonMagic<br><br>',
			'Tip: Klik op de afbeeldingen om ze te vergroten!<br><br>',
			'3D modeler of Minecraft Java models<br><br>',
			'Road to Professional modeler<br><br>',
			'Mission: Get accepted to the<br> Game Art Education <i class="fad fa-times-square" style="color:red;font-size:24px;"></i><br>',
			'Fulltime PC user<br><br>',
			'Addicted to looking at pictures<br> of cool games I can\'t afford'
		];
		
		setInterval(function () {
			count++;
			$(".header .slider_text").fadeOut(300, function () {
				$(this).html(textArray[count % textArray.length]).fadeIn(300);
			});
		}, 4000);
	});
	
	
	
	$('.mobile-menu .menuList').slideToggle(1);
	$('.mobile-menu .open-menu').on('click', function () {
		$('.mobile-menu .menuList').slideToggle();
	});
	
	
})
















