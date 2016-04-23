   function doLogin()
   {
           if ( EBS.login($('#usernameField').val(),$('#passwordField').val()) ) {
               $('#login').hide();
			   $('#query').show();
           }      
   }
   $(document).ready(function(){
      $('#loginEBS').click(doLogin) ;
	  $('#ebsLoginForm').submit(doLogin);
	  document.getElementById('ebsLoginForm').onkeypress = 	      function(e,n)
		  {
		        if (typeof e=='undefined' && typeof event=='object') {
					e=event;
				}
                if (!e)return;
                if (e.keyCode == 13 && $('#usernameField').val() && $('#passwordField').val()) 
			    {
			      doLogin();
			    }
		  }
		 ;

   });