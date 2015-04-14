/**
 * Created by knguyen on 4/14/2015.
 */

var config = {
    baseUri: "http://rdio-service.herokuapp.com/",
    searchEndpoint: "/search?q=",
    artistEndpoint: "/albums?artist_id=",

}

function getSearchTerm() {
    var searchForm = document.forms.musicSearch;
    var phrase = searchForm.phrase.value.trim();

    if(isNullOrEmpty(phrase))
        return "";

    return phrase;
}

function getSearchUri(phrase) {
    var baseUri = "";
}

function isNullOrEmpty(phrase) {
    return !phrase || phrase.length === 0;
}