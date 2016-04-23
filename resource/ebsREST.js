

var EBS =  {
    RCS_ID : "$Header:",
    serverUrl : document.currentScript.getAttribute("server"),
    call : function ( service , params ) {
      var url = this.serverUrl+"/OA_HTML/RF.jsp?function_id="+service+"&"+params;
      console.log("call "+url);
    },
    login : function ( username , password ) {
        call("mLogin","username");
    }
}
