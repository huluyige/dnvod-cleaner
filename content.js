function jumpAd() {
	//$('div .gg').remove();
	$('div #msg_content').parent().remove();
    var yourCustomJavaScriptCode = '$("body").trigger("filterAds");';
    var script = document.createElement('script');
    var code = document.createTextNode('(function() {' + yourCustomJavaScriptCode + '})();');
    script.appendChild(code);
    document.getElementsByTagName('body')[0].appendChild(script);


}

function removeMsg(){
	$('div #msg_content').parent().remove();
}
function blockAjax(){
	var yourCustomJavaScriptCode = '$(document).ajaxStop(function() {$(\'div .custom-contaienr\').remove();$(\'div .gg\').remove();;});';
    var script = document.createElement('script');
    var code = document.createTextNode('(function() {' + yourCustomJavaScriptCode + '})();');
    script.appendChild(code);
    document.getElementsByTagName('body')[0].appendChild(script);
}
//$("body").trigger("filterAds");
document.addEventListener('DOMContentLoaded', function() {
	blockAjax();
    setTimeout(jumpAd, 4000);
    setTimeout(removeMsg, 1000);	
	try {
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
		$('div .custom-contaienr').remove();
		$('div .ybtb').remove();
		document.getElementsByClassName('takemargin')[0].style.visibility="hidden";
		$('.box')[0].remove();
	}
	catch(err) {

	}
});