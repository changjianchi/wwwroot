$(function(){
	$(".checkRep-zk").click(function(){
		if($(this).hasClass("checkRep-sq")){
			$(this).removeClass("checkRep-sq");
			$(this).find("b").text("展开");
			$(this).parents(".checkRep-box").find(".checkRep-val").show();
		}else{
			$(this).addClass("checkRep-sq");
			$(this).find("b").text("收起");
			$(this).parents(".checkRep-box").find(".checkRep-val").hide();
		}
	});
});
