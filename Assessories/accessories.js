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
        openRandomSite(category);
    });

    function openRandomSite(category) {
        var siteUrls = {
            amazon: {
                url: 'https://www.amazon.com/s?k=' + category + '+for+men'
            },
            flipkart: {
                url: 'https://www.flipkart.com/search?q=' + category + '+for+men'
            },
            snapdeal: {
                url: 'https://www.snapdeal.com/search?keyword=' + category + '+for+men'
            }
        };

        var randomSite = getRandomSite(siteUrls);
        if (randomSite) {
            window.open(randomSite.url, '_blank');
        }
    }

    function getRandomSite(siteUrls) {
        var keys = Object.keys(siteUrls);
        var randomKey = keys[Math.floor(Math.random() * keys.length)];
        return siteUrls[randomKey];
    }
});
