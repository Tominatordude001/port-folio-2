// ==> =============================== START ===============================
		
	// move parallelograms into position on viewport after window.load using GSAP
	var adj_shape_width = shape_width*.78;
	var init_group_width = windowWidth/1.66;

	if ((adj_shape_width*3) >= (windowWidth/1.45)) { // short layout
		TweenLite.to(".image-container-1", .5, {x:-(init_group_width*1.04), delay:.4});    		// design block
		TweenLite.to(".image-container-2", .5, {x:-(init_group_width*(2/3)*1.08), delay:.2});   // print block
		TweenLite.to(".image-container-3", .5, {x:-(init_group_width*(1/3)*1.2), delay:.2});	// web block									// web block
	} else { // long layout
		TweenLite.to(".image-container-1", .5, {x:-(adj_shape_width*2.9), delay:.4});    // design block
		TweenLite.to(".image-container-2", .5, {x:-(adj_shape_width*2), delay:.2});      // print block
		TweenLite.to(".image-container-3", .5, {x:-(shape_width*.84)});                  // web block
	};

// ==> =============================== END =================================
// 
// 
// // determine initial width of box2 based on height to width ratio of viewport
		var adj_shape_width = shape_width*.78;
		if ((adj_shape_width*3) >= (windowWidth/1.45)) { // short layout
			var box2_init_width = (windowWidth/1.66)-40;
		} else { // long layout
			var box2_init_width = shape_width*2.15;
		};