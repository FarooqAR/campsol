$(function() {

    //load default page (dashboard)

    $("#content").load("pages/dashboard.html");
    // load page from side menu
    
    $("#side-menu li:not(.sidebar-search)").on("click", function(){
        var pageToLoad = $(this).attr("data-load");
        
        if(pageToLoad){
            $("#content").load(pageToLoad + ".html");
        }

        // toggle active class in side menu
        $("#side-menu li").find('a').removeClass('active');
        $(this).children('a').addClass('active');
    });

});