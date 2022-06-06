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
	$("#exp-over").load(url);
	$("#exp-over").css("display", "block");
}

function closeOverlay() {
	$("#exp-over").css("display", "none");
}