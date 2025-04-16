// Common JavaScript for all pages

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector("nav")

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      nav.classList.toggle("active")
      this.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      nav &&
      nav.classList.contains("active") &&
      !event.target.closest("nav") &&
      !event.target.closest(".mobile-menu-btn")
    ) {
      nav.classList.remove("active")
      if (mobileMenuBtn) {
        mobileMenuBtn.classList.remove("active")
      }
    }
  })

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split("/").pop()
  const navLinks = document.querySelectorAll("nav a")

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href")
    if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
      link.classList.add("active")
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      if (targetId !== "#") {
        e.preventDefault()
        const target = document.querySelector(targetId)
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Add to wishlist functionality
  const wishlistButtons = document.querySelectorAll(".add-to-wishlist")

  wishlistButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemId =
        this.getAttribute("data-flight-id") || this.getAttribute("data-hotel-id") || this.getAttribute("data-taxi-id")
      const itemType = this.getAttribute("data-flight-id")
        ? "flight"
        : this.getAttribute("data-hotel-id")
          ? "hotel"
          : "taxi"

      // Get existing wishlist from localStorage or initialize empty array
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

      // Check if item is already in wishlist
      const existingItem = wishlist.find((item) => item.id === itemId && item.type === itemType)

      if (existingItem) {
        alert("This item is already in your wishlist!")
      } else {
        // Add item to wishlist
        wishlist.push({
          id: itemId,
          type: itemType,
          dateAdded: new Date().toISOString(),
        })

        // Save updated wishlist to localStorage
        localStorage.setItem("wishlist", JSON.stringify(wishlist))

        alert("Item added to your wishlist!")
      }
    })
  })

  // Form validation for all forms
  const forms = document.querySelectorAll("form")

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      let isValid = true

      // Validate name fields (max 20 characters)
      const nameFields = form.querySelectorAll('input[name="firstName"], input[name="lastName"]')
      nameFields.forEach((field) => {
        const errorElement = document.getElementById(`${field.id}-error`)
        if (field.value.length > 20) {
          isValid = false
          if (errorElement) {
            errorElement.textContent = "Name cannot exceed 20 characters"
            errorElement.classList.add("visible")
          }
        } else if (errorElement) {
          errorElement.classList.remove("visible")
        }
      })

      // Validate phone number (must be 8 digits)
      const phoneField = form.querySelector('input[name="phone"]')
      if (phoneField) {
        const phoneError = document.getElementById("phone-error")
        const phoneRegex = /^\d{8}$/
        if (!phoneRegex.test(phoneField.value)) {
          isValid = false
          if (phoneError) {
            phoneError.textContent = "Phone number must be 8 digits"
            phoneError.classList.add("visible")
          }
        } else if (phoneError) {
          phoneError.classList.remove("visible")
        }
      }

      // Prevent form submission if validation fails
      if (!isValid) {
        e.preventDefault()
      }
    })
  })
})
