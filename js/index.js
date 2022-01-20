// Library => 2006 => Jquery => Js
//bootstrap , Jquery
//bootstrap => framework
//Jquery => library
// $ => object include all  Jquery methods
//("#demo") // Jquery Selector
//hide() => Effect
//(4000) => duration => 4s

/*
Jquery Effects

$("#demo").hide(5000);
$("#demo").show(1000);
$("#demo").toggle(1000);


$("#demo").slideDown(1000);
$("#demo").slideUp(1000);
$("#demo").slideToggle(1000);

$("#demo").fadeOut(3000);
$("#demo").fadeIn(3000);
$("#demo").fadeToggle(3000);
$("#demo").fadeTo(2000 , 0.5 );

callback();

//chaining 
$("#demo").slideUp(1000).slideDown(1000).hide(1000);

 $("#demo").animate( {width:'100%'} , 2000);
   $("#demo").stop();
*/

/*
Jquery HTML
.text()//setters & getters
.html()//setters & getters
.val();//Input 
.attr();//html attribute => src , href , id 
.css("color");//css property font-size , marign , padding

.addClass();
.removeClass();
.toggleClass();

.after();
.before();

.append();
.prepend();

.remove();
.empty();
.width();//width only
.innerWidth();//width + padding
.outerWidth();//width + padding + border
.outerWidth(true);//width + padding + border + margin

*/

/*
Jquery Traversing

$("#demo").next()
$("#demo").prev()
$("#demo").prevAll()
$("#demo").nextAll()

$("#demo").nextUntil()
$("#demo").prevUntil()
$("#demo").siblings()



$("#demo").parent()
$("#demo").parents()
$("#demo").parentsUntil()

$("#demo").children()
$("#demo").find("span")
$("span").eq(5)
// */

let aboutOffset =$("#about").offset().top;


$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if(wScroll > aboutOffset-100 ){
    $("#main-nav").css("backgroundColor","rgba(0,0,0,.5)")
    $("#btnUp").fadeIn(500)
  }else{
    $("#main-nav").css("backgroundColor","transparent")
    $("#btnUp").fadeOut(500)

  }
  
});
$("#btnUp").click(function(){
  // $(window).scrollTop(0);
  $("html,body").animate({scrollTop:0},500)
})


$("li a").click(function(e){
 Href = $(e.target).attr("href");
 sectionOffset = $(Href).offset().top

 $("html,body").animate({scrollTop:sectionOffset},500)

})


var spans = $("#side-box #color-box span");
spans.eq(0).css("backgroundColor","red")
spans.eq(1).css("backgroundColor","blue")
spans.eq(2).css("backgroundColor","yellow")
spans.eq(3).css("backgroundColor","aqua")
spans.eq(4).css("backgroundColor","brown")
spans.eq(5).css("backgroundColor","green")

spans.click(function(e){
 var backgroundColor = $(e.target).css("backgroundColor")

 $(".change").css("color",backgroundColor)
})

$("#icon").click(function(){
  var colorBoxWidth = $("#color-box").innerWidth();
  if($("#side-box").css("left")=="0px"){
    $("#side-box").css("left",-colorBoxWidth);
  }else{
    $("#side-box").css("left","0")
  }
  
})


$(document).ready(function () {
  $("#loading-screen").fadeOut(1000,function(){
    $("body").css("overflow","auto")
  })
});