// Put your application javascript here
$(document).ready(function () {
    var triggers = $('ul.alphabets li a');
    var filters = $('.our_ingredients_wrapper .ingredient-name');

    //Sort Ingredients in alphabets order
    var alphabeticallyTagNameOrdered = $('.ingredient-item').sort(function(a, b) {
        return $(a).data('sort').toLowerCase() > $(b).data('sort').toLowerCase() ? 1 : -1;
    });
    //update wrapper
    $('.our_ingredients_wrapper').html(alphabeticallyTagNameOrdered);

    //INIT filters - disable letters that doesn't have ingredients
    filters.each(function(i) {

        //get letters from the ingredient tagname
        var tagname = $(this).data('tagname').toLowerCase();
        var compareFirstLetter = tagname.substr(0,1);

        //loop through all letters and compare letter
        triggers.each(function(i) {
            var hasIngredients_letter = $(this).text().toLowerCase();
            if(compareFirstLetter == hasIngredients_letter){
               $(this).addClass('hasIngredients');
            }
        });

    });
   

    var hasIngredients_triggers = $('ul.alphabets li a.hasIngredients');

    //filter ingredients on click on letters that has Ingredients
    hasIngredients_triggers.click(function() {
        var takeLetter = $(this).text().toLowerCase();
        var found = false;
       
        if($(this).hasClass('active')){
            //remove active state if active
            $(this).removeClass('active'); 

            //show all
            filters.parents(".ingredient-item").fadeIn();

        }else{

            //remove all active state on all letters
            hasIngredients_triggers.removeClass('active');

            //add active state to selected letter
            $(this).addClass('active'); 

            //hide all if not hidden
            filters.parents(".ingredient-item").hide();

            //filter elements 
            filters.each(function(i) {

                var tagname = $(this).data('tagname').toLowerCase();
                var compareFirstLetter = tagname.substr(0,1);
    
                if ( compareFirstLetter ==  takeLetter ) {
                    $(this).parents(".ingredient-item").fadeIn();
                    found = true;
                }
    
            });
        }
    });

   

    if ($('body').hasClass("template-product")) {
        if($('.product__value-props li').length > 0){
            //append values props to PDP product desc 
        $('.product__value-props').appendTo('.product-single__description');
        }
        
    }

    
   
});