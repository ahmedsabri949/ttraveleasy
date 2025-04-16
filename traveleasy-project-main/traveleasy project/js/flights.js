// Flights Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Trip type selection
  const tripTypeRadios = document.querySelectorAll('input[name="trip-type"]')
  const returnDateGroup = document.querySelector(".return-date")

  tripTypeRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "one-way") {
        returnDateGroup.style.display = "none"
      } else {
        returnDateGroup.style.display = "block"
      }
    })
  })

  // Flight search form
  const flightSearchForm = document.getElementById("flight-search-form")

  if (flightSearchForm) {
    flightSearchForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const departure = document.getElementById("departure").value
      const destination = document.getElementById("destination").value
      const departureDate = document.getElementById("departure-date").value
      const returnDate = document.getElementById("return-date").value
      const passengers = document.getElementById("passengers").value
      const travelClass = document.getElementById("class").value

      // Validate form
      if (!departure || !destination || !departureDate) {
        alert("Please fill in all required fields")
        return
      }

      // In a real application, this would search for flights based on the criteria
      // For demo purposes, we'll just scroll to the results section
      document.querySelector(".flight-results").scrollIntoView({ behavior: "smooth" })

      // You could also update the results based on the search criteria
      alert(`Searching for flights from ${departure} to ${destination}`)
    })
  }

  // Price range slider
  const priceRange = document.getElementById("price-range")
  const priceValue = document.querySelector(".price-value")

  if (priceRange && priceValue) {
    priceRange.addEventListener("input", function () {
      priceValue.textContent = `$${this.value}`

      // Filter flights based on price
      filterFlights()
    })
  }

  // Airline filter
  const airlineFilter = document.getElementById("airline-filter")

  if (airlineFilter) {
    airlineFilter.addEventListener("change", () => {
      filterFlights()
    })
  }

  // Stops filter
  const stopsFilter = document.getElementById("stops-filter")

  if (stopsFilter) {
    stopsFilter.addEventListener("change", () => {
      filterFlights()
    })
  }

  // Function to filter flights based on selected filters
  function filterFlights() {
    const maxPrice = priceRange ? Number.parseInt(priceRange.value) : 2000
    const selectedAirline = airlineFilter ? airlineFilter.value : "all"
    const selectedStops = stopsFilter ? stopsFilter.value : "all"

    const flightCards = document.querySelectorAll(".flight-card")

    flightCards.forEach((card) => {
      // Get flight details
      const price = Number.parseInt(card.querySelector(".flight-price").textContent.replace("$", ""))
      const airline = card.querySelector(".airline span").textContent.toLowerCase()
      const stops = card.querySelector(".stops").textContent.toLowerCase()

      // Check if flight matches all filters
      const matchesPrice = price <= maxPrice
      const matchesAirline = selectedAirline === "all" || airline.includes(selectedAirline.toLowerCase())
      const matchesStops =
        selectedStops === "all" ||
        (selectedStops === "nonstop" && stops.includes("non-stop")) ||
        (selectedStops === "1-stop" && stops.includes("1 stop")) ||
        (selectedStops === "2-stops" && stops.includes("2"))

      // Show or hide flight card
      if (matchesPrice && matchesAirline && matchesStops) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  }

  // Book now buttons
  const bookNowButtons = document.querySelectorAll(".book-now")

  bookNowButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const flightCard = this.closest(".flight-card")
      const airline = flightCard.querySelector(".airline span").textContent
      const price = flightCard.querySelector(".flight-price").textContent

      alert(`You are about to book a flight with ${airline} for ${price}`)
      // In a real application, this would navigate to a booking page
    })
  })
})
