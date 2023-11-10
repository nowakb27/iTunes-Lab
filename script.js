$(document).ready(function () {
    $("#searchForm").submit(function (event) {
        event.preventDefault();
        var term = $("#searchTerm").val();
        var limit = 10;
        var url = `https://itunes.apple.com/search?term=${term}&limit=${limit}`;

        $.ajax({
            url: url,
            dataType: 'jsonp',
            success: function (response) {
                displayResults(response.results);
            }
        });
    });

    function displayResults(results) {
        var resultsDiv = $("#results");
        resultsDiv.empty();

        $.each(results, function (i, result) {
            var resultDiv = $("<div class='result'></div>");
            resultDiv.append(`<img src="${result.artworkUrl100}"/>`);
            resultDiv.append(`<p>${result.trackName}</p>`);
            resultDiv.append(`<p>${result.artistName}</p>`);
            resultDiv.append(`<audio controls><source src="${result.previewUrl}" type="audio/mpeg"></audio>`);
            resultsDiv.append(resultDiv);
        });
    }
});
