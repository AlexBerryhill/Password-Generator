document.addEventListener("DOMContentLoaded", function () {
    var generateButton = document.getElementById("generate");
    var passwordInput = document.getElementById("password");
  
    generateButton.addEventListener("click", function () {
      var password = generatePassword();
      passwordInput.value = password;
    });
  
    function generatePassword() {
      var length = 10; // Change the length of the generated password if desired
      var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"; // Characters to include in the password
      var password = "";
  
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
  
      return password;
    }
  });
  