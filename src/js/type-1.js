/*
*
*
*/

var xp_sub_items = {
  'consulting': {
    '0': {
      'image': 'src/img/Product-Strategy-icon.png',
      'title': 'Product Strategy',
      'url': '#',
    },
    '1': {
      'image': 'src/img/Software-Auditing-icon.png',
      'title': 'Software Auditing',
      'url': '#',
    },
    '2': {
      'image': 'src/img/SRS-Creation-icon.png',
      'title': 'SRS Creation',
      'url': '#',
    },
    '3': {
      'image': 'src/img/Gamification-icon.png',
      'title': 'Gamification',
      'url': '#',
    },
    '4': {
      'image': 'src/img/Market-Research-icon.png',
      'title': 'Market Research',
      'url': '#',
    },
    '5': {
      'image': 'src/img/UX-Analysis-icon.png',
      'title': 'UX Analysis',
      'url': '#',
    }
  },
  'engineering': {
    '0': {
      'image': 'src/img/SaaS-Products-icon.png',
      'title': 'SaaS Products',
      'url': '#engineering',
    },
    '1': {
      'image': 'src/img/Marketplace-icon.png',
      'title': 'Marketplaces',
      'url': '#',
    },
    '2': {
      'image': 'src/img/blockchain-icon.png',
      'title': 'Blockchain',
      'url': '#',
    },
    '3': {
      'image': 'src/img/AI-icon.png',
      'title': 'Artificial Intelligence',
      'url': '#',
    },
    '4': {
      'image': 'src/img/Machine-Learning-icon.png',
      'title': 'Machine Learning',
      'url': '#',
    },
    '5': {
      'image': 'src/img/Big-Data-Analytics-icon.png',
      'title': 'Big Data & Analytics',
      'url': '#',
    },
    '6': {
      'image': 'src/img/internet-of-things-icon.png',
      'title': 'Internet of Things',
      'url': '#',
    }
  },
  'services': {
    '0': {
      'image': 'src/img/Ecommerce-Platforms-icon.png',
      'title': 'Ecommerce Platforms',
      'url': 'http://services#',
    },
    '1': {
      'image': 'src/img/Cloud-Scalability-icon.png',
      'title': 'Cloud Scalability',
      'url': '#',
    },
    '2': {
      'image': 'src/img/Software-Maintenance-icon.png',
      'title': 'Software Maintenance',
      'url': '#',
    },
    '3': {
      'image': 'src/img/Software-Testing-icon.png',
      'title': 'Software Testing',
      'url': '#',
    },
    '4': {
      'image': 'src/img/DevOps-icon.png',
      'title': 'DevOps',
      'url': '#',
    },
    '5': {
      'image': 'src/img/ERP-CRM-Integrations-icon.png',
      'title': 'ERP & CRM Integrations',
      'url': '#',
    },
  },
  'research': {
    '0': {
      'image': 'src/img/patent-icon.png',
      'title': 'IP & Patent Research',
      'url': 'http://research#',
    },
    '1': {
      'image': 'src/img/Tech-White-Papers-icon.png',
      'title': 'Tech & White Papers',
      'url': '#',
    },
    '2': {
      'image': 'src/img/Neural-Networks-icon.png',
      'title': 'Neural Networks',
      'url': '#',
    },
    '3': {
      'image': 'src/img/blockchain-Scalability-icon.png',
      'title': 'Blockchain Scalability',
      'url': '#',
    }
  }
};

