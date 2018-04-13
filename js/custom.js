$(function(){

	$('.tabs a').on('click', function() {
		$(this).parents('.tab_wrap').find('.tab_cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false;
	});


	// var hf = function(){
	// 	var h_header = $('header').height();
	// 	var h_footer = $('footer').height();
	// 	$('.content').css({
	// 		'paddingTop': h_header,
	// 		'paddingBottom': h_footer
	// 	});
	// }
    //
	// $(window).bind('load resize', hf);

});

   


