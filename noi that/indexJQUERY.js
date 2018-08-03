
$('#productThietKe').hover(function () {
	$('#productThietKe .btnMove').fadeIn(duration);
}, function () {
	$('#productThietKe .btnMove').fadeOut(duration);
});
$('#productThiCong').hover(function () {
	$('#productThiCong .btnMove').fadeIn(duration);
}, function () {
	$('#productThiCong .btnMove').fadeOut(duration);
});

var k = 0;
function SetColorTK() {
	$('.Thietke .ThuTu div').css('background-color','#fff');
}
$(".Thietke .ThuTu .btn1").click(function(){
	SetColorTK();
	$('.Thietke .btn1').css('background-color','#ff1');
	$('.Thietke .ImageBox').animate({left: '0px'});
	k = 0;
});
$(".Thietke .ThuTu .btn2").click(function(){
	SetColorTK();
	$('.Thietke .btn2').css('background-color','#ff1');
	$('.Thietke .ImageBox').animate({left: '-1140px'});
	k = -1140;
});
$(".Thietke .ThuTu .btn3").click(function(){
	SetColorTK();
	$('.Thietke .btn3').css('background-color','#ff1');
	$('.Thietke .ImageBox').animate({left: '-2280px'});
	k = -2280;
});
$(document).ready(function(){
	setInterval(function(){ 
		$('.Thietke .ImageBox').animate({left: k });
		k -= 1140;
		if (k < -2280) {
			k = 0;
		}
		;}, 3000);
	setInterval(function(){ 
		if (k == -1140) {
			SetColorTK();
			$('.Thietke .btn1').css('background-color','#ff1');
		}
		else if (k == -2280) {
			SetColorTK();
			$('.Thietke .btn2').css('background-color','#ff1');
		}
		else{
			SetColorTK();
			$('.Thietke .btn3').css('background-color','#ff1');
		}
		;}, 3000);
});

$('.Thietke').hover(function () {
	$('.Thietke .ThuTu').fadeIn(duration);
}, function () {
	$('.Thietke .ThuTu').fadeOut(duration);
});

var x = 0;
function SetColorTC() {
	$('.ThiCong .ThuTu div').css('background-color','#fff');
}
$(".ThiCong .ThuTu .btn1").click(function(){
	SetColorTC();
	$('.ThiCong .btn1').css('background-color','#ff1');
	$('.ThiCong .ImageBox').animate({left: '0px'});
	x = 0;
});
$(".ThiCong .ThuTu .btn2").click(function(){
	SetColorTC();
	$('.ThiCong .btn2').css('background-color','#ff1');
	$('.ThiCong .ImageBox').animate({left: '-1140px'});
	x = -1140;
});
$(".ThiCong .ThuTu .btn3").click(function(){
	SetColorTC();
	$('.ThiCong .btn3').css('background-color','#ff1');
	$('.ThiCong .ImageBox').animate({left: '-2280px'});
	x = -2280;
});
$(document).ready(function(){
	setInterval(function(){ 
		$('.ThiCong .ImageBox').animate({left: x });
		x -= 1140;
		if (x < -2280) {
			x = 0;
		}
		;}, 4000);
	setInterval(function(){ 
		if (x == -1140) {
			SetColorTC();
			$('.ThiCong .btn1').css('background-color','#ff1');
		}
		else if (x == -2280) {
			SetColorTC();
			$('.ThiCong .btn2').css('background-color','#ff1');
		}
		else{
			SetColorTC();
			$('.ThiCong .btn3').css('background-color','#ff1');
		}
		;}, 4000);
});

$('.ThiCong').hover(function () {
	$('.ThiCong .ThuTu').fadeIn(duration);
}, function () {
	$('.ThiCong .ThuTu').fadeOut(duration);
});