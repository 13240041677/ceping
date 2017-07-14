$(function(){
    //绉戠洰閫夋嫨
    $('.subject-slt').hover(function(){
        $(this).find('.sub-submenu').stop().slideDown(200);
    },function(){
        $(this).find('.sub-submenu').slideUp(100);
    })
    //鏁欏姟婊戝姩
    var ind = 1,navLi = $(".scrollnav li"),navUl = $(".scrollnav"),block = $('.block'),speed = 200;
    block.css({"left":navLi.width()});
    navLi.hover(function(){
        n = $(this).index();
        block.stop().animate({left:navLi.width()*n},speed);
        $(this).addClass("on").siblings().removeClass("on");
    },function(){
        block.animate({"left":navLi.width()},speed);
        navLi.eq(ind).addClass("on").siblings().removeClass("on");
    })
    //鏈懆鏇存柊
    function mngDrop(){
        var ab = $('.infomng');
        $('.mnginfo-btn').bind('mouseover',function(){
            ab.show();
        })
        $('.mnginfo-btn').bind('mouseleave',function(){
            ab.hide();
        })
    }
    mngDrop();

    $('.tc-mng-box ul.hd li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $(".topicItem").hide();
        $(".topicItem").eq($(".tc-mng-box ul.hd li").index(this)).fadeIn();
    });
    //鐢峰コ
    $('.sex span').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    //娴姩
    $('.pg-unit .fixed-t').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 258){
            $('.ol-Fixed-pg').css('top','10px');
        }else{
            $('.ol-Fixed-pg').css('top','40%');

        }
    });
    //绛旀鍗�
    $('dl span.options').click(function(){
        $(this).addClass('curOption').siblings().removeClass('curOption');
    });
    //蹇界暐鎵规敼
    $(".ignorePG").click(function(){
        $(".layuiBg").css({
            display:"block",height:$(document).height()
        });
        $(".ignoreBox").css({
            left:($("body").width()-$(".ignoreBox").width())/2-20+"px",
            top:($(window).height()-$(".ignoreBox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
    });
    //瀹屾垚鎵规敼
    $(".pgsaveBtn").click(function(){
        $(".layuiBg").css({
            display:"block",height:$(document).height()
        });
        $(".finalbox").css({
            left:($("body").width()-$(".finalbox").width())/2-20+"px",
            top:($(window).height()-$(".finalbox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
    });
    //鎴愮哗鍗�
    $('.trscriptTable tr.opr').click(function(){
        if($(this).hasClass('zk')){
            $(this).removeClass('zk');
            $(this).next().slideUp();
            $(this).children('.t5').find('a').html('灞曞紑璇︽儏<i></i>');
        }else{
            $(this).addClass('zk');
            $(this).next().slideDown();
            $(this).children('.t5').find('a').html('鏀惰捣璇︽儏<i></i>');
        }

    });
    //閫夐鏀炬槧
    $('.fy-boxs').height($(document).height());

    $('.jiexiBtn').click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
            $('.jiexibox').hide();
        }else{
            $(this).addClass('on');
            $('.jiexibox').show();
        }
    });
    //鍏ㄩ€夊彇娑�
    $("#chk_all").click(function(){
        if ($("#chk_all").attr("checked")) {
            $("input[name='chk_list']").attr("checked", true);
        } else {
            $("input[name='chk_list']").attr("checked", false);
        }
    });
    $("input[name='chk_list']").click(function(){
        $("#chk_all").attr("checked",false);
    })
    //鎺у埗瀛椾綋澶у皬
    $('.daxiao .xiao').click(function(){
        $('.timu').css({'font-size':'12px'});
    });
    $('.daxiao .da').click(function(){
        $('.timu').css({'font-size':'20px'});
    });
    //璇曞嵎绠�
    $('.all-pg-table tr.ms').hover(function(){
        $(this).addClass('on');
    },function(){
        $(this).removeClass('on');
    });
    //鍒犻櫎鎻愰啋
    $(".shanchuBut").click(function(){
        $(".layuiBg").css({
            display:"block",height:$(document).height()
        });
        $(".shanchuBox").css({
            left:($("body").width()-$(".shanchuBox").width())/2-20+"px",
            top:($(window).height()-$(".shanchuBox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
        $(this).parent().parent().remove();
    });
    $('.quxiaobtn').click(function(){
        $(".layuiBg").hide();
        $(".shanchuBox ,.chexiaoBox").hide();
    });
    $('.sc-enter-btn').click(function(){
        $(".shanchuBox").hide();
        $(".layuiBg").hide();
        $(".sc-sucsbox").css({
            left:($("body").width()-$(".sc-sucsbox").width())/2-20+"px",
            top:($(window).height()-$(".sc-sucsbox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
        setTimeout(function(){
            $(".sc-sucsbox").fadeOut();
        },800);
    });
    //甯冪疆璇曞嵎
    $(".buzhiBut").click(function(){
        $(".layuiBg").css({
            display:"block",height:$(document).height()
        });
        $(".bzhsjBox").css({
            left:($("body").width()-$(".bzhsjBox").width())/2-20+"px",
            top:($(window).height()-$(".bzhsjBox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
    });
    $('.time input').click(function(e){
        $(this).next().slideDown();
        e.stopPropagation();
    });
    $(document).click(function (e) { $('.timedrop').slideUp() });
    $('.timedrop li').click(function(){
        var txt=$(this).parent().prev();
        txt.val($(this).html());
        $(this).parent().slideUp();

    });
    $('.bz-leix').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    })
    $('.zuoyetime').click(function(){
        $('.yongshiTr').hide();
    })
    $('.kstime').click(function(){
        $('.yongshiTr').show();
    })
    //娣诲姞瀛︾敓
    $(".bznextbut").click(function(){
        $(".layuiBg").css({
            display:"block",height:$(document).height()
        });
        $('.bzhsjBox').hide();
        $(".addxsBox").css({
            left:($("body").width()-$(".addxsBox").width())/2-20+"px",
            top:($(window).height()-$(".addxsBox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
    });
    $(".qh-left li").click(function(){
        $(".qh-left li").removeClass("cur");
        $(this).addClass("cur");
        $(".qh-block").hide();
        $(".qh-block").eq($(".qh-left li").index(this)).show();
    });
//	$('.qh-block a').not('.default').click(function(){
//		if($(this).hasClass('active')){
//			$(this).removeClass('active');
//		}else{
//			$(this).addClass('active');
//		}
//	})
    $('.chexiaoBut').click(function(){
        $(".layuiBg").css({
            display:"block",height:$(document).height()
        });
        $(".chexiaoBox").css({
            left:($("body").width()-$(".chexiaoBox").width())/2-20+"px",
            top:($(window).height()-$(".chexiaoBox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
    });
    $('.bzprevBtn').click(function(){
        $('.addxsBox').hide();
        $(".bzhsjBox").show();
    });

    //$('#slt-1').click(function(){
    //	$(this).addClass('active');
    //	var copyThisA = $(this).clone();
    //	if ($("#JselectA").length > 0) {} else {
    //		$(".resultbox").append(copyThisA.attr("id", "JselectA"));
    //	}
    //});
    //$('#slt-2').click(function(){
    //	$(this).addClass('active');
    //	var copyThisB = $(this).clone();
    //	if ($("#JselectB").length > 0) {} else {
    //		$(".resultbox").append(copyThisB.attr("id", "JselectB"));
    //	}
    //});
    //$('#slt-3').click(function(){
    //	$(this).addClass('active');
    //	var copyThisC = $(this).clone();
    //	if ($("#JselectC").length > 0) {} else {
    //		$(".resultbox").append(copyThisC.attr("id", "JselectC"));
    //	}
    //});
    //$('#slt-4').click(function(){
    //	$(this).addClass('active');
    //	var copyThisD = $(this).clone();
    //	if ($("#JselectD").length > 0) {} else {
    //		$(".resultbox").append(copyThisD.attr("id", "JselectD"));
    //	}
    //});
    //$('#slt-5').click(function(){
    //	$(this).addClass('active');
    //	var copyThisE = $(this).clone();
    //	if ($("#JselectE").length > 0) {} else {
    //		$(".resultbox").append(copyThisE.attr("id", "JselectE"));
    //	}
    //});
    //$('#slt-6').click(function(){
    //	$(this).addClass('active');
    //	var copyThisF = $(this).clone();
    //	if ($("#JselectF").length > 0) {} else {
    //		$(".resultbox").append(copyThisF.attr("id", "JselectF"));
    //	}
    //});

    //$("#JselectA").live("click", function () {
    //	$(this).remove();
    //	$("#slt-1").removeClass("active");

    //});
    //$("#JselectB").live("click", function () {
    //	$(this).remove();
    //	$("#slt-2").removeClass("active");

    //});
    //$("#JselectC").live("click", function () {
    //	$(this).remove();
    //	$("#slt-3").removeClass("active");

    //});
    //$("#JselectD").live("click", function () {
    //	$(this).remove();
    //	$("#slt-4").removeClass("active");

    //});
    //$("#JselectE").live("click", function () {
    //	$(this).remove();
    //	$("#slt-5").removeClass("active");

    //});
    //$("#JselectF").live("click", function () {
    //	$(this).remove();
    //	$("#slt-6").removeClass("active");

    //});
    //鎾ら攢甯冪疆
    $('.chexiaoBut').click(function(){
        $(".layuiBg").css({
            display:"block",height:$(document).height()
        });
        $(".chexiaoBox").css({
            left:($("body").width()-$(".bzhsjBox").width())/2-20+"px",
            top:($(window).height()-$(".bzhsjBox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
    });
    $('.cx-enter-btn').click(function(){
        $(".layuiBg").css({
            display:"block",height:$(document).height()
        });
        $('.chexiaoBox').hide();
        $(".chexiaotxBox").css({
            left:($("body").width()-$(".chexiaotxBox").width())/2-20+"px",
            top:($(window).height()-$(".chexiaotxBox").height())/2+$(window).scrollTop()+"px",
            display:"block"
        });
    });
    $('.closescBut').click(function(){
        $(".layuiBg").hide();
        $(".tips").hide();
    })
})