(function ($) {
    var workEvent = function () {
        var delayTime = 500;
        $.tempObj =  {};
        $.tempObj.changeWorksImg= function () {
            if($('#industrialTip').is(':hidden')){
                $('.industrial').find('img').attr('src','../img/work2-1-2.png');
            }else{
                $('.industrial').find('img').attr('src','../img/work2-1-1.png');
            }
            if($('#networkTip').is(':hidden')){
                $('.network').find('img').attr('src','../img/work2-1-2.png');
            }else{
                $('.network').find('img').attr('src','../img/work2-1-1.png');
            }
            if($('#cloudTip').is(':hidden')){
                $('.cloud').find('img').attr('src','../img/work2-1-2.png');
            }else{
                $('.cloud').find('img').attr('src','../img/work2-1-1.png');
            }
        }



        $('.industrial').off('click');
        $('.network').off('click');
        $('.cloudTip').off('click');

        $('.industrial').click(function () {
            $('#industrialTip').show(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.network').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').show(delayTime);
            $('#cloudTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.cloud').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').show(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
    }

    var addHoverForSpan = function () {

        var $firstSpan = $('.demand-analysis').find('.work-font:first').find('span');

        var spans = $('.demand-analysis').find('.work-font span');

        spans.each(function (index,item) {
            $(item).mouseover(function () {

                if($firstSpan.hasClass('active')){
                    $firstSpan.removeClass('active');
                }
            })
        });
    };

    var addHoverForFeature = function () {

        /*var $panel_heading = $('.panel-heading:first');*/

        var all = $('.panel-heading');;

        all.each(function (index,item) {
            $(item).mouseover(function () {
                var that = $(item);
                $('.panel-heading').each(function (num,tempitem) {
                    $(tempitem).removeClass('collapseActive');
                    $(tempitem).find('img').attr('src','./img/notactived.png')
                })
                that.addClass('collapseActive');
                that.find('img').attr('src','./img/actived.png')
                /*if($panel_heading.hasClass('collapseActive')){
                    $panel_heading.removeClass('collapseActive');
                    $panel_heading.find('img').attr('src','./img/notactived.png')
                }*/
            })
        });
    };


    var addCollapseActive = function () {
        $('.panel-heading').each(function (index,item) {
            $(item).click(function () {
                var that = $(item);
                $('.panel-heading').each(function (num,tempitem) {
                    $(tempitem).removeClass('collapseActive');
                    $(tempitem).find('img').attr('src','./img/notactived.png')
                })

                $(this).next().on('show.bs.collapse', function () {
                    // 执行一些动作...
                    that.addClass('collapseActive');
                    that.find('img').attr('src','./img/actived.png')
                });

                $(this).next().on('hide.bs.collapse', function () {
                    // 执行一些动作...
                    that.removeClass('collapseActive');
                    that.find('img').attr('src','./img/notactived.png')
                });

            })
            
        })
    }
    
    var listMenu = function () {

    }

    addHoverForSpan();

    addHoverForFeature();
    /*addCollapseActive();*/
    workEvent();

})(jQuery);