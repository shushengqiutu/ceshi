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
use app\portal\service\PostService;
use app\portal\model\PortalPostModel;
use think\Db;
require_once('jssdk.php');

class ArticleController extends HomeBaseController
{

    public function index()
    {
        /*
        微信分享
        */
       


        $portalCategoryModel = new PortalCategoryModel();
        $postService         = new PostService();

        $articleId  = $this->request->param('id', 0, 'intval');
        $categoryId = $this->request->param('cid', 0, 'intval');
        $article    = $postService->publishedArticle($articleId, $categoryId);

        if (empty($article)) {
            abort(404, '文章不存在!');
        }


        $prevArticle = $postService->publishedPrevArticle($articleId, $categoryId);
        $nextArticle = $postService->publishedNextArticle($articleId, $categoryId);

        $tplName = 'article';

        if (empty($categoryId)) {
            $categories = $article['categories'];

            if (count($categories) > 0) {
                $this->assign('category', $categories[0]);
            } else {
                abort(404, '文章未指定分类!');
            }

        } else {
            $category = $portalCategoryModel->where('id', $categoryId)->where('status', 1)->find();

            if (empty($category)) {
                abort(404, '文章不存在!');
            }

            $this->assign('category', $category);

            $tplName = empty($category["one_tpl"]) ? $tplName : $category["one_tpl"];
        }

        Db::name('portal_post')->where(['id' => $articleId])->setInc('post_hits');


        hook('portal_before_assign_article', $article);
        //hook('before_footer_end', $article);

        $this->assign('article', $article);
        $this->assign('prev_article', $prevArticle);
        $this->assign('next_article', $nextArticle);

        $tplName = empty($article['more']['template']) ? $tplName : $article['more']['template'];


        /*重定向到AI安全页面 add by ljq*/
        if (!empty($category) && $category['id'] == 1) {
            $tplName = "libarticle";
        }else if(!empty($categories) && !empty($categories[0]) && $categories[0]['id'] == 1){
            $tplName = "libarticle";
        }else if(!empty($categories) && !empty($categories[0]) && $categories[0]['id'] == 3){
            $tplName = "downarticle";
        }else if (!empty($category) && $category['id'] == 3) {
            $tplName = "downarticle";
        }else if(!empty($categories) && !empty($categories[0]) && $categories[0]['id'] == 4){
            $tplName = "uparticle";
        }else if (!empty($category) && $category['id'] == 4) {
            $tplName = "uparticle";
        }else if (!empty($category) && $category['id'] == 9) {
            $tplName = "dengbaoarticle";//等保2.0页面
        }else if(!empty($categories) && !empty($categories[0]) && $categories[0]['id'] == 9) {
            $tplName = "dengbaoarticle";//等保2.0页面
        }
        $this->assign('tplName', $tplName);

        return $this->fetch("/$tplName");
    }

    // 文章点赞
    public function doLike()
    {
        $this->checkUserLogin();
        $articleId = $this->request->param('id', 0, 'intval');


        $canLike = cmf_check_user_action("posts$articleId", 1);

        if ($canLike) {
            Db::name('portal_post')->where(['id' => $articleId])->setInc('post_like');

            $this->success("赞好啦！");
        } else {
            $this->error("您已赞过啦！");
        }
    }

}
