(function(calculator, $) {

    var v_element = $('#voltage_v');
    var i_element = $('#voltage_i');
    var r_element = $('#voltage_r');


    function calculate(event) {
        var v = parseFloat(v_element[0].value);
        var i = parseFloat(i_element[0].value);
        var r = parseFloat(r_element[0].value);
        var result;
        var result_element;

        if(isNaN(v) && !(isNaN(i) || isNaN(r))) {
            result_element = v_element;
            result = i * r;
        } else if(isNaN(i) && !(isNaN(v) || isNaN(r))) {
            result_element = i_element;
            result = v / r;
        } else if(isNaN(r) && !(isNaN(v) || isNaN(i))) {
            result_element = $(r_element);
            result = v / i;
        } else {
            return;
        }

        ecalc_ui.display(result, result_element, ecalc_ui.autoscale);
    };


    calculate();

    v_element.change(calculate);
    i_element.change(calculate);
    r_element.change(calculate);

}(window.voltage = window.voltage || {}, jQuery));
