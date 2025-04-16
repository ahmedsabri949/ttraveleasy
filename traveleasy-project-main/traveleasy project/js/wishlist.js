// Wishlist Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Get wishlist from localStorage
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

  // Get DOM elements
  const flightsSection = document.getElementById("flights-section")
  const hotelsSection = document.getElementById("hotels-section")
  const taxisSection = document.getElementById("taxis-section")

  const flightsContainer = document.getElementById("flights-container")
  const hotelsContainer = document.getElementById("hotels-container")
  const taxisContainer = document.getElementById("taxis-container")

  // Filter wishlist by type
  const flights = wishlist.filter((item) => item.type === "flight")
  const hotels = wishlist.filter((item) => item.type === "hotel")
  const taxis = wishlist.filter((item) => item.type === "taxi")

  // Update tab counters
  document.getElementById("flights-count").textContent = flights.length
  document.getElementById("hotels-count").textContent = hotels.length
  document.getElementById("taxis-count").textContent = taxis.length
  document.getElementById("all-count").textContent = wishlist.length

  // Populate wishlist sections
  if (wishlist.length === 0) {
    // Show empty state for all sections
    document.getElementById("empty-wishlist").style.display = "block"
    document.getElementById("wishlist-items").style.display = "none"
  } else {
    document.getElementById("empty-wishlist").style.display = "none"
    document.getElementById("wishlist-items").style.display = "block"

    // Populate flights
    if (flights.length === 0) {
      flightsContainer.innerHTML =
        '<div class="wishlist-empty"><h3>No flights in your wishlist</h3><p>Browse our flight deals and add your favorites to the wishlist.</p><a href="flights.html" class="browse-btn">Browse Flights</a></div>'
    } else {
      flightsContainer.innerHTML = ""
      flights.forEach((flight) => {
        // In a real application, you would fetch flight details from the server
        // For demo purposes, we'll create a placeholder item
        const flightItem = createWishlistItem("flight", flight.id)
        flightsContainer.appendChild(flightItem)
      })
    }

    // Populate hotels
    if (hotels.length === 0) {
      hotelsContainer.innerHTML =
        '<div class="wishlist-empty"><h3>No hotels in your wishlist</h3><p>Browse our hotel deals and add your favorites to the wishlist.</p><a href="hotels.html" class="browse-btn">Browse Hotels</a></div>'
    } else {
      hotelsContainer.innerHTML = ""
      hotels.forEach((hotel) => {
        // In a real application, you would fetch hotel details from the server
        // For demo purposes, we'll create a placeholder item
        const hotelItem = createWishlistItem("hotel", hotel.id)
        hotelsContainer.appendChild(hotelItem)
      })
    }

    // Populate taxis
    if (taxis.length === 0) {
      taxisContainer.innerHTML =
        '<div class="wishlist-empty"><h3>No taxi services in your wishlist</h3><p>Browse our taxi services and add your favorites to the wishlist.</p><a href="taxi.html" class="browse-btn">Browse Taxi Services</a></div>'
    } else {
      taxisContainer.innerHTML = ""
      taxis.forEach((taxi) => {
        // In a real application, you would fetch taxi details from the server
        // For demo purposes, we'll create a placeholder item
        const taxiItem = createWishlistItem("taxi", taxi.id)
        taxisContainer.appendChild(taxiItem)
      })
    }
  }

  // Function to create wishlist item
  function createWishlistItem(type, id) {
    const item = document.createElement("div")
    item.className = "wishlist-item"
    item.setAttribute("data-id", id)
    item.setAttribute("data-type", type)

    let title, info, price, image

    // Set placeholder data based on type
    if (type === "flight") {
      title = "Flight to Paris"
      info = "New York (JFK) to Paris (CDG) • Round Trip • Economy"
      price = "$450"
      image = "/placeholder.svg?height=200&width=300"
    } else if (type === "hotel") {
      title = "Grand Plaza Hotel"
      info = "New York City, USA • 4.8 ★★★★★"
      price = "$250 per night"
      image = "/placeholder.svg?height=200&width=300"
    } else {
      title = "Airport Transfer"
      info = "JFK Airport to Manhattan • Premium Sedan"
      price = "$60"
      image = "/placeholder.svg?height=200&width=300"
    }

    item.innerHTML = `
      <div class="item-image">
        <img src="${image}" alt="${title}">
      </div>
      <div class="item-details">
        <h3>${title}</h3>
        <div class="item-info">${info}</div>
        <div class="item-price">${price}</div>
        <div class="item-actions">
          <button class="remove-item" data-id="${id}" data-type="${type}">Remove</button>
          <button class="book-item">Book Now</button>
        </div>
      </div>
    `

    return item
  }

  // Tab switching
  const wishlistTabs = document.querySelectorAll(".wishlist-tab")
  const wishlistSections = document.querySelectorAll(".wishlist-section")

  wishlistTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and sections
      wishlistTabs.forEach((t) => t.classList.remove("active"))
      wishlistSections.forEach((s) => s.classList.remove("active"))

      // Add active class to clicked tab and corresponding section
      this.classList.add("active")
      const sectionId = this.getAttribute("data-section")
      document.getElementById(sectionId).classList.add("active")
    })
  })

  // Remove item from wishlist
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const id = e.target.getAttribute("data-id")
      const type = e.target.getAttribute("data-type")

      // Remove item from wishlist
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
      wishlist = wishlist.filter((item) => !(item.id === id && item.type === type))
      localStorage.setItem("wishlist", JSON.stringify(wishlist))

      // Remove item from DOM
      const wishlistItem = e.target.closest(".wishlist-item")
      if (wishlistItem) {
        wishlistItem.remove()
      }

      // Update counters
      const flights = wishlist.filter((item) => item.type === "flight")
      const hotels = wishlist.filter((item) => item.type === "hotel")
      const taxis = wishlist.filter((item) => item.type === "taxi")

      document.getElementById("flights-count").textContent = flights.length
      document.getElementById("hotels-count").textContent = hotels.length
      document.getElementById("taxis-count").textContent = taxis.length
      document.getElementById("all-count").textContent = wishlist.length

      // Show empty state if necessary
      if (wishlist.length === 0) {
        document.getElementById("empty-wishlist").style.display = "block"
        document.getElementById("wishlist-items").style.display = "none"
      }

      // Show section empty state if necessary
      if (type === "flight" && flights.length === 0) {
        flightsContainer.innerHTML =
          '<div class="wishlist-empty"><h3>No flights in your wishlist</h3><p>Browse our flight deals and add your favorites to the wishlist.</p><a href="flights.html" class="browse-btn">Browse Flights</a></div>'
      }

      if (type === "hotel" && hotels.length === 0) {
        hotelsContainer.innerHTML =
          '<div class="wishlist-empty"><h3>No hotels in your wishlist</h3><p>Browse our hotel deals and add your favorites to the wishlist.</p><a href="hotels.html" class="browse-btn">Browse Hotels</a></div>'
      }

      if (type === "taxi" && taxis.length === 0) {
        taxisContainer.innerHTML =
          '<div class="wishlist-empty"><h3>No taxi services in your wishlist</h3><p>Browse our taxi services and add your favorites to the wishlist.</p><a href="taxi.html" class="browse-btn">Browse Taxi Services</a></div>'
      }
    }
  })

  // Book item
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("book-item")) {
      const wishlistItem = e.target.closest(".wishlist-item")
      const id = wishlistItem.getAttribute("data-id")
      const type = wishlistItem.getAttribute("data-type")

      // In a real application, this would navigate to the booking page
      alert(`Booking ${type} with ID ${id}`)
    }
  })

  // Clear wishlist
  const clearWishlistBtn = document.getElementById("clear-wishlist")

  if (clearWishlistBtn) {
    clearWishlistBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your wishlist?")) {
        // Clear wishlist in localStorage
        localStorage.removeItem("wishlist")

        // Show empty state
        document.getElementById("empty-wishlist").style.display = "block"
        document.getElementById("wishlist-items").style.display = "none"

        // Update counters
        document.getElementById("flights-count").textContent = "0"
        document.getElementById("hotels-count").textContent = "0"
        document.getElementById("taxis-count").textContent = "0"
        document.getElementById("all-count").textContent = "0"
      }
    })
  }

  // Book all items
  const bookAllBtn = document.getElementById("book-all")

  if (bookAllBtn) {
    bookAllBtn.addEventListener("click", () => {
      if (wishlist.length === 0) {
        alert("Your wishlist is empty")
      } else {
        alert(`Booking all ${wishlist.length} items in your wishlist`)
        // In a real application, this would navigate to a multi-booking page
      }
    })
  }
})
