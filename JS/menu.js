var $menu = (function () {
    //利用参数拼接HTML页面字符串
    var html = '';
    html = '<div class="admin-app-menu"><ul>';
    for (var i = 0; i < app.menuData.length; i++) {
        html += `<li>`
            + `<div class="menu-bar">`
            + `<i class="` + app.menuData[i].icon + `"></i>`
            + `<span>` + app.menuData[i].title + `</span>`
            + `<i class="iconfont icon-triangle-down"></i>`
            + `</div>`;
        for (var j = 0; j < app.menuData[i].items.length; j++) {
            html += `<div class="menu-item">`
                + `<div class="item"></div>`
                + `<p data-href="` + app.menuData[i].items[j].url + `">` + app.menuData[i].items[j].title + `</p>`
                + `</div>`;
        }
        html += `</li>`;
    }
    html += `</ul></div>`;

    function show() {
        //绘制HTML页面
        $(app.config.appContainer).append(html);
        var $menuBar = $('.menu-bar');
        var $lastBar = null;
        var $menu_item = $('.menu-item');

        //添加导航一级菜单点击事件
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
        //添加导航第二级菜单的点击事件
        $menu_item.click(function (e) {
            var $item = $(e.currentTarget);
            location.hash = $item.find('p').attr('data-href');
        });
    }
    return { show: show };
})();

