// dailyfx listener 
$(".pane-legend-item-value-container > span:nth-child(4) > .main").bind('DOMSubtreeModified',function(){
	var value = $(".pane-legend-item-value-container > span:nth-child(4) > .main").text();
	var url = 'https://localhost:3001/setstock?ask=' + value;
	console.log(value);
	$.get(url);
});




