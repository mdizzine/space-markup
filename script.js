function automateScroll(){
	var curScroll = $('#scroll').scrollTop();
	$('#scroll').scrollTop(curScroll + 1);
}

function buildBlock(){
	for(var i = 0; i < 4; i++){
		document.getElementById("builder").innerHTML += "<span class='brick'></span>\n";
	}				
}

var inter = setInterval(automateScroll,100);
var build = setInterval(buildBlock,10000);

function stopScroll(){
	clearInterval(inter);
	clearInterval(build);
}

$('window').ready(function(){
	for(var i = 0; i < 1537; i++){
		var chance = Math.floor((Math.random() * 17179869184));
		var start = Math.floor((Math.random() * 128) + 1);
		if(start==1){
			chance = chance.toString(2).replace(/1/g,"*").replace(/0/g," ");
		}else if(start%8==0){
			chance = chance.toString(2).replace("1","*").replace(/1/g,".").replace(/0/g," ");
		}else if(start%31==1){
			chance = chance.toString(2).replace("1","<span class='twinkle'>*</span>").replace(/1/g,".").replace(/0/g," ");
		}else{
			chance = chance.toString(2).replace(/1/g,".").replace(/0/g," ");
		}
		for(var c = chance.length; c < 34; c++){
			document.getElementById('bg').innerHTML += " ";
		}
		document.getElementById('bg').innerHTML += chance;
	}
});