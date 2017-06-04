var video;
var canvas;
var width;
var height;
var ctx;
function setUpVideo() {
	video = $("#html5_qrcode_video").get(0);
	canvas = $("#qr-canvas").get(0);
	width = video.width;
	height = video.height;
	ctx = canvas.getContext('2d');
	ctx.translate(50, 50);
	ctx.rotate(0.05);
	window.setInterval(drawFrame, 1000 / 24);
}	
function drawFrame() {
	ctx.drawImage(video, 0, 0, width, height);
}