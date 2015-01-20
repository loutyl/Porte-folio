$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top'
    });

    $('#popMCD').popover("destroy").popover({
        content: "Modèle Conceptuel de données"
    });
    
    $('#popMLD').popover("destroy").popover({
        content: "Modèle Logique de Données"
    });

    $('#popMPD').popover("destroy").popover({
        content: "Modèle Physique de données"
    });

    $('#popHTML').popover("destroy").popover({
        content: "HTML or HyperText Markup Language is the standard markup language "+
        "used to create Web pages. HTML is written in the form of HTML elements "+
        "consisting of tags enclosed in angle brackets (like <html> )."
    });

    $('#popCSS').popover("destroy").popover({
        content: "Cascading Style Sheets (CSS) is a style sheet language used for "+
        "describing the look and formatting of a document written in a markup language."
    });

});