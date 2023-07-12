$(document).ready(function() {
    $('.product-item').hover(
        function() {
            var optionsContainer = $(this).find('.options-container');
            optionsContainer.stop().fadeIn();
        },
        function() {
            var optionsContainer = $(this).find('.options-container');
            optionsContainer.stop().fadeOut();
        }
    );

    $('.product-item a').click(function(e) {
        e.preventDefault();
        var category = $(this).data('category');
        openOptions(category);
    });

    function openOptions(category) {
        var optionsContainer = $('.product-item a[data-category="' + category + '"]').siblings('.options-container');
        optionsContainer.empty();

        var options = {
            myntra: {
                url: 'https://www.myntra.com/search?query=' + category,
                label: 'Myntra'
            },
            amazon: {
                url: 'https://www.amazon.in/s?k=' + category,
                label: 'Amazon'
            },
            flipkart: {
                url: 'https://www.flipkart.com/search?q=' + category,
                label: 'Flipkart'
            },
            nike: {
                url: 'https://www.nike.com/in/w?q=' + category,
                label: 'Nike'
            },
            adidas: {
                url: 'https://shop.adidas.co.in/search?s=' + category,
                label: 'Adidas'
            },
            bata: {
                url: 'https://www.bata.in/bataindia/c-465/' + category + '.html',
                label: 'Bata'
            },
            woodland: {
                url: 'https://www.woodlandworldwide.com/men-footwear/' + category,
                label: 'Woodland'
            },
            snapdeal: {
                url: 'https://www.snapdeal.com/search?keyword=' + category,
                label: 'Snapdeal'
            }
        };

        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                var option = options[key];
                var link = $('<a>')
                    .attr('href', option.url)
                    .attr('target', '_blank')
                    .addClass('option-button')
                    .text(option.label)
                    .appendTo(optionsContainer);
            }
        }

        optionsContainer.stop().fadeIn();
    }

    // Open the link of the selected option in a new tab or window
    $(document).on('click', '.option-button', function(e) {
        e.preventDefault();
        var optionUrl = $(this).attr('href');
        var optionCategory = $(this).closest('.product-item').find('a').data('category');
        optionUrl += '&category=' + optionCategory;
        window.open(optionUrl, '_blank');
    });
});
