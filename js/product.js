document.addEventListener("DOMContentLoaded", function () {
  // Product Image Gallery
  const mainImage = document.getElementById("mainImage");
  const currentImage = document.getElementById("currentImage");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const lens = document.getElementById("lens");
  const zoomResult = document.getElementById("zoomResult");

  if (mainImage && thumbnails.length > 0) {
    // Thumbnail click handler
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Update active thumbnail
        thumbnails.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // Update main image
        const imgSrc = this.getAttribute("data-img");
        currentImage.src = imgSrc;

        // Reset zoom
        if (zoomResult) {
          zoomResult.style.backgroundImage = `url('${imgSrc}')`;
        }
      });
    });

    // Image zoom functionality
    if (lens && zoomResult && currentImage) {
      // Initialize zoom
      let cx = 2; // Zoom ratio

      // Set background properties for the result div
      zoomResult.style.backgroundImage = `url('${currentImage.src}')`;
      zoomResult.style.backgroundSize =
        currentImage.width * cx + "px " + currentImage.height * cx + "px";

      // Execute zoom function when user hovers over the image
      mainImage.addEventListener("mouseenter", function (e) {
        lens.style.display = "block";
        zoomResult.style.display = "block";
      });

      mainImage.addEventListener("mouseleave", function (e) {
        lens.style.display = "none";
        zoomResult.style.display = "none";
      });

      mainImage.addEventListener("mousemove", function (e) {
        // Prevent default behavior
        e.preventDefault();

        // Get cursor position
        let pos = getCursorPos(e);
        let x = pos.x;
        let y = pos.y;

        // Prevent lens from going outside the image
        if (x > mainImage.width - lens.offsetWidth / 2) {
          x = mainImage.width - lens.offsetWidth;
        }
        if (x < lens.offsetWidth / 2) {
          x = 0;
        }
        if (y > mainImage.height - lens.offsetHeight / 2) {
          y = mainImage.height - lens.offsetHeight;
        }
        if (y < lens.offsetHeight / 2) {
          y = 0;
        }

        // Set lens position
        lens.style.left = x + "px";
        lens.style.top = y + "px";

        // Set zoom result background position
        zoomResult.style.backgroundPosition =
          "-" + x * cx + "px -" + y * cx + "px";
      });

      // Helper function to get cursor position
      function getCursorPos(e) {
        let rect = mainImage.getBoundingClientRect();
        let x = e.pageX - rect.left - window.pageXOffset;
        let y = e.pageY - rect.top - window.pageYOffset;
        return { x: x, y: y };
      }
    }
  }

  // Product Variants Selection
  const colorOptions = document.querySelectorAll(".color-option");
  const storageOptions = document.querySelectorAll(".storage-option");
  const selectedColor = document.getElementById("selectedColor");
  const selectedStorage = document.getElementById("selectedStorage");

  if (colorOptions.length > 0 && selectedColor) {
    colorOptions.forEach((option) => {
      option.addEventListener("click", function () {
        // Update active color
        colorOptions.forEach((o) => o.classList.remove("active"));
        this.classList.add("active");

        // Update selected color text
        selectedColor.textContent = this.getAttribute("data-color");
      });
    });
  }

  if (storageOptions.length > 0 && selectedStorage) {
    storageOptions.forEach((option) => {
      option.addEventListener("click", function () {
        // Update active storage
        storageOptions.forEach((o) => o.classList.remove("active"));
        this.classList.add("active");

        // Update selected storage text
        selectedStorage.textContent = this.getAttribute("data-storage");

        // Update price based on storage (example)
        const currentPrice = document.querySelector(
          ".product-price-detail .current-price"
        );
        const oldPrice = document.querySelector(
          ".product-price-detail .old-price"
        );

        if (currentPrice && oldPrice) {
          const storage = this.getAttribute("data-storage");

          if (storage === "128GB") {
            currentPrice.textContent = "$599.99";
            oldPrice.textContent = "$699.99";
          } else if (storage === "256GB") {
            currentPrice.textContent = "$699.99";
            oldPrice.textContent = "$799.99";
          } else if (storage === "512GB") {
            currentPrice.textContent = "$799.99";
            oldPrice.textContent = "$899.99";
          }
        }
      });
    });
  }

  // Quantity Selector
  const quantityInput = document.getElementById("quantity");
  const minusBtn = document.querySelector(".qty-btn.minus");
  const plusBtn = document.querySelector(".qty-btn.plus");

  if (quantityInput && minusBtn && plusBtn) {
    minusBtn.addEventListener("click", function () {
      let value = parseInt(quantityInput.value);
      if (value > 1) {
        quantityInput.value = value - 1;
      }
    });

    plusBtn.addEventListener("click", function () {
      let value = parseInt(quantityInput.value);
      if (value < 10) {
        quantityInput.value = value + 1;
      }
    });

    quantityInput.addEventListener("change", function () {
      let value = parseInt(this.value);
      if (value < 1) {
        this.value = 1;
      } else if (value > 10) {
        this.value = 10;
      }
    });
  }

  // Product Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Update active tab button
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Show corresponding tab panel
        const tabId = this.getAttribute("data-tab");
        tabPanels.forEach((panel) => {
          panel.classList.remove("active");
          if (panel.id === tabId) {
            panel.classList.add("active");
          }
        });
      });
    });
  }

  // Review Form
  const writeReviewBtn = document.getElementById("writeReviewBtn");
  const reviewForm = document.getElementById("reviewForm");
  const cancelReview = document.getElementById("cancelReview");
  const ratingStars = document.querySelectorAll(".rating-select i");

  if (writeReviewBtn && reviewForm) {
    writeReviewBtn.addEventListener("click", function () {
      reviewForm.style.display = "block";
      this.style.display = "none";
    });

    if (cancelReview) {
      cancelReview.addEventListener("click", function () {
        reviewForm.style.display = "none";
        writeReviewBtn.style.display = "block";

        // Reset form
        document
          .querySelector(".rating-select")
          .querySelectorAll("i")
          .forEach((star) => {
            star.className = "far fa-star";
          });
        reviewForm.reset();
      });
    }

    if (ratingStars.length > 0) {
      ratingStars.forEach((star) => {
        star.addEventListener("mouseover", function () {
          const rating = parseInt(this.getAttribute("data-rating"));

          // Update stars on hover
          ratingStars.forEach((s, index) => {
            if (index < rating) {
              s.className = "fas fa-star";
            } else {
              s.className = "far fa-star";
            }
          });
        });

        star.addEventListener("click", function () {
          const rating = parseInt(this.getAttribute("data-rating"));

          // Set rating value
          ratingStars.forEach((s, index) => {
            if (index < rating) {
              s.className = "fas fa-star";
            } else {
              s.className = "far fa-star";
            }
          });
        });
      });

      // Reset stars when mouse leaves the rating container
      document
        .querySelector(".rating-select")
        .addEventListener("mouseleave", function () {
          // Find selected rating
          const selectedRating =
            Array.from(ratingStars).findIndex((star) =>
              star.className.includes("fas")
            ) + 1;

          if (selectedRating > 0) {
            // Keep selected rating
            ratingStars.forEach((s, index) => {
              if (index < selectedRating) {
                s.className = "fas fa-star";
              } else {
                s.className = "far fa-star";
              }
            });
          } else {
            // Reset all stars
            ratingStars.forEach((s) => {
              s.className = "far fa-star";
            });
          }
        });
    }
  }

  // Add to Cart Button
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  const cartCount = document.querySelector(".cart-count");

  if (addToCartBtn && cartCount) {
    addToCartBtn.addEventListener("click", function () {
      // Get quantity
      const quantity = parseInt(document.getElementById("quantity").value) || 1;

      // Update cart count
      let count = parseInt(cartCount.textContent) || 0;
      count += quantity;
      cartCount.textContent = count;

      // Show notification
      const notification = document.createElement("div");
      notification.className = "cart-notification";
      notification.innerHTML = `<i class="fas fa-check-circle"></i> ${quantity} producto(s) añadido(s) al carrito`;
      document.body.appendChild(notification);

      // Add styles for notification
      notification.style.position = "fixed";
      notification.style.bottom = "20px";
      notification.style.right = "20px";
      notification.style.backgroundColor = "var(--success-color)";
      notification.style.color = "white";
      notification.style.padding = "10px 20px";
      notification.style.borderRadius = "var(--border-radius)";
      notification.style.boxShadow = "var(--box-shadow)";
      notification.style.zIndex = "1000";
      notification.style.display = "flex";
      notification.style.alignItems = "center";
      notification.style.gap = "10px";

      // Remove notification after 3 seconds
      setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transition = "opacity 0.5s ease";
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 500);
      }, 3000);
    });
  }
});
