$(document).ready(function(){
	$("#shopHead").click(function(){
		$("#shop").slideToggle("slow"),
		$("#shopHead").toggleClass("clicked");
	});
	$("#prepHead").click(function(){
		$("#prep").slideToggle("slow"),
		$("#prepHead").toggleClass("clicked");
	});
	$("#cookHead").click(function(){
		$("#cook").slideToggle("slow"),
		$("#cookHead").toggleClass("clicked");
	});
	$("ul > li").click(function(){
		$(this).css("text-decoration", "line-through");
	});
	$(".footer").click(function(){
		$("#pics").slideToggle("slow"),
		$("#instructions").css("padding-top", "1em");
	});
	$("ol > li").hover(function(){
		$(this).toggleClass("hover");
	});
});