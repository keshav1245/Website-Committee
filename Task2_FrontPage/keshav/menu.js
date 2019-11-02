var menuBut = document.getElementById('m-but');

menuBut.addEventListener('click',function(){
	document.getElementById('m-exp').style.marginRight = 0;
})

var close = document.getElementById('cross');

close.addEventListener('click',function(){
	document.getElementById('m-exp').style.marginRight = '-20%';	
})