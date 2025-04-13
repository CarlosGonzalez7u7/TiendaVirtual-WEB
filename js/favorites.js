document.addEventListener("DOMContentLoaded", function () {
  // Elementos del DOM
  const favoritesGrid = document.getElementById("favoritesGrid");
  const emptyFavorites = document.getElementById("emptyFavorites");
  const favoritesContainer = document.getElementById("favoritesContainer");
  const favoritesCount = document.getElementById("favoritesCount");
  const favoritesCountInfo = document.getElementById("favoritesCountInfo");
  const clearFavoritesBtn = document.getElementById("clearFavorites");

  // Productos (simulando una base de datos)
  const products = [
    {
      id: 1,
      name: "Amazon Echo Dot (4ª generación)",
      category: "smart-speakers",
      categoryName: "Altavoces Inteligentes",
      price: 39.99,
      oldPrice: 59.99,
      rating: 4.7,
      reviewCount: 12543,
      image: "https://m.media-amazon.com/images/I/61MbLLagiVL._AC_SL1000_.jpg",
      isNew: false,
      discount: 33,
      stock: "in-stock",
    },
    {
      id: 2,
      name: "Patinete Eléctrico Xiaomi Pro 2",
      category: "mobility",
      categoryName: "Movilidad Eléctrica",
      price: 399.99,
      oldPrice: 499.99,
      rating: 4.5,
      reviewCount: 856,
      image:
        "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/specs01.png",
      isNew: false,
      discount: 20,
      stock: "in-stock",
    },
    {
      id: 4,
      name: "TV Box Android 11 4K",
      category: "tv",
      categoryName: "TV y Accesorios",
      price: 49.99,
      oldPrice: 79.99,
      rating: 4.2,
      reviewCount: 532,
      image: "https://m.media-amazon.com/images/I/61dwRNiAhCL._AC_SL1500_.jpg",
      isNew: false,
      discount: 38,
      stock: "in-stock",
    },
    {
      id: 5,
      name: "Auriculares Sony WH-1000XM4",
      category: "audio",
      categoryName: "Audio",
      price: 279.99,
      oldPrice: 379.99,
      rating: 4.8,
      reviewCount: 2156,
      image:
        "https://www.sony.es/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      isNew: false,
      discount: 26,
      stock: "in-stock",
    },
    {
      id: 6,
      name: "Google Nest Mini",
      category: "smart-speakers",
      categoryName: "Altavoces Inteligentes",
      price: 29.99,
      oldPrice: 49.99,
      rating: 4.5,
      reviewCount: 987,
      image:
        "https://lh3.googleusercontent.com/vNwMcxRkCzpYTX3Hc-QyHtHYcR1CQFVG9iyA9TsyY3MjQrH0nHHzxwM9tGZLKPmZ_jSAKVd2rLHNPw1UkPEMuJyy0lhMhLmtgA=w1000-rw",
      isNew: false,
      discount: 40,
      stock: "in-stock",
    },
    {
      id: 9,
      name: 'Smart TV Samsung 55" 4K',
      category: "tv",
      categoryName: "TV y Accesorios",
      price: 499.99,
      oldPrice: 699.99,
      rating: 4.7,
      reviewCount: 1243,
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/es/ue55cu7175uxxc/gallery/es-crystal-uhd-cu7000-ue55cu7175uxxc-536856066?$650_519_PNG$",
      isNew: false,
      discount: 29,
      stock: "in-stock",
    },
    {
      id: 10,
      name: "Bose QuietComfort Earbuds",
      category: "audio",
      categoryName: "Audio",
      price: 199.99,
      oldPrice: 279.99,
      rating: 4.6,
      reviewCount: 876,
      image:
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/product_silo_images/QCE_PDP_Ecom-Gallery-B03.png/jcr:content/renditions/cq5dam.web.320.320.png",
      isNew: false,
      discount: 29,
      stock: "in-stock",
    },
    {
      id: 12,
      name: "Hoverboard con Bluetooth",
      category: "mobility",
      categoryName: "Movilidad Eléctrica",
      price: 149.99,
      oldPrice: 249.99,
      rating: 4.3,
      reviewCount: 432,
      image: "https://m.media-amazon.com/images/I/71JbRLnJnNL._AC_SL1500_.jpg",
      isNew: false,
      discount: 40,
      stock: "low-stock",
    },
  ];

  // Función para obtener los favoritos del localStorage
  function getFavorites() {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  }

  // Función para guardar favoritos en localStorage
  function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  // Función para actualizar el contador de favoritos
  function updateFavoritesCount() {
    const favorites = getFavorites();
    favoritesCount.textContent = favorites.length;
    favoritesCountInfo.textContent = favorites.length;
  }

  // Función para mostrar u ocultar el estado vacío
  function toggleEmptyState() {
    const favorites = getFavorites();
    if (favorites.length === 0) {
      emptyFavorites.style.display = "block";
      favoritesContainer.style.display = "none";
    } else {
      emptyFavorites.style.display = "none";
      favoritesContainer.style.display = "block";
    }
  }

  // Función para renderizar los productos favoritos
  function renderFavorites() {
    const favorites = getFavorites();
    favoritesGrid.innerHTML = "";

    favorites.forEach((favoriteId) => {
      const product = products.find((p) => p.id === parseInt(favoriteId));
      if (!product) return;

      // Crear elementos para las estrellas de valoración
      let starsHTML = "";
      const fullStars = Math.floor(product.rating);
      const halfStar = product.rating % 1 >= 0.5;

      for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
          starsHTML += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && halfStar) {
          starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
          starsHTML += '<i class="far fa-star"></i>';
        }
      }

      // Crear el HTML de la tarjeta de producto favorito
      const favoriteCard = document.createElement("div");
      favoriteCard.className = "favorite-card";
      favoriteCard.innerHTML = `
                <div class="favorite-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="favorite-actions">
                        <button class="remove-favorite" data-id="${
                          product.id
                        }" title="Eliminar de favoritos">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="favorite-content">
                    <div class="favorite-category">${product.categoryName}</div>
                    <h3 class="favorite-title">${product.name}</h3>
                    <div class="favorite-rating">
                        <div class="stars">${starsHTML}</div>
                        <span class="rating-count">(${
                          product.reviewCount
                        })</span>
                    </div>
                    <div class="favorite-price">
                        <div class="price-wrapper">
                            <span class="current-price">$${product.price.toFixed(
                              2
                            )}</span>
                            <span class="old-price">$${product.oldPrice.toFixed(
                              2
                            )}</span>
                        </div>
                        <div class="savings">Ahorras: $${(
                          product.oldPrice - product.price
                        ).toFixed(2)} (${Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
      )}%)</div>
                    </div>
                    <div class="favorite-buttons">
                        <button class="add-to-cart-btn" data-id="${product.id}">
                            <i class="fas fa-shopping-cart"></i> Añadir al carrito
                        </button>
                        <button class="view-details-btn" data-id="${
                          product.id
                        }">
                            <i class="fas fa-eye"></i> Ver detalles
                        </button>
                    </div>
                </div>
            `;

      favoritesGrid.appendChild(favoriteCard);
    });

    // Actualizar contador y estado vacío
    updateFavoritesCount();
    toggleEmptyState();
  }

  // Función para eliminar un producto de favoritos
  function removeFavorite(productId) {
    let favorites = getFavorites();
    favorites = favorites.filter((id) => id !== parseInt(productId));
    saveFavorites(favorites);
    renderFavorites();
    showNotification("Producto eliminado de favoritos");
  }

  // Función para eliminar todos los favoritos
  function clearAllFavorites() {
    if (
      confirm(
        "¿Estás seguro de que quieres eliminar todos los productos favoritos?"
      )
    ) {
      saveFavorites([]);
      renderFavorites();
      showNotification("Todos los favoritos han sido eliminados");
    }
  }

  // Función para mostrar notificaciones
  function showNotification(message) {
    // Eliminar notificaciones existentes
    const existingNotifications = document.querySelectorAll(".notification");
    existingNotifications.forEach((notification) => {
      document.body.removeChild(notification);
    });

    // Crear nueva notificación
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);

    // Mostrar con animación
    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    // Ocultar después de 3 segundos
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Evento para eliminar un producto de favoritos
  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("remove-favorite") ||
      e.target.closest(".remove-favorite")
    ) {
      e.preventDefault();

      const button = e.target.classList.contains("remove-favorite")
        ? e.target
        : e.target.closest(".remove-favorite");

      const productId = button.getAttribute("data-id");
      removeFavorite(productId);
    }
  });

  // Evento para eliminar todos los favoritos
  if (clearFavoritesBtn) {
    clearFavoritesBtn.addEventListener("click", clearAllFavorites);
  }

  // Evento para añadir al carrito
  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("add-to-cart-btn") ||
      e.target.closest(".add-to-cart-btn")
    ) {
      e.preventDefault();

      // Incrementar contador del carrito
      const cartCount = document.querySelector(".cart-count");
      if (cartCount) {
        let count = parseInt(cartCount.textContent);
        cartCount.textContent = count + 1;
      }

      // Mostrar notificación
      showNotification("Producto añadido al carrito");
    }
  });

  // Inicializar la página
  renderFavorites();
});
