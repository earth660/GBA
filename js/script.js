$(function(){
	$("div.panel").hide();

	$(".menu").click(function(){
		$(this).toggleClass("menuOpen").next().slideToggle();
	});

/*
$(".1, .2, .3, .4").hover(function(e){
	$(".5, .6, .7, .8").not(":animated").animate({"margin-top":"350px"})
	setTimeout(function(){
		$(".5:animated, .6:animated, .7:animated, .8:animated")
		.stop(true,false).animate({"margin-top":"350px"})
	},10)
},
function(){
	$(".5, .6, .7, .8").stop(true,false).animate({"margin-top":"30px"})
	$(".cover").stop(true,false).fadeOut(100)
});
*/

	$(".about").hover(function(){
		$("#subNav").stop(true, false).css({"height":"200px"})
		$(".about_list").fadeIn(1000)
	},
	function(){
		$("#subNav").stop(true, false).css({"height":"0px"})
		$(".about_list").css({"display":"none"})
	});



/*
	$(".about").hover(function(){
		$("#subNav").stop(true, false).animate({"height":"200px"})
		$(".about_list").fadeIn(1000)
	},
	function(){
		$("#subNav").stop(true, false).animate({"height":"0px"})
		$(".about_list").css({"display":"none"})
	});
	
	$(".curriculum").hover(function(){
		$("#subNav").stop(true, false).fadeIn()
		$(".curriculum_list").fadeIn(1000)
	},
	function(){
		$("#subNav").stop(true, false).fadeOut()
		$(".curriculum_list").css({"display":"none"})
	});

	$(".speakers").hover(function(){
		$("#subNav").stop(true, false).fadeIn()
		$(".speakers_list").fadeIn(1000)
	},
	function(){
		$("#subNav").stop(true, false).fadeOut()
		$(".speakers_list").css({"display":"none"})
	});
	
	$(".media").hover(function(){
		$("#subNav").stop(true, false).fadeIn()
		$(".media_list").fadeIn(1000)
	},
	function(){
		$("#subNav").stop(true, false).fadeOut()
		$(".media_list").css({"display":"none"})
	});
	
	$(".voice").hover(function(){
		$("#subNav").stop(true, false).fadeIn()
		$(".voice_list").fadeIn()
	},
	function(){
		$("#subNav").stop(true, false).fadeOut()
		$(".voice_list").css({"display":"none"})
	});

	$(".application").hover(function(){
		$("#subNav").stop(true, false).fadeIn()
		$(".application_list").fadeIn()
	},
	function(){
		$("#subNav").stop(true, false).fadeOut()
		$(".application_list").css({"display":"none"})
	});
	
*/
	
});