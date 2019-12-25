$(function(){
	$("#daoh").click(function(e){
		var bgy =parseInt($(this).css("background-position-y"))
		console.log(bgy)
		if (bgy==-95) {
			$(this).css("background-position-y",-141+"px")
			$(".daoy").show().siblings(".babys").hide()
		} else{
			$(this).css("background-position-y",-95+"px")
			$(".daoy").hide()
		}
	})
	$(".two").click(function(){
		if ($(".openvip").css("display")=="none") {
			$(".openvip").show().siblings(".babys").hide()
			
		} else{
			$(".openvip").hide()
		}
	})
	$(".three").click(function(){
		if ($(".message").css("display")=="none") {
			$(".message").show().siblings(".babys").hide()
			
		} else{
			$(".message").hide()
		}
	})
	$(".four").click(function(){
		if ($(".actions").css("display")=="none") {
			$(".actions").show().siblings(".babys").hide()
			
		} else{
			$(".actions").hide()
		}
	})
	
	$(".two a").hover(function(){
		$(".iii").css("background","url(img/nav-upload-green.png)no-repeat")
	},function(){
		$(".iii").css("background","url(img/nav-upload.png)no-repeat")
	})
	
	
	$(".dianji").click(function(){
		var aaa = $(this).children().children("b").attr("class");
		console.log(aaa)
		if (aaa=="glyphicon glyphicon-triangle-bottom") {
			$(this).children().children("b").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top")
			$(this).children("a").css("color","#6cc900").parent().siblings().children().css("color","#fff")
			$(this).children().children("i").css("background","url(img/nav-upload-green.png)no-repeat"
)
			
		} else{
			$(this).children().children("b").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom")
			$(this).children("a").css("color","#e5e5e5")
			$(this).children().children("i").css("background","url(img/nav-upload.png)no-repeat")
		}
		
	})
//	轮播
	var n=0;
	function aaa(){
		n++;
		if (n>9) {
			n=0;
			$(".catalog .ull2 li").eq(n).addClass("select").siblings().removeClass("select")
			$(".playpic .ull1 li").eq(n).stop().fadeIn().siblings().stop().fadeOut()
			
		} else{
			$(".catalog .ull2 li").eq(n).addClass("select").siblings().removeClass("select")
			$(".playpic .ull1 li").eq(n).stop().fadeIn().siblings().stop().fadeOut()
		}
		}
	var timer=setInterval(aaa,3000)

	$(".catalog .ull2 li").mouseenter(function(){
		clearInterval(timer)
			var i = $(this).index()
	//		console.log(i)
			$(this).parent().parent().parent(".playpic").children().children().eq(i).stop().fadeIn().siblings().stop().fadeOut()
			$(this).addClass("select").siblings().removeClass("select")
			
	})
	$(".catalog .ull2 li").mouseleave(function(){
	timer=setInterval(aaa,3000)
	})
//	侧边栏
	$(".celan li a").hover(function(){
		$(this).siblings(".erge").children("a").stop().animate({"width":"120px"},500)
	},function(){
		$(this).siblings(".erge").children("a").stop().animate({"width":"0px"},500)
	})
	
//	广告
	$(".guanggao span").click(function(){
		$(this).parent().hide()
	})
//	vips
	$(".youlan li").eq(0).children("a").mouseover(function(){
		$(".vips_yidong").css("display","block")
	})
	$(".youlan li").eq(0).children("a").mouseout(function(){
		$(".vips_yidong").css("display","none")
		$(".vips_yidong").mouseover(function(){
			$(".vips_yidong").css("display","block")
		})
		$(".vips_yidong").mouseout(function(){
			$(".vips_yidong").css("display","none")
		})
	})
//	上传
	$(".youlan li").eq(1).children("a").mouseover(function(){
		$(".shangch_yidong").css("display","block")
	})
	$(".youlan li").eq(1).children("a").mouseout(function(){
		$(".shangch_yidong").css("display","none")
		$(".shangch_yidong").mouseover(function(){
			$(".shangch_yidong").css("display","block")
		})
		$(".shangch_yidong").mouseout(function(){
			$(".shangch_yidong").css("display","none")
		})
	})
//	客户端
	$(".youlan li").eq(2).children("a").mouseover(function(){
		$(".kehu_yidong").css("display","block")
	})
	$(".youlan li").eq(2).children("a").mouseout(function(){
		$(".kehu_yidong").css("display","none")
		$(".kehu_yidong").mouseover(function(){
			$(".kehu_yidong").css("display","block")
		})
		$(".kehu_yidong").mouseout(function(){
			$(".kehu_yidong").css("display","none")
		})
	})
//	消息
	$(".youlan li").eq(3).children("a").mouseover(function(){
		$(".xiaoxi_yidong").css("display","block")
	})
	$(".youlan li").eq(3).children("a").mouseout(function(){
		$(".xiaoxi_yidong").css("display","none")
		$(".xiaoxi_yidong").mouseover(function(){
			$(".xiaoxi_yidong").css("display","block")
		})
		$(".xiaoxi_yidong").mouseout(function(){
			$(".xiaoxi_yidong").css("display","none")
		})
	})
//看过
	$(".youlan li").eq(4).children("a").mouseover(function(){
		$(".kanguo_yidong").css("display","block")
	})
	$(".youlan li").eq(4).children("a").mouseout(function(){
		$(".kanguo_yidong").css("display","none")
		
		$(".kanguo_yidong").mouseover(function(){
			$(".kanguo_yidong").css("display","block")
		})
		$(".kanguo_yidong").mouseout(function(){
			$(".kanguo_yidong").css("display","none")
		})
	})


	$(".kanguo_yidong li").hover(function(){
		$(this).children().children(".xvbo").css("display","block")
		$(this).children().children(".shanchu").css("display","block")
	},function(){
		$(this).children().children(".xvbo").css("display","none")
		$(this).children().children(".shanchu").css("display","none")
	})
	
	$(".zibiao .shanchu").click(function(){
		$(this).parent().parent().hide()
	})
//	用户头像
	$(".youlan li").eq(5).mouseover(function(){
		$(".touxiang_yidong").css("display","block")
	})
	$(".youlan li").eq(5).mouseout(function(){
		$(".touxiang_yidong").css("display","none")
		$(".touxiang_yidong").mouseover(function(){
			$(".touxiang_yidong").css("display","block")
		})
		$(".touxiang_yidong").mouseout(function(){
			$(".touxiang_yidong").css("display","none")
		})
	})
//	观看历史添加与删除
	$(".wentu .zi a").click(function(){
		var sss = $(this).text()
		console.log(sss)
		$(".ulls").css("display","block")
		$(".meideng").css("display","none")
		})
//	小手	
	$(".celan li").eq(1).click(function(){
		$(".mengc").show()
	})
	$(".mengc i").click(function(){
		$(this).parent().parent().hide()
	})
//回到顶部
	$(document).scroll(function(){
		if ($(document).scrollTop()>600) {
			$(".sanges").css("display","block")
		} else{
			$(".sanges").css("display","none")
		}
	}).trigger("scroll")
	$(".sanges").click(function(){
		$(document).scrollTop(0)
		
	})
//礼物的
	$(".hongli").click(function(){
		$(".limengc").css("display","block")
	})
	$(".chacha").click(function(){
		$(".limengc").css("display","none")
	})





})/*function结束*/