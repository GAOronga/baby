
$(function(){

	//显示购物车的数量
	var str = $.cookie("cart");
	var obj = str ? JSON.parse(str) : {};
	var numberss = 0;
	console.log(obj)
	for(var i in obj){
		console.log(obj[i])
		numberss +=obj[i]; 
	}
	$(".nums").text(numberss);
	//购物车的显示
	$.ajax({
		type:"get",
		url:"js/list.json",
		async:true,
		success:function(data){
			var str = $.cookie("cart");
			var obj = str ? JSON.parse(str):{};
			console.log(obj)
			var amount = 0;
			//在购物车中显示
			for(var i in obj){		
				var html = "";	
				for(var k in data){
					
					if(data[k].id ==i ){
						html +=
						"<li>"+
	            			"<div id='list-left'>"+
		            			"<img src='"+data[k].src+"'>"+
		            			"<span>"+data[k].name+"</span>"+
	            			"</div>"+
	            			
	            			"<b>"+data[k].price+"</b>"+
							"<div class='num'>"+
								"<a href='#:;' class='readuce' id='"+data[k].id+"' many = '"+data[k].price+"' >-</a>"+
								"<p>"+obj[i]+"</p>"+
								"<a href='#:;' class='push'  id='"+data[k].id+"' many = '"+data[k].price+"'>+</a>"+
							"</div>"+
							"<span class='single'>"+ data[k].price.slice(1)*(obj[i]) +"</span>"+
							"<a href='#'>删除</a>"+
						"</li>"
						amount += data[k].price.slice(1)*(obj[i])
					}
				}
				$(".commodity").append(html);
				$(".amount").text("$"+amount);
					
			}
			//点击加减
			$(".readuce").each(function(){
				$(this).click(function(){
					var nb = $(this).next().text()-1;//在商品中获取
					if(nb<=1){
						nb =1;
					}
					var idss = $(this).attr("id");
					$(this).next().text(nb);//设置单个商品数量
					var strs = $.cookie("cart");
					var objs = JSON.parse(strs);
					  
					 obj[idss] = obj[idss] -1;
					 if(obj[idss]<1){
					 	obj[idss]=1;
					 	numberss=numberss;
					 }else{
					 numberss -=1;
					 }
					  var mountt = (obj[idss])*($(this).attr("many").slice(1));//计算单个商品金额
					 var json_str = JSON.stringify(obj);//转换成json形式存cookie；
					 $.cookie("cart",json_str);
					 $(".num").find("p").html(numberss);  
					$(this).parent().siblings(".single").text(mountt);
					 $(".nums").html(numberss);
					  
				})
			})
			//点击增加
			$(".push").each(function(){
				$(this).click(function(){
					var nb = +$(this).prev().text()+1;
					var idss = $(this).attr("id");
					$(this).prev().text(nb);//
					var strs = $.cookie("cart");
					var objs = JSON.parse(strs);
					 numberss +=1; 
					 obj[idss] = obj[idss] +1;//加减之后的数量
					  var mountt = (obj[idss])*($(this).attr("many").slice(1));//计算单个商品金额
					 var json_str = JSON.stringify(obj);//转换成json形式存cookie；
					 $.cookie("cart",json_str);
					 $(".num").find("p").html(numberss); 
					 $(this).parent().siblings(".single").text(mountt);
					 $(".nums").html(numberss);
					
					 
				})
			})
			
			
		}
	})


})
	
	
	
	

			