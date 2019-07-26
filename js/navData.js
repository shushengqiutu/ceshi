define(['router'], function (router) {
    console.log(router)
    var navData = {

        logo: {
            indexUrl: router.baseUrl + 'index.html',
            logoUrl: router.baseUrl + 'img/logo.png',
            logoAlt: router.baseUrl + 'img/logo-alt.png'
        },
        navList: [
            {
                name: '产品',
                hasDropdown: true,
                path: '#',
                publicFile: 'productIndustrial',
                dropdownList: [
                    {
                        name: '工业安全',
                        child: [
                            [
                                { name: '工业防火墙', path: router.productIndustrial + 'industrialFirewall.html' },
                                { name: '监管平台', path: router.productIndustrial + 'IndustrialControl.html' }
                            ],
                            [
                                { name: '工业审计', path: router.productIndustrial + 'industrialAudit.html' },
                                { name: '内网威胁管理系统', path: router.productIndustrial + 'IndustrialThreat.html' }
                            ],
                            [
                                { name: '工业蜜罐', path: router.productIndustrial + 'IndustrialHoneypot.html' },
                                { name: '工业态势感知平台', path: router.productIndustrial + 'IndustrialPerception.html' }
                            ],
                            [
                                { name: '工业卫士', path: router.productIndustrial + 'industrialGuards.html' },
                                { name: '工控等保检查工具箱', path: router.productIndustrial + 'industrialCheck.html' }
                            ],
                            [
                                { name: '工业漏扫', path: router.productIndustrial + 'industrialSweep.html' },
                                { name: '工控安全教学实验平台', path: router.productIndustrial + 'IndustrialTest.html' }
                            ],
                            [
                                { name: '工业网闸', path: router.productIndustrial + 'IndustrialGate.html' }

                            ]
                        ]
                    },
                    {
                        name: '网络安全',
                        child: [
                            [{ name: '下一代防火墙', path: router.productIndustrial + 'networkSecNextWall.html' }],
                            [{ name: '入侵防御系统', path: router.productIndustrial + 'networkSecDefense.html' }],
                            [{ name: '入侵检测系统', path: router.productIndustrial + 'networkSecInvasion.html' }]

                        ]
                    },
                    {
                        name: '云安全',
                        child: [
                            [{ name: '云盾CShield', path: router.productIndustrial + 'sixWinton.html' }],
                            [{ name: '云甲CArmour', path: router.productIndustrial + 'sixCloudA.html' }],
                            [{ name: '云墙CWall', path: router.productIndustrial + 'sixCloudWall.html' }]

                        ]
                    },
                    {
                        name: '大数据安全',
                        child: [

                            [{ name: '云智CiAware', path: router.productIndustrial + 'sixCloudWsdom.html' }],
                            [{ name: '网络安全工作平台', path: router.productIndustrial + 'networkSecurity.html' }]
                        ]
                    }

                ]
            },
            {
                name: '解决方案',
                hasDropdown: true,
                path: '#',
                dropdownList: [
                    {
                        name: '解决方案',
                        child: [
                            [{ name: '工业安全解决方案', path: router.solution + 'solutionCareer.html' }],
                            [{ name: '云安全解决方案', path: router.solution + 'solutionCareer.html' }],
                            [{ name: '网络安全解决方案', path: router.solution + 'solutionCareer.html' }],
                            [{ name: '大数据安全解决方案', path: router.solution + 'solutionCareer.html' }]
                        ]
                    }
                ]
            },
            {
                name: '安全研究',
                hasDropdown: true,
                path: '#',
                dropdownList: [
                    {
                        name: '安全研究',
                        child: [
                            [{ name: '工业安全解决方案1', path: router.safetyResearch + 'solutionCareer.html' }],
                            [{ name: '云安全解决方案1', path: router.safetyResearch + 'cloudSolution.html' }],
                            [{ name: '网络安全解决方案1', path: router.safetyResearch + 'netSecuritySolution.html' }],
                            [{ name: '大数据安全解决方案1', path: router.safetyResearch + 'cloudSolutionExCaree.html' }]
                        ]
                    }
                ]
            },
            {
                name: '合作发展',
                hasDropdown: true,
                path: '#',
                dropdownList: [
                    {
                        name: '合作发展',
                        child: [
                            [{ name: '合作发展', path: router.CooperativeDev + 'solutionCareer.html' }],
                            [{ name: '合作发展', path: router.CooperativeDev + 'solutionCareer.html' }],
                            [{ name: '网络安全解决方案1', path: router.CooperativeDev + 'solutionCareer.html' }],
                            [{ name: '大数据安全解决方案1', path: router.CooperativeDev + 'solutionCareer.html' }]
                        ]
                    }
                ]

            },
            {
                name: '关于我们',
                hasDropdown: true,
                path: '#',
                dropdownList: [
                    {
                        name: '关于我们',
                        child: [
                            [{ name: '公司简介', path: router.aboutUs + 'companyProfile.html' }],
                            [{ name: '新闻与活动', path: router.aboutUs + 'companyProfile.html' }],
                            [{ name: '最佳实践', path: router.aboutUs + 'companyProfile.html' }],
                            [{ name: '人才招聘', path: router.aboutUs + 'companyProfile.html' }],
                            [{ name: '联系我们', path: router.aboutUs + 'companyProfile.html' }],
                            [{ name: 'xxxxxx', path: router.aboutUs + 'companyProfile.html' }]
                        ]
                    }
                ]
            },
            {
                name: "400-6060-270",
                hasDropdown: false,
                type: 'call',
                path: '#'
            }

        ]


    }
    return navData


});