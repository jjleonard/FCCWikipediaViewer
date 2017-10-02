var endpoint="https://en.wikipedia.org/w/api.php?";
/* var test="action=query&list=random&rnlimit=1&rnnamespace=0&format=json"; */
var test="action=query&list=search&srsearch='Albert Einstein'&format=json"

$(document).ready(function(){
  $("#random").on("click", function(){
    $.ajax({
      url: endpoint+test,
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
  });
});

function display(data){
  alert(JSON.stringify(data));
  var tempVar = data.query.search[0].snippet;
  alert(tempVar);
  $("#wkPageTitle").html(tempVar);
  // alert(data.query.pages["15580374"].title);
};

/*
TODO:
* work out how to return the leading test from the article (first sentence, not snippet)
* then add a search box to the page
* pass the search value to the query after rudimentary checks
*/
