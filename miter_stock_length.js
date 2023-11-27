(function(calculator, $) {

    var result_element = $('#miter_stock_length_result');

    function calculate() {
        var linside = parseFloat($('#l_inside')[0].value);
        var wstock = parseFloat($('#w_stock')[0].value);

        console.log(linside);
        console.log(wstock);
        var result = linside + 2 * wstock

        ecalc_ui.display(result, result_element, ecalc_ui.autoscale);
    };

    calculate();

    $('#l_inside').change(calculate);
    $('#w_stock').change(calculate);
}(window.v_divider = window.v_divider || {}, jQuery));
