jQuery(function() {

  jQuery('#xp_close').on('click', function(i) {
    jQuery(this).fadeOut();
    jQuery('#xp_grid .xp-grid-square').css({
      'transform': 'rotateY(180deg)'
    });
    jQuery('#xp_grid').fadeOut();
    jQuery('.expertise-blocks .x-block').each(function() {
      jQuery(this).css({
        'transform': 'translateX(0px) translateY(0px)',
        'opacity': '1'
      });
    });
  });

  jQuery('.expertise-blocks .x-block .inner').on('click', function(i) {
    jQuery('#xp_close').fadeIn();
    jQuery('#xp_grid').fadeIn();

    var $click_object = jQuery(this);
    jQuery('.expertise-blocks .x-block').each(function() {
      var block_index = ($(this).data('x-block-index')) ? $(this).data('x-block-index') : '0';

      var translate_style = 'translateX(0px) translateY(0px)';
      if (block_index == "0") {
        translate_style = 'translateX(0px) translateY(0px)';
      }
      if (block_index == "1") {
        translate_style = 'translateX(-332px)';
      }
      if (block_index == "2") {
        translate_style = 'translateY(-332px)';
      }
      if (block_index == "3") {
        translate_style = 'translateX(-332px) translateY(-332px)';
      }
      jQuery(this).css({
        'transform': translate_style,
        'opacity': '0'
      });
    });

    $click_object.parents('.x-block:first').css({
      'opacity': '1'
    });
    jQuery('#xp_grid .xp-grid-square').css({
      'transform': 'rotateY(0deg)'
    });

    jQuery('#xp_close').css({
      'opacity': '1',
      'width': '30px',
      'height': '30px'
    });
  });
});
