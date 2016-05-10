
var love1 = [" You will", " You will never "," You will alaways "," You will maybe ", " You will one time "];
    love2 = [" fall in love ","get married "," die alone ", " have 57 cats  ", " find your lover on tinder", " become gayer "];
    love3 = [" unless "," if ",];
    love4 = [" the forgs are sleeping. "," the greeks are dicks." , " it rains tears from heavens garden.", " summer becomes winter.", " the dogs start talking. "];
    health1 = ["It looks like "," It seems like ", " In the near future " ];
    health2 = [" you may have", " you will never have " ];
    health3 = [" diaria ", "rashes", " cancer ", " diabetes ", " a skin disorder ", " heavy head aches ", " mental health issues" ];
    health4 = [" unless ", " but if "];
    health5 = [" it rains blood you will not.", " humans colonize Mars next year it will lower the chances.", " ISIS will declare peace in the desert that will help." ];
    money =[];
    passion = []; 
    family = [];
    friends =["Your friends may hate you...",];

$(".love").click(function(){
   $(this).hide();
$(".textcontainer").show();
$(".textcontainer").append(love1[Math.floor(Math.random() * love1.length)]);
$(".textcontainer").append(love2[Math.floor(Math.random() * love2.length)]);
$(".textcontainer").append(love3[Math.floor(Math.random() * love3.length)]);
$(".textcontainer").append(love4[Math.floor(Math.random() * love4.length)]);


});

$(".health").click(function(){
  $(this).hide();
$(".textcontainer").show();
$(".textcontainer").append(health1[Math.floor(Math.random() * health1.length)]);
$(".textcontainer").append(health2[Math.floor(Math.random() * health2.length)]);
$(".textcontainer").append(health3[Math.floor(Math.random() * health3.length)]);
$(".textcontainer").append(health4[Math.floor(Math.random() * health4.length)]);
$(".textcontainer").append(health5[Math.floor(Math.random() * health5.length)]);

});


$(".money").click(function(){
  $(this).hide();
  $(".textcontainer").show();
  $(".textcontainer").append(money1[Math.floor(Math.random() * money1.length)]);
  $(".textcontainer").append(money2[Math.floor(Math.random() * money2.length)]);
  $(".textcontainer").append(money3[Math.floor(Math.random() * money3.length)]);
});

$(".textcontainer").click(function() {
  $(this).hide();
})
$(".passion").click(function(){
   $(this).hide();
  $(".textcontainer").show();
  $(".textcontainer").append(passion1[Math.floor(Math.random() * passion1.length)]);
  $(".textcontainer").append(passion2[Math.floor(Math.random() * passion2.length)]);
  $(".textcontainer").append(passion3[Math.floor(Math.random() * passion3.length)]);
});

$(".family").click(function(){
   $(this).hide();
  $(".textcontainer").show();
  $(".textcontainer").append(family1[Math.floor(Math.random() * family1.length)]);
  $(".textcontainer").append(family2[Math.floor(Math.random() * family2.length)]);
  $(".textcontainer").append(family3[Math.floor(Math.random() * family3.length)]);
});

$(".friends").click(function(){
   $(this).hide();
  $(".textcontainer").show();
  $(".textcontainer").append(friends1[Math.floor(Math.random() * friends1.length)]);
  $(".textcontainer").append(friends2[Math.floor(Math.random() * friends2.length)]);
  $(".textcontainer").append(friends3[Math.floor(Math.random() * friends3.length)]);
});


