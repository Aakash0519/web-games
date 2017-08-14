var body=document.getElementsByTagName("body")[0];
var left=document.getElementById("left");
var right=document.getElementById("right");
var n=5;
faces();
			
function faces() {
	while(left.firstChild)
		left.removeChild(left.firstChild);
	while(right.firstChild)
		right.removeChild(right.firstChild);

    for(var i=0;i<n;i++) {
		var img=document.createElement("img");
		img.src="smile.png";
		img.style.marginLeft=Math.floor(Math.random()*500)+"px";
		img.style.marginTop=Math.floor(Math.random()*400)+"px";
		left.appendChild(img);
    }

	var imgs=left.cloneNode(true);
	imgs.removeChild(imgs.lastChild);
	right.appendChild(imgs);
    
    left.lastChild.onclick=function(event) {
		event.stopPropagation();
		n+=5;
		faces();
	}
}
			
body.onclick=function() {
	alert("Game Over!");
	body.onclick=null;
	left.lastChild.onclick=null;
}