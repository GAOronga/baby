
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
	var name=document.getElementsByClassName("name")
	var pass=document.getElementsByClassName("pass")
	var oBtn=document.getElementById("btn")
	var check=document.getElementsByClassName("check")
	oBtn.onclick=function(){
  		
		if(check.checked){
			var username = name.value;//获得用户名
			var password = pass.value;//获得密码
			setCookie("username",username,7);
			setCookie("password",password,7);	
		}else{
			removeCookie("username");
			removeCookie("password");
		}
	}
	if(getCookie("username")){
		name.value = getCookie("username");
		pass.value = getCookie("password");
		check.checked =true;
	}
	
	
	
	$(function(){
	$("#btn").click(function(){
		var name=$(".name").val();
		var psd=$(".pass").val();
		$.ajax({
		   type: "POST",
		   url: "common.php",
		   //向接口传参
		   
		   data: {"username":name,"psw":psd,"act":"reg"},
		   success: function(data){
		   	var data=JSON.parse(data);
		   	if(data.error==0){
		   		location.href="index.html";
		   	}else if(data.error==1){
		   		alert("用户名或密码错误");
		   	}
		     
		   }
		});
	})
})

	
	
	//保存一周记录
	/*$("#btn").click(function(){
		
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
	}*/

})