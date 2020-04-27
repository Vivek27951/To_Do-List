$("ul").on("click","li",function(){
	
	$(this).toggleClass("completed");

// 	if($(this).css("color")==="rgb(128, 128, 128)"){
// 		$(this).css({
// 			color : "black",
// 		textDecoration: "none"
// 		})
// 	}
// 	else{
// 	$(this).css({
// 		color : "gray",
// 		textDecoration: "line-through"
// 	});
// }
})
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(200,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newT = $(this).val();
		$(this).val(""); 
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+newT+"</li>");
	}
})
$(".fa-list-alt").click(function(){
	$("input[type='text']").fadeToggle(200);
})