jQuery(window).on('load', addLink());
		function addLink(){	
			var item = 0;	
			$("#animationWindowGet g.png image").each(function() {
				
				console.log(item);
				item +=1;
				var $this = $(this);
				var src = $this.attr('src');
				$this.addClass('image');
				var el = document.createElementNS('http://www.w3.org/2000/svg', 'a');
				var $el = $(el);
				$el.attr('href', 'playstore.com');
				$this.wrap(el);
			});
		}
