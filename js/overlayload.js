// var scrollValue;

var contentWayPoint = function() {
	var i = 0;
	$('.animate-box').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('animated') ) {
			
			i++;

			$(this.element).addClass('item-animate');
			setTimeout(function(){

				$('body .animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout( function () {
						var effect = el.data('animate-effect');
						if ( effect === 'fadeIn') {
							el.addClass('fadeIn animated');
						} else if ( effect === 'fadeInLeft') {
							el.addClass('fadeInLeft animated');
						} else if ( effect === 'fadeInRight') {
							el.addClass('fadeInRight animated');
						} else {
							el.addClass('fadeInUp animated');
						}

						el.removeClass('item-animate');
					},  k * 200, 'easeInOutExpo' );
				});
				
			}, 100);
			
		}

	} , { offset: '85%' } );
};

// Reflect scrolling in navigation
var navActive = function(section) {

	var $el = $('#navbar > ul');
	$el.find('li').removeClass('active');
	$el.each(function(){
		$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
	});

};

var navigationSection = function() {

	var $section = $('section[data-section]');
	
	$section.waypoint(function(direction) {
		
		if (direction === 'down') {
			navActive($(this.element).data('section'));
		}
	}, {
		offset: '150px'
	});

	$section.waypoint(function(direction) {
		if (direction === 'up') {
			navActive($(this.element).data('section'));
		}
	}, {
		offset: function() { return -$(this.element).height() + 155; }
	});

};

function myload(url) {	
	// scrollValue = $(document).scrollTop(); 
	$(".project-overlay").load(url, contentWayPoint);
	$(".project-overlay").removeClass("hidden");
	$("#colorlib-page").addClass("hidden");
	$('html').animate({scrollTop: 0}, 10);
}


function closeOverlay() {
	let curURL = $(window.location)[0].href;
	let lastIndex = curURL.lastIndexOf("#");
	let url = curURL.substring(0, lastIndex - 1);

	window.history.pushState(null, null, url);
	$(".project-overlay").addClass("hidden");
	$("#colorlib-page").removeClass("hidden");
	navigationSection();
	$('html').animate({scrollTop: $('[data-section="project"]').offset().top - 55}, 10);
}

$("a[name='overlay-projectTest']").click(function(event) {
	event.preventDefault();
	let target = event.target;
	let url = target.getAttribute("path");
	let curURL = $(window.location)[0].href;
	let lastIndex = curURL.lastIndexOf("/");
	
	myload(curURL.substring(0, lastIndex + 1) + url);

	let loadURL = curURL.substring(0, lastIndex + 1) + "#" + url;
	window.history.pushState(null, null, loadURL);
})

// original
// $("a[name='overlay-projectTest']").click(function(event) {
// 	event.preventDefault();
// 	console.log('url :' + event.target.href);
// 	let url = "project-overlay.html";
// 	let curURL = $(window.location)[0].href;
// 	let lastIndex = curURL.lastIndexOf("/");

// 	myload(curURL.substring(0, lastIndex + 1) + url);

// 	let loadURL = curURL.substring(0, lastIndex + 1) + "#" + url;
// 	window.history.pushState(null, null, loadURL);
// })