$(document).ready(function(){
	
	$("#sb").click(function(){
		$("#more").slideToggle('slow');
	});

	$("#first").click(function(){
		$("#fcc").animate({
			width:"200px",
			height: "200px",
			marginLeft:"100px"
		},'slow');
	});

	$("#cc").click(function(){
		$("#contact").show('slow');
		$("#aa").hide('slow');
	});

	$("#adding").click(function(){
		$("#add").show('slow');
		$("#contact").hide('slow');
	});

	$("#back").click(function(){
		$("#add").hide('slow');
		$("#aa").show('slow');
	});

	$("#back1").click(function(){
		$("#contact").hide('slow');
		$("#aa").show('slow');
	});
});

	//alert
	var sub=document.getElementById('submit');
	sub.addEventListener("click", function(){alert('*Thank You So Much*');
	});

	var join=document.getElementById('adding');
	join.addEventListener("click", function(){alert('*WELCOME TO OUR ANIME GROUP*');
	});

	var back=document.getElementById('back');
	back.addEventListener("click", function(){alert('Are You Sure Want To BACK ?');
	});

	var back1=document.getElementById('back1');
	back1.addEventListener("click", function(){alert('Are You Sure Want To BACK ?');
	});


function big1(){
	var img= document.getElementById("m1");
	img.style.width="200px";
	img.style.height="200px";
	img.style.transition="1s";
}
function normal1(){
	var img= document.getElementById("m1");
	img.style.width="80px";
	img.style.height="100px";
	img.style.transition="1s";
}
function big2(){
	var img= document.getElementById("m2");
	img.style.width="200px";
	img.style.height="200px";
	img.style.transition="1s";
}
function normal2(){
	var img= document.getElementById("m2");
	img.style.width="80px";
	img.style.height="100px";
	img.style.transition="1s";
}
function big3(){
	var img= document.getElementById("m3");
	img.style.width="200px";
	img.style.height="200px";
	img.style.transition="1s";
}
function normal3(){
	var img= document.getElementById("m3");
	img.style.width="80px";
	img.style.height="100px";
	img.style.transition="1s";
}
function big4(){
	var img= document.getElementById("m4");
	img.style.width="200px";
	img.style.height="200px";
	img.style.transition="1s";
}
function normal4(){
	var img= document.getElementById("m4");
	img.style.width="80px";
	img.style.height="100px";
	img.style.transition="1s";
}
function big5(){
	var img= document.getElementById("m5");
	img.style.width="200px";
	img.style.height="200px";
	img.style.transition="1s";
}
function normal5(){
	var img= document.getElementById("m5");
	img.style.width="80px";
	img.style.height="100px";
	img.style.transition="1s";
}
function big6(){
	var img= document.getElementById("m6");
	img.style.width="200px";
	img.style.height="200px";
	img.style.transition="1s";
}
function normal6(){
	var img= document.getElementById("m6");
	img.style.width="80px";
	img.style.height="100px";
	img.style.transition="1s";
}