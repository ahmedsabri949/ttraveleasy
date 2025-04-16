// Hotels Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Hotel search form
  const hotelSearchForm = document.getElementById("hotel-search-form")

  if (hotelSearchForm) {
    hotelSearchForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const destination = document.getElementById("destination").value
      const checkIn = document.getElementById("check-in").value
      const checkOut = document.getElementById("check-out").value
      const rooms = document.getElementById("rooms").value
      const adults = document.getElementById("adults").value
      const children = document.getElementById("children").value

      // Validate form
      if (!destination || !checkIn || !checkOut) {
        alert("Please fill in all required fields")
        return
      }

      // Check if check-out date is after check-in date
      const checkInDate = new Date(checkIn)
      const checkOutDate = new Date(checkOut)

      if (checkOutDate <= checkInDate) {
        alert("Check-out date must be after check-in date")
        return
      }

      // In a real application, this would search for hotels based on the criteria
      // For demo purposes, we'll just scroll to the results section
      document.querySelector(".hotel-results").scrollIntoView({ behavior: "smooth" })

      // You could also update the results based on the search criteria
      alert(`Searching for hotels in ${destination}`)
    })
  }

  // Price range slider
  const priceRange = document.getElementById("price-range")
  const priceValue = document.querySelector(".price-value")

  if (priceRange && priceValue) {
    priceRange.addEventListener("input", function () {
      priceValue.textContent = `$${this.value}`

      // Filter hotels based on price
      filterHotels()
    })
  }

  // Star rating filter
  const starFilter = document.getElementById("star-filter")

  if (starFilter) {
    starFilter.addEventListener("change", () => {
      filterHotels()
    })
  }

  // Property type filter
  const propertyFilter = document.getElementById("property-filter")

  if (propertyFilter) {
    propertyFilter.addEventListener("change", () => {
      filterHotels()
    })
  }

  // Function to filter hotels based on selected filters
  function filterHotels() {
    const maxPrice = priceRange ? Number.parseInt(priceRange.value) : 1000
    const minStars = starFilter ? Number.parseInt(starFilter.value) || 0 : 0
    const selectedProperty = propertyFilter ? propertyFilter.value : "all"

    const hotelCards = document.querySelectorAll(".hotel-card")

    hotelCards.forEach((card) => {
      // Get hotel details
      const price = Number.parseInt(card.querySelector(".price").textContent.replace("$", ""))
      const stars = card.querySelector(".stars").textContent.length // Count stars
      const propertyType = card.querySelector(".hotel-details h3").textContent.toLowerCase()

      // Check if hotel matches all filters
      const matchesPrice = price <= maxPrice
      const matchesStars = stars >= minStars
      const matchesProperty =
        selectedProperty === "all" ||
        (selectedProperty === "hotel" && propertyType.includes("hotel")) ||
        (selectedProperty === "resort" && propertyType.includes("resort")) ||
        (selectedProperty === "apartment" && propertyType.includes("suite")) ||
        (selectedProperty === "villa" && propertyType.includes("villa"))

      // Show or hide hotel card
      if (matchesPrice && matchesStars && matchesProperty) {
        card.style.display = "flex"
      } else {
        card.style.display = "none"
      }
    })
  }

  // Book now buttons
  const bookNowButtons = document.querySelectorAll(".book-now")

  bookNowButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const hotelCard = this.closest(".hotel-card")
      const hotelName = hotelCard.querySelector("h3").textContent
      const price = hotelCard.querySelector(".price").textContent

      alert(`You are about to book ${hotelName} for ${price} per night`)
      // In a real application, this would navigate to a booking page
    })
  })
})
