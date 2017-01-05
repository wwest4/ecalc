(function(calculator, $) {

    var result_element = $('#parallel_r_result');

    function calculate() { 
        var r1 = parseFloat($('#parallel_r_r1')[0].value);
        var r2 = parseFloat($('#parallel_r_r2')[0].value);

        var result = 1 / (1 / r1 + 1 / r2)

        if(isNaN(result)) {
            result = 0;
        }
        
        ecalc_ui.display(result, result_element, ecalc_ui.autoscale);
    };

    calculate();

    $('#parallel_r_r1').change(calculate);
    $('#parallel_r_r2').change(calculate);

}(window.parallel_r = window.parallel_r || {}, jQuery));
