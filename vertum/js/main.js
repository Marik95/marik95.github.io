$(document).ready(function (){
    // tabs on JS
    $(".tabs").on("click", ".tab", function(){
        // delete class active
        $(".tabs").find(".active").removeClass("active");

        // add class active
        $(this).addClass("active");
        $(".tab-form").eq($(this).index()).addClass("active");
    });
});