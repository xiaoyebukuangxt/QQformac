/**
 * Created by Administrator on 2017/2/13.
 */
$(function(){
    /*
     全局的变量
    */
    var index = 0, timer = null;

    shows(index);
    /*
      监听GPS的点击
    */
    $('.gps li').on('click', function(){
        // 1.1 获取当前的索引
        index = $(this).index();

        // 1.2 实现切换
        $(this).addClass('cur').siblings().removeClass('cur');
        $('section').eq(index).show().siblings('section').hide();

        // 1.3 控制
        shows(index);

        //1.4 清除空降类
        setTimeout(function(){
            $('section').eq(index).removeClass('current').siblings('section').addClass('current');
        }, 10);
    });

    /*
      监听屏幕的滚动
    */
    $(window).mousewheel(function(event, d){
         // 1. 求出滚动的屏的索引
         clearTimeout(timer);
         timer = setTimeout(function(){
             index -= d;
             if(index > $('.gps li').length -1){
                 index = 0;
             }else if(index < 0){
                 index = $('.gps li').length -1;
             }

             // 2. 切换GPS和页面
             $('.gps li').eq(index).addClass('cur').siblings().removeClass('cur');
             $('section').eq(index).show().siblings('section').hide();

             // 3. 控制
             shows(index);

             // 4. 清除空降类
             setTimeout(function(){
                 $('section').eq(index).removeClass('current').siblings('section').addClass('current');
             }, 10);

         }, 400);
    });

    /*
     控制头部logo的显示和隐藏
    */
     function shows(num){
         if(num == 0){ // 第一屏
             $('#hd-logo').hide();
             $('#scroll').show();
         }else {
             $('#hd-logo').show();
             $('#scroll').hide();
         }
     }
});