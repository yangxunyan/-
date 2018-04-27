function ajax(method,url,data,success){
	
		var xhr=null;
				try{
					xhr =new XMLHttpRequest();
				}catch(e){
					xhr = ActiveXObject('Microsoft.XMLHTTP');
				}
				if(method=='get'&&data){
					url+='?'+data;
				}
				xhr.open(method,url,true);
				if(method=='get'){
					xhr.send();//内容为空
				}else{
					xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
					xhr.send(data);//内容有数据
				}
				
				
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4){
						if(xhr.status==200){
							
						
							success&&success(xhr.responseText);
							//alert(xhr.responseText);
						}else{
							alert('报错:'+xhr.status);
						}
					}
					
				}
}
