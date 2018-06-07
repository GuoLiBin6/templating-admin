var $storeListPanel = (function(){
    function show(){
        $('.admin-app__stage').html('');
        $('.admin-app__stage').append('<h1>商店列表panel</h1>');
    }


    return {show:show};
})();