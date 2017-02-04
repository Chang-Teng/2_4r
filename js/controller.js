/**
 * Created by Administrator on 2017/1/29.
 */
function home($scope){

        new Swiper(".swiper-o", {
            /* 圆点*/
            pagination: ".home-box",
            /*滚动方向*/
            direction: "horizontal",
            /* 无限循环*/
            loop: true,
            /*圆点可点击*/
            paginationClickable: true,
            /*自动轮播*/
            autoplay: 1000,
            /*是否手指滑动效果*/
            touchRatio: 1
        })
}

angular.module("mapp")
    .controller("home",home)