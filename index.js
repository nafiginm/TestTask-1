$('#result_4').click(function() {
	var i = $(".smile").val();
	i++;
	$('#active').prop('disabled', false).click(function () {
		$('.smile').attr('value', i);
	});
	console.log(i);
	$('#active-form').attr('action', '#page3');
});
$('#result_7').click(function() {
	var a = $(".frown").val();
	a++;
	$('#active').prop('disabled', false).click(function () {
		$('.frown').attr('value', a);
	});
	$('#active-form').attr('action', '#page4');
});

$('.clean').click(function() {
	$('.num').prop('checked', false);
	$('#active').prop('disabled', true);
});