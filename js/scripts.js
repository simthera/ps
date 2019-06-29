$( document ).ready(function() {
    $(".remove-product").hide();
    
    $(".add-product").click(function(){

        $('#counter').val( function(i, oldval) {
          return ++oldval;
        });

        $(this).hide();
        $(this).siblings(".remove-product").show();
    });
    $(".remove-product").click(function(){
        
        $('#counter').val( function(i, oldval) {
          return --oldval;
        });

        $(this).hide();
        $(this).siblings(".add-product").show();
    });

    $('.slider').bxSlider({
        auto: true,
        mode: "fade",
        slideWidth: 690
    });
});