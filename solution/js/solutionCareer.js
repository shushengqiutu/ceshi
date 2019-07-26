(function ($) {
    var delay = 300;
    var addTopClickEvent = function () {

        $(".footer-wrapper a[href^='#']").off('click');

        $('.footer-wrapper a').each(function (index,item) {
            $(item).click(function (event) {

                if(event.target.id == 'railTransit'){
                    $('.railTransit').show(delay);
                    $('.petrochemical').hide(delay);
                    $('.firePower').hide(delay);

                    /*$(this).addClass('active');*/

                }else if(event.target.id == 'petrochemical'){
                    $('.railTransit').hide(delay);
                    $('.petrochemical').show(delay);
                    $('.firePower').hide(delay);

                }else{
                    $('.railTransit').hide(delay);
                    $('.petrochemical').hide(delay);
                    $('.firePower').show(delay);
                }
                addClassOfA();
            })

        });
        var addClassOfA = function () {
            var time = null
            clearTimeout(time);
            time = setTimeout(function () {
                if($('.railTransit').is(':hidden')){
                    $('#railTransit').removeClass('active');
                }else{
                    $('#railTransit').addClass('active');
                }

                if($('.petrochemical').is(':hidden')){
                    $('#petrochemical').removeClass('active');
                }else{
                    $('#petrochemical').addClass('active');
                }

                if($('.firePower').is(':hidden')){
                    $('#firePower').removeClass('active');
                }else{
                    $('#firePower').addClass('active');
                }
            },400)
        }

    }
    addTopClickEvent();
})(jQuery);