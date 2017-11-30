  $("#getToken").submit(function (event) {
      //alert("Handler for .submit() called.");
      var username = $("#tokenUsername").val();
      var password = $("#tokenPassword").val();
      //console.log(username);
      //console.log(password);
      event.preventDefault();
      $.ajax({
          type: "GET",
          url: "http://192.168.0.15:5000/api/token",
          contentType: "application/json",
          accepts: "application/json",
          dataType: 'json',
          beforeSend: function (req) {
              req.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
          },
          success: function (data) {
              $("#getToken")[0].reset();
              alert(data.token);
              console.log(data.token);
          },
          error: function (jqXHR, textStatus) {
              console.log("ERROR = " + jqXHR.status);
              $("#getToken")[0].reset();
          }
      });
  });
