(function(calculator, $) {

    var result_element = $('#power_d_result');

    function calculate() {
        var r = parseFloat($('#power_d_r')[0].value);
        var v = parseFloat($('#power_d_v')[0].value);

        var result = v * v / r

        if(isNaN(result)) {
            if(v == 0) {
                result = 0;
            } else {
                result = Infinity;
            }
        }

        ecalc_ui.display(result, result_element, ecalc_ui.scientific);
    };

    calculate();

    $('#power_d_r').change(calculate);
    $('#power_d_v').change(calculate);

}(window.power_d = window.power_d || {}, jQuery));
