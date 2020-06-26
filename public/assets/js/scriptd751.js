/* Template	:	Xiom v1.0.0 */
(function($){
	'use strict';
	var $win = $(window), $doc = $(document), $body_m = $('body'), $navbar = $('.navbar');
	
	// Get Window Width
	function winwidth () {
		return $win.width();
	}
	var wwCurrent = winwidth();
	$win.on('resize', function () { 
		wwCurrent = winwidth(); 
	});

	// Sticky
	var $is_sticky = $('.is-sticky');
	if ($is_sticky.length > 0 ) {
		var $navm = $('#mainnav').offset();
		$win.scroll(function(){
			var $scroll = $win.scrollTop();
			if ($win.width() > 991) {
				if($scroll > $navm.top ){
					if(!$is_sticky.hasClass('has-fixed')) {$is_sticky.addClass('has-fixed');}
				} else {
					if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
				}
			} else {
				if($is_sticky.hasClass('has-fixed')) {$is_sticky.removeClass('has-fixed');}
			}
		});
	}

    // Bootstrap Dropdown
	var $dropdown_menu = $('.dropdown'), $dropdown_toggle = $('.dropdown-toggle');	
	if ($dropdown_menu.length > 0  ) {
		$dropdown_menu.on("mouseover",function(){
			if ($win.width() > 991) {
				$(this).children('.dropdown-menu').stop().fadeIn(400);
				$(this).addClass('open'); 
			}
		});
		$dropdown_menu.on("mouseleave",function(){
			if ($win.width() > 991) {
				$(this).children('.dropdown-menu').stop().fadeOut(400);
				$(this).removeClass('open'); 
			}
		});
		$dropdown_toggle.on("click",function(){
			if ($win.width() < 991) {
				$(this).parent().children('.dropdown-menu').fadeToggle(400);
				$(this).parent().toggleClass('open'); 
				return false;
			}
		});
	}

    
	// Nav collapse
    var $trannav = $('.is-transparent');
	$('.menu-link').on("click",function() {
		$('.navbar-collapse').collapse('hide');
		$trannav.removeClass('active');
	});
	
	$(document).on('mouseup', function(e){
		if (!$trannav.is(e.target) && $trannav.has(e.target).length===0) {
			$('.navbar-collapse').collapse('hide');
			$trannav.removeClass('active');
		}
	});
	
    
    // Back to Top
    var $up_icon = $('.up-icon');
    if($up_icon.length > 0){
        $up_icon.on('click', function(){
            $("html").animate({'scrollTop' : 0},2000);
        });
    }

	// Ajax Form Submission
	var contactForm = $('#contact-form'), subscribeForm = $('#subscribe-form');
	if (contactForm.length > 0 || subscribeForm.length > 0) {
		if( !$().validate || !$().ajaxSubmit ) {
			console.log('contactForm: jQuery Form or Form Validate not Defined.');
			return true;
		}
		// ContactForm
		if (contactForm.length > 0) {
			var selectRec = contactForm.find('select.required'), 
			qf_results = contactForm.find('.form-results');
			contactForm.validate({
			invalidHandler: function () { qf_results.slideUp(400); },
			submitHandler: function(form) {
				qf_results.slideUp(400);
				$(form).ajaxSubmit({
					target: qf_results, dataType: 'json',
					success: function(data) {
						var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
						qf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
						if (data.result !== 'error') { $(form).clearForm().find('.input-field').removeClass('input-focused'); }
					}
				});
				}
			});
			selectRec.on('change', function() { $(this).valid(); });
		}
		// SubscribeForm
		if (subscribeForm.length > 0) {
			var sf_results = subscribeForm.find('.subscribe-results');
			subscribeForm.validate({
			invalidHandler: function () { sf_results.slideUp(400); },
			submitHandler: function(form) {
				sf_results.slideUp(400);
				$(form).ajaxSubmit({
					target: sf_results, dataType: 'json',
					success: function(data) {
						var type = (data.result==='error') ? 'alert-danger' : 'alert-success';
						sf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(data.message).slideDown(400);
						if (data.result !== 'error') { $(form).clearForm().find('.input-field').removeClass('input-focused'); }
					}
				});
				}
			});
		}
	}
    
    // Active Current Page
    var links = $('.navbar ul li a');
    $.each(links, function (key, va) {
       if (va.href == document.URL) {
           $(this).addClass('active');
       }
    });
    
    
    // Demo Code
	$body_m.append('<div class="pages-panel"><div class="pages-list"><span class="pages-icon"><i class="fas fa-cog fa-lg fa-spin"></i></span> <span class="color-icon"><i class="fas fa-palette fa-lg"></i></span></div><div class="color-content"><ul class="color-list"><li><a class="color-trigger theme-default" title="theme" href="#"></a></li><li><a class="color-trigger theme-blue" title="theme-blue" href="#"></a></li><li><a class="color-trigger theme-orange" title="theme-orange" href="#"></a></li><li><a class="color-trigger theme-royal" title="theme-royal" href="#"></a></li><li><a class="color-trigger theme-ruby" title="theme-ruby" href="#"></a></li><li><a class="color-trigger theme-mint" title="theme-mint" href="#"></a></li></ul></div></div><div class="pages section-pad-xs"><div class="close-icon"><i class="fas fa-times fa-lg"></i></div><div class="container"><div class="aster-content"><div class="row text-center mtn-x3"><div class="col-lg-12"><h2>ASTER VERSION</h2></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="index-aster-v1.html"><img src="images/index-aster-v1.png"></a></div><div class="pages-title"><a href="index-aster-v1.html">Aster Default</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="index-aster-v2.html"><img src="images/index-aster-v2.png"></a></div><div class="pages-title"><a href="index-aster-v2.html">Aster Alter</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="about-aster.html"><img src="images/about-aster.png"></a></div><div class="pages-title"><a href="about-aster.html">About</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="feature-aster.html"><img src="images/feature-aster.png"></a></div><div class="pages-title"><a href="feature-aster.html">Feature</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="pricing-aster-v1.html"><img src="images/pricing-aster-v1.png"></a></div><div class="pages-title"><a href="pricing-aster-v1.html">Pricing Default</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="pricing-aster-v2.html"><img src="images/pricing-aster-v2.png"></a></div><div class="pages-title"><a href="pricing-aster-v2.html">Pricing Alter</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="contact-aster.html"><img src="images/contact-aster.png"></a></div><div class="pages-title"><a href="contact-aster.html">Contact</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="login-aster.html"><img src="images/login-aster.png"></a></div><div class="pages-title"><a href="login-aster.html">Login</a></div></div></div></div></div><div class="hosta-content"><div class="row text-center"><div class="col-lg-12"><h2>HOSTA VERSION</h2></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="index-hosta-v1.html"><img src="images/index-hosta-v1.png"></a></div><div class="pages-title"><a href="index-hosta-v1.html">Hosta Default</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="index-hosta-v2.html"><img src="images/index-hosta-v2.png"></a></div><div class="pages-title"><a href="index-hosta-v2.html">Hosta Alter</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="about-hosta.html"><img src="images/about-hosta.png"></a></div><div class="pages-title"><a href="about-hosta.html">About</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="feature-hosta.html"><img src="images/feature-hosta.png"></a></div><div class="pages-title"><a href="feature-hosta.html">Feature</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="pricing-hosta.html"><img src="images/pricing-hosta.png"></a></div><div class="pages-title"><a href="pricing-hosta.html">Pricing</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="contact-hosta.html"><img src="images/contact-hosta.png"></a></div><div class="pages-title"><a href="contact-hosta.html">Contact</a></div></div></div><div class="col-md-3 col-lg-3"><div class="pages-content"><div class="pages-img"><a href="login-hosta.html"><img src="images/login-hosta.png"></a></div><div class="pages-title"><a href="login-hosta.html">Login</a></div></div></div></div></div></div></div>');
	$('.pages-icon,.close-icon').on("click", function() {
		$('.pages').toggleClass('active-demo');
		$('html').toggleClass('scrollbar-hidden');
	});

	$('.color-icon').on("click", function() {
		$('.color-content').slideToggle('slow');
	});

	var $color_trigger = $('.color-trigger');
	if ($color_trigger.length > 0 ) {
		$color_trigger.on("click",function() {
			var $self = $(this);
			var $color_value = $self.attr("title");
			$("#layoutstyle").attr("href", "assets/css/" + $color_value + ".css");
			return false;
		});
	}

})(jQuery);
