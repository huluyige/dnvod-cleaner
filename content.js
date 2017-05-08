function jumpAd() {
    var yourCustomJavaScriptCode = '$("body").trigger("filterAds");';
    var script = document.createElement('script');
    var code = document.createTextNode('(function() {' + yourCustomJavaScriptCode + '})();');
    script.appendChild(code);
    document.getElementsByTagName('body')[0].appendChild(script);
}
//$("body").trigger("filterAds");
document.addEventListener('DOMContentLoaded', function() {
	$('div .tgg').remove();
	$('div .gg').remove();
	$('div #myaudient2').remove();
	$('div #msg_winw').remove();
	$('div .ggw').remove();
	$('div .foot').remove();
	$('div .foot1').remove();
	$("div[class*='ggw-']").remove();
	$('div .r-gg').remove();
	$('div .bfq-r').remove();
    setTimeout(jumpAd, 4000);	
});

