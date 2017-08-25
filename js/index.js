$(document).ready(function(){
	var contador = 1;
	$("#feed1").show();
	$("#feed2").hide();
	$("#botao1").click(function(){
		$("#feed1").hide("explode","slow");
		$("#feed2").fadeIn(400);
		$("#la4").hide();
		$("#la5").hide();
		$("#la6").hide();
		$("#la1").show(400);
		$("#la2").show(400);
		$("#la3").show(400);
		$("#zona_direita").show("fade","slow");
		$(".botoesflutuantes").animate({backgroundColor:"blue"},400);
		$(".botoesflutuantes").css("border-color","blue");
		$(".botoesflutuantes i").css("color","white");
		});
	$(".lugares").click(function(){
		$("#feed2").hide("explode","slow");
		$("#feed1").show("drop","slow");
		$(".botoesflutuantes").animate({backgroundColor:"white"},400);
		$(".botoesflutuantes").css("border-color","white");
		$(".botoesflutuantes i").css("color","#b6bbbf");
	});
	$("#zona_direita").mouseenter(function(){
		$("#la1").hide();
		$("#la2").hide();
		$("#la3").hide();
		$("#la4").show("drop","slow");
		$("#la5").show("drop","slow");
		$("#la6").show("drop","slow");
		$("#zona_direita").hide();
		})
	});