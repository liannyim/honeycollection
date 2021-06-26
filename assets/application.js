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
      
        //only filter on non-disabled letter
       if(!$(this).hasClass('disabled')){
            
           // toggle all "disable" class on letters
            triggers.toggleClass('disabled')
            
            //remove active if clicked letter has an active state
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
            //else add active state to clicked letter
            else{
                $(this).addClass('active');
            }
           
            //Remove disabled class from init
            $(this).removeClass('disabled');

            filters.parents(".ingredient-item").fadeToggle(222);
            
            filters.each(function(i) {

                var tagname = $(this).data('tagname').toLowerCase();
                var compareFirstLetter = tagname.substr(0,1);

                if ( compareFirstLetter ==  takeLetter ) {
                    $(this).parents(".ingredient-item").fadeToggle(222);
                    found = true;
                }

            });
       }

    });
   
});