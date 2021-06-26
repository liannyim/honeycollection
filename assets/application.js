// Put your application javascript here
$(document).ready(function () {
    var triggers = $('ul.alphabets li a');
    var filters = $('.our_ingredients_wrapper .ingredient-name');

    //Sort Ingredients in alphabets order
    var alphabeticallyTagNameOrdered = $('.ingredient-item').sort(function(a, b) {
        return $(a).data('sort').toLowerCase() > $(b).data('sort').toLowerCase() ? 1 : -1;
    });

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
            }else{
                $(this).addClass('disabled');
            }
        });
       
    });
   

    var hasIngredients_triggers = $('ul.alphabets li a.hasIngredients');
    //filter ingredients on click 
    hasIngredients_triggers.click(function() {
        var takeLetter = $(this).text().toLowerCase();
        // remove all "active" class
        triggers.removeClass('active').addClass('disabled');

        //add active to selected letter
        $(this).addClass('active').removeClass('disabled');

        var found = false;

        filters.parents(".ingredient-item").hide();

        filters.each(function(i) {
            var tagname = $(this).data('tagname').toLowerCase();
            var compareFirstLetter = tagname.substr(0,1);

            if ( compareFirstLetter ==  takeLetter ) {
                $(this).parents(".ingredient-item").fadeIn(222);
                found = true;
            }
        });
    });

    function sort(selector) {
        
    // $('.our_ingredients_wrapper').prepend(alphabeticallyOrdered.parents(".ingredient-item"));
    // console.log(alphabeticallyOrdered.parents(".ingredient-item"));
    }
      
});