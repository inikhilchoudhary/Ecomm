$(document).ready(function() {
    var activeOptionsContainer = null;

    $('.product-item a').hover(function() {
        var category = $(this).data('category');
        if (activeOptionsContainer && activeOptionsContainer.attr('data-category') !== category) {
            activeOptionsContainer.fadeOut();
            activeOptionsContainer = null;
        }
        openOptions(category, $(this));
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.product-item').length) {
            closeOptions();
        }
    });

    function openOptions(category, target) {
        var optionsContainer = target.siblings('.options-container');
        optionsContainer.empty();

        var options = {
            myntra: {
                url: 'https://www.myntra.com/search?query=' + category,
                image: '../Cloths/MEDIA/myntra.png',
                label: 'Myntra'
            },
            amazon: {
                url: 'https://www.amazon.in/s?k=' + category,
                image: '../Cloths/MEDIA/amazon.png',
                label: 'Amazon'
            },
            flipkart: {
                url: 'https://www.flipkart.com/search?q=' + category,
                image: '../Cloths/MEDIA/flipkart.jpg',
                label: 'Flipkart'
            }
        };

        for (var key in options) {
            var option = options[key];
            var link = $('<a>')
                .attr('href', option.url)
                .attr('target', '_blank')
                .appendTo(optionsContainer);

            $('<img>')
                .attr('src', option.image)
                .appendTo(link);

            $('<p>')
                .text(option.label)
                .appendTo(link);
        }

        optionsContainer.fadeIn();
        activeOptionsContainer = optionsContainer;
    }

    function closeOptions() {
        if (activeOptionsContainer) {
            activeOptionsContainer.fadeOut();
            activeOptionsContainer = null;
        }
    }
});
