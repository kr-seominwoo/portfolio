// var projectContentWayPoint = function() {
// 	var i = 0;
// 	$('.animate-box').waypoint( function( direction ) {

// 		if( direction === 'down' && !$(this.element).hasClass('animated') ) {
			
// 			i++;

// 			$(this.element).addClass('item-animate');
// 			setTimeout(function(){

// 				$('body .animate-box.item-animate').each(function(k){
// 					var el = $(this);
// 					setTimeout( function () {
// 						var effect = el.data('animate-effect');
// 						if ( effect === 'fadeIn') {
// 							el.addClass('fadeIn animated');
// 						} else if ( effect === 'fadeInLeft') {
// 							el.addClass('fadeInLeft animated');
// 						} else if ( effect === 'fadeInRight') {
// 							el.addClass('fadeInRight animated');
// 						} else {
// 							el.addClass('fadeInUp animated');
// 						}

// 						el.removeClass('item-animate');
// 					},  k * 200, 'easeInOutExpo' );
// 				});
				
// 			}, 100);
			
// 		}

// 	} , { offset: '85%' } );
// };

function myload(url) {	
	$(".project-overlay").load(url);
	$(".project-overlay").css("display", "block");
	// setTimeout(projectContentWayPoint, 500);
}


function closeOverlay() {
	let curURL = $(window.location)[0].href;
	let lastIndex = curURL.lastIndexOf("/");
	let url = curURL.substring(0, lastIndex);

	window.history.pushState(null, null, url);
	$(".project-overlay").css("display", "none");
}

$("a[name='overlay-projectTest']").click(function(event) {
	event.preventDefault();
	let url = "project-overlay.html";
	let curURL = $(window.location)[0].href;
	let lastIndex = curURL.lastIndexOf("/");

	myload(curURL.substring(0, lastIndex + 1) + url);

	let loadURL = curURL.substring(0, lastIndex + 1) + "#" + url;
	window.history.pushState(null, null, loadURL);
})