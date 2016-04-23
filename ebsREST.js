

window.EBS = {
    RCS_ID : "$Header:",
    loginToken: '',
    serverUrl : document.currentScript.getAttribute("server"),
    call : function ( service , params ) {
      var url = this.serverUrl+"/OA_HTML/RF.jsp?function_id="+service+"&"+params;
      console.log("call "+url);
    },
    getXMLRequest : function () {

        try {
            return new XMLHttpRequest();
        }
        catch (e) {
        }
        try {
            return new ActivexObject("Msxml2.XMLHTTP");
        }
        catch (e) {
        }
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (e) {
        }
        alert('Your browser is not supported');
        return null;
    },
     login : function ( username , password ) {
        var req = this.getXMLRequest();
        req.open("GET",'/OA_HTML/RF.jsp?function_id=mLogin',false,username,password);
        req.setRequestHeader("Content-Type","application/json");
        req.send();
        var d =  JSON.parse(req.responseText);
        if (d.status) {
            this.loginToken='';
            alert(d.status.description);
            return false;
        }else {
            this.loginToken = d.data;
            alert("Connected to "+d.data.accessTokenName+" "+d.data.ebsVersion);
			document.cookie = encodeURIComponent(this.loginToken.accessTokenName) + "=" + encodeURIComponent(this.loginToken.accessToken) +"; path=/OA_HTML" ;
            return true;
        }
    },
	list : function ( ename )
	{
		var data = {
              action:'list',
              attachment : {
                   query : {
                      select: '*',
                      where : {
						  entity_name: 'FND_FORM_FUNCTION'  
					    }
					  }
			 }
		};

		$.ajax({
		    type:'POST',
			url: '/OA_HTML/RF.jsp?function_id=mAttachment',
			contentType: 'application/json',
			 dataType: "json",
			 data: JSON.stringify(data),
			 success: function (data, status, jqXHR) {
                 alert(success);
             },
             error: function (jqXHR, status) {
                 // error handler
				 console.log(data.stack);
                 console.log(jqXHR);
                 alert('fail' + status.code);
             },
		});
		
	},
    call: function ( ) {
        return 0;
    }

}