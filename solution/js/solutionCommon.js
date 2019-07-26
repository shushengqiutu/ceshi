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
                $('.network').find('img').attr('src','../img/work2-2-2.png');
            }else{
                $('.network').find('img').attr('src','../img/work2-2-1.png');
            }
            if($('#cloudTip').is(':hidden')){
                $('.cloud').find('img').attr('src','../img/work2-3-2.png');
            }else{
                $('.cloud').find('img').attr('src','../img/work2-3-1.png');
            }
            if($('#dynamicTip').is(':hidden')){
                $('.dynamic').find('img').attr('src','../img/work2-4-2.png');
            }else{
                $('.dynamic').find('img').attr('src','../img/work2-4-1.png');
            }
        }

        $('.industrial').click(function () {
            $('#industrialTip').show(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').hide(delayTime);
            $('#dynamicTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.network').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').show(delayTime);
            $('#cloudTip').hide(delayTime);
            $('#dynamicTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.cloud').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').show(delayTime);
            $('#dynamicTip').hide(delayTime);
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);
        });
        $('.dynamic').click(function () {
            $('#industrialTip').hide(delayTime);
            $('#networkTip').hide(delayTime);
            $('#cloudTip').hide(delayTime);
            $('#dynamicTip').show(delayTime)
            setTimeout(function () {
                $.tempObj.changeWorksImg();
            },delayTime);

        });
    }
    var sideMove = function () {
        var timer = null;
        var scrollsidebar = document.getElementsByClassName("side_imgs")[0];
        //悬浮QQ匀速移动
        var startMove = function(argument) {
            clearInterval(timer);
            timer = setInterval(function() {
                var speed = (argument - scrollsidebar.offsetTop) / 4;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                if (argument == scrollsidebar.offsetTop) {
                    clearInterval(timer);
                } else {
                    scrollsidebar.style.top = scrollsidebar.offsetTop + speed + "px";
                }
            }, 20);
        };

        //鼠标移动
        var scrollMove = function() {
            window.onscroll = window.onload = function() {
                var scrolltop =
                    document.body.scrollTop || document.documentElement.scrollTop;
                startMove(
                    parseInt(
                        (document.documentElement.clientHeight -
                            scrollsidebar.offsetHeight) /2 +scrolltop
                    )
                );
            };
        };
        $('.telephohe_chat').mouseover(function () {
            $('.telTip').show(200);
        });
        $('.telephohe_chat').mouseout(function () {
            $('.telTip').hide(200);
        });
        $('.weixin_chat').mouseover(function () {
            $('.chatTip').show(200);
        });
        $('.weixin_chat').mouseout(function () {
            $('.chatTip').hide(200);
        });
        return {
            init:function(){
                scrollMove();
            }
        }
    }
    window.banner = null;
    /*function newBanner() {
        banner =  new FragmentBanner({
            container : "#banner1",//选择容器 必选
            // imgs : ['images/a1.png','images/a2.png','images/a3.png','images/a4.png','images/a5.png'],//图片集合 必选
            imgs : ['img/banner3-2.png','img/banner1-2.png','img/banner2-2.png'],//图片集合 必选
            size : {
                width : $("#bgbanner").width(),
                height : $("#bgbanner").height()
            },//容器的大小 可选
            //行数与列数 可选
            grid : {
                line : 12,
                list : 14
            },
            index: 0,//图片集合的索引位置 可选
            type : 2,//切换类型 1 ， 2 可选
            boxTime : 5000,//小方块来回运动的时长 可选
            fnTime : 10000,//banner切换的时长 可选
            onChange: function(obj){
                console.log("change");
                var index = obj.index;
                if(index == 0){
                    $("#bannerH1_1").show();
                    $("#bannerH1_2").hide();
                    $("#bannerH1_3").hide();
                    $("#bannerH1_1").textillate('in');
                    $("#bannerP_1").show();
                    $("#bannerP_2").hide();
                    $("#bannerP_3").hide();
                    $("#bannerP_1").textillate('in');
                }else if(index == 1){
                    $("#bannerH1_1").hide();
                    $("#bannerH1_2").show();
                    $("#bannerH1_3").hide();
                    $("#bannerH1_2").textillate('in');
                    $("#bannerP_1").hide();
                    $("#bannerP_2").show();
                    $("#bannerP_3").hide();
                    $("#bannerP_2").textillate('in');
                }else if(index == 2){
                    $("#bannerH1_1").hide();
                    $("#bannerH1_2").hide();
                    $("#bannerH1_3").show();
                    $("#bannerH1_3").textillate('in');
                    $("#bannerP_1").hide();
                    $("#bannerP_2").hide();
                    $("#bannerP_3").show();
                    $("#bannerP_3").textillate('in');
                }
            },
            onLeave: function(obj){
                console.log('leave');
                var index = obj.index;
                if(index == 0){
                    $("#bannerH1_1").textillate('out');
                    $("#bannerP_1").textillate('out');
                }else if(index == 1){
                    $("#bannerH1_2").textillate('out');
                    $("#bannerP_2").textillate('out');
                }else if(index == 2){
                    $("#bannerH1_3").textillate('out');
                    $("#bannerP_3").textillate('out');
                }
            }
        });
        return banner;
    }*/
    //保存当前title的html
    var titleHTML = $("#titleHTML").html();
    //控制隐藏显示的
    var animateClasses = 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut';
    var animateList = animateClasses.split(' ');
    var random = Math.floor((Math.random()*animateList.length));
    var ranEffect = function(){
        var random = Math.floor((Math.random()*animateList.length));
        console.log(animateList[random]);
        return animateList[random];
    }
    /*将首页中的标题加载动画*/
    var titleAnimation = function(){
        $(".home-content h1").textillate('stop');
        $(".home-content p").textillate('stop');
        //一级标题
        $(".home-content h1").textillate({
            autoStart: false,
            in:{
                delay:50,
                //effect: 'rollIn'
                effect: 'fadeInUp'
            },
            out:{
                //effect: 'rollOut'
                effect: 'fadeOutDown'
            }
        });
        $(".home-content p").textillate({
            autoStart: false,
            in:{
                delay:50,
                //effect: 'bounceInRight'
                effect: 'fadeInUp'
            },
            out:{
                delay:3,
                effect: 'fadeOutDown',
                shuffle: true
            }
        });
        setTimeout(function () {
            $("#bannerH1_1").textillate('start');
            $("#bannerP_1").textillate('start');
        }, 1000);
    }

    /*newBanner();*/
    titleAnimation();
    workEvent();
    sideMove().init();
    $(window).resize(function() {
        /*banner.onChange = undefined;
        banner.onLeave = undefined;*/
        /*banner = undefined;
        banner = null;
        $("#bgbanner").html('').append('<div class="banner" id="banner1"><div class="banner-view"></div><div class="banner-btn"></div><div class="banner-number"></div><div class="banner-progres"></div></div>');
        $("#titleHTML").html('').append(titleHTML);
        banner =  newBanner();
        titleAnimation();*/
    });
})(jQuery)