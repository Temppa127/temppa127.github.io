
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


    $(window).scroll(function(){
        $(".fadeable").each(function(i,obj){
            console.log(getOffset(obj).top)
            if (getOffset(obj).top < 550) {$(this).fadeTo("slow", 1)}
        })

    })

})