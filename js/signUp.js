 $("#signUp").submit(function (event) {
     var newUsername = $("#newUsername").val();
     var newPassword = $("#newPassword").val();
     event.preventDefault();
     $.ajax({
         type: "POST",
         url: "http://192.168.0.15:5000/api/users",
         contentType: "application/json",
         data: JSON.stringify({
             'username': newUsername,
             'password': newPassword
         }, null, '\t'),
         accepts: "application/json",
         dataType: 'json',
         success: function (data) {
             $("#signUp")[0].reset();
             alert('Registered user! Hi ' + data.username + '!');
         },
         error: function (jqXHR, textStatus) {
             console.log("ERROR = " + jqXHR.status);
             $("#signUp")[0].reset();
         }
     });
 });
