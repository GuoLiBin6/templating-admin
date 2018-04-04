var $stage = (function () {

    function show() {
        $(app.config.appContainer).append('<div class="admin-app__stage"></div>');
    }

    return { show: show };
}());

