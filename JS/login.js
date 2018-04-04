var $login = (function () {
    function show() {
        var html = `<div class="login">`
            + ` <h1>集团后台登录</h1>`
            + ` <form>`
            + `     <div class="input-line">`
            + `          <label for="用户名：">用户名</label>`
            + `         <input type="text">`
            + `     </div>`

            + `     <div class="input-line">`
            + `         <label for="密 码：">密码</label>`
            + `         <input type="text">`
            + `     </div>`

            + `     <div class="input-line">`
            + `          <label for="验证码：">验证码</label>`
            + `          <input type="text">`
            + `      </div>`

            + `      <input type="button" value="登录">  `
            + `  </form>`
            + `</div>`;
        $(app.config.appContainer).html(html);
        $('html').css('background-color','#e2e2e2');
    }
    return { show: show };
}());