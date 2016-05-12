
var love1 = [" You will", " You will never "," You will alaways "," You will maybe ", " You will one time "];
    love2 = [" fall in love "," get married "," die alone ", " have 57 cats  ", " find your lover on tinder", " become gayer ", "get your heart broken ", " sleep alone forever "];
    love3 = [" unless "," only if "," when "];
    love4 = [" the forgs are sleeping. "," the greeks are dicks. " , " it rains tears from heavens garden. ", " summer becomes winter. ", " the dogs start talking. ", " robots will rule the land. ", " Donald Trump is president. "];
    health1 = ["It looks like "," It seems like ", " In the near future " ];
    health2 = [" you may have", " you will never have " ];
    health3 = [" diaria ", "rashes ", " cancer ", " diabetes ", " a skin disorder ", " heavy head aches ", " mental health issues" ];
    health4 = [" unless ", " but if "];
    health5 = [" it rains blood. ", " humans colonize Mars next year. ", " ISIS will declare peace in the desert. ", " you will sleep in a subway cart" ];
    money1 = [" you may win the lottery ", " invest all your money in the stock market ",];
    money2 = [" only if " ];
    money3 = [" the sun is cold. " , " rats will leave New York. " ];
    passion1 = [" Your inner passion is connected to "]; 
    passion2 = [" bagels and ", " grass and ", " paper bags and " , " chalk and ", " summer breeze and ", " space and ", " design and ", " facbook and ", " sex change and ", " breast milk and ", " children and ", " botox and "];
    passion3 = [" older pigs. ", "  descreet bushes. ", " paper planes. ", " naked guys. " , " sleeping. ", " magic hummus. "]
    family1 = ["It seems like something "];
    family2 = [" good ", " bad ", "great ", "strange ", "bizzar ", "scary ", " painful ", "amazing ", " stupid ", "crazy"];
    family3 = [" will happen to "];
    family4 = [" you "," your parents ", " your sibling", " your cousin"];
    family5 = [" only if you sleep awake. ", " only if you fly in water. ", "only if you clouds cry tonight. "];
    friends1 =[" Your friends will hate you ", " your friends will be there for you ", " your best friend will steal your lover "];
    friends2 =[" if germans become vegan. ", " if pink is the new black.", " if flip phones become a trend again. ", " if people stop drinking ice coffee. ", " if humans become apes. "];


$(".love").click(function(){
   $(this).hide();
   $('.textcontainer').html('');
$(".textwrapper").show();
$(".textcontainer").append(love1[Math.floor(Math.random() * love1.length)]);
$(".textcontainer").append(love2[Math.floor(Math.random() * love2.length)]);
$(".textcontainer").append(love3[Math.floor(Math.random() * love3.length)]);
$(".textcontainer").append(love4[Math.floor(Math.random() * love4.length)]);


});

$(".health").click(function(){
  $(this).hide();
  $('.textcontainer').html('');
$(".textwrapper").show();
$(".textcontainer").append(health1[Math.floor(Math.random() * health1.length)]);
$(".textcontainer").append(health2[Math.floor(Math.random() * health2.length)]);
$(".textcontainer").append(health3[Math.floor(Math.random() * health3.length)]);
$(".textcontainer").append(health4[Math.floor(Math.random() * health4.length)]);
$(".textcontainer").append(health5[Math.floor(Math.random() * health5.length)]);

});

$(".money").click(function(){
  $(this).hide();
  $('.textcontainer').html('');
  $(".textwrapper").show();
  $(".textcontainer").append(money1[Math.floor(Math.random() * money1.length)]);
  $(".textcontainer").append(money2[Math.floor(Math.random() * money2.length)]);
  $(".textcontainer").append(money3[Math.floor(Math.random() * money3.length)]);
});

$(".close").click(function() {
  $('.textwrapper').hide();
})
$(".passion").click(function(){
   $(this).hide();
   $('.textcontainer').html('');
  $(".textwrapper").show();
  $(".textcontainer").append(passion1[Math.floor(Math.random() * passion1.length)]);
  $(".textcontainer").append(passion2[Math.floor(Math.random() * passion2.length)]);
  $(".textcontainer").append(passion3[Math.floor(Math.random() * passion3.length)]);
});

$(".family").click(function(){
   $(this).hide();
   $('.textcontainer').html('');
  $(".textwrapper").show();
  $(".textcontainer").append(family1[Math.floor(Math.random() * family1.length)]);
  $(".textcontainer").append(family2[Math.floor(Math.random() * family2.length)]);
  $(".textcontainer").append(family3[Math.floor(Math.random() * family3.length)]);
  $(".textcontainer").append(family4[Math.floor(Math.random() * family4.length)]);
  $(".textcontainer").append(family5[Math.floor(Math.random() * family5.length)]);
});

$(".friends").click(function(){
   $(this).hide();
   $('.textcontainer').html('');
  $(".textwrapper").show();
  $(".textcontainer").append(friends1[Math.floor(Math.random() * friends1.length)]);
  $(".textcontainer").append(friends2[Math.floor(Math.random() * friends2.length)]);
  $(".textcontainer").append(friends3[Math.floor(Math.random() * friends3.length)]);
});

$('.textwrapper').hide();

