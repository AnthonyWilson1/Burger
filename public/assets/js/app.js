$(function() {
    $("#addBurger").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
            burger: $("input[name=burger]").val()
        };
    
        $.ajax("/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
    
    });
    
    $(document).on('click','.change-devour', function(event){
        event.preventDefault();
        var updatedBurger = {
            id: $(this).data("id"),
            state: $(this).data("newdevour")
        };
    
        $.ajax("/burgers/" + updatedBurger.id, {
          type: "PUT",
          data: updatedBurger
        }).then(
          function() {
            console.log("updated burger");
            //Reload the page to get the updated list
            location.reload();
          }
        );
    
    });




});