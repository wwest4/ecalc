(function (ecalc_ui, $) {

    ecalc_ui.autoscale = Symbol();
    ecalc_ui.integer = Symbol();
    ecalc_ui.scientific = Symbol();


    ecalc_ui.fade = function(elem) {
        elem.fadeTo(100, 0.1, function() {
            $(this).fadeTo(500, 1.0);
        });
    };


    function display_autoscale(result, elem) {
        var n;
        var abs_result = Math.abs(result);

        if(abs_result > 1000 || abs_result < 1) {
            n = result.toExponential(2);
        } else {
            n = result.toFixed(2);
        }

        elem.html(n);
        elem.val(n);
    }


    function display_integer(result, elem) {
        var n = result.toFixed(0);

        elem.html(n);
        elem.val(n);
    }


    function display_scientific(result, elem) {
        n = result.toExponential(2);

        elem.html(n);
        elem.val(n);
    }


    ecalc_ui.display = function(result, elem, mode) {
        switch(mode) {
            case ecalc_ui.autoscale:
                display_autoscale(result, elem);
                break;
            case ecalc_ui.integer:
                display_integer(result, elem);
                break;
            case ecalc_ui.scientific:
                display_scientific(result, elem);
                break;
            default:
                elem.html(result);
        }
        ecalc_ui.fade(elem);
    };
}(window.ecalc_ui = window.ecalc_ui || {}, jQuery));
