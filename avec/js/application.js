//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
    $("body").ezBgResize({
        img : "images/picture.jpg"
    });
	$('#navigation li').hover(function () {
		$(this).css('background-color', '#FFF').children().css('color', '#000');
	},
    function () {
		$(this).css('background-color', '').children().css('color', '');
	}).click(function (e) {
		e.preventDefault();
	});
	var i = 0;
	$('.scroll_pane')
		.bind('jsp-arrow-change',
			  function(event, isAtTop, isAtBottom, isAtLeft, isAtRight) {
				  if (isAtBottom) $(this).trigger('scroll_hit_bottom');
			  })
		.bind('scroll_hit_bottom',
			  function () {
				  var api = $(this).data('jsp');
				  api.getContentPane().append(
					  $('<p />').text('This is paragraph number ' + i++)
				  );
				  api.reinitialise();
			  })
		.jScrollPane();
});
