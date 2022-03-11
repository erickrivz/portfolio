var $ = jQuery.noConflict();

var navbreak = 1285; //change this to change breakpoint and match the max-width media queries in the CSS

function hamburger(){
	$(".hamburger").on('click', function(e){
		e.preventDefault();
		if(window.innerWidth< navbreak){
			$('nav .mobile-menu').stop(1,0).slideToggle(250,
				function(){
					if($(this).css('display') == 'none'){
						$(this).css('display', '');
					}
				});
		}
	});
}

function mobileMenuPos(){

	var h = $('header.site-header').outerHeight();

	$('nav .mobile-menu').css('top', h + 'px');

	if(window.innerWidth> navbreak){
		$('nav .mobile-menu').css('display','none');
	}
}

jQuery(document).ready(
	function()
	{
		hamburger();
		mobileMenuPos();

		$(window).resize(function(){
			mobileMenuPos();
		})
	}
);