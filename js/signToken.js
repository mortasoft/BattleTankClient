 $("#signToken").submit(function (event) {
     var username = $("#token").val();
     //console.log(username);
     event.preventDefault();
     $.ajax({
         type: "GET",
         url: "http://192.168.0.15:5000/api/resource",
         contentType: "application/json",
         accepts: "application/json",
         dataType: 'json',
         beforeSend: function (req) {
             req.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + "whatever"));
         },
         success: function (data) {
             $("#signToken")[0].reset();
             alert(data.data);
         },
         error: function (jqXHR, textStatus) {
             console.log("ERROR = " + jqXHR.status);
             $("#signToken")[0].reset();
         }
     });
 });
