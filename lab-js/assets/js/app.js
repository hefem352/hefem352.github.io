//function
//alert('hello js');

//variables
var animal = "cat";
var age = 8;
var clothing = ["shirts", "socks", "pants"];
var winner = false;
var checking_account = 1000;
var marni_shirt = 500;
var stella_dress = 3000;

console.log(winner);



//functions
function print_text(text) {
$('.value').html(text);
}


function charge_cc(item_value, brand_name) {
alert('you will be charged ' + item_value + ' for this' + brand_name + ' item');
alert('your checking acount balance is ' + checking_account);

if (checking_account < item_value) {
	alert('you have no money left')
} else {
checking_account = checking_account - item;
alert('charge successfull');
alert('your checking acount balance is ' + checking_account);
	}
}



$('.item').click(function() {
var item_value = $(this).data('value');
var brand_name = $(this).data('value');
charge_cc(item_value);
});



// if (age == 12) {
//	alert ('enjoy the movie');
// } else if (age >7) {
//	alert ('how about bring it on?');
// } else {
//	alert ('you are cute');
// }


