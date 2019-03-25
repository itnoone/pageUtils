/**
 * 分页页码js 还有显示多少条数 显示在id=zhanshiId上 <td id="zhanshiId"></td>
 * 分页显示在<ul class="pagination" style="margin-top: 0px;" id="pageBtn">
 * selectId是跳转页码按钮的id
 * <select id="selectId" style="width: 60px; float: left;"
		class="form-control">
		<option>1</option>
	</select>
	<button type="button" class="btn btn-default" style="float: left;"
		onclick="pageToAction(-1)">确定</button>

	<nav aria-label="...">
		<ul class="pagination" style="margin-top: 0px;" id="pageBtn">
		</ul>
		<div class="page"></div>
	</nav>
 * @param res
 */

function showPageTool(res){
	//显示多少条 ---总共多少条 语句 
	var show1=(res.currentPage-1)*res.pageNum;
	var show2=show1+res.pageNum;
	
	if(show2>=res.totalNum){
		show2=res.totalNum;
	}

	var zs="";
	if(res.pageList==""){//没有数据
		zs="展示："+0+"-"+show2+"/"+res.totalNum+"条";
    }else{
    	zs="展示："+(show1+1)+"-"+show2+"/"+res.totalNum+"条";
    }
	$('#zhanshiId').html(zs);
	//显示跳到哪一页的下拉框selectId
	var select="";
	for(i=1;i<=res.totalPage;i++){
		//selected="selected"
		if(i==res.currentPage){
			select+="<option selected>"+i+"</option>"
		}else{
			select+="<option>"+i+"</option>"
		}
		
	}
	$('#selectId').html(select);
	
	
	/////////////////////////////////////////////设计分页	////////////////////////////////////////////////
	var dqPage = res.currentPage;//得到当前页数
    dqPage = parseInt(dqPage);//得到的文本转成int
    var pageCount = res.totalPage;//得到总页数
    pageCount = parseInt(pageCount);
    var i = 1;
    i = parseInt(i);
    var item="";
    if (pageCount <= 5 ) {//总页数小于五页，则加载所有页
        for (i; i <= pageCount; i++) {
        	//前一页li显示
        	if(i==1){
        		if(dqPage==1){
        			item+="<li class='disabled'><a href='javascript:;' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
        		}else{
        			item+="<li><a href='javascript:;' aria-label='Previous' onclick='pageToAction("+(dqPage-2)+")'><span aria-hidden='true'>&laquo;</span></a></li>";
        		}
        	}
            if (i == dqPage) {
                item += "<li><a href='javascript:;' style='color: black;'>"+i+"</a></li>"; 
            }else{
//                item += "<a href='"+href+i+"' >"+i+"</a>";
            	item += "<li><a href='javascript:;' onclick='pageToAction("+(i-1)+")'>"+i+"</a></li>";
            }
          //后一页li显示
            if(i==pageCount){
            	if(dqPage==pageCount){
            		item +="<li class='disabled'><a href='javascript:;' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>"; 
            	}else{
            		item +="<li><a href='javascript:;' aria-label='Next' onclick='pageToAction("+(dqPage)+")'><span aria-hidden='true'>&raquo;</span></a></li>";
            	}
            }
        };
        $('#pageBtn').html(item);
        return;
    }else if (pageCount > 5) {//总页数大于五页，则加载五页
        if (dqPage <= 3) {//当前页 小于等于3，加载1-5页
            for (i; i <= 5; i++) {
            	//前一页显示
            	if(i==1){
	        		if(dqPage==1){
	        			item+="<li class='disabled'><a href='javascript:;' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
	        		}else{
	        			item+="<li><a href='javascript:;' aria-label='Previous' onclick='pageToAction("+(dqPage-2)+")'><span aria-hidden='true'>&laquo;</span></a></li>";
	        		}
	        	}
                if (i == dqPage) {
                    item += "<li><a href='javascript:;' style='color: black;'>"+i+"</a></li>"; 
                }else{
                    item += "<li><a href='javascript:;' onclick='pageToAction("+(i-1)+")'>"+i+"</a></li>"; 
                }
                //后一页显示
                if(i==5){
                		if(dqPage==5){
                			item +="<li class='disabled'><a href='javascript:;' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>";
                		}else{
                			item +="<li><a href='javascript:;' aria-label='Next' onclick='pageToAction("+(dqPage)+")'><span aria-hidden='true'>&raquo;</span></a></li>";
                		}
	            }
                
                
            };
            $('#pageBtn').html(item);
            return;
        }else if (dqPage > 3) {//当前页大于3页
        	//当前页>=总页码-2时 显示 最后5页
        	if(dqPage>=pageCount-2){
        		for(i=pageCount-4;i<=pageCount;i++){
        			//前一页显示
        			if(i==pageCount-4){
		        			item+="<li><a href='javascript:;' aria-label='Previous' onclick='pageToAction("+(dqPage-2)+")'><span aria-hidden='true'>&laquo;</span></a></li>";
		        	}
        			if(i==dqPage){
        				item +="<li><a href='javascript:;' style='color: black;'>"+i+"</a></li>";
        			}else{
        				item +="<li><a href='javascript:;' onclick='pageToAction("+(i-1)+")'>"+i+"</a></li>";
        			}
        			//后一页显示
        			if(i==pageCount){
        				if(dqPage==pageCount){
        					item +="<li class='disabled'><a href='javascript:;' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>";
        				}else{
        					item +="<li><a href='javascript:;' aria-label='Next' onclick='pageToAction("+(dqPage)+")'><span aria-hidden='true'>&raquo;</span></a></li>";
        				}
		            }
        		}
        	}else{
        		//大于3 总页码大于当前页的+2
	        	for(i=dqPage-2;i<=dqPage+2;i++){
	        		//前一页显示
	        		if(i==dqPage-2){
	        			item+="<li><a href='javascript:;' aria-label='Previous' onclick='pageToAction("+(dqPage-2)+")'><span aria-hidden='true'>&laquo;</span></a></li>";
	        		}	
        			if(i==dqPage){
        				item +="<li><a href='javascript:;' style='color: black;'>"+i+"</a></li>";
        			}else{
        				item +="<li><a href='javascript:;' onclick='pageToAction("+(i-1)+")'>"+i+"</a></li>";
        			}
        			//后一页显示
        			if(i==dqPage+2){
		            		item +="<li ><a href='javascript:;' aria-label='Next' onclick='pageToAction("+(dqPage)+")'><span aria-hidden='true'>&raquo;</span></a></li>"; 
		            }
        			
        		}
        	}
            $('#pageBtn').html(item);
            return;
        }
    }
		
	
}

