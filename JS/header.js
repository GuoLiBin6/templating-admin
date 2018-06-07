var $header = (function () {

    function show() {
        //绘制HTML页面
        var html = `<div class="admin-app__header">`
            + `    <h1>`+app.headerData.title+`</h1>`
            + `    <div class="account">`
            + `        <div class="subopen">`
            + `            <div class="logo"></div>`
            + `            <span>管理</span>`
            + `            <i class="iconfont icon-triangle-down"></i>`
            + `        </div>`
            + `        <div class="submenu">`
            + `            <i class="fa fa-angle-double-right"></i>`
            + `            <span>注销</span>`
            + `        </div>`
            + `    </div>`
            + `</div>`;
        $(app.config.appContainer).append(html);
        //添加logo
        $('.logo').css('background-image',app.headerData.logo);
        $('.account').on('mouseout', function () {
            $('.submenu').css('display', 'none');
            $('.subopen i').attr('class', 'iconfont icon-triangle-down');
        });
        $('.account').on('mouseover', function () {
            $('.subopen i').attr('class', 'iconfont icon-triangle-up');
            $('.submenu').css('display', 'block');
        });
        $('.submenu').on('click',function(){
            window.location.hash = '#/login';
        })

    }

    return { show: show };
})();