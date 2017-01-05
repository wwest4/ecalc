(function(calculator, $) {

    var result_element = $('#v_divider_result');

    function calculate() {
        var r1 = parseFloat($('#v_divider_r1')[0].value);
        var vin = parseFloat($('#v_divider_vin')[0].value);
        var vout = parseFloat($('#v_divider_vout')[0].value);

        var result = r1 * (vin/vout - 1);

        if(isNaN(result)) {
            if(vout == 0) {
                result = 0;
            } else {
                result = Infinity;
            }
        }

        ecalc_ui.display(result, result_element, ecalc_ui.autoscale);
    };

    calculate();

    $('#v_divider_r1').change(calculate);
    $('#v_divider_vin').change(calculate);
    $('#v_divider_vout').change(calculate);
}(window.v_divider = window.v_divider || {}, jQuery));
