var endpoint="https://en.wikipedia.org/w/api.php?";
var wkTitleLinkPre="https://en.wikipedia.org/wiki/";

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    searchWiki(endpoint+"action=query&format=json&prop=extracts&list=search&srsearch="+$("#search").val());
  });
});

function display(data){
  var numResults = data["continue"]["sroffset"];
  for(i=0;i<numResults;i++){
    var wkEntryTitle = data["query"]["search"][i]["title"];
    var wkEntrySnippet = data["query"]["search"][i]["snippet"];
    $(".list-group").append('<a class=list-group-item list-group-item-action" href="'+wkTitleLinkPre+wkEntryTitle+'"><strong>'+wkEntryTitle+'</strong>'+'<p>'+wkEntrySnippet+'</p></a>');
  };
};

function searchWiki(searchUrl){
  $.ajax({
    url: searchUrl,
    data: {
      format: 'json'
    },
    type: 'GET',
    // Api-User_agent below is recommended when
    // querying so they can identify you - format is free-form
    headers: {
      'Api-User-Agent': 'jjleonard@gmail.com'
    },
    dataType: 'jsonp',
    jsonpCallback: "display",
  });
};



/*
TODO:
* work out how to return the leading test from the article (first sentence, not snippet) - DONE (also displayed the content as a series of entries)
* then add a search box to the page - DONE
* pass the search value to the query after rudimentary checks - I have to work out how to pull the text from the input when
  the search button is clicked. - DONE
* work out how to clear the search bar and re-enable the button as it only works once between page refreshes
* re-apply the random button function

AFTER THAT:
* clean up, tidy up - some bootstrap needed, need to re-arrange the page layout to make it prettier

* HELPFUL INFO:
* link to ssample search (note list=search and srsearch holding query): /w/api.php?action=query&format=json&prop=extracts&list=search&srsearch=battle%20of%20britain
* API Sandbox link showing parameters: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&prop=extracts&list=search&srsearch=battle%20of%20britain
*/
