(function($) {   // just needed if using jQuery

	// TweenLite.to("#poly-design-color", .2, {x: 138, y:-1000, opacity:0}); // starts out at top offscreen with opacity 0

	$(window).load(function() {
		var windowWidth = window.innerWidth; // viewport width
		$("body").css({width:windowWidth});
		
		// initial position of parallelograms just outside of viewport to the right
		var shape_width = $(".image-container-1").width();
		var adj_shape_width_web = shape_width*.76;
		$(".image-container-1").css({right:-(shape_width*1.1)});
		$(".image-container-2").css({right:-(shape_width*1.1)});
		$(".image-container-3").css({right:-adj_shape_width_web-40}); // set right to 0 
		// $(".image-container-3").css({right:-(shape_width*1.1)});
		$(".image-container-3").css({overflow:"hidden", width:adj_shape_width_web}); // web block - trim to parallelogram width

		// initial position of name  <------------------------
		var box2_init_width = shape_width*2.15;
		var gtc =  "1fr " + box2_init_width + "px"; // gtc --> grid-template-columns
		document.getElementById("wrap").style.gridTemplateColumns = gtc;
		TweenLite.to(".box1", .5, {opacity:1, delay: 1});
		TweenMax.staggerFrom("#david_gonzalez #david path", 0.5, {opacity:0, scale:.1, y:200, delay:0.5}, 0.2);
		TweenMax.staggerFrom("#david_gonzalez #gonzalez path", 0.5, {opacity:0, scale:3, rotation:-180, delay:1.5}, 0.1);
		TweenLite.to(".design-stuff", .6, {opacity:1, delay: 2.8});


		// ======================================== get rid of xtra space on right =============================================== 
		// var checkScrollBars = function(){
		//     var b = $('body');
		//     var normalw = 0;
		//     var scrollw = 0;
		//     if(b.prop('scrollHeight')>b.height()){
		//         normalw = window.innerWidth;
		//         scrollw = normalw - b.width();
		//         $('#container').css({marginRight:'-'+scrollw+'px'});
		//     }
		// }
		// ====================================== END get rid of xtra space on right ============================================= 


			/*--------- initial testing ---------*/
			// var test = $("body").outerWidth();
			var test = $(".scrollbar").css("width");
			var test2 = $("#para").css("width");
		    $(".info").html(test + " ------ " + test2);
			/*--------- testing end ---------*/

		// move parallelograms into position on viewport after window.load using GSAP
		var adj_shape_width = shape_width*.78;
		TweenLite.to(".image-container-1", .5, {x:-(adj_shape_width*2.9), delay:.4});    // design block
		TweenLite.to(".image-container-2", .5, {x:-(adj_shape_width*2), delay:.2});      // print block
		TweenLite.to(".image-container-3", .5, {x:-(shape_width*.84)});                  // web block
		

		TweenLite.to("#poly-print-gray", .2, {opacity:0}); // gray starts down out of the way
		// TweenLite.to("#poly-print-gray", .2, {x: 138, y:-1000, opacity:0}); // gray starts up out of the way


		$("#poly-design-color").on("mouseover", function() { // on mouseout orange gradient

			// TweenLite.to("#poly-print-color", .2, {x: 138, y:-1000});
			TweenLite.to("#poly-print-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#print-text", .2, {opacity:0.1});

			// TweenLite.to("#poly-web-color", .2, {x: 138, y:-1000, delay:.1});
			TweenLite.to("#poly-web-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#web-text", .2, {opacity:0.1});

			$(this).css({cursor:"pointer"});

			// TweenLite.to("#ducky", .1, {scale:1.15, transformOrigin:"50% 50%", ease:Power1.easeOut}); // I don't like
		});

		$("#poly-design-color").on("mouseout", function() { // on mouseout orange gradient
			TweenLite.to("#poly-print-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-print-gray", .2, {opacity:0.0});
			TweenLite.to("#print-text", .2, {opacity:0.6});

			TweenLite.to("#poly-web-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-web-gray", .2, {opacity:0.0});
			TweenLite.to("#web-text", .2, {opacity:0.6});
		});

		$("#poly-print-color").on("mouseover", function() { // on mouseout orange gradient

			TweenLite.to("#poly-design-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#design-text", .2, {opacity:0.1});

			TweenLite.to("#poly-web-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#web-text", .2, {opacity:0.1, delay:.1});

			$(this).css({cursor:"pointer"});
		});

		$("#poly-print-color").on("mouseout", function() { // on mouseout orange gradient

			TweenLite.to("#poly-design-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-design-gray", .2, {opacity:0.0});
			TweenLite.to("#design-text", .2, {opacity:0.6});

			TweenLite.to("#poly-web-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-web-gray", .2, {opacity:0.0});
			TweenLite.to("#web-text", .2, {opacity:0.6});
		});

		$("#poly-web-color").on("mouseover", function() { // on mouseout orange gradient
			TweenLite.to("#poly-design-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#design-text", .2, {opacity:0.1});

			TweenLite.to("#poly-print-gray", .2, {x: 0, y:0, opacity:0.8});
			TweenLite.to("#print-text", .2, {opacity:0.1});

			$(this).css({cursor:"pointer"});
			// $("#web-text").css({opacity:0});
		});

		$("#poly-web-color").on("mouseout", function() { // on mouseout orange gradient
			TweenLite.to("#poly-design-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-design-gray", .2, {opacity:0.0});
			TweenLite.to("#design-text", .2, {opacity:0.6});

			TweenLite.to("#poly-print-color", .2, {x: 0, y:0});
			TweenLite.to("#poly-print-gray", .2, {opacity:0.0});
			TweenLite.to("#print-text", .2, {opacity:0.6});
		});


	}); // .onload end




	 /*-------- on resize re-adjust positions using vanilla js (but not with jquery) -------- */
	$(window).resize(function(){

		var windowWidth = window.innerWidth; // viewport width
		var windowHeight = window.innerHeight; // viewport width
		var shape_width = $(".image-container-1").width();
		var right_pos_of_web = $("#id_web").css("right").replace(/[^-\d\.]/g, '');
		var right_pos_of_design = $("#id_design").css("right").replace(/[^-\d\.]/g, '');
		var right_pos_of_print = ((right_pos_of_design-right_pos_of_web)/2)-100;

		/*--------- testing ---------*/
		// var testing_pos = windowWidth-shape_width*.84; // if using CSS left
	    // $(".info").html("left = " + testing_pos + " and width of 3 is " + shape_width);
	    // $(".info2").css({position:"absolute", left:testing_pos});
		/*--------- testing end ---------*/

	    function rePosition() {  // don't use jquery for re-positioning on resize

	    	if (windowHeight/windowWidth <= .5) { // viewport dimensions ratio detrmines positions
	    	    greeting = "Good day";
	    		var adj_position_web = "-" + shape_width*.26 + "px";
	    		var adj_position_print = shape_width*.46 + "px";
	    		var adj_position_design = shape_width*1.16 + "px";
	    	    var adj_position_design_no_px = shape_width*1.16;
	    	} else {
	    	    greeting = "Good evening";
	    	    var adj_position_web = "-" + shape_width*.26 + "px";
	    	    var adj_position_print = right_pos_of_print + "px";
	    	    // var adj_position_print = windowWidth*.45-shape_width + "px";
	    	    var adj_position_design = windowWidth/1.7-shape_width + "px";
	    	    var adj_position_design_no_px = windowWidth/1.7-shape_width;
	    	};

			document.getElementById("id_web").style.cssText = "position:absolute;display:block;";
			document.getElementById("id_web").style.right = adj_position_web;
			document.getElementById("id_print").style.cssText = "position:absolute;display:block;";
			document.getElementById("id_print").style.right = adj_position_print;
			document.getElementById("id_design").style.cssText = "Good day";
			document.getElementById("id_design").style.right = adj_position_design;

			var box1_width = windowWidth-(adj_position_design_no_px+(shape_width));
			var gtc = box1_width + "px 1fr";
			document.getElementById("wrap").style.gridTemplateColumns = gtc;

	    };
	    rePosition();

		/*--------- resizing test ---------*/
		var test = $("#wrap").css("left");
	    $(".info").html("test");
		/*--------- testing end ---------*/


	}); // on resize end


})(jQuery);  // just needed if using jQuery

