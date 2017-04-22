/**
 * Created by yezi on 2015/5/22.
 */
    var manager={
          init:function(){

              //$('head').append('<link href="css/bootstrap.css" rel="stylesheet">');
              //$('head').append(' <link href="css/font-awesome.css" rel="stylesheet">');
              //$('head').append('  <link rel="stylesheet" href="fonts/style.css" />');
              //$('head').append('<link href="css/site.css" rel="stylesheet">');

          },
          browser:function(){
              var Sys = {};
              var ua = navigator.userAgent.toLowerCase();
              window.ActiveXObject ? Sys.ie = ua.match(/msie ([\d.]+)/)[1] :
                  document.getBoxObjectFor ? Sys.firefox = ua.match(/firefox\/([\d.]+)/)[1] :
                      window.MessageEvent && !document.getBoxObjectFor ? Sys.chrome = ua.match(/chrome\/([\d.]+)/)[1] :
                          window.opera ? Sys.opera = ua.match(/opera.([\d.]+)/)[1] :
                              window.openDatabase ? Sys.safari = ua.match(/version\/([\d.]+)/)[1] : 0;

              if(Sys.ie) {
                  var no=parseInt(Sys.ie);
                  $('head').append('<script src="js/nav.js" type="text/javascript" charset="GBK"></script>');
                  if(no==6){
                      $('head').before('<script src="js/lte-ie7.js" type="text/javascript" charset="GBK"></script>');
                  }
                  if(no==7){
                      $('head').before('<script src="js/lte-ie7.js" type="text/javascript" charset="GBK"></script>');
                  }
              }
              if(Sys.firefox) document.write('Firefox: '+Sys.firefox);
              if(Sys.chrome){


              }
              if(Sys.opera) document.write('Opera: '+Sys.opera);
              if(Sys.safari) document.write('Safari: '+Sys.safari);

          }
};
manager.init();
manager.browser();

