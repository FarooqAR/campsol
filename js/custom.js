$(function() {

    // load page from side menu
    
    $("#side-menu li:not(.sidebar-search)").on("click", function(){
        var pageToLoad = $(this).attr("data-load");
        
        if(pageToLoad){
            $("#content").load(pageToLoad + ".html");
        }
        
    });

});