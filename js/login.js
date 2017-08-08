
$(function(){
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
	//用户名
	
	
	
	
	
	
	
	
	
	//保存一周记录
	$("#btn").click(function(){
		
		if($(".check").checked){
			var username = $(".name").val();//获得用户名
			var password = $(".pass").val();//获得密码
			setCookie("username",username,7);
			setCookie("password",password,7);							
			
		}else{
			removeCookie("username");
			removeCookie("password");
		}
		
		
	})
	if(getCookie("username")){
		$(".name").val() = getCookie("username");
		$(".pass").val() = getCookie("password");
		$(".check").checked =true;
	}

})