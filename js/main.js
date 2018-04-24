(function($) {   // just needed if using jQuery

	// TweenLite.to("#poly-design-color", .2, {x: 138, y:-1000, opacity:0}); // starts out at top offscreen with opacity 0
	/*global TweenLite:true*/
	/*global TweenMax:true*/
	/*global jQuery:true*/
	/*eslint no-unused-vars: ["error", { "args": "none" }]*/

	$(window).load(function() {

		if ( $(window).width() > 739) {
			//Add your javascript for large screens here
			Widescreen();
		}
		else {
			//Add your javascript for small screens here
			alertNarrow();
		}
	
		// | 51d4a992-b807-43e1-85f0-50a025e0cbf4
		function alertWide() { // eslint-disable-line no-unused-vars
			alert("Wide screen");
		}

		function alertNarrow() {
			alert("Narrow screen");
		}

		function Widescreen() {
		
		// * ────────> Widescreen Function <────────
		//#region
			var windowWidth = window.innerWidth; // viewport width
			
			// initial position of parallelograms just outside of viewport to the right
			var shape_width = $(".image-container-1").width();
			$(".image-container-1").css({right:-(shape_width*1.1)});
			$(".image-container-2").css({right:-(shape_width*1.1)});
			$(".image-container-3").css({right:-(shape_width*1.1)});

			// determine initial width of box2 based on height to width ratio of viewport
			var adj_shape_width = shape_width*0.78;
			var box2_init_width;
			if ((adj_shape_width*3) >= (windowWidth/1.45)) { // short layout
				box2_init_width = (windowWidth/1.66)-40;
			} else { // long layout
				box2_init_width = shape_width*2.15;
			}

			var gtc =  "1fr " + box2_init_width + "px"; // gtc --> grid-template-columns
			document.getElementById("wrap").style.gridTemplateColumns = gtc;
			TweenLite.to(".box1", .5, {opacity:1, delay: 1});
			TweenMax.staggerFrom("#david_gonzalez #david path", 0.5, {opacity:0, scale:0.1, y:200, delay:0.5}, 0.2);
			TweenMax.staggerFrom("#david_gonzalez #gonzalez path", 0.5, {opacity:0, scale:3, rotation:-180, delay:1.5}, 0.1);

			// ───────── initial testing start ─────────
			// var test = $("body").outerWidth();
			// var test = $(".scrollbar").css("width");
			// var test = adj_shape_width*3;
			// var test2 = box2_init_width;
			// var test2 = $("#para").css("width");
			// $(".info").html((test) + " ------ " + test2); // ==> don't delete yet 
			// ───────── initial testing end ─────────

			// * ────────> move parallelograms into position on load <────────
			// move parallelograms into position on viewport after window.load using GSAP
			var init_group_width = windowWidth/1.66;

			if ((adj_shape_width*3) >= (windowWidth/1.45)) { // short layout
				TweenLite.to(".image-container-1", 0.5, {x:-(init_group_width*1.04), delay:.4});    		// design block
				TweenLite.to(".image-container-2", 0.5, {x:-(init_group_width*(2/3)*1.08), delay:.2});   // print block
				TweenLite.to(".image-container-3", 0.5, {x:-(init_group_width*(1/3)*1.2), delay:.2});	// web block
			} else { // long layout
				TweenLite.to(".image-container-1", .5, {x:-(adj_shape_width*2.9), delay:.4});    // design block
				TweenLite.to(".image-container-2", .5, {x:-(adj_shape_width*2), delay:.2});      // print block
				TweenLite.to(".image-container-3", .5, {x:-(shape_width*.84)});                  // web block
			}
		
			// * ────────> START blur text (I design stuff) animation <────────
			// https://codepen.io/jonathan/pen/pjOKxo?editors=0010 // <─────
			var timeline = TweenMax.from("#hue1feGaussianBlur", 2, {
				opacity:0,
				paused: true,
				attr: {"stdDeviation": 30},
				delay:2,
			});
			timeline.play();
			// ─ ────────────────────── END blur animation ────────────────────

			// * ──────────────> Mouse over/out events <──────────────
			$("#poly-design-color").on("mouseover", function() {

				TweenLite.to("#poly-print-gray", .2, {x: 0, y:0, opacity:0.8});
				TweenLite.to("#print-text", .2, {opacity:0.1});

				TweenLite.to("#poly-web-gray", .2, {x: 0, y:0, opacity:0.8});
				TweenLite.to("#web-text", .2, {opacity:0.1});

				$(this).css({cursor:"pointer"});
			});

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
			});

			$("#poly-web-color").on("mouseout", function() {
				TweenLite.to("#poly-design-color", .2, {x: 0, y:0});
				TweenLite.to("#poly-design-gray", .2, {opacity:0.0});
				TweenLite.to("#design-text", .2, {opacity:0.6});

				TweenLite.to("#poly-print-color", .2, {x: 0, y:0});
				TweenLite.to("#poly-print-gray", .2, {opacity:0.0});
				TweenLite.to("#print-text", .2, {opacity:0.6});
			}); 

		//#endregion
		}

	}); // .onload end // ──────────────────────────────────────────


	
	// ───────── on resize re-adjust positions using vanilla js (not with jquery) ─────────
	$(window).resize(function(){

		var windowWidth = window.innerWidth; // viewport width
		// var windowHeight = window.innerHeight; // viewport width
		var shape_width = $(".image-container-1").width();
		var adj_shape_width = shape_width*.78;
		// var adj_group_width = windowWidth/1.66;

		if ( $(window).width() > 739) { // adjust layout on resize for desktop
			rePosition();
		} else { // adjust layout on resize for mobile
			alert("Hey!");
			// mobileSetup();
		}

		// * ────────────────>  re-positioning on resize on desktop <────────────────
		function rePosition() {  // don't use jquery for re-positioning on resize

			var box2_adj_width;
			var adj_design_left;
			var adj_design_right;
			var adj_print_left;
			var adj_print_right;
			var adj_web_left;
			var adj_web_right;
			var adj_design_left_no_px;

			if ((adj_shape_width*3) >= (windowWidth/1.45)) { // short layout
				box2_adj_width = (windowWidth/1.66)-40;
				// ────────── set right to auto ──────────
				adj_design_right = "auto"; // set position from right to left
				adj_print_right = "auto";
				adj_web_right = "auto";
				// ────────── calculate left positions ──────────
				adj_design_left = ((windowWidth-box2_adj_width)*.94) + "px";
				adj_design_left_no_px = ((windowWidth-box2_adj_width)*.94);
				adj_print_left = adj_design_left_no_px + (box2_adj_width/3) + "px";
				adj_web_left = adj_design_left_no_px + 1.95*(box2_adj_width/3) + "px";
			} else { // long layout
				box2_adj_width = shape_width*2.15;
				// ────────── set left to auto ──────────
				adj_design_left = "auto";
				adj_print_left = "auto";
				adj_web_left = "auto";
				// ────────── calculate right positions ──────────
				adj_design_right = shape_width*1.2 + "px";
				adj_print_right = shape_width*.5 + "px";
				adj_web_right = -shape_width*.2 + "px"; 
			}

			// If mobile, origin is set to left. If desktop, origin is set to right  
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
			// ────── resizing test ─────────
			// var test = adj_print_left + " ------- " + adj_print_right;
			// var test = $("#wrap").css("left");
			// $(".info").html(test); // ==> Keep 
			// ───────── testing end ─────────


		}
		// rePosition(); // < ───── this line for testing only


	}); // resize end

})(jQuery);  // just needed if using jQuery

