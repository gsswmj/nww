// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("小姐姐在考虑一下呗");
	   }else if(Dianji==2){
		   		alert("一杯奶茶~");
		   		
	   }else if(Dianji==3){
		   		alert("请你吃饭！");
		   		
	   }else if(Dianji==4){
		   		alert("带你撸狗");
		   		
	  }else if(Dianji==5){
		   		alert("开心一丢丢咯");
	  }else if(Dianji==6){
		   		alert("要不去公园走走？");
	  }else if(Dianji==7){
		   		alert("最漂亮的倪玮玮同学");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("终于同意了，开心一点哦！");
	}
	

}