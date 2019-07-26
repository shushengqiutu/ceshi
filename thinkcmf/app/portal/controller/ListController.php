<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 老猫 <thinkcmf@126.com>
// +----------------------------------------------------------------------
namespace app\portal\controller;

use cmf\controller\HomeBaseController;
use app\portal\model\PortalCategoryModel;

class ListController extends HomeBaseController
{
    public function index()
    {
        $id                  = $this->request->param('id', 0, 'intval');
        $portalCategoryModel = new PortalCategoryModel();

        $category = $portalCategoryModel->where('id', $id)->where('status', 1)->find();
       
        $listTpl = empty($category['list_tpl']) ? 'list' : $category['list_tpl'];
        
        $this->assign('category', $category);
        //加入attr news or weekly
        if (!empty($id)) {
            if ($id == 2) {
                $this->assign('news', "news");
                $listTpl = "list";//新闻
            }else if ($id == 1) {
                $this->assign('weekly', "weekly");
                $listTpl = "liblist";//实验室
            }else if ($id == 3) {
                $this->assign('down', "down");
                $listTpl = "downlist";//资料下载-AI安全研究
            }else if ($id == 4 || $id == 5 || $id == 6 || $id == 7 || $id == 8) {
                $this->assign('up', "up");
                //5:反病毒特征库,6: 入侵检测特征库,7:应用识别特征库,8:设备库漏洞库
                $listTpl = "uplist";//特征库更新
            }else if($id == 9){
                $this->assign('dengbao', "dengbao");
                $listTpl = "dengbao";//等保2.0
            }
        }

        return $this->fetch('/' . $listTpl);
    }

    public function news()
    {
        $id                  = $this->request->param('id', 0, 'intval');
        $portalCategoryModel = new PortalCategoryModel();

        $category = $portalCategoryModel->where('id', 2)->where('status', 1)->find();
       
        $this->assign('category', $category);
        $this->assign('news', "news");

        $listTpl = empty($category['list_tpl']) ? 'list' : $category['list_tpl'];

        return $this->fetch('/' . $listTpl);
    }



    public function weekly()
    {
        $id                  = $this->request->param('id', 0, 'intval');
        $portalCategoryModel = new PortalCategoryModel();

        $category = $portalCategoryModel->where('id', 1)->where('status', 1)->find();
       
        $this->assign('category', $category);
        $this->assign('weekly', "weekly");

        //$listTpl = empty($category['list_tpl']) ? 'liblist' : $category['list_tpl'];

        return $this->fetch('/' . 'liblist');
    }
	
	public function test()
    {
        $id                  = $this->request->param('id', 0, 'intval');
        $portalCategoryModel = new PortalCategoryModel();

        $category = $portalCategoryModel->where('id', 1)->where('status', 1)->find();
       
        $this->assign('category', $category);
        $this->assign('weekly', "weekly");

        //$listTpl = empty($category['list_tpl']) ? 'liblist' : $category['list_tpl'];

        return $this->fetch('/' . 'liblist');
    }

    public function down()
    {
        $id                  = $this->request->param('id', 0, 'intval');
        $portalCategoryModel = new PortalCategoryModel();

        $category = $portalCategoryModel->where('id', 3)->where('status', 1)->find();

        $this->assign('category', $category);
        $this->assign('down', "down");

        //$listTpl = empty($category['list_tpl']) ? 'liblist' : $category['list_tpl'];

        return $this->fetch('/' . 'downlist');
    }

    public function up()
    {
        $id                  = $this->request->param('id', 0, 'intval');
        $portalCategoryModel = new PortalCategoryModel();

        $category = $portalCategoryModel->where('id', 4)->where('status', 1)->find();

        $this->assign('category', $category);
        $this->assign('up', "up");

        //$listTpl = empty($category['list_tpl']) ? 'liblist' : $category['list_tpl'];

        return $this->fetch('/' . 'uplist');
    }

    public function dengbao()
    {
        $id                  = $this->request->param('id', 0, 'intval');
        $portalCategoryModel = new PortalCategoryModel();

        $category = $portalCategoryModel->where('id', 9)->where('status', 1)->find();
       
        $this->assign('category', $category);
        $this->assign('dengbao', "dengbao");

        //$listTpl = empty($category['list_tpl']) ? 'liblist' : $category['list_tpl'];

        return $this->fetch('/' . 'dengbao');
    }

}
