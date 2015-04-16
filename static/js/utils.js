/**
 * Created by knguyen on 4/14/2015.
 */

var rdioPlayer = {
    configs: {

    }
}

rdioPlayer.configs.Config = {
    baseUri: "https://rdio-service.herokuapp.com/",
    searchEndpoint: "search?q=",
    artistAlbumsEndpoint: "albums?artist_id=",
    albumEndpoint: "albums/",
    artistTracksEndpoint: "tracks?artist_id=",
    tracksEndpoint: "tracks/",
    playlistsEndpoint: "playlists/"
}

//search type enums
//see: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/freeze
rdioPlayer.configs.searchTypes = Object.freeze({
  ARTISTS: "artist",
  ALBUMS: "album",
  TRACKS: "track"
})

function getSearchTerm() {
    var searchForm = document.forms.musicSearch;
    var searchTerm = searchForm.phrase.value.trim();

    if(isNullOrEmpty(searchTerm))
        return "";

    return searchTerm;
}

function isNullOrEmpty(phrase) {
    return !phrase || phrase.length === 0;
}

function toNameCase(str) {
    var lower = str.toLowerCase();
    return lower.replace(/(^| )(\w)/g, function(x) {
       return x.toUpperCase();
    });
}