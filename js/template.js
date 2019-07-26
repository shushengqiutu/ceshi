require.config({
    paths: {
        // "jquery":"./jquery-1.10.2.min",
        'bootstrap': 'https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.min',
        'popper': './lib/popper',
        'jquery': 'https://libs.cdnjs.net/jquery/1.10.2/jquery.min',
        'text': './lib/text',
        'art_template': './art_template',
        'nav': '../template/nav.html',
        'foot': '../template/foot.html',
        'navData': './navData',
        'footData': './footData',
        'main': './main',
        'swiper_animate': './swiper.animate1.0.3.min',
        'swiper': './swiper-3.4.2.jquery.min',
        'index': './index',
        
        'publicUrl': './publicUrl',
        'router': './router',
        'IndustrialProduct': '../productIndustrial/js/IndustrialProduct'
    },
    shim: {
        'bootstrap': ['jquery'],
        'swiper': {
            deps: ["jquery"]
        }
    },
    map: {
        '*': {
            'popper.js': 'popper'
        }
    }

})
// 加载公用模块
require(['jquery', 'text!nav',  'text!foot','navData', 'footData','main', 'art_template' ],
    function ($, nav, foot, navData, footData,main, template, ) {

        console.log(footData,3333333333333333333333)
        
        var navhtml = template.render(nav, navData);
        var foothtml = template.render(foot, footData);
        console.log(foothtml)
        $("#navWrapper").html(navhtml);
        $("#footWrapper").html(foothtml);

        main.main();


    })

