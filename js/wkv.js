var endpoint="https://en.wikipedia.org/w/api.php?";
var wkTitleLinkPre="https://en.wikipedia.org/wiki/";

$(document).ready(function(){
  $("form").submit(function(e){
    e.preventDefault();
    searchWiki(endpoint+"action=query&format=json&prop=extracts&list=search&srsearch="+$("#search").val());
  });
  $("#random").click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
  });
});

function display(data){
  var numResults = data["continue"]["sroffset"];
  $(".list-group-item").fadeOut(300, function(){
    $(this).remove();
  });
  for(i=0;i<numResults;i++){
    var wkEntryTitle = data["query"]["search"][i]["title"];
    var wkEntrySnippet = data["query"]["search"][i]["snippet"];
    $(".list-group").fadeIn(300, function(){
      $(this).append('<a class=list-group-item list-group-item-action" href="'+wkTitleLinkPre+wkEntryTitle+'"><strong>'+wkEntryTitle+'</strong>'+'<p>'+wkEntrySnippet+'</p></a>');
    });
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