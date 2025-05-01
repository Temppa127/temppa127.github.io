$(function(){
    $(".hideable").toggle();



    $("#big-header").on("click", function() {
        $(".hideable").show(1000);
    });

});