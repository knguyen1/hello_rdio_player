/**
 * Created by knguyen on 4/14/2015.
 */
$(document).ready(function() {
    //prepare the page at load
    preparePage();

    function preparePage() {
        $("#searchForm").on("click", function() { //bind the click button
            $("#searchForm").submit();
        })

        $("#searchForm").submit(function(e) {
            //do stuff
            e.preventDefault();
            performSearch();
        })
    }

    function performSearch() {
        var phrase = getSearchTerm();
    }
});