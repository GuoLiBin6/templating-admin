$(function(){
    $login.show();
    // $header.show();
    // $menu.show();
    // $stage.show();
    // $footer.show();
    if(location.hash === '#/login') $login.show();
    if(location.hash === '#/index'){
        $(app.config.appContainer).html('');
        $header.show();
        $menu.show();
        $stage.show();
        $footer.show();
    }
    // if(location.hash === )
    
});
window.onhashchange=function(){
    if(location.hash === '#/index'){
        $(app.config.appContainer).html('');
        $header.show();
        $menu.show();
        $stage.show();
        $footer.show();
    }else if(location.hash === '#/login'){
        $(app.config.appContainer).html('');
        $login.show();
    }else{
        var panel = getPanel(this.location.hash);
        eval(panel+'.show()');
    }

}
function getPanel(router) {
    var panel = router.replace(/-(.)/g, function(letter){
      return letter.toUpperCase();
    }).replace(/#\//,'$')
      .replace(/-/g,'');

    return panel + 'Panel';
}
