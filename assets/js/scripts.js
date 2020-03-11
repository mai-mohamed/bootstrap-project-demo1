/*====================
language
=====================*/
$(".translate").click(function(){
  if($(this).html()=="en"){
    //handle arabic
    $(this).html("ar");
    $("html").attr("lang" ,"en");
    $("html").attr("dir","ltr")
    $("link:nth(0)").attr("href","./assets/css/bootstrap.min.css")
  }
  else{
   //handle english
   $(this).html("en");
   $("html").attr("lang" ,"ar");
   $("html").attr("dir","rtl")
   $("link:nth(0)").attr("href","./assets/css/bootstrap-a.css")
  }
})

/*====================
fixed textarea
=====================*/
$("textarea").mouseenter(function(){
 $(this).css("resize","none")
})
