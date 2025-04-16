// Offers Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Countdown Timer Functionality
  const countdownElements = document.querySelectorAll(".countdown")

  countdownElements.forEach((countdown) => {
    const endDate = new Date(countdown.getAttribute("data-end"))

    // Update the countdown every second
    function updateCountdown() {
      const now = new Date()
      const difference = endDate - now

      if (difference <= 0) {
        countdown.innerHTML = "Offer Expired"
        return
      }

      // Calculate days, hours, minutes, seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      // Update the countdown display
      countdown.querySelector(".days").textContent = days
      countdown.querySelector(".hours").textContent = hours.toString().padStart(2, "0")
      countdown.querySelector(".minutes").textContent = minutes.toString().padStart(2, "0")
      countdown.querySelector(".seconds").textContent = seconds.toString().padStart(2, "0")
    }

    // Initial call
    updateCountdown()

    // Update every second
    setInterval(updateCountdown, 1000)
  })

  // Filter Tabs Functionality
  const filterTabs = document.querySelectorAll(".filter-tab")
  const dealItems = document.querySelectorAll(".deal-item")

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      filterTabs.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked tab
      tab.classList.add("active")

      const filter = tab.getAttribute("data-filter")

      // Show/hide deal items based on filter
      dealItems.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block"
        } else {
          item.style.display = "none"
        }
      })
    })
  })

  // Add to Wishlist Functionality
  const viewDealButtons = document.querySelectorAll(".view-deal-btn")
  const bookNowButtons = document.querySelectorAll(".book-now-btn")

  viewDealButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // In a real application, this would navigate to the deal details page
      alert("Viewing deal details...")
    })
  })

  bookNowButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // In a real application, this would navigate to the booking page
      alert("Proceeding to booking...")
    })
  })

  // Newsletter Subscription
  const newsletterForm = document.querySelector(".newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      // In a real application, this would send the email to the server
      alert(`Thank you for subscribing with ${email}! You'll receive our exclusive deals soon.`)
      this.reset()
    })
  }
})
