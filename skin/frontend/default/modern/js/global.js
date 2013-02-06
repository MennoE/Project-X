jQuery(document).ready(function(){

	Initialize.init();
});

/**
 * Initialize
 */
var Initialize = function($) {

	var init = function()
	{
		resize();
		clickTab();
	};

	// collect available tab sizes in variables
	var wrapperWidth;
	var itemSize;
    var itemWidths;

	/*
	* collect the widths of the tabs and total width of the tab wrapper
	* calculate the width of the remaining space
	* */
	var resize = function()
	{
		var itemWidths = 0;

		// get the width of wrapper
		var wrapperWidth = $('.wrapper').width();

		// get the width for each tab
		$('.tab-wrapper li').each(function(){
			itemWidths = $(this).width();
		});

		// to calculate the remaining width available for the selected, clicked tab
		var itemSize = wrapperWidth - itemWidths;

		// make the hovered tab recognisable by using an 'active' class which can be used to styling and interaction purposes
		$(".wrapper").delegate('li', 'hover', function(){
			$('li').removeClass('active');
			$(this).addClass('active');
		})

		return wrapperWidth,
			   itemSize;
	};

	/*
	 * create a click action for the tab you want to expand and set the new size
	 **/
	var clickTab = function()
	{
		$(".tab-wrapper").delegate('li', 'click', function(){
            $('li').animate({
                width: resize(itemSize)+'px'
            }, 1500, function(){
                $(this).removeClass('expand');
            });

			$(this).animate({
				width: resize(itemSize)+'px'
			}, 1500, function(){
				$(this).addClass('expand');
			});
		});
	};

	return {
		init : function() { init(); }
	}

}(jQuery);

