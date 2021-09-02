(function ($) {
"use strict";
// Sticky Nav Bar
$(document).ready(function () {
	$(".sidemenu-toggler").click(function () {
	  $(".sidemenu").addClass("active");
	});
	$(".close").click(function () {
	  $(".sidemenu").removeClass("active");
	});

	$(window).scroll(function () {
	  var sc = $(window).scrollTop();
	  if (sc > 150) {
		$(".header").addClass("sticky");
	  } else {
		$(".header").removeClass("sticky");
	  }
	});        

  });

// mixit Up
var mixer = mixitup('.portfolio-item',{
	animation:{
		effectsOut:'fade translateX(-100%)',
	}
});

// Progress Bar
let option ={
	startAngle: -1.55,
	size: 65,
	value: 0.85,
	fill: {color: "#0bceaf"}
}
$(".circle .bar").circleProgress(option).on('circle-animation-progress',
function(event, progress, stepValue){
	});
$(".tw .bar").circleProgress({
	value: 0.70,
});
$(".cr .bar").circleProgress({
	value: 0.60,
});
$(".amb .bar").circleProgress({
	value: 0.95,
});

})(jQuery);	

