var $ = jQuery.noConflict();
$(document).ready(function(){
	$('.list-accordion .item-accordion .title').click(function(){
		var $this = $(this);
		$this.parent().siblings('li').find('.content-accordion').slideUp(350);//close when click siblings item
		$this.toggleClass('active');
		$this.parent().siblings('li').find('.active').removeClass('active');
		$this.next().slideToggle(350);
	});
});