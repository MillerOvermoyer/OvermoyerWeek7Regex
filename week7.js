// JavaScript Document
var ptrnValidName = /^[\p{L}][\p{L}' .-]{0,49}$/u;
var ptrnValidEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,6}$/;
var ptrnValidPhone = /^\d{10}$/;

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.querySelector('input[type="button"][value="Submit"]');

    submitButton.addEventListener("click", function () {
        var strFName = document.getElementById("first-name").value.trim();
        var strLName = document.getElementById("last-name").value.trim();
        var strEmail = document.getElementById("email").value.trim();
        var strPhone = document.getElementById("phone").value.trim();

        var firstNameError = document.getElementById("fn-error");
        var lastNameError = document.getElementById("ln-error");
        var emailError = document.getElementById("email-error");
        var phoneError = document.getElementById("phone-error");
        var confirmation = document.getElementById("confirmation");
        var info = document.getElementById("info");

        firstNameError.textContent = "";
        lastNameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        confirmation.style.display = "none";

        var isValid = true;

        if (strFName === "") {
            firstNameError.textContent = "First name is required.";
            isValid = false;
        } else if (!ptrnValidName.test(strFName)) {
            firstNameError.textContent = "Enter a valid name.";
            isValid = false;
        }

        if (strLName === "") {
            lastNameError.textContent = "Last name is required.";
            isValid = false;
        } else if (!ptrnValidName.test(strLName)) {
            lastNameError.textContent = "Enter a valid name.";
            isValid = false;
        }

        if (strEmail === "") {
            emailError.textContent = "Email is required.";
            isValid = false;
        } else if (!ptrnValidEmail.test(strEmail)) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        }

        if (strPhone === "") {
            phoneError.textContent = "Phone number is required.";
            isValid = false;
        } else if (!ptrnValidPhone.test(strPhone)) {
            phoneError.textContent = "Enter a 10-digit phone number. Ex: xxxxxxxxxx";
            isValid = false;
        }

        if (isValid) {
            info.replaceChildren();

            var nameLabel = document.createElement("strong");
            nameLabel.textContent = "Name:";
            info.append(nameLabel, " " + strFName + " " + strLName, document.createElement("br"));

            var emailLabel = document.createElement("strong");
            emailLabel.textContent = "Email:";
            info.append(emailLabel, " " + strEmail, document.createElement("br"));

            var phoneLabel = document.createElement("strong");
            phoneLabel.textContent = "Phone:";
            var formattedPhone = strPhone.substring(0, 3) + "-" +
                strPhone.substring(3, 6) + "-" +
                strPhone.substring(6);
            info.append(phoneLabel, " " + formattedPhone);

            confirmation.style.display = "block";
        }
    });
});