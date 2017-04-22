/**
 * Created by yezi on 2015/5/22.
 */
$(document).ready(function(){
    $('.ie').remove();
    var nav="<div class='navber'><div class='container'><a class='ielogo' href='index.htm'><img class='welogo' alt='潍坊红枣信息科技' src='img/logo.png'/>  </a><div class='nav'><ul class='menu'><li ><a href='index.htm'>网站首页</a></li><li ><a href='down.htm' >产品下载</a></li><li ><a href='help.htm' >使用帮助</a></li><li ><a href='about.htm' >关于我们</a></li><li ><a href='case.htm' >案例展示</a></li></ul></div></div></div>";
    $('.nie').before(nav);
});