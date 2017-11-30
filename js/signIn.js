   $("#signIn").submit(function (event) {
       //alert("Handler for .submit() called.");
       var username = $("#username").val();
       var password = $("#password").val();
       //console.log(username);
       //console.log(password);
       event.preventDefault();
       $.ajax({
           type: "GET",
           url: "http://192.168.0.15:5000/api/resource",
           contentType: "application/json",
           accepts: "application/json",
           dataType: 'json',
           beforeSend: function (req) {
               req.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
           },
           success: function (data) {
               $("#signIn")[0].reset();
               alert(data.data);
           },
           error: function (jqXHR, textStatus) {
               console.log("ERROR = " + jqXHR.status);
               $("#signIn")[0].reset();
           }
       });
   });
