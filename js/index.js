

(function($,undefinde){
	//精选产品调用数据
	$(window).load(function(){
		$.ajax({
		   type: "GET",
		   url: "index.json",
		   success: function(data){
		   		//console.log(data[3].src);
			   	var html="";
				for(var i in data){
					html+=
					"<li><a href='detail.html?id='"+data[i].id+"'><img src='"+data[i].src+"'></a><span><h1><a href='javascript:;'title='"+
					data[i].title+"'>"+data[i].name+"</a></h1><p>"+data[i].details
					+"</p><div class='price'>￥<b>"+data[i].price+"</b>起 <a href='detail.html?id="+data[i].id+"'>点击 <br/>进入</a></div></span></li>"          
				}
				$("#special").html(html);
				$("#today1").html(html);
		   }
		});
	
	
		
	});
	
		//吸顶悬浮
	 $(window).scroll(function () {
        var st = $(this).scrollTop();
        if(st >= 600){
            $("#fixedTop").css("display","block");
        }else {
            $("#fixedTop").css("display","none");
        }
        if(st >=300){
        	$("#stair").fadeIn(500);
        	
        }else{
        	$("#stair").fadeOut(500);
        }
    });
	//楼梯
	$("#stair-t a:first-child()").click(function(){
		$("html,body").animate({scrollTop:670},500)
	});
	$("#stair-t a:last-child()").click(function(){
		$("html,body").animate({scrollTop:4270},500)
	});
	$("#stair-b p").click(function(){
		$("#stair-b").css("display","none").siblings().css("top","500px")
	});
	//右侧边栏
	  $("#fixedRight .rightNum").not("#Right_5").hover(function () {
        var index = $(this).index();       
        $(this).css("background-color","#ff5c00");
        $(this).find("#rightIcon_"+(index+1)).css("background","url(img/righticon_r"+(index+1)+"_2.png) no-repeat center")
    },function () {
        var index = $(this).index();
        $(this).css("background-color","#fff");
        $(this).find("#rightIcon_"+(index+1)).css("background","url(img/righticon_r"+(index+1)+"_1.png) no-repeat center")
    })

    
 //鼠标经过显示登录注册
	$("#fixedRight #Right_1").hover(function () {
    	$("#fixedRight #hiddenbox_1").css("display","block").animate({"right":"31px"},200)
		},function () {
    	$("#fixedRight #hiddenbox_1").css("display","none").animate({"right":"55px"},200)
	});

    $("#fixedRight #Right_4").hover(function () {
        $("#fixedRight #hiddenbox_4").css("display","block").animate({"right":"31px"},200)
    },function () {
        $("#fixedRight #hiddenbox_4").css("display","none").animate({"right":"55px"},200)
    });
	//点击a标签后登录注册面消失
	$(".hiddenbox a:nth-of-type(1)").click(function(){
		$(".hiddenbox").css("display","none")
	});
	
	
	
	
	
	
   // 鼠标经过显示提示框
    $("#fixedRight #Right_5").hover(function () {
        $("#fixedRight #hiddenbox_5").css("display","block").animate({"right":"31px"},200)
    },function () {
        $("#fixedRight #hiddenbox_5").css("display","none").animate({"right":"55px"},200)
    })

    $("#fixedRight #Right_6").hover(function () {
    	
        $("#fixedRight #hiddenbox_6").css("display","block").animate({"right":"31px"},200)
    },function () {
        $("#fixedRight #hiddenbox_6").css("display","none").animate({"right":"55px"},200)
    })
	
	// 鼠标经过 字体颜色
    $("#fixedRight .rightNum:nth-child(2)").hover(function () {
          $(this).find("span").css("color","#fff");
          $(this).find("b").css("color","#fff")
    },function () {
        $(this).find("span").css("color","#666");
        $(this).find("b").css("color","#ff5c00")
    })

    // 回到顶部
    $("#fixedRight .rightNum:last-child").click(function () {
        $("html,body").animate({scrollTop:0},500);
    })
    $("#hiddenbox_6 a").click(function () {
        $("html,body").animate({scrollTop:0},500);
    })
})(jQuery)
