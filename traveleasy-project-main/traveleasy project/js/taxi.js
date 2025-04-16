// Taxi Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button and corresponding content
      this.classList.add("active")
      const tabId = this.getAttribute("data-tab")
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })

  // Rideshare pickup time toggle
  const pickupTimeRadios = document.querySelectorAll('input[name="rs-pickup-time"]')
  const scheduleTimeFields = document.querySelectorAll(".schedule-time")

  pickupTimeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "schedule") {
        scheduleTimeFields.forEach((field) => field.classList.remove("hidden"))
      } else {
        scheduleTimeFields.forEach((field) => field.classList.add("hidden"))
      }
    })
  })

  // Taxi booking form
  const taxiBookingForm = document.getElementById("taxi-booking-form")

  if (taxiBookingForm) {
    taxiBookingForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form values
      const pickupLocation = document.getElementById("pickup-location").value
      const dropoffLocation = document.getElementById("dropoff-location").value
      const pickupDate = document.getElementById("pickup-date").value
      const pickupTime = document.getElementById("pickup-time").value

      // Validate form
      if (!pickupLocation || !dropoffLocation || !pickupDate || !pickupTime) {
        alert("Please fill in all required fields")
        return
      }

      // In a real application, this would book a taxi based on the criteria
      // For demo purposes, we'll just show a confirmation message
      alert(`Your taxi has been booked from ${pickupLocation} to ${dropoffLocation}`)

      // Update map (in a real application)
      updateMap(pickupLocation, dropoffLocation)

      // Reset form
      this.reset()
    })
  }

  // Rideshare booking form
  const rideshareBookingForm = document.getElementById("rideshare-booking-form")

  if (rideshareBookingForm) {
    rideshareBookingForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form values
      const pickupLocation = document.getElementById("rs-pickup-location").value
      const dropoffLocation = document.getElementById("rs-dropoff-location").value
      const pickupType = document.querySelector('input[name="rs-pickup-time"]:checked').value

      // Validate form
      if (!pickupLocation || !dropoffLocation) {
        alert("Please fill in all required fields")
        return
      }

      // Additional validation for scheduled rides
      if (pickupType === "schedule") {
        const pickupDate = document.getElementById("rs-pickup-date").value
        const pickupTime = document.getElementById("rs-pickup-time").value

        if (!pickupDate || !pickupTime) {
          alert("Please select a pickup date and time")
          return
        }
      }

      // In a real application, this would book a rideshare based on the criteria
      // For demo purposes, we'll just show a confirmation message
      alert(`Your rideshare has been requested from ${pickupLocation} to ${dropoffLocation}`)

      // Update map (in a real application)
      updateMap(pickupLocation, dropoffLocation)

      // Reset form
      this.reset()
      // Reset pickup time radio to "now"
      document.querySelector('input[value="now"]').checked = true
      scheduleTimeFields.forEach((field) => field.classList.add("hidden"))
    })
  }

  // Airport transfer form
  const airportTransferForm = document.getElementById("airport-transfer-form")

  if (airportTransferForm) {
    airportTransferForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form values
      const transferType = document.getElementById("transfer-type").value
      const airport = document.getElementById("airport").value
      const hotel = document.getElementById("hotel").value
      const transferDate = document.getElementById("transfer-date").value
      const transferTime = document.getElementById("transfer-time").value

      // Validate form
      if (!airport || !hotel || !transferDate || !transferTime) {
        alert("Please fill in all required fields")
        return
      }

      // In a real application, this would book an airport transfer based on the criteria
      // For demo purposes, we'll just show a confirmation message
      const fromTo = transferType === "airport-to-hotel" ? `from ${airport} to ${hotel}` : `from ${hotel} to ${airport}`

      alert(`Your airport transfer has been booked ${fromTo}`)

      // Update map (in a real application)
      updateMap(airport, hotel)

      // Reset form
      this.reset()
    })
  }

  // Function to update map (placeholder)
  function updateMap(origin, destination) {
    // In a real application, this would update the map with the route
    // For demo purposes, we'll just update the overlay text
    const mapOverlay = document.querySelector(".map-overlay")

    if (mapOverlay) {
      mapOverlay.textContent = `Route from ${origin} to ${destination}`
    }
  }
})
