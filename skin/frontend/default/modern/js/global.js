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
	var newWidth;
    var singleWidth;

	/*
	* collect the widths of the tabs and total width of the tab wrapper
	* calculate the width of the remaining space
	* */
	var resize = function()
	{
		var itemWidths = 0;

		// get the width of wrapper
		var wrapperWidth = $('.category-products').width();

        // get width of one single tab
        var singleWidth = $('.products-grid .item').width();

		// get the width for all tabs together
		$('.products-grid .item').each(function(){
			itemWidths += $(this).width()
		});

		// to calculate the remaining width available for the selected, clicked tab
		var combinedWidth = wrapperWidth - itemWidths;

        // since we have to set a new width to the clicked tab we need to
        // add the remaining width to the width of one single tab
        var newWidth = 419;

		// make the hovered tab recognisable by using an 'active' class
		// which can be used to styling and interaction purposes
		$(".category-products").delegate('.item', 'hover', function(){
			$('.item').removeClass('active');
			$(this).addClass('active');
		})

		return singleWidth,
               newWidth;
	};

	/*
	 * create a click action for the tab you want to expand and set the new size
	 **/
	var clickTab = function()
	{
		$(".products-grid").delegate('.item', 'click', function(){
            if($('.item').hasClass('expand')){
                $(this).animate({
                    width: resize(singleWidth)+'px'
                }, 1000, function(){
                    $('.item').removeClass('expand');
                });
            };

            if(!$('.item').hasClass('expand')){
                $(this).animate({
                    width: resize(newWidth)+'px'
                }, 1000, function(){
                    $(this).addClass('expand');
                });
            };
		});
	};

	return {
		init : function() { init(); }
	}

}(jQuery);

