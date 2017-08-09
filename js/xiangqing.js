$(function(){
	/*放大镜*/
		$(".big").mousemove(function(e){
		var x=e.pageX-$(this).offset().left-$("#zoom").width()/2;
		var y=e.pageY-$(this).offset().top-$("#zoom").height()/2;			
		if(x>=$(this).width()-$("#zoom").width()){
			x=$(this).width()-$("#zoom").width();
		}
		if(x<$("#zoom").width()/2){
			x=0;
		}
		if(y>=$(this).height()-$("#zoom").height()){
			y=$(this).height()-$("#zoom").height();
		}
		if(y<$("#zoom").height()/2){
			y=0;
		}
		$(this).find("#zoom").show().css({"left":x,"top":y});
		$(".bigArea").show().find("img").css({"left":-(x/$(".big").width()*$(".bigArea").find("img").width()),
		"top":-(y/$(".big").height()*$(".bigArea").find("img").height())});
	});
	$(".big").mouseleave(function(){
		$("#zoom").hide();
		$(".bigArea").hide();
	});
	$("#simg img").hover(function(){
		$(this).css("border","1px solid red").parents(".goods-l").find(".big img").attr("src",$(this).attr("src"))
		.parents(".goods-l").find(".bigArea img").attr("src",$(this).attr("src"));
		;
	},function(){
		$(this).css("border","1px solid #cecece");
	})
	
   //购物车添加数量事件
   $(".act1").click(function(){
		var value=$(this).prev().val();
		value=parseInt(value)+1;//string转换成number
		$(this).prev().val(value);
	});
	$(".act2").click(function(){		
		var value=$(this).prev().prev().val();
		value=parseInt(value)-1;//string转换成number
		$(this).prev().prev().val(value);
		if(value==0){
			$(this).prev().prev().val("1");
		};		
	});
   $(".act3").hover(function(){
   		$(".act4").show();
   },function(){
   		$(".act4").hide();
   });
   
   $(".act-2").click(function(){
   	$(".success").show();
   })
   $(".delete").click(function(){
   	$(".success").hide();
   })

			

   
})
   	//购物车
   	$(function(){
	
	var res =location.search;//接收的数据
	var tt = res.slice(1).split("=")
	var num = tt[1];

	$.ajax({
		type:"get",
		url:"js/list.json",
		async:true,
		success:function(data){
			var lis=0;
			for(var i=0;i<data.length;i++){
				if(data[i].id == num){
					lis = i;
				}
			}

			//购物车
			var str = $.cookie("cart");
			var obj = str ? JSON.parse(str) : {};
			var numberss = 0;
			for(var i in obj){
				console.log(obj[i])
				numberss +=obj[i]; 
			}
			$(".num").text(numberss);
			
			$(".act-2").click(function(){
				var quantity = +$(".amount").val();
				console.log(quantity)
				var commodity = data[lis].id;
				obj[commodity] = obj[commodity] ? obj[commodity]+quantity :quantity;
				var json_str = JSON.stringify(obj);//转换成json形式存cookie；
				$.cookie("cart",json_str);
				numberss +=quantity;
				$(".num").text(numberss);
			})
		}
	});
	
})