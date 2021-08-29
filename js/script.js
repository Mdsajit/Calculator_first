
function insert(num){
	$('.cal_display').val($('.cal_display').val() + num);
}
function eql(){
	$('.cal_display').val(eval($('.cal_display').val()));
}
function c(){
	$('.cal_display').val('');
}
function del(){
	value = $('.cal_display').val();
	$('.cal_display').val(value.substring(0, value.length - 1));
}

