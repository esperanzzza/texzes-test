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
        slider= $('.slider'),
        formColor = $('form__color'),
        slide = $('.slider__image'),
        slideLine = $('.slider__line'),
        currentSlideIndex = $('.slider__image--active').index(),
        currentSlide = $('.slider__image--active'),
        currentLine = 'slider__line--active',
        currentLineIndex = $('.slider__image--active').index(),
        targetVal = currentSlide.attr('data-val');


    formControls.each(function() {

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

sliderControls.each(function() {


        right.click(function() {

            if (currentSlideIndex === slide.last().index()) {
                slide.eq(currentSlideIndex).removeClass('slider__image--active animated zoomIn').first().addClass('slider__image--active animated zoomIn');
                currentSlideIndex++;
            } else {

                slide.eq(currentSlideIndex).removeClass('slider__image--active animated zoomIn').next().addClass('slider__image--active animated zoomIn');
            }

            slideMove();

        });


        left.click(function() {

            if (currentSlideIndex === slide.first().index()) {
                slide.eq(currentSlideIndex).removeClass('slider__image--active animated zoomIn').last().addClass('slider__image--active animated zoomIn');
                 currentSlideIndex--;

            } else {

                slide.eq(currentSlideIndex).removeClass('slider__image--active animated zoomIn').prev().addClass('slider__image--active animated zoomIn');

            }

            slideMove();

        });

    });


    function slideMove() {

        if (targetVal === currentSlide.attr('data-val')) {
            slideLine.addClass(currentLine);
        };
    };

    sliderControls.each(function() {


        right.click(function() {

            if (currentSlideIndex === slide.last().index()) {
                slide.eq(currentSlideIndex).removeClass('slider__image--active animated zoomOut').first().addClass('slider__image--active animated zoomIn');

            } else {

                slide.eq(currentSlideIndex).removeClass('slider__image--active animated zoomOut').next().addClass('slider__image--active animated zoomIn');
                currentSlideIndex++;

            }

            slideMove();

        });


        left.click(function() {

            if (currentSlideIndex === slide.first().index()) {
                slide.eq(currentSlideIndex).removeClass('slider__image--active').last().addClass('slider__image--active animated zoomIn');

            } else {

                slide.eq(currentSlideIndex).removeClass('slider__image--active animated zoomOut').prev().addClass('slider__image--active animated zoomIn');
                currentSlideIndex--;

            }

            slideMove();

        });

    });


    function slideMove() {

      slideLine.each(function(event){ 

        if (targetVal === $(event.target).attr('data-val')) {
            $(event.target).addClass(currentLine);
      }
    });
  };

});