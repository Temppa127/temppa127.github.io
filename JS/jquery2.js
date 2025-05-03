
function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top
    };
  }

$(function(){

    $(".fadeable").each(function(i,obj){
        if (getOffset(obj).top < 200) {$(this).fadeTo("slow", 1)}
    })


    $(window).on("scroll",function(){
        $(".fadeable").each(function(i,obj){
            console.log(getOffset(obj).top)
            if (getOffset(obj).top < 550) {$(this).fadeTo("slow", 1)}
        })

    })


    let clickBool = false;
    $(".dropbtn").on("click", function() {

        if(!clickBool) { $(this).siblings().css({"display": "block"}); clickBool = true;}
        else {$(this).siblings().css({"display": "none"}); clickBool = false;}
    })

    $(window).on("mousemove", function() {

        console.log($(".dropdown:hover").length)
        if($(".dropdown:hover").length == 0) {$(".dropbtn").siblings().css({"display": "none"}); clickBool = false;}

    })


})