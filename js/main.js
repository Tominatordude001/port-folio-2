(function($) {   // just needed if using jQuery

	// TweenLite.to("#poly-design-color", .2, {x: 138, y:-1000, opacity:0}); // starts out at top offscreen with opacity 0

	$(window).load(function() {
		var windowWidth = window.innerWidth; // viewport width
		var windowHeight = window.innerHeight; // viewport width
		// $("body").css({width:windowWidth});
		
		// initial position of parallelograms just outside of viewport to the right
		var shape_width = $(".image-container-1").width();
		$(".image-container-1").css({right:-(shape_width*1.1)});
		$(".image-container-2").css({right:-(shape_width*1.1)});
		$(".image-container-3").css({right:-(shape_width*1.1)});

		// determine initial width of box2 based on height to width ratio of viewport
		var adj_shape_width = shape_width*.78;
		if ((adj_shape_width*3) >= (windowWidth/1.45)) { // short layout
			var box2_init_width = (windowWidth/1.66)-40;
		} else { // long layout
			var box2_init_width = shape_width*2.15;
		}; 


		var gtc =  "1fr " + box2_init_width + "px"; // gtc --> grid-template-columns
		document.getElementById("wrap").style.gridTemplateColumns = gtc;
		TweenLite.to(".box1", .5, {opacity:1, delay: 1});
		TweenMax.staggerFrom("#david_gonzalez #david path", 0.5, {opacity:0, scale:.1, y:200, delay:0.5}, 0.2);
		TweenMax.staggerFrom("#david_gonzalez #gonzalez path", 0.5, {opacity:0, scale:3, rotation:-180, delay:1.5}, 0.1);

			// ───────── initial testing start ─────────
			//#region
			// var test = $("body").outerWidth();
			// var test = $(".scrollbar").css("width");
			// var test = adj_shape_width*3;
			// var test2 = box2_init_width;
			// var test2 = $("#para").css("width");
			// $(".info").html((test) + " ------ " + test2); // ==> don't delete yet 
			//#endregion
			// ───────── initial testing end ─────────

		// * ────────> move parallelograms into position on load <────────
		// #region
		// move parallelograms into position on viewport after window.load using GSAP
		var adj_shape_width = shape_width*.78;
		var init_group_width = windowWidth/1.66;
		var screen_ratio_coeffecient = "???";

		if ((adj_shape_width*3) >= (windowWidth/1.45)) { // short layout
			TweenLite.to(".image-container-1", .5, {x:-(init_group_width*1.04), delay:.4});    		// design block
			TweenLite.to(".image-container-2", .5, {x:-(init_group_width*(2/3)*1.08), delay:.2});   // print block
			TweenLite.to(".image-container-3", .5, {x:-(init_group_width*(1/3)*1.2), delay:.2});	// web block									// web block
		} else { // long layout
			TweenLite.to(".image-container-1", .5, {x:-(adj_shape_width*2.9), delay:.4});    // design block
			TweenLite.to(".image-container-2", .5, {x:-(adj_shape_width*2), delay:.2});      // print block
			TweenLite.to(".image-container-3", .5, {x:-(shape_width*.84)});                  // web block
		}; 
		// #endregion 

		
		// * ────────> START blur text (I design stuff) animation <────────
		var timeline = TweenMax.from("#hue1feGaussianBlur", 2, {
			opacity:0,
		 	paused: true,
		 	attr: {"stdDeviation": 30},
		 	delay:2,
		});
		timeline.play();
		// ──────────────────────── END blur animation ──────────────────── 
		

		TweenLite.to("#poly-print-gray", .2, {opacity:0}); // gray starts down out of the way
		// TweenLite.to("#poly-print-gray", .2, {x: 138, y:-1000, opacity:0}); // gray starts up out of the way

		// * ──────────────> Mouse over/out events <──────────────
		$("#poly-design-color").on("mouseover", function() {

			// TweenLite.to("#poly-print-color", .2, {x: 138, y:-1000});
			TweenLite.to("#poly-print-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#print-text", .2, {opacity:0.1});

			// TweenLite.to("#poly-web-color", .2, {x: 138, y:-1000, delay:.1});
			TweenLite.to("#poly-web-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#web-text", .2, {opacity:0.1});

			$(this).css({cursor:"pointer"});

			// TweenLite.to("#ducky", .1, {scale:1.15, transformOrigin:"50% 50%", ease:Power1.easeOut}); // I don't like
		})

		$("#poly-design-color").on("mouseout", function() {
			TweenLite.to("#poly-print-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-print-gray", .2, {opacity:0.0});
			TweenLite.to("#print-text", .2, {opacity:0.6});

			TweenLite.to("#poly-web-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-web-gray", .2, {opacity:0.0});
			TweenLite.to("#web-text", .2, {opacity:0.6});
		});

		$("#poly-print-color").on("mouseover", function() {

			TweenLite.to("#poly-design-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#design-text", .2, {opacity:0.1});

			TweenLite.to("#poly-web-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#web-text", .2, {opacity:0.1, delay:.1});

			$(this).css({cursor:"pointer"});
		});

		$("#poly-print-color").on("mouseout", function() {

			TweenLite.to("#poly-design-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-design-gray", .2, {opacity:0.0});
			TweenLite.to("#design-text", .2, {opacity:0.6});

			TweenLite.to("#poly-web-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-web-gray", .2, {opacity:0.0});
			TweenLite.to("#web-text", .2, {opacity:0.6});
		});

		$("#poly-web-color").on("mouseover", function() {
			TweenLite.to("#poly-design-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#design-text", .2, {opacity:0.1});

			TweenLite.to("#poly-print-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#print-text", .2, {opacity:0.1});

			$(this).css({cursor:"pointer"});
			// $("#web-text").css({opacity:0});
		});

		$("#poly-web-color").on("mouseout", function() {
			TweenLite.to("#poly-design-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-design-gray", .2, {opacity:0.0});
			TweenLite.to("#design-text", .2, {opacity:0.6});

			TweenLite.to("#poly-print-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-print-gray", .2, {opacity:0.0});
			TweenLite.to("#print-text", .2, {opacity:0.6});
		});

	}); // .onload end ──────────────────────────────────────────


	
	// ───────── on resize re-adjust positions using vanilla js (not with jquery) ─────────
	$(window).resize(function(){

		var windowWidth = window.innerWidth; // viewport width
		var windowHeight = window.innerHeight; // viewport width
		var shape_width = $(".image-container-1").width();

		var adj_shape_width = shape_width*.78;
		var adj_group_width = windowWidth/1.66;

		// ─────────────────────────────── save ──────────────────────────────────
		// #region 
		// var right_pos_of_design = $("#id_design").css("right").replace(/[^-\d\.]/g, '');
		// var right_pos_of_print = ((right_pos_of_design-right_pos_of_web)/2)-100;
		// var right_pos_of_web = $("#id_web").css("right").replace(/[^-\d\.]/g, '');  // ==> don't delete 
		// #endregion
		// ─────────────────────────────── end save ───────────────────────────────

 		// ────────── testing ──────────
		// #region
		// var testing_pos = windowWidth-shape_width*.84; // if using CSS left
	    // $(".info").html("left = " + testing_pos + " and width of 3 is " + shape_width);
		// $(".info2").css({position:"absolute", left:testing_pos}); // ==> Don't delete!! 
		// #endregion 
		// ────────── testing end ──────────

		// * ────────────────>  re-positioning on resize <────────────────
	    function rePosition() {  // don't use jquery for re-positioning on resize

	    	if ((adj_shape_width*3) >= (windowWidth/1.45)) { // short layout
	    		var box2_adj_width = (windowWidth/1.66)-40;
	    		// ────────── set right to auto ──────────
	    		var adj_design_right = "auto"; // set position from right to left
	    		var adj_print_right = "auto";
	    		var adj_web_right = "auto";
	    		// ────────── calculate left positions ──────────
	    		var adj_design_left = ((windowWidth-box2_adj_width)*.94) + "px";
	    		var adj_design_left_no_px = ((windowWidth-box2_adj_width)*.94);
	    		var adj_print_left = adj_design_left_no_px + (box2_adj_width/3) + "px";
	    		var adj_web_left = adj_design_left_no_px + 1.95*(box2_adj_width/3) + "px";
			} else { // long layout
	    		var box2_adj_width = shape_width*2.15;
	    		// ────────── set left to auto ──────────
	    		var adj_design_left = "auto";
	    		var adj_print_left = "auto";
	    		var adj_web_left = "auto";
	    		// ────────── calculate right positions ──────────
	    	    var adj_design_right = shape_width*1.2 + "px";
	    	    var adj_print_right = shape_width*.5 + "px";
	    	    var adj_web_right = -shape_width*.2 + "px";
	    	};

			document.getElementById("id_design").style.cssText = "position:absolute;display:block;";
			document.getElementById("id_design").style.right   = adj_design_right;
			document.getElementById("id_design").style.left    = adj_design_left;
			document.getElementById("id_print").style.cssText  = "position:absolute;display:block;";
			document.getElementById("id_print").style.right    = adj_print_right;
			document.getElementById("id_print").style.left     = adj_print_left;
			document.getElementById("id_web").style.cssText    = "position:absolute;display:block;";
			document.getElementById("id_web").style.right      = adj_web_right;
			document.getElementById("id_web").style.left       = adj_web_left;

			// Set hero grid on resize
			var gtc =  "1fr " + box2_adj_width + "px" ; // gtc --> css style - grid-template-columns
			document.getElementById("wrap").style.gridTemplateColumns = gtc;


				// ───────── resizing test ─────────
				// var test = adj_print_left + " ------- " + adj_print_right;
				// var test = $("#wrap").css("left");
			    // $(".info").html(test); // ==> Keep 
				// ───────── testing end ─────────


	    };
	    rePosition()


	}); // resize end



})(jQuery);  // just needed if using jQuery

