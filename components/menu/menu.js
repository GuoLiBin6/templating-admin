var $menu = (function () {
    var $menuBar = $('.menu-bar');
    var $lastBar = null;
    var $menu_item = $('.menu-item');

    $menuBar.click(function (e) {
        var $menu = $(e.target).parents('li');
        var $menu_bar = $menu.find('.menu-bar');
        var $menu_items = $menu.find('.menu-item');

        if ($lastBar === null) {
            $menu_items.css('display', 'block');
            $menu_bar.attr('class', 'menu-bar menu-bar-active');
            $lastBar = $menu;
        } else if ($lastBar.get(0) == $menu.get(0)) {
            $menu_items.css('display', 'none');
            $menu_bar.attr('class', 'menu-bar');
            $lastBar = null;
        } else {
            $lastBar.find('.menu-item').css('display', 'none');
            $lastBar.find('.menu-bar').attr('class', 'menu-bar');
            $menu_items.css('display', 'block');
            $menu_bar.attr('class', 'menu-bar menu-bar-active');
            $lastBar = $menu;
        }

    });
    $menu_item.click(function (e) {
        var $item = $(e.currentTarget);
        location.hash = $item.find('p').attr('data-href');
    })
})();

