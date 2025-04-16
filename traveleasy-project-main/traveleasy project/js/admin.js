// Admin Dashboard JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Navigation Functionality
  const navLinks = document.querySelectorAll(".admin-nav a[data-section]")
  const sections = document.querySelectorAll(".admin-section")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all links and sections
      navLinks.forEach((l) => l.classList.remove("active"))
      sections.forEach((s) => s.classList.remove("active"))

      // Add active class to clicked link
      this.classList.add("active")

      // Show corresponding section
      const sectionId = this.getAttribute("data-section") + "-section"
      document.getElementById(sectionId).classList.add("active")
    })
  })

  // Logout Functionality
  const logoutBtn = document.getElementById("logout-btn")

  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault()

      if (confirm("Are you sure you want to logout?")) {
        // In a real application, this would perform a logout action
        window.location.href = "login.html"
      }
    })
  }

  // Modal Functionality
  const addUserBtn = document.getElementById("add-user-btn")
  const addOfferBtn = document.getElementById("add-offer-btn")
  const addFlightBtn = document.getElementById("add-flight-btn")
  const addHotelBtn = document.getElementById("add-hotel-btn")
  const addTaxiBtn = document.getElementById("add-taxi-btn")

  const userModal = document.getElementById("add-user-modal")
  const offerModal = document.getElementById("add-offer-modal")

  const closeModalBtns = document.querySelectorAll(".close-modal, .cancel-btn")

  // Open modals
  if (addUserBtn && userModal) {
    addUserBtn.addEventListener("click", () => {
      userModal.style.display = "block"
    })
  }

  if (addOfferBtn && offerModal) {
    addOfferBtn.addEventListener("click", () => {
      offerModal.style.display = "block"
    })
  }

  // Close modals
  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modal = this.closest(".modal")
      if (modal) {
        modal.style.display = "none"
      }
    })
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none"
    }
  })

  // Form Submissions
  const addUserForm = document.getElementById("add-user-form")
  const addOfferForm = document.getElementById("add-offer-form")

  if (addUserForm) {
    addUserForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // In a real application, this would send the form data to the server
      alert("User added successfully!")
      userModal.style.display = "none"
      this.reset()
    })
  }

  if (addOfferForm) {
    addOfferForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // In a real application, this would send the form data to the server
      alert("Offer added successfully!")
      offerModal.style.display = "none"
      this.reset()
    })
  }

  // Table Actions
  const editButtons = document.querySelectorAll(".edit-btn")
  const deleteButtons = document.querySelectorAll(".delete-btn")

  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const row = this.closest("tr")
      const id = row.cells[0].textContent

      // In a real application, this would open an edit form with the item's data
      alert(`Editing item with ID: ${id}`)
    })
  })

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const row = this.closest("tr")
      const id = row.cells[0].textContent

      if (confirm(`Are you sure you want to delete item with ID: ${id}?`)) {
        // In a real application, this would send a delete request to the server
        row.remove()
        alert(`Item with ID: ${id} has been deleted.`)
      }
    })
  })

  // Pagination
  const prevPageBtn = document.querySelector(".prev-page")
  const nextPageBtn = document.querySelector(".next-page")
  const pageButtons = document.querySelectorAll(".page-numbers button")

  if (pageButtons.length > 0) {
    pageButtons.forEach((button) => {
      button.addEventListener("click", function () {
        pageButtons.forEach((btn) => btn.classList.remove("active"))
        this.classList.add("active")

        // In a real application, this would load the corresponding page of data
      })
    })
  }

  if (prevPageBtn) {
    prevPageBtn.addEventListener("click", () => {
      const activePage = document.querySelector(".page-numbers button.active")
      if (activePage && activePage.previousElementSibling && activePage.previousElementSibling.tagName === "BUTTON") {
        activePage.previousElementSibling.click()
      }
    })
  }

  if (nextPageBtn) {
    nextPageBtn.addEventListener("click", () => {
      const activePage = document.querySelector(".page-numbers button.active")
      if (activePage && activePage.nextElementSibling && activePage.nextElementSibling.tagName === "BUTTON") {
        activePage.nextElementSibling.click()
      }
    })
  }

  // Initialize charts (placeholder)
  function initCharts() {
    // In a real application, this would initialize charts using a library like Chart.js
    console.log("Charts initialized")
  }

  // Call chart initialization if we're on the dashboard
  if (document.getElementById("dashboard-section").classList.contains("active")) {
    initCharts()
  }
})
