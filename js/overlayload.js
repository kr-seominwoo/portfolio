function myload(url) {	
	$(".project-overlay").load(url);
	$(".project-overlay").css("display", "block");
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