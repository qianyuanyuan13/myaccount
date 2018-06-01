// JavaScript Document
/*****************数据改变  ul 不变*************/
//根据数据写入 li
clipInit=function (){
    form = document.getElementById("baseForm");
    cuinput = document.getElementById("currentPage");
    currentPage=parseInt(cuinput.value);
	pageCon=document.getElementById("totalPage").value;   //可更改
	console.log(pageCon)
	liTab=5;    //可更改
	medCur=Math.ceil(liTab/2);

	var str="";
	str+="<ul>";
    str+="<span style='color: #0099FF'>&nbsp;总页数:"+pageCon+"</span>";
    str+="<span style='color: #0099FF'>&nbsp;当前页:"+currentPage+"</span>";
	str+="<li class='BORDER' id='firstPage' onclick='FirstPage()'>首页</li>";
	str+="<li class='BORDER' id='lastPage' onclick='LastPage()'>上一页</li>";
	str+="<div id='pageU' class='fl'>";
	str+="<li class='clear'></li>";
	str+="</div>";
	str+="<li class='BORDER' id='nextPage' onclick='NextPage()'>下一页</li>";
	str+="<li class='BORDER' id='endPage' onclick='EndPage()' style='border-right:1px solid #ccc'>尾页</li>";
	str+="<li class='clear'></li>";
	str+="</ul>";
	$("#clipDIV").html(str);
	//pageInt('clip1',pageCon,medCur);
}
//设置当点击的值小于预设固定值
//单击事件  选择页数
clipPage=function (cur,page){
	var str="";
	for(var i=1;i<=page;i++){
		var liId="clip"+i;
		if(cur==i){
			$("#"+liId).attr("class","curPage");
		}else{
			$("#"+liId).attr("class","BORDER");
		}
		$("#"+liId).text(i);
	}
	pageControl(cur);
}
//设置的中转站，根据获取的值更改操作
pageInt=function (obj,page,medCur){
	if(currentPage < medCur){
		clipPage(currentPage,page);
	}else if(currentPage >= medCur){
		clipPageMax(currentPage,page,medCur);
	}
}
//设置当获取的值大于预设固定值
clipPageMax=function (cur,page,medCur){
	var str="";
	var startNum=cur-medCur+1;
	var maxPage=startNum+parseInt(page)-1;
	if(maxPage<pageCon){
		for(var i=1;i<=page;i++){
			var liId="clip"+i;
			if(medCur==i){
				$("#"+liId).attr("class","curPage");
			}else{
				$("#"+liId).attr("class","BORDER");
			}
			$("#clip"+i).text(startNum);
			startNum++;
		}
	}else{
		var end = new RegExp(/\d+$/);
		var page=parseInt(end.exec(page));
		var curT=cur-pageCon+page;
		var maxP=pageCon;
		for(var i=page;i>=1;i--){
			var liId="clip"+i;
			if(curT==i){
				$("#"+liId).attr("class","curPage");
			}else{
				$("#"+liId).attr("class","BORDER");
			}
			$("#"+liId).text(maxP);
			maxP--;
		}
		
	}
	pageControl(cur);
}
//首页，尾页，上一页，下一页 的样式
pageControl=function (cur){
	if(pageCon==1){
		$("#firstPage").attr("class","disbled");
		$("#lastPage").attr("class","disbled");
		$("#nextPage").attr("class","disbled");
		$("#endPage").attr("class","disbled");
	}else if(cur==pageCon){
		$("#firstPage").attr("class","BORDER");
		$("#lastPage").attr("class","BORDER");
		$("#nextPage").attr("class","disbled");
		$("#endPage").attr("class","disbled");
	}else{
		$("#firstPage").attr("class","BORDER");
		$("#lastPage").attr("class","BORDER");
		$("#nextPage").attr("class","BORDER");
		$("#endPage").attr("class","BORDER");
	}
}
//第一页 显示
FirstPage=function (){
    if(pageCon == 1){
        return;
    }
	var forNum=parseInt(liTab);
	clipPage(1,forNum);
    cuinput.setAttribute("value",1);
    form.submit();
}
//尾页 显示
EndPage=function (){
	if(pageCon == 1){
		return;
	}
	var maxV=parseInt(pageCon);
	clipPageMax(maxV,liTab,medCur);
    cuinput.setAttribute("value",pageCon);
    form.submit();
}
//上一页 显示
LastPage=function (){
    if(currentPage == 1){
        return;
    }
	var choice=$(".curPage").attr('id');
	var obj=$("#"+choice).prev().attr('id');
	pageInt(obj,liTab,medCur);
    cuinput.setAttribute("value",currentPage-1);
    form.submit();
}
//下一页 显示
NextPage=function (){
	if(currentPage == pageCon){
		return;
	}
	var choice=$(".curPage").attr('id');
	var obj=$("#"+choice).next().attr('id');
	pageInt(obj,liTab,medCur);
    cuinput.setAttribute("value",currentPage+1);
    form.submit();
}











/******************************************************************************************************************************
														表单判断
********************************************************************************************************************************/