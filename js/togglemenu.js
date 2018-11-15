var $ = jQuery.noConflict();
$(document).ready(function(){
	//open toggle menu
	$('.icon-menu').click(function(e){
		$('html, .navigation').addClass('fixed-body open');
		$('.wrap-overlay').show();
	});

	//closed toggle menu
	$('.icon-closed').click(function(){
		$('html, .navigation').removeClass('fixed-body open');
		$('.wrap-overlay').hide();
	});

});

//closed toggle menu when click outsite
$(document).click(function(e){
	if(!$(e.target).closest('.navigation, .icon-menu').length){
        $('html, .navigation').removeClass('fixed-body open');
		$('.wrap-overlay').hide();
    }
});