$("ul").text();

//$("ul").html("<li> Hey you guy</li>  <li> You guys know</li> <li> Padi mi</li>");

//$("ul").html("<a href=´facebook.com´>Facebook</a>");


//$("img").css("width", "200px");

//$("img").attr("src", "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/44249080_2359227157437336_6457561884487843840_n.jpg?_nc_cat=109&_nc_oc=AQl0dFrYHpOW1sDDm-DysNMb8QiRAkc12nSjsSEBz8qOmlo50fnciMQ59FHYX0BZbsg&_nc_ht=scontent-arn2-1.xx&oh=94e77123d0dff6589034447cfe515f30&oe=5E2CDF41");

//$("input").attr("type", "datetime-local");

//$("input").val();
//$("select").val();

$("li").addClass("naija");
$("li:first-of-type").removeClass("naija");
$("li:first-of-type").toggleClass("baba");
$("li:first-of-type").toggleClass("baba");

$("button").click(function() {
	alert("button clicked");
	$(this).css("background", "#232323");
});

//$("button").addClass("naija");

$("input").keypress(function(event){
  if(event.which===13) {
  	alert ("Done!") };
});         


// 'on()' can be used for all the events we used in js for addEventLister
$("h1").on("click", function(){
	$(this).addClass("naija");
});


$("button").on("mouseover", function(){
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});



