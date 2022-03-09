$(function(){
    $(".nav li").mouseover(function(){
        $("section>h1").css("color","#fff");
        $(".text").css("backgroundColor","#c6c6c5");
        $(".nav span").css("display","none")
    });
    $(".nav li").mouseout(function(){
        $("section>h1").css("color","#000");
        $(".text").css("backgroundColor","#fff");
        $(".nav span").css("display","block")
    });
});