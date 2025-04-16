// Register Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form")

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault()

      let isValid = true

      // Get form values
      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      const confirmPassword = document.getElementById("confirmPassword").value
      const phone = document.getElementById("phone").value
      const birthdate = document.getElementById("birthdate").value

      // Validate first name
      const firstNameError = document.getElementById("firstName-error")
      if (firstName.trim() === "") {
        firstNameError.textContent = "First name is required"
        firstNameError.classList.add("visible")
        isValid = false
      } else if (firstName.length > 20) {
        firstNameError.textContent = "First name cannot exceed 20 characters"
        firstNameError.classList.add("visible")
        isValid = false
      } else {
        firstNameError.classList.remove("visible")
      }

      // Validate last name
      const lastNameError = document.getElementById("lastName-error")
      if (lastName.trim() === "") {
        lastNameError.textContent = "Last name is required"
        lastNameError.classList.add("visible")
        isValid = false
      } else if (lastName.length > 20) {
        lastNameError.textContent = "Last name cannot exceed 20 characters"
        lastNameError.classList.add("visible")
        isValid = false
      } else {
        lastNameError.classList.remove("visible")
      }

      // Validate email
      const emailError = document.getElementById("email-error")
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address"
        emailError.classList.add("visible")
        isValid = false
      } else {
        emailError.classList.remove("visible")
      }

      // Validate password
      const passwordError = document.getElementById("password-error")
      if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters"
        passwordError.classList.add("visible")
        isValid = false
      } else {
        passwordError.classList.remove("visible")
      }

      // Validate confirm password
      const confirmPasswordError = document.getElementById("confirmPassword-error")
      if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match"
        confirmPasswordError.classList.add("visible")
        isValid = false
      } else {
        confirmPasswordError.classList.remove("visible")
      }

      // Validate phone
      const phoneError = document.getElementById("phone-error")
      const phoneRegex = /^\d{8}$/
      if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone number must be 8 digits"
        phoneError.classList.add("visible")
        isValid = false
      } else {
        phoneError.classList.remove("visible")
      }

      // Validate birthdate
      const birthdateError = document.getElementById("birthdate-error")
      if (!birthdate) {
        birthdateError.textContent = "Date of birth is required"
        birthdateError.classList.add("visible")
        isValid = false
      } else {
        // Check if user is at least 18 years old
        const today = new Date()
        const birthdateDate = new Date(birthdate)
        const age = today.getFullYear() - birthdateDate.getFullYear()
        const monthDiff = today.getMonth() - birthdateDate.getMonth()

        if (
          age < 18 ||
          (age === 18 && monthDiff < 0) ||
          (age === 18 && monthDiff === 0 && today.getDate() < birthdateDate.getDate())
        ) {
          birthdateError.textContent = "You must be at least 18 years old"
          birthdateError.classList.add("visible")
          isValid = false
        } else {
          birthdateError.classList.remove("visible")
        }
      }

      // Validate reCAPTCHA
      const recaptchaError = document.getElementById("recaptcha-error")
      // In a real application, you would check if reCAPTCHA was completed
      // For demo purposes, we'll skip this validation

      if (isValid) {
        // In a real application, this would send the registration data to the server
        // For demo purposes, we'll simulate a successful registration
        alert("Registration successful! You can now log in.")
        window.location.href = "login.html"
      }
    })
  }

  // Social registration buttons
  const googleBtn = document.querySelector(".google-btn")
  const facebookBtn = document.querySelector(".facebook-btn")

  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      alert("Google registration functionality would be implemented here")
    })
  }

  if (facebookBtn) {
    facebookBtn.addEventListener("click", () => {
      alert("Facebook registration functionality would be implemented here")
    })
  }
})
