var openTijd = 3000;
var sluitTijd = 1000;

function ShowDoc(id, text) {
    $("#doc, #doc-title").animate({
        opacity: 0
    }, {
        "duration": sluitTijd,
        "queue": false
    });
    $("#doc").slideToggle(sluitTijd, function() {
        $("#doc-title").text(text);
        $("#doc, #doc-title").animate({
            opacity: 1
        }, {
            "duration": sluitTijd,
            "queue": false
        });
        $("#doc").load("./content/" + id + ".html", function() {
            $("#doc").slideToggle(openTijd);
        });
    });
}