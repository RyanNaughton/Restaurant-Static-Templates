//= require jquery
//= require jquery_ujs
//= require_tree .

$.fn.corner.defaults.useNative = false;

$(document).ready(function() {
            $('#spotlight_cycle').cycle({
                fx: 'scrollUp',
                speed: 'fast',
                timeout: 12000,
                after: onAfter
            });
            $('#last_nav').corner("tr");
            $('#first_nav').corner("tl");
            $('#spotlight_cycle').children().corner("8px tl");
            $('#spotlight_left').css('padding', '4px').corner("cc:#9c2c23 15px tl");
        // })(jQuery);
});

function onAfter() { 
  $('.img_scroll').css('z-index', '2');
}
