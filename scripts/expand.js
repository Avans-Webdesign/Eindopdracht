// Open en sluit tijden in milisecondes
var openTijd = 2000; 
var sluitTijd = 1000;

var isWorking = false;

// Functie om een bepaald HTML bestand in de #doc div te laden
function ShowDoc(id, text) {

    // Als we momenteel nog bezig zijn met animaties, skip dit.
    if(isWorking) { return; }

    // Laat zien dat we bezig zijn met animaties.
    isWorking = true;

    // Maak #doc en #doc-title langzaam doorzichtig met de
    // jQuery 'animate()' methode
    $("#doc, #doc-title").animate({
        opacity: 0              // Opacity moet 0 worden
    }, {
        duration: sluitTijd,    // Doe dit voor [sluitTijd]ms
        queue: false            // Wacht niet totdat deze animatie afgelopen is
                                // maar ga in plaats daarvan gelijk door naar de
                                // volgende stap
    });

    // Gebruik de jQuery methode 'slideToggle()' om de div te sluiten
    // in [sluitTijd]ms
    $("#doc").slideToggle(sluitTijd, function () {

        // Wanneer we hem hebben gesloten en de tekst doorzichtig is,
        // verander de tekst naar de paramater die we gekregen hebben.
        $("#doc-title").text(text);

        // Laad het bestand van ./content/[id].html in de #doc div.
        $("#doc").load("./content/" + id + ".html", function () {

            // Wanneer dat gedaan is, maak #doc en #doc-title langzaam
            // weer niet-doorzichtig
            $("#doc, #doc-title").animate({
                opacity: 1              // Opacity moet 1 worden
            }, {
                duration: openTijd,     // Doe dit voor [openTijd]ms
                queue: false            // Wacht niet totdat deze animatie afgelopen is
                                        // maar ga in plaats daarvan gelijk door naar de
                                        // volgende stap
            });

            // Gebruik de jQuery methode 'slideToggle()' om de div te
            // openen in [openTijd]ms
            $("#doc").slideToggle(openTijd, function() {

                // Als de animatie klaar is, zet isWorking terug naar false.
                isWorking = false;
            });
        });
    });
}