jQuery(function() {

  jQuery('#nt-expertise-mobile-blocks .ntxp-wrapper').on('click', function(e) {
    var $click_obj = jQuery(this);
    $click_obj.find('.ntxp-inner-section').html('');

    var active_block_title = $click_obj.find('.ntxp-outer-title').data('title');

    var active_sub_items = xp_sub_items[active_block_title];
    if (active_sub_items) {

      jQuery.each(active_sub_items, function(key, data) {
        if (data) {
          var color_bg = $click_obj.find('.ntxp-outer').data('colorbg');
          $click_obj.find('.ntxp-inner-section').append('<a href="' + data.url + '"><span class="ntxp-inner-link  '+color_bg+'">' + data.title + '</span></a>');
        }
      });
    }
    $click_obj.find('.ntxp-inner-section:first').slideToggle();
    $click_obj.toggleClass('open');

  });

  jQuery('#nt-xp-close').on('click', function(i) {
    jQuery('#nt-overlay-block').hide();
    jQuery('.nt-expertise-blocks .nt-xp-block').each(function() {
      jQuery(this).css({
        'opacity': '1'
      });
    });

    jQuery(this).fadeOut();
    jQuery('#nt-xp-grid .ntxp-grid-square').css({
      'transform': 'rotateY(180deg)'
    });

    jQuery(this).parents('.grid-more-section:first').css({
      'max-height': 0,
      'transition': 'max-height 0.15s ease-out',
      'overflow': 'hidden',
      'display': 'none'
    });

    jQuery('#nt-xp-grid').fadeOut(1000);
    jQuery(this).parents('.grid-more-section:first').fadeOut();
  });


  jQuery('.nt-expertise-blocks .nt-xp-block .inner').on('click', function(i) {
    var $click_object = jQuery(this);
    var color_bg = $click_object.data('colorbg');

    var active_block_title = jQuery(this).find('.ntxp-block-title').data('title');
    var active_sub_items = xp_sub_items[active_block_title];
    jQuery('#nt-xp-grid .ntxp-grid-square').removeClass('color-first color-second color-third color-fourth');
    jQuery('#nt-xp-close').removeClass('color-first color-second color-third color-fourth');
    jQuery('#nt-xp-grid .ntxp-grid-square').each(function(j) {
      jQuery(this).find('.ntxp-loader').attr('href', '#');
      jQuery(this).find('.ntxp-grid-data-content').html('');

      var data_load_index = jQuery(this).data('load');
      if (active_sub_items) {
        if (typeof(active_sub_items[data_load_index]) != "undefined" && active_sub_items[data_load_index] !== null) {
          var data_image = active_sub_items[data_load_index].image;
          var data_title = active_sub_items[data_load_index].title;
          var data_url = active_sub_items[data_load_index].url;

          jQuery(this).addClass(color_bg);
          jQuery('#nt-xp-close').addClass(color_bg);

          if (data_image) {
            jQuery(this).find('.ntxp-grid-data-content').html('<img src="' + data_image + '" alt="' + data_title + '" />');
          }
          if (data_title) {
            jQuery(this).find('.ntxp-grid-data-content').append('<div class="ntxp-grid-data-title">' + data_title + '</div>');
          }
          if (data_url) {
            jQuery(this).find('.ntxp-loader').attr('href', data_url);
          }
        }
      }
    });

    jQuery('#nt-xp-grid').fadeIn();
    jQuery('#nt-xp-close').fadeIn(800);
    jQuery('#nt-overlay-block').fadeIn();

    jQuery('.grid-more-section').css({
      'max-height': 'none',
      'transition': 'max-height 0.15s ease-in',
      'overflow': 'unset'
    });
    jQuery('.grid-more-section').show();

    jQuery('.nt-expertise-blocks .nt-xp-block').each(function() {
      var block_index = (jQuery(this).data('nt-xp-block-index')) ? jQuery(this).data('nt-xp-block-index') : '0';
      jQuery(this).addClass('nt-xp-disabled');
      jQuery(this).css({
        'opacity': '0.1',
        'z-index': '1'
      });
    });

    $click_object.parents('.nt-xp-block:first').css({
      'opacity': '1',
      'z-index': '6',
    });

    $click_object.parents('.nt-xp-block:first').addClass('nt-xp-enabled');
    $click_object.parents('.nt-xp-block:first').removeClass('nt-xp-disabled');

    setTimeout(function() {
      jQuery('#nt-xp-grid .ntxp-grid-square').css({
        'transform': 'rotateY(0deg)'
      });
    }, 50);

  });
});
