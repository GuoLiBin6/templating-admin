(function () {

      
        $('.account').on('mouseout', function () {
            $('.submenu').css('display', 'none');
            $('.subopen i').attr('class', 'iconfont icon-triangle-down');
        });
        $('.subopen').on('mouseover', function () {
            $('.subopen i').attr('class', 'iconfont icon-triangle-up');
            $('.submenu').css('display', 'block');
        });

    
})();