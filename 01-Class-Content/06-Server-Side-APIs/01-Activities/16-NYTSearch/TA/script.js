 $("#search-term").val(localStorage.getItem("query"));
 $("#number-records").val(localStorage.getItem("numRecords"));
 $("#begin-year").val(localStorage.getItem("beginYear"));
$("#end-year").val(localStorage.getItem("endYear"));



function outputArticle(h, s, p, w) {
  var articleDiv = $("<div>");
  var articleLink = $("<a href='" + w + "'>" + h + "(" + p + ")</a>");
  var pTag = $("<p>");
  pTag.html(s);
  articleDiv.append(articleLink, pTag);
  $("#articles").append(articleDiv);
}

$("#search-button").on("click", function () {
  var query = $("#search-term").val();
  var numRecords = $("#number-records").val();
  

  var beginYear = $("#begin-year").val();
  if (beginYear.trim() == "") {
      beginYear = "2021";
  }
  var endYear = $("#end-year").val();
  if (endYear.trim() == "") {
      endYear = "2021";
  }

  var beginDate = beginYear + "0101"
  var endDate = endYear + "1231";
  localStorage.setItem("query", query);
  localStorage.setItem("numRecords", numRecords);
  localStorage.setItem("beginYear", beginYear);
  localStorage.setItem("endYear", beginYear);

  var apiKey = "X3jIsSjgQcH5U23qfQY9zGw9yOwNPj2f";
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    query +
    "&begin_date=" +
    beginDate +
    "&end_date=" +
    endDate +
    "&api-key=" +
    apiKey;

  $.ajax({
    url: queryURL,
    method: "GET",
  })
    // After the data comes back from the API
    .then(function (response) {
      // Storing an array of results in the results variable
      var results = response.response.docs;
      // Looping over every result item
      for (var i = 0; i < numRecords; i++) {
        var headline = results[i].headline.print_headline;
        var snippet = results[i].snippet;
        var pubDate = results[i].pub_date;
        var webURL = results[i].web_url;

        outputArticle(headline, snippet, pubDate, webURL);
      }
    });
});

$("#clear-button").on("click", function (elements) {
  var elements = document.getElementsByTagName("input");
  for (var i = 0; i < elements.length; i++) {
    elements[i].value = "";
    // console.log(elements[i]);
  }
  $("#articles").text("");
});
