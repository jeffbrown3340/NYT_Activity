var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=9060b04f93d74976b6ae49a0e3af4d8c";

var numRecs;

function callAjax(urlP2) {
    var urlParams = "";
    fullUrl = url += urlP2;
    console.log("fullUrl=", fullUrl);
    $.ajax({
        url: fullUrl,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });
    // }
}

$("#search-button").on("click", function(event) {
    event.preventDefault();
	numRecs = $("#numberOfRecords").val();
    var urlParams = "",
	    q = $("#exampleInputsearch").val(),
	    bd = $("#startYear").val(),
	    ed = $("#endYear").val();
    if (q !== "") {urlParams = "&q=" + q}
    if (bd !== "") {urlParams += "&begin_date=" + bd + "0101"}
    if (ed !== "") {urlParams += "&end_date=" + ed + "1231"}
    console.log("urlParams=", urlParams);
    callAjax(urlParams);
});
