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

function addButton(){
    try{
    	var link = $('video#video_player')[0].attributes['src'].value;
	    var outputb2 = '<a target="_blank" href="'+link+'" style="position: absolute; top: 0; left: 50%; font-size: 25px;font-weight: lighter;background: green;">去广告</a>';
		$('.page-container').append(outputb2);
 	 }
    catch(err) {
	}
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
} else {
    afterDOMLoaded();
}

function afterDOMLoaded(){
   	blockAjax();
    setTimeout(jumpAd, 4000);
    setTimeout(removeMsg, 1000);
    setInterval(addButton, 4000);	
	try {
		$('div .tgg').remove();
		$('div .gg').remove();
		$('div#myaudient2').remove();
		$('div#msg_winw').remove();
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
}