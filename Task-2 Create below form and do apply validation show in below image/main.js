        document
        .getElementById("signupForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          let isValid = true;

          // Full Name validation
          const fullName = document.getElementById("fullName").value.trim();
          if (fullName === "") {
            document.getElementById("fullNameError").textContent =
              "Please enter your full name";
            isValid = false;
          } else {
            document.getElementById("fullNameError").textContent = "";
          }

          // Email validation
          const email = document.getElementById("email").value.trim();
          const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          if (email === "") {
            document.getElementById("emailError").textContent =
              "Please enter your email";
            isValid = false;
          } else if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent =
              "Please enter a valid email";
            isValid = false;
          } else {
            document.getElementById("emailError").textContent = "";
          }

          // Password validation
          const password = document.getElementById("password").value.trim();
          if (password === "") {
            document.getElementById("passwordError").textContent =
              "Please enter your password";
            isValid = false;
          } else {
            document.getElementById("passwordError").textContent = "";
          }

          // Birth Date validation
          const birthDate = document.getElementById("birthDate").value.trim();
          if (birthDate === "") {
            document.getElementById("birthDateError").textContent =
              "Please select your date of birth";
            isValid = false;
          } else {
            document.getElementById("birthDateError").textContent = "";
          }

          // Gender validation
          const gender = document.getElementById("gender").value.trim();
          if (gender === "") {
            document.getElementById("genderError").textContent =
              "Please select your gender";
            isValid = false;
          } else {
            document.getElementById("genderError").textContent = "";
          }

          if (isValid) {
            alert("Form submitted successfully!");
            // You can submit the form or do further processing here
          }
        });