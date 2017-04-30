$(document).ready(function() {

    var
        input = $('.form__quantity-field'),
        controls = $('.form__controls'),
        btnUp = $('.form__increment'),
        btnDown = $('.form__decrement'),
        min = input.attr('min');

    controls.each(function() {

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            var newVal = oldValue + 1;
            input.val(newVal);
            input.trigger('change');
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            input.val(newVal);
            input.trigger('change');
        });

    });

});