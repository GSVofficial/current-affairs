// Navigation functionality
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove active class from all items
    document.querySelectorAll(".nav-item").forEach((nav) => {
      nav.classList.remove("active")
    })

    // Add active class to clicked item
    this.classList.add("active")

    const page = this.getAttribute("data-page")
    console.log("[v0] Navigating to:", page)

    // Add your navigation logic here
    // Example: window.location.href = `/${page}`;
  })
})

// Card click handlers
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", function () {
    const title = this.querySelector(".card-title")?.textContent || "Card"
    console.log("[v0] Card clicked:", title)
    // Add your card click logic here
  })
})

// Category click handlers
document.querySelectorAll(".category-item").forEach((category) => {
  category.addEventListener("click", function () {
    const name = this.querySelector(".category-name")?.textContent || "Category"
    console.log("[v0] Category clicked:", name)
    // Add your category click logic here
  })
})

// Button click handlers
document.querySelectorAll(".card-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation()
    const text = this.textContent
    console.log("[v0] Button clicked:", text)
    // Add your button click logic here
  })
})

// Search functionality
document.querySelector(".search-btn")?.addEventListener("click", () => {
  console.log("[v0] Search clicked")
  // Add your search logic here
})

// Menu functionality
document.querySelector(".menu-btn")?.addEventListener("click", () => {
  console.log("[v0] Menu clicked")
  // Add your menu logic here
})

// Promo banner button
document.querySelector(".promo-btn")?.addEventListener("click", () => {
  console.log("[v0] Promo button clicked")
  // Add your promo logic here
})
