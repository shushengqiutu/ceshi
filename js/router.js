define(['publicUrl'], function (publicUrl) {
    //测试环境
    var localHost = '/6cloud/Frontend'
    var router = [

        { name: '产品', pathname: '/productIndustrial' },
        { name: '首页', pathname: '/' }
        // { name: '首页', pathname:'/index.html'  }
    ]
    console.log(window.location)
    var nowPathname = window.location.pathname.replace(localHost, '');
    console.log(nowPathname, 11111111)
    var nowRouter;
    for (var i = 0; i < router.length; i++) {
        if (nowPathname.indexOf(router[i].pathname )>= 0){
            nowRouter = router[i].name;
            break;
        }
    }

    console.log(nowRouter)
    var baseUrl;

    switch (nowRouter) {

        case '产品':
            productInit();
            break;
        case '首页':
            indexInit();
            break;
       

    }

    function indexInit() {

        require(['index'], function (index) {
            index.index()

        })
        baseUrl = publicUrl.indexUrl;


    }
    function productInit() {

        require(['IndustrialProduct'], function (IndustrialProduct) {
             
              IndustrialProduct.product()
             
        })
        baseUrl = publicUrl.productUrl;


    }
    return baseUrl
});