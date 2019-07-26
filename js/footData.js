define(['router'], function (router) {
    console.log(router)
    var footData = {

        logo: {
            indexUrl: router.baseUrl + 'index.html',
            footerLogo: router.baseUrl + 'img/footerLogol.png',
            wechat:router.baseUrl+'img/WechatIMG89@2x.png',
            police:router.baseUrl+'img/police.png'

        },
        fooList: [
            {
                name: '产品',
                children: [
                    { name: '工业安全', path: '#' },
                    { name: '云计算安全', path: '#' },
                    { name: '大数据安全', path: '#' },
                    { name: '网络安全', path: '#' },
                    { name: 'IT等保机', path: '#' },
                    { name: '工业等保机', path: '#' },
                    { name: '云等保机', path: '#' }
                ]


            },
            {
                name: '解决方案',
                children: [
                    { name: 'AI安全', path: '#' },
                    { name: '等保2.0', path: '#' },
                    { name: '云安全', path: '#' },
                    { name: '工业互联网安全', path: '#' }
                 
                ]


            },
            {
                name: '安全研究',
                children: [
                    { name: 'AI-超弦实验室', path: '#' },
                    { name: '攻防-超弦实验室', path: '#' },
                    { name: '工控-超弦实验室', path: '#' },
                    { name: '安全周刊', path: '#' }
                 
                ]


            },
            {
                name: '合作发展',
                children: [
                    { name: '成为合作伙伴', path: '#' },
                    { name: '已是签约伙伴', path: '#' },
                    { name: '技术培训认证', path: '#' },
                    { name: '合作伙伴大会', path: '#' }
                 
                ]


            },
            {
                name: '关于我们',
                children: [
                    { name: '公司简介', path: '#' },
                    { name: '新闻与活动', path: '#' },
                    { name: '最佳实践', path: '#' },
                    { name: '视频中心', path: '#' },
                    { name: '人才招聘', path: '#' },
                    { name: '联系我们', path: '#' }
                ]


            }
        ]



    }
    return footData


});