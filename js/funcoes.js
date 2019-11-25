// Efeito rolagem
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 650);
    return false;
});

// Mascara telefone e email
$(function($) {
    $("#telefone").mask('(00)00000-0000');
    $("#email").mask("A", {
        translation: {
            "A": { pattern: /[\w@\-.+]/, recursive: true }
        }
    }) 
});
