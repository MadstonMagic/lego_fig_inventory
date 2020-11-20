$(document).ready(function(){
	//Show all categories
	$('.cat_all').on('click',function() {
		$('.over-mij-wrapper').css("display","none");
		$('.single-post.all').css("display","block");
	});
	
	//Show Over Mij block
	$('.cat_over_mij').on('click',function(){
		$('.over-mij-wrapper').css("display","block");
		$('.single-post.all').css("display","none");
	});
	
	//Show Gun Category
	$('.cat_gun').on('click',function(){
		$('.over-mij-wrapper').css("display","none");
		$('.single-post').css("display","block");
		$('.single-post.all:not(.gun)').css("display","none");
	});
	
	//Show Weapon Category
	$('.cat_weapon').on('click',function(){
		$('.over-mij-wrapper').css("display","none");
		$('.single-post').css("display","block");
		$('.single-post.all:not(.weapon)').css("display","none");
	});
	
	//Show Animal/Monster Category
	$('.cat_animal_monster').on('click',function(){
		$('.over-mij-wrapper').css("display","none");
		$('.single-post').css("display","block");
		$('.single-post.all:not(.animal_monster)').css("display","none");
	});
	
	//Show Misc Category
	$('.cat_misc').on('click',function(){
		$('.over-mij-wrapper').css("display","none");
		$('.single-post').css("display","block");
		$('.single-post.all:not(.misc)').css("display","none");
	});
	
	//Show WaveFront Category
	$('.cat_wavefront').on('click',function(){
		$('.over-mij-wrapper').css("display","none");
		$('.single-post').css("display","block");
		$('.single-post.all:not(.wavefront)').css("display","none");
	});	
});