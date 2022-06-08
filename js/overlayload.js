function open_url(type, url, data, target) {
	$('#exp-over').css("display", "block");
	$.ajax({
		type: type,
		url: url,
		data: data,
		dataType:"jsonp",
		success: function(data) {
			$("#" + target).html(data);
		}
	})
}


function myload(url) {	
	console.log(url);
	let curURL = $(window.location)[0].href;
	let lastIndex = curURL.lastIndexOf("/");
	let loadURL = curURL.substring(0, lastIndex + 1) + url;
	console.log(loadURL);
	$(".project-overlay").load(url);
	$(".project-overlay").css("display", "block");
	window.history.pushState('', '', loadURL);
}

function closeOverlay() {
	$(".project-overlay").css("display", "none");
}

// $("button").on("click", "#test", function(event) {
// 	console.log("hello");
// 	let url = "project-overlay.html";
// 	let curURL = $(window.location)[0].href;
// 	let lastIndex = curURL.lastIndexOf("/");
// 	let loadURL = curURL.substring(0, lastIndex + 1) + url;
// 	window.history.pushState(null, null, loadURL);
// })

$("button[id='test']").click(function() {
	console.log("hello");
	let url = "project-overlay.html";
	let curURL = $(window.location)[0].href;
	let lastIndex = curURL.lastIndexOf("/");
	let loadURL = curURL.substring(0, lastIndex + 1) + url;
	window.history.pushState(null, null, url);
})