// Login Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form")

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const username = document.getElementById("username").value
      const password = document.getElementById("password").value

      // Validate username
      const usernameError = document.getElementById("username-error")
      if (username.trim() === "") {
        usernameError.textContent = "Username is required"
        usernameError.classList.add("visible")
        return
      } else {
        usernameError.classList.remove("visible")
      }

      // Validate password
      const passwordError = document.getElementById("password-error")
      if (password.trim() === "") {
        passwordError.textContent = "Password is required"
        passwordError.classList.add("visible")
        return
      } else {
        passwordError.classList.remove("visible")
      }

      // In a real application, this would send the login data to the server
      // For demo purposes, we'll simulate a successful login

      // Store login state in localStorage
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("username", username)

      // Redirect to home page
      window.location.href = "index.html"
    })
  }

  // Social login buttons
  const googleBtn = document.querySelector(".google-btn")
  const facebookBtn = document.querySelector(".facebook-btn")

  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      alert("Google login functionality would be implemented here")
    })
  }

  if (facebookBtn) {
    facebookBtn.addEventListener("click", () => {
      alert("Facebook login functionality would be implemented here")
    })
  }

  // Forgot password link
  const forgotPasswordLink = document.querySelector(".forgot-password")

  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Password reset functionality would be implemented here")
    })
  }
})
