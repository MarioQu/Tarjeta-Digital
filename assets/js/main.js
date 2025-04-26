$(document).ready(function(){
    // Bloquear copiado de texto - https://www.techiedelight.com/es/disabling-text-selection-cut-copy-right-click/
    $('body').bind('cut copy', function (e) {
        e.preventDefault();
    });
    
    
    // Bloquear click derecho
    $(document).bind("contextmenu",function(e){ //$("body").on("contextmenu",function(e)
        return false;
    });
});

