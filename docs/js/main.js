$(document).ready(function() {

    var
        input = $('.form__quantity-field'),
        formControls = $('.form__controls'),
        btnUp = $('.form__increment'),
        btnDown = $('.form__decrement'),
        min = input.attr('min'),
        sliderControls = $('.slider__controls'),
        left = $('.slider__control--left'),
        right = $('.slider__control--right'),
        slide = $('.slider__image'),
        slideLine = $('.slider__line'),
        currentSlideIndex = $('.slider__image--active').index(),
        slideLineIndex = $('.slider__line').index(),
        currentSlide = $('.slider__image--active'),
        currentSlideClass = 'slider__image--active animated zoomIn',
        currentLine = $('.slider__line--active'),
        currentLineClass = 'slider__line--active',
        currentLineIndex = $('.slider__image--active').index();

    initBg();

    formControls.each(function() {
        countZero(1, 0);

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            var newVal = oldValue + 1;
            if (newVal < 10) {
                input.val('0' + newVal);

            } else {
                input.val(newVal);
            }

            input.trigger('change');

        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            if (newVal < 10) {
                input.val('0' + newVal);

            } else {
                input.val(newVal);
            }

            input.trigger('change');

        });

    });

    sliderControls.each(function() {


        right.click(function() {

            if (currentSlideIndex === slide.last().index()) {
                slide.eq(currentSlideIndex).removeClass(currentSlideClass).first().addClass(currentSlideClass);

            } else {

                slide.eq(currentSlideIndex).removeClass(currentSlideClass).next().addClass(currentSlideClass);
                currentSlideIndex++;
            }

            moveRight();

            function moveRight() {
                if (currentLineIndex != slideLine.last().index()) {
                    slideLine.eq(currentLineIndex).removeClass(currentLineClass).next().addClass(currentLineClass);
                    currentLineIndex++;

                }

            };

        });


        left.click(function() {

            if (currentSlideIndex === slide.first().index()) {
                slide.eq(currentSlideIndex).removeClass(currentSlideClass).last().addClass(currentSlideClass);

            } else {

                slide.eq(currentSlideIndex).removeClass(currentSlideClass).prev().addClass(currentSlideClass);
                currentSlideIndex--;

            }

            moveLeft();

            function moveLeft() {
                if (currentLineIndex != slideLine.first().index()) {
                    slideLine.eq(currentLineIndex).removeClass(currentLineClass).prev().addClass(currentLineClass);
                    currentLineIndex--;

                }
            };

        });

    });

    function countZero(num, count) {
        var numZero = num + '';
        while (numZero.length < count) {
            numZero = "0" + numZero;
        }
        return numZero;
    }


    function initBg() {
        $('body').backstretch([
            'img/bg-bright.jpg', 'img/bg--blurred.jpg', 'img/bg--blue.jpg',
        ], {
            duration: 1000,
            fade: 750
        });
    }


});