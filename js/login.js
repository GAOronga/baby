$(function() {
	//验证码
	var verifyCode = new GVerify("v_container");
	$("#code_input").focus(function() {
		$(this).css({
			"border": "1px solid #ffc353",
			"margin-bottom": "3px"
		});
	})
	$("#code_input").blur(function() {
		var res = verifyCode.validate($(this).val());
		if(res) {
			$(".main-te3").siblings("p").hide();
		} else {

			$(this).css({
				"border": "1px solid red",
				"margin-bottom": "3px"
			});
			$(".main-te3").siblings("p").show();
		}
	})

	//数据库导数据

})

/*//保存一周记录
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
}*/

$(function() {
	$("#btn").click(function() {
		$.ajax({
			type:"get",
			url:"common.php?username="+$('.name').val()+"&password="+$('.pass').val()+"&act=login",
			async:true,
			success:function(data){
				console.log(data);
				var res = JSON.parse(data);
				if(res.error == 0){
					window.location.href = "index.html";
				}else{
						alert("用户名或密码错误");
					}
						
			}
		})
	})
})