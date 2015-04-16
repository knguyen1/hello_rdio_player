/**
 * Created by knguyen on 4/14/2015.
 */
$(document).ready(function() {
    //prepare the page at load
    preparePage();

    function preparePage() {
        $("#search").on("click", function() { //bind the search button to the click event
            $("#searchForm").submit(); //make it submit the form
        })

        $("#searchForm").submit(function(e) { //decide what to do when the search form submits
            //do stuff
            e.preventDefault();
            performSearch();
        })
    }

    function performSearch() {

        //get start time
        var startTime = new Date();

        //format the search term and uri and prepare for ajax
        var searchTerm = getSearchTerm();
        var searchUri = rdioPlayer.configs.Config.baseUri + rdioPlayer.configs.Config.searchEndpoint + encodeURIComponent(searchTerm);

        //connect to the API and perform the request
        $.ajax({
           url: searchUri,
           type: 'GET',
           headers: {
               'Accept': 'application/json'
           },
           async: true,
           dataType: 'json',
           success: function(data) {
               displayResults(data, startTime);
           },
           error: function(e) {
               //do something in error event
           }
        });
    }

    function displayResults(data, startTime) {

        if((!data.data))
            return false;

        //artist, album, tracks
        var searchTypes = rdioPlayer.configs.searchTypes;

        var resultsContainer = document.createElement('div');
        resultsContainer.id = "resultsContainer";

        //traverse searchTypes and display them foreach searchType
        for(var k in searchTypes)
        {
            var searchType = searchTypes[k];
            var resultsDiv = document.createElement('div');
            resultsDiv.id = searchType + "Result";
            resultsDiv.className = "typeResult";
            resultsDiv.innerHTML = "<h2>" + searchType + "</h2>";

            //and then, each search type should have results for their type
            //select specific type for this iteration and put it in a results array
            var resultsThisType = data.data.filter(function (f) {
                return f.type ==  searchType;
            });

            var resultsLength;
            if(searchTypes[k] === searchTypes.TRACKS)
                resultsLength = 10;
            else
                resultsLength = resultsThisType.length;

            for(var j = 0; j < resultsLength; j++) {
                var newP = document.createElement('p'); //put it in a 'p' item for now, for testing
                newP.id = searchType + j;
                newP.innerHTML = resultsThisType[j].name; //test
                resultsDiv.appendChild(newP);
            }

            //append the searchType
            resultsContainer.appendChild(resultsDiv);
        }

        //calculate elapsed time
        var elapsedMs = (new Date()) - startTime;
        //document.createElement.

        //replace results in target container DOM
        $("#results").html(resultsContainer);
    }
});