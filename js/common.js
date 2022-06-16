if(typeof(Worker) == "undefined"){
  $("body").addClass("ieBody");
}else{
animateImg();
  $("body").wrapInner("<div class='wrapper'></div>");
  function animateImg(){
    var wow = new WOW({
      mobile: false,
      live: true
    });
    wow.init();
    AOS.init({
    disable: 'mobile',
    easing: 'ease-out-back',
    duration: 1000
    });
  }
}


//导航
function webHeader(){
	if($(window).width() < 993){
        $(".mMmenuLay dl").each(function(i) {
			var _this = $(this);
            if(_this.find("dd").size()>0){
				_this.find(".mToggle").show();
				}
        });
		$(".mToggle").click(function(e){
		if($(this).parents("dl").hasClass("on")){
			$(this).parents("dl").removeClass("on");
			$(this).removeClass("mToggle2");
			}else{
				$(".mMmenuLay dl").removeClass("on");
				$(".mToggle").removeClass("mToggle2");
				$(this).addClass("mToggle2");
				$(this).parents("dl").addClass("on");
				}
		});
		$(".mOpenBtn").click(function(e){
			$(".mMenuLayBg,.mMmenuLay,.mCloseBtn").addClass("on");
			$("body").css("overflow","hidden");
			});
		$(".mCloseBtn,.mMenuLayBg").click(function(){
			$(".mMenuLayBg,.mMmenuLay,.mCloseBtn").removeClass("on");
			$("body").css("overflow","inherit");
			});
	}
}
webHeader();

jQuery(document).ready(function($) {

setTimeout(function(){$("body").addClass("bodyIn")},100);

$(document).ready(function() {
  $('.hmFocus').slick({
      autoplay: true,
      arrows: false,
      dots:false,
      infinite: true,
      speed: 500,
      autoplaySpeed: 5000,
      pauseOnHover: false,
    //fade: true,
  });

  $('.hmFocus_dot span').click(function(){
      $('.hmFocus').slick('slickGoTo',$(this).index());
      $(this).addClass("on").siblings().removeClass("on")
  });

  $('.hmFocus').init(function(slick){
    $('.hmFocus_item.slick-current').addClass('on').siblings().removeClass('on');
      $('.hmFocus_dot span').eq($('.hmFocus').slick('slickCurrentSlide')).addClass('on').siblings().removeClass('on')
  })

  $('.hmFocus').on('afterChange',function(slick,currentSlide){
    $('.hmFocus_item.slick-current').addClass('on').siblings().removeClass('on');
      $('.hmFocus_dot span').eq($('.hmFocus').slick('slickCurrentSlide')).addClass('on').siblings().removeClass('on')
  })
});


if($(".hmc5Swiper").size()){
	var hmc5Swiper = new Swiper('.hmc5Swiper .swiper-container', {
		loop : true,
		autoplay : 500000,
		pagination: '.hmc5Swiper .swiper-pagination',
		paginationClickable: true,
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		nextButton: '.hmc5Swiper .next',
		prevButton: '.hmc5Swiper .prev',
		slidesPerView: 'auto',
		coverflow: {
				rotate: 0,// 旋转的角度
				stretch: 215,// 拉伸   图片间左右的间距和密集度
				depth: 205,// 深度   切换图片间上下的间距和密集度
				modifier:3,  // 修正值 该值越大前面的效果越明显
				slideShadows : false// 页面阴影效果
		},
			breakpoints: {
			993: {
			  slidesPerView: 1,
			  spaceBetweenSlides: 0
			}
		  }
	});
}

if($(".m3nImgs").length){
    $('.m3nImgs').slick({
        autoplay: true,
        arrows: true,
        dots:false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });
}

//if($(".m2proBomBox").size()){autoH(".m2proBomBox");}


$('input, textarea').placeholder();


//img as background
if($(".bgImg").size()>0){
$(".bgImg").each(function(i){$(".bgImg").eq(i).css("background-image","url("+$(this).find("img").attr("src")+")")});
}

$(".hmc5Btns a").hover(function(){
	$(".hmc5Imgs img").removeClass("on");
	$(".hmc5Imgs img").eq($(".hmc5Btns a").index(this)).addClass("on");
	})

if($(window).width()<767){
	if($(".m2jjc2ul").length){
		$('.m2jjc2ul').slick({
			autoplay: true,
			arrows: false,
			dots:true,
			infinite: true,
			speed: 500,
			autoplaySpeed: 5000,
			pauseOnHover: false,
		});
	}
}


});


//百度分享
if($(".bdsharebuttonbox").size()){
window._bd_share_config = { "common": { "bdSign": "off", "bdSize": "24" }, "share": { "bdCustomStyle": "../css/style.css" } }
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
}


function picTxtHeight() {
$(".picTxtBox").each(function(i){if($(this).find(".txtBox").height()>$(this).find(".picBox").height()){$(this).height($(this).find(".txtBox").height());}else{$(this).height($(this).find(".picBox").height());}$(this).find(".picBox-wp,.txtBox-wp").css("min-height",$(this).height())})}
if($(document).width()>993){
	picTxtHeight(); setTimeout(function(){picTxtHeight();},300);
}
$(window).resize(function(){
	if($(document).width()>993){
		picTxtHeight();
	}
})

function autoH(className){
	var maxH = 0;
	$(className).each(function() {
    var cutH = $(this).innerHeight();
	if(cutH>maxH){
		maxH = cutH;
		}
    });

    $(className).innerHeight(maxH);
}
function autoW(className){
	var maxW = 0;
	$(className).each(function() {
    var cutW = $(this).innerWidth();
	if(cutW>maxW){
		maxW = cutW;
		}
    });

    $(className).innerWidth(maxW);
}

function addPreZero(num){
	 if(num<10){
	 var t = (num+'').length,
	  s = '';
	 for(var i=0; i<2-t; i++){
	  s += '0';
	 }
	 return s+num;
	 }else{
		 return num;
		 }
}

$(".m2jn_t2").click(function(){
  if($(this).next(".m2jn_t2con").css("display") == "none"){
        $(".m2jn_t2con").slideUp(300);
        $(this).next(".m2jn_t2con").slideDown(300);
        $(".m2jn_t2con dd").slideUp(300);
        $(".m2jn_t2").removeClass("on");
        $(this).addClass("on");
    }else{
        $(".m2jn_t2con").slideUp(300);
        $(".m2jn_t2con dd").slideUp(300);
        $(".m2jn_t2").removeClass("on");
      }
  });

$(".m2jn_t2con dt").click(function(){
  if($(this).next("dd").css("display") == "block"){
    $(".m2jn_t2con dd").slideUp(300);
  }else{
      $(".m2jn_t2").removeClass("on");
      $(".m2jn_t2con dd").slideUp(300);
      $(this).next("dd").slideDown(300);
    }
});

//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});
