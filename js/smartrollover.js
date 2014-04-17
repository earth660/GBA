$(function()
{
		var targetImgs = $('img');
		
		targetImgs.each(function()
		{
			if(this.src.match('_off'))
			{
				
				this.rollOverImg = new Image();
				this.rollOverImg.src = this.getAttribute("src").replace("_off", "_over");;
				$(this.rollOverImg).css({position: 'absolute', opacity: 0, width: 300, height:150 });
				$(this).before(this.rollOverImg);
				
				$(this.rollOverImg).mousedown(function(){
					$(this).stop().animate({opacity: 0}, {duration: 0, queue: false});
				});
				
				$(this.rollOverImg).hover(function(){
					$(this).animate({opacity: 1}, {duration: 300, queue: false});
				},
				function(){
					$(this).animate({opacity: 0}, {duration: 300, queue: false});
				});
				
			}
		});
});