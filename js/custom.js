$(function () {
    // Bind an event to window.onhashchange that, when the hash changes, gets the
    // hash and load the corresponding page

    var $sidemenu = $("#side-menu");
    var $checkBoxTable = $(".table-with-checkbox").find("input:checkbox");
    $(window).hashchange(function () {
        var hash = location.hash;//hash is the keyword at the end of url like #this

        // Load the page based on the hash.
        showLoader();
        var pageToLoad = hash === "" ? "dashboard" : hash === "#" ? false :
            hash.replace(/#|-/g, function (toReplace) {
                return toReplace === "#" ? "" : "/";
            });

        if (pageToLoad) {
            $("#content").load("pages/" + pageToLoad + ".html" ,hideLoader);

        }

        //toggle active class
        var $li = $sidemenu.find("li");
        $li.find('a').removeClass('active');
        $li.find('a[href="' + hash + '"]').addClass('active');

    });

    // Since the event is only triggered when the hash changes, we need to trigger
    // the event now, to handle the hash the page may have loaded with.
    $(window).hashchange();

    //show table controls on change event triggered on checkboxes in table.table-with-checkbox
    $(document).on("change", ".table-with-checkbox input:checkbox", function () {
        var checked = $(this).prop('checked');

        if(checked){
            showTableControls();
        }
        else{
            $(".table-with-checkbox").find("input:checkbox").each(function () {
                if ($(this).prop('checked')) {
                    checked = true;
                    return false;
                }
            });
            $(".table-with-checkbox input.table-checkbox-select-all").prop('checked',false);
            checked ? showTableControls() : hideTableControls();
        }

    });

    //select all items in table on change event triggered on .table-checkbox-select-all
    $(document).on("change", ".table-with-checkbox input.table-checkbox-select-all", function () {

        if($(this).prop('checked')){
            $(".table-with-checkbox input:checkbox").prop('checked',true);
        }
        else{
            $(".table-with-checkbox input:checkbox").prop('checked',false);
            hideTableControls();
        }
    });

    function hideLoader() {
        $('.spinner').hide();
    }

    function showLoader() {
        $('.spinner').show();
    }

    function hideTableControls(){
        $('.table-controls-selected').hide();
    }
    function showTableControls(){
        $('.table-controls-selected').show();
    }

});