document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generate");
    var passwordInput = document.getElementById("password");
  
    generateButton.addEventListener("click", function () {
      var password = generatePassword();
      passwordInput.value = password;
    });
  
    function generatePassword() {
      // Generate your password logic here
      // Replace this with your own password generation algorithm
      var password = "MyGeneratedPassword123";
      return password;
    }
  });
  