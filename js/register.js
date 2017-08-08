

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
    });
    //搜索栏，当划过购物车图标出现购物车
    $("#log-r").hover(function(){
    	console.log("aaa");
    	$("#log-r-b").stop().show(300);
    },function(){
    	$("#log-r-b").stop().hide(300);
    })
    
    //注册的代码
   	$(function(){
   		var flag=false;
    	//手机号码
    	var pattern1=/^1(\d){10}$/;
    	$(".phonenum").focus(function(){
    		$(this).css({"border":"1px solid #ffc353"});
    	})
    	
    	$(".phonenum").bind("change blur",(function(){
    		
    		if(pattern1.test(Number($(this).val()))){
    			
				$(this).css({"border":"1px solid green"}).stop().siblings(".green").show().siblings(".error").hide();
					flag=true;
			}else{
				$(this).css({"border":"1px solid red"}).stop().siblings(".error").show().siblings(".green").hide();
				flag=false;
			}
			
			
    	}))
    	//设置密码:密码只能输入6-20个字母、数字、下划线  
    	
    	
    	$(".password1").focus(function(){
    		$(this).css({"border":"1px solid #ffc353","margin-bottom":"3px"})
    		.stop().siblings("strong").show()
    		.siblings(".one").hide()
    		.siblings(".two").hide()
    		.siblings(".three").hide();
    		$(".error1").hide();
    	
    	})
    	var num=0;
    	$('.password1').bind("keyup",(function () {
	        var flag1=false;
	        var flag2=false;
	        var flag3=false;
	     	var str=($(this).val());
	     	
	     	for(var i=0;i<str.length;i++){
					//console.log(str[i]);
					if(str[i]>=0 && str[i]<=9){
						flag1=true;
					}
					if(str[i]>="a" && str[i]<="z"){
						flag2=true;
					}
					if(str[i]>="A" && str[i]<="Z"){
						flag3=true;
					}
			}
	     	if(flag1 && flag2 && flag3){
					$('strong').find(".qiang").css("background","#82be0e");
					num=1;
					//console.log(num);
			}
	     	else if(flag1 && flag2 && !flag3||flag1 && !flag2 && flag3||!flag1 && flag2 && flag3){
						$('strong').find(".zhong").css("background","#b6dc2f").siblings(".qiang").css("background","#cccccc");
					num=2;
				//console.log(2);

			}else{
					$('strong').find(".ruo").css("background","#ffc353").siblings().css("background","#cccccc");
					num=3;
					//console.log(3);
			}
			
     	    
 		})); 	
    	
    	$(".password1").blur(function(){
    		if(num==3){
    			$(this).css("border","1px solid #59a358");
    			$(".one").show().siblings("strong").hide().siblings(".two").hide().siblings(".three").hide();
    		}
    		if(num==2){
    			$(this).css("border","1px solid #59a358");
    			$(".two").show().siblings("strong").hide().siblings(".one").hide().siblings(".three").hide();
    		}
    		if(num==1){
    			$(this).css("border","1px solid #59a358");
    			$(".three").show().siblings("strong").hide().siblings(".two").hide().siblings(".one").hide();
    		}
    		if($(this).val()==""){
    			$(this).css("border","1px solid red");
    			$(".error1").show().siblings("p").hide();
    			$("strong").hide();
    		}
    	})
    	//重复密码
    	$(".password2").focus(function(){
    		$(this).css({"border":"1px solid #ffc353","margin-bottom":"3px"});
    	})
    	$(".password2").change(function(){
    		if($(".password1").val()===$(".password2").val()){
    			$(this).css("border","1px solid #3bb41a");
    			$(".fore").show().siblings(".error2").hide().siblings("em").hide();
    		}else{
    			$(this).css("border","1px solid red");
    			$(".error2").show().siblings(".fore").hide().siblings("em").hide();
    		}
    		
    	})
    	$(".password2").blur(function(){
    		if($(this).val()==""){
    			$(this).css("border","1px solid red");
    			$("em").show().siblings(".fore").hide().siblings(".error2").hide();
    		}
    	})
    	//验证码
    	var verifyCode = new GVerify("v_container");
    	$("#code_input").focus(function(){
    		$(this).css({"border":"1px solid #ffc353","margin-bottom":"3px"});
    	})
    	$("#code_input").blur(function(){
    		var res = verifyCode.validate($(this).val());
			if(res){
				$(".main-te3").siblings("p").hide();
			}else{
				
				$(this).css({"border":"1px solid red","margin-bottom":"3px"});
				$(".main-te3").siblings("p").show();	
			}
    	})
    	
    	
    	
   	})
   	var flag1=false;
	var flag2=false;
    $("#btn").click(function(){
		//console.log(num);
		//正则判断
//		if(flag1&&flag2){
			
			//$(this).attr("href","login.html");
			//ajax请求后台数据
			var name=$(".phonenum").val();
			var psd=$(".password1").val();
			console.log(name,psd);
			$.ajax({
			   type: "POST",
			   url: "common.php",
			   data: {"username":name,"psw":psd,"act":"reg"},
			   success: function(data){
			   	var data=JSON.parse(data);
			   	console.log(data);
			   	//判断接口数据
			     if(data.error==0){
			     	alert("注册成功！");
					window.location="login.html";
			     	
			     }else if(data.error=="1"){
			     	alert("用户名已存在");
			     	//console.log(num);
			     }
			   }
			});
			//return num=0;
//		}else{
//			alert("请重新输入信息！");
//			//console.log(num);
//		}
		//return false;
	})	
    	
    	
  
    
    
    
    
    
    
    
    
    
    
    
    
})(jQuery)
