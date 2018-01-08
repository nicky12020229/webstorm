/**
 * Created by Iwaity on 2017/1/22.
 */


$(function() {
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1,
                presto: u.indexOf('Presto') > -1,
                webKit: u.indexOf('AppleWebKit') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                mobile: !!u.match(/AppleWebKit.*Mobile.*/),
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                iPhone: u.indexOf('iPhone') > -1,
                iPad: u.indexOf('iPad') > -1,
                webApp: u.indexOf('Safari') == -1
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if(browser.versions.android == true){
        $(".phone-down-android").show();
        $(".phone-down-ios").hide();

    }
    if(browser.versions.ios == true){
        $(".phone-down-android").hide();
        $(".phone-down-ios").show();
    }

   /* var navId = sessionStorage.getItem("navId");
    $(".nav-list").find(".item").click(function(){
        var navid = $(this).index();
        sessionStorage.setItem("navId",navid);
    });
    if(navId==""){
        sessionStorage.setItem("navId","0");
        $(".nav-list").find(".item").removeClass("active");
        $(".nav-list").find(".item").eq(0).addClass("active");
        $(".phone-nav").find(".item").eq(0).addClass("active");
    }else{
        $(".nav-list").find(".item").removeClass("active");
        $(".nav-list").find(".item").eq(navId).addClass("active");
        $(".phone-nav").find(".item").eq(navId).addClass("active");
    }*/

    $(document).scroll(function(){
        var top = $(document).scrollTop();
        if(top>1){
            $(".black-show").hide();
            $(".white-show").show();
            $(".nav-min,.nav-container").addClass("op");
            $(".nav-min,.nav-container").removeClass("np");
        }
        if(top<100){
            $(".black-show").show().fadeIn();
            $(".white-show").hide();
            $(".nav-min,.nav-container").addClass("np");
            $(".nav-min,.nav-container").removeClass("op");
        }

    });
    $(document).trigger("scroll");
    $('#show-banner-doctor').flexslider({
        animation: "fade",
        directionNav: false,
        slideshowSpeed: 5000,
        before: function(slider){
            $(".doctor-thumb").find(".list").removeClass("active");
            $(".doctor-thumb").find(".list").eq(slider.animatingTo).addClass("active");
        },
        start:function(){
                $(".doctor-thumb .list").hover(function(){
                    console.log($(this).index());
                    $('#show-banner-doctor').flexslider($(this).index());
                });
            $(".doctor-thumb .list").click(function(){
                console.log($(this).index());
                $('#show-banner-doctor').flexslider($(this).index());
            });
        }
    });

    /*缓存节点*/
    var $phoneNav = $(".phone-nav");
    $(".nav-black").click(function(){
        $phoneNav.addClass("active");
        $(".nav-men-icon").hide();

    });
    $(".nav-x").click(function(){
        $phoneNav.removeClass("active");
        $(".nav-men-icon").css("display","inline-block");
    });

    $(".ni-show").each(function(i){
        var $node = $(this);
        if($node.hasClass("active")){
            console.log(22);
            $node.children("a .white-show").hide();
            $node.children("a .black-show").show();
        }
    })
});