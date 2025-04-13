document.addEventListener("DOMContentLoaded", function () {
  // Datos de productos (simulando una base de datos)
  const products = [
    {
      id: 1,
      name: "Amazon Echo Dot (4ª generación)",
      category: "smart-speakers",
      categoryName: "Altavoces Inteligentes",
      price: 989.99,
      oldPrice: 1299.99,
      rating: 4.7,
      reviewCount: 12543,
      image:
        "https://i.pinimg.com/736x/8e/9b/aa/8e9baad1596b49548d6d23be7b931d40.jpg",
      isNew: true,
      discount: 17,
      stock: "in-stock",
      description:
        "Altavoz inteligente con Alexa que se adapta a cualquier habitación. Pregunta a Alexa sobre el tiempo, pide canciones, noticias, controla dispositivos de Hogar digital y más.",
      specifications: [
        { label: "Conectividad", value: "Wi-Fi, Bluetooth" },
        { label: "Asistente", value: "Amazon Alexa" },
        { label: "Dimensiones", value: "100 x 100 x 89 mm" },
        { label: "Peso", value: "328 g" },
        { label: "Potencia", value: '1.6" altavoz' },
        { label: "Color", value: "Gris oscuro" },
        { label: "Compatibilidad", value: "iOS, Android" },
        { label: "Garantía", value: "2 años" },
      ],
      images: [
        "https://i.pinimg.com/736x/01/0a/5e/010a5e0ffb8807b98807f3cad064e610.jpg",
        "https://i.pinimg.com/736x/85/0c/19/850c190a88b43ed6e90e417ad8b49ed4.jpg",
        "https://i.pinimg.com/736x/8e/9b/aa/8e9baad1596b49548d6d23be7b931d40.jpg",
      ],
      reviews: [
        {
          name: "María García",
          avatar:
            "https://i.pinimg.com/736x/c8/87/60/c88760ff49ba26858e593991f171b77a.jpg",
          date: "15/03/2023",
          rating: 5,
          comment:
            "Excelente calidad de sonido para su tamaño. La integración con otros dispositivos es perfecta y Alexa entiende muy bien mis comandos.",
          images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_978737-MLA69370267973_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_706770-MLA69370267939_052023-F.webp",
          ],
        },
        {
          name: "Juan Pérez",
          avatar:
            "https://i.pinimg.com/736x/33/b0/8e/33b08e395ec37cf0c78c59ccca7d4a2c.jpg",
          date: "02/04/2023",
          rating: 4,
          comment:
            "Muy buen producto, fácil de configurar y usar. El sonido podría ser un poco mejor pero para el precio está muy bien.",
          images: [],
        },
      ],
    },
    {
      id: 2,
      name: "Patinete Eléctrico Xiaomi Pro 2",
      category: "mobility",
      categoryName: "Movilidad Eléctrica",
      price: 6809.76,
      oldPrice: 9458.0,
      rating: 4.5,
      reviewCount: 856,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_899992-MLA83182915318_042025-O.webp",
      isNew: false,
      discount: 10,
      stock: "in-stock",
      description:
        "El Xiaomi Pro 2 es un patinete eléctrico de alta gama con una autonomía de hasta 45 km y una velocidad máxima de 25 km/h. Perfecto para desplazamientos urbanos.",
      specifications: [
        { label: "Velocidad máxima", value: "25 km/h" },
        { label: "Autonomía", value: "45 km" },
        { label: "Potencia", value: "300W (pico 600W)" },
        { label: "Batería", value: "12800 mAh" },
        { label: "Tiempo de carga", value: "8-9 horas" },
        { label: "Peso máximo soportado", value: "100 kg" },
        { label: "Peso del producto", value: "14.2 kg" },
        { label: "Dimensiones plegado", value: "113 x 43 x 49 cm" },
      ],
      images: [
        "https://http2.mlstatic.com/D_NQ_NP_656722-MLU76267880467_052024-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_665278-MLU77961364400_082024-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_834696-MLU77961777358_082024-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_722919-MLA83182915356_042025-O.webp",
      ],
      reviews: [
        {
          name: "Carlos Rodríguez",
          avatar:
            "https://i.pinimg.com/736x/79/43/c6/7943c6452688cbfd8554d63d1558103e.jpg",
          date: "10/02/2023",
          rating: 5,
          comment:
            "Increíble patinete, muy estable y con buena autonomía. Lo uso todos los días para ir al trabajo y me ahorra mucho tiempo en los desplazamientos.",
          images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_922204-MLA80206291118_112024-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_753676-MLA77928361711_072024-F.webp",
          ],
        },
        {
          name: "Laura Martínez",
          avatar:
            "https://i.pinimg.com/236x/50/86/d2/5086d27c758b3e32e92608629f5cd388.jpg",
          date: "25/03/2023",
          rating: 4,
          comment:
            "Muy buen patinete, aunque la autonomía real es algo menor que la anunciada. Por lo demás, muy contenta con la compra.",
          images: [],
        },
      ],
    },
    {
      id: 3,
      name: "Nintendo Switch OLED",
      category: "gaming",
      categoryName: "Videojuegos",
      price: 6649.99,
      oldPrice: null,
      rating: 4.9,
      reviewCount: 3421,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_716152-MLA79601689041_092024-O.webp",
      isNew: true,
      discount: null,
      stock: "low-stock",
      description:
        "La nueva Nintendo Switch con pantalla OLED de 7 pulgadas, soporte ajustable más ancho, base con puerto LAN por cable, 64 GB de almacenamiento interno y audio mejorado.",
      specifications: [
        { label: "Pantalla", value: "OLED 7 pulgadas" },
        { label: "Resolución", value: "1280 x 720p (portátil), 1080p (TV)" },
        { label: "Almacenamiento", value: "64 GB (ampliable)" },
        { label: "Batería", value: "4.5-9 horas" },
        { label: "Conectividad", value: "Wi-Fi, Bluetooth, LAN (en dock)" },
        { label: "Dimensiones", value: "242 x 102 x 13.9 mm" },
        { label: "Peso", value: "320g (398g con Joy-Con)" },
        { label: "Incluye", value: "Consola, Joy-Con, dock, cables" },
      ],
      images: [
        "https://http2.mlstatic.com/D_NQ_NP_714824-MLA79357699208_092024-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_932301-MLA79601689053_092024-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_968562-MLA79220116338_092024-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_679922-MLA79219950968_092024-O.webp",
      ],
      reviews: [
        {
          name: "Pedro Sánchez",
          avatar:
            "https://i.pinimg.com/736x/46/4a/1e/464a1e574ccd4016dfe554196f424f73.jpg",
          date: "05/01/2023",
          rating: 5,
          comment:
            "La pantalla OLED es una maravilla, los colores son mucho más vivos y el negro es realmente negro. La batería dura bastante más que en mi Switch original.",
          images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_842043-MLA54957869772_042023-F.webp",
          ],
        },
        {
          name: "Ana López",
          avatar:
            "https://i.pinimg.com/736x/a1/86/f1/a186f1eb588a3ec3c4662231f1eedd62.jpg",
          date: "18/02/2023",
          rating: 5,
          comment:
            "Increíble mejora respecto a la versión anterior. La pantalla es espectacular y el soporte mucho más estable. Muy contenta con la compra.",
          images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_976574-MLA69721649361_052023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_868309-MLA54982898928_042023-F.webp",
          ],
        },
      ],
    },
    // Mantén los otros productos pero agrega datos similares para cada uno
    {
      id: 4,
      name: "TV Box Android 11 4K",
      category: "tv",
      categoryName: "TV y Accesorios",
      price: 559.44,
      oldPrice: 999.0,
      rating: 4.2,
      reviewCount: 532,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_820334-MLM81370128389_122024-O-smart-tv-player-4k-android-110-5g-dual-wifi-de-4gb64gb.webp",
      isNew: false,
      discount: 25,
      stock: "in-stock",
      description:
        "Convierte tu televisor en Smart TV con este TV Box con Android 11, resolución 4K, WiFi dual band y Bluetooth. Compatible con todas las aplicaciones de streaming.",
      specifications: [
        { label: "Sistema operativo", value: "Android 11" },
        { label: "Procesador", value: "Quad-Core Cortex-A53" },
        { label: "RAM", value: "4 GB" },
        { label: "Almacenamiento", value: "32 GB (ampliable)" },
        { label: "Resolución", value: "4K Ultra HD" },
        { label: "Conectividad", value: "WiFi 2.4/5GHz, Bluetooth 4.0" },
        { label: "Puertos", value: "HDMI, USB, Ethernet, microSD" },
        { label: "Dimensiones", value: "10 x 10 x 2 cm" },
      ],
      images: [
        "https://http2.mlstatic.com/D_NQ_NP_610494-MLM83164071513_032025-O-smart-tv-player-4k-android-110-5g-dual-wifi-de-4gb64gb.webp",
        "https://http2.mlstatic.com/D_NQ_NP_998483-MLM83164066909_032025-O-smart-tv-player-4k-android-110-5g-dual-wifi-de-4gb64gb.webp",
        "https://http2.mlstatic.com/D_NQ_NP_733375-MLM83164066943_032025-O-smart-tv-player-4k-android-110-5g-dual-wifi-de-4gb64gb.webp",
        "https://http2.mlstatic.com/D_NQ_NP_766551-MLM83163908715_032025-O-smart-tv-player-4k-android-110-5g-dual-wifi-de-4gb64gb.webp",
      ],
      reviews: [
        {
          name: "Roberto Gómez",
          avatar:
            "https://i.pinimg.com/736x/ec/da/5e/ecda5e0d35a7ad69d52e94ecfff0ee32.jpg",
          date: "20/04/2023",
          rating: 4,
          comment:
            "Buen producto por el precio. Funciona bien con Netflix y YouTube. La interfaz es rápida y fluida.",
          images: [],
        },
        {
          name: "Sofía Martín",
          avatar:
            "https://i.pinimg.com/736x/58/11/ce/5811ce4ea34e82624c7bc2a7355c28f5.jpg",
          date: "05/05/2023",
          rating: 5,
          comment:
            "Excelente TV Box, muy fácil de configurar y usar. La calidad de imagen es muy buena y no tiene lag.",
          images: [],
        },
      ],
    },
    {
      id: 5,
      name: "Auriculares Sony WH-1000XM4",
      category: "audio",
      categoryName: "Audio",
      price: 4799.99,
      oldPrice: 5800.99,
      rating: 4.8,
      reviewCount: 2156,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_949153-MLU75209996906_032024-O.webp",
      isNew: false,
      discount: 21,
      stock: "in-stock",
      description:
        "Auriculares inalámbricos con cancelación de ruido líder en la industria, sonido de alta resolución y hasta 30 horas de batería. Perfectos para viajes y uso diario.",
      specifications: [
        { label: "Tipo", value: "Circumaural cerrado" },
        { label: "Conectividad", value: "Bluetooth 5.0, NFC, cable" },
        { label: "Autonomía", value: "30 horas (con NC)" },
        { label: "Tiempo de carga", value: "3 horas (10 min = 5h uso)" },
        { label: "Cancelación de ruido", value: "Adaptativa con QN1" },
        { label: "Códecs", value: "SBC, AAC, LDAC" },
        { label: "Peso", value: "254 g" },
        { label: "Extras", value: "Speak-to-chat, detección de uso" },
      ],
      images: [
        "https://http2.mlstatic.com/D_NQ_NP_739241-MLA44483909545_012021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_651398-MLA44559891015_012021-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_839877-MLU75194408073_032024-O.webp",
        "https://http2.mlstatic.com/D_NQ_NP_663001-MLU72628076916_112023-O.webp",
      ],
      reviews: [
        {
          name: "Miguel Torres",
          avatar:
            "https://i.pinimg.com/736x/46/2f/aa/462faac7faf2f2e1f6cf30f1496745dd.jpg",
          date: "12/03/2023",
          rating: 5,
          comment:
            "Los mejores auriculares que he tenido. La cancelación de ruido es impresionante y el sonido es excelente. La batería dura muchísimo.",
          images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_649986-MLA70855897518_082023-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_924869-MLA70855897512_082023-F.webp",
          ],
        },
        {
          name: "Elena Ruiz",
          avatar: "https://via.placeholder.com/150/333333?text=ER",
          date: "28/04/2023",
          rating: 4,
          comment:
            "Muy buenos auriculares, cómodos incluso para sesiones largas. La app es muy completa y permite personalizar muchos aspectos.",
          images: [
            "https://http2.mlstatic.com/D_NQ_NP_2X_834789-MLA81875555152_012025-F.webp",
            "https://http2.mlstatic.com/D_NQ_NP_2X_957806-MLA70855897514_082023-F.webp",
          ],
        },
      ],
    },
  ];

  // Función para renderizar los productos
  function renderProducts(productsToRender) {
    const productsGrid = document.getElementById("productsGrid");
    productsGrid.innerHTML = "";

    productsToRender.forEach((product) => {
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

      // Determinar el estado del stock
      let stockHTML = "";
      if (product.stock === "in-stock") {
        stockHTML =
          '<div class="stock-status in-stock"><i class="fas fa-check-circle"></i> En stock</div>';
      } else if (product.stock === "low-stock") {
        stockHTML =
          '<div class="stock-status low-stock"><i class="fas fa-exclamation-circle"></i> Pocas unidades</div>';
      } else if (product.stock === "out-of-stock") {
        stockHTML =
          '<div class="stock-status out-of-stock"><i class="fas fa-times-circle"></i> Agotado</div>';
      }

      // Crear el HTML de la tarjeta de producto
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
              ${
                product.isNew
                  ? '<div class="product-badge badge-new">Nuevo</div>'
                  : ""
              }
              ${
                product.discount
                  ? `<div class="discount-percentage">-${product.discount}%</div>`
                  : ""
              }
              <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
                  <div class="product-actions">
                      <button class="action-btn" title="Añadir a favoritos"><i class="fas fa-heart"></i></button>
                      <button class="action-btn add-to-cart" title="Añadir al carrito" data-id="${
                        product.id
                      }"><i class="fas fa-shopping-cart"></i></button>
                      <button class="action-btn view-details" title="Ver detalles" data-id="${
                        product.id
                      }"><i class="fas fa-eye"></i></button>
                  </div>
              </div>
              <div class="product-content">
                  <div class="product-category">${product.categoryName}</div>
                  <h3 class="product-title">${product.name}</h3>
                  <div class="product-rating">
                      <div class="stars">${starsHTML}</div>
                      <span class="rating-count">(${product.reviewCount})</span>
                  </div>
                  ${stockHTML}
                  <div class="product-price">
                      <span class="current-price">$${product.price.toFixed(
                        2
                      )}</span>
                      ${
                        product.oldPrice
                          ? `<span class="old-price">$${product.oldPrice.toFixed(
                              2
                            )}</span>`
                          : ""
                      }
                  </div>
                  <button class="add-to-cart-btn" ${
                    product.stock === "out-of-stock" ? "disabled" : ""
                  } data-id="${product.id}">
                      <i class="fas fa-shopping-cart"></i> 
                      ${
                        product.stock === "out-of-stock"
                          ? "Agotado"
                          : "Añadir al carrito"
                      }
                  </button>
                  <button class="view-details-btn" data-id="${product.id}">
                      <i class="fas fa-eye"></i> Ver detalles
                  </button>
              </div>
          `;

      productsGrid.appendChild(productCard);
    });

    // Actualizar contador de productos
    const productsCount = document.querySelector(".products-count");
    if (productsCount) {
      productsCount.textContent = `${productsToRender.length} productos`;
    }
  }

  // Inicializar la página con todos los productos
  renderProducts(products);

  // Filtrar productos por categoría
  const categoryFilter = document.getElementById("category-filter");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", function () {
      const selectedCategory = this.value;
      let filteredProducts;

      if (selectedCategory === "all") {
        filteredProducts = products;
      } else {
        filteredProducts = products.filter(
          (product) => product.category === selectedCategory
        );
      }

      renderProducts(filteredProducts);
    });
  }

  // Ordenar productos
  const sortBy = document.getElementById("sort-by");
  if (sortBy) {
    sortBy.addEventListener("change", function () {
      const selectedSort = this.value;
      let sortedProducts = [...products];

      switch (selectedSort) {
        case "price-low":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          sortedProducts.sort((a, b) => b.rating - a.rating);
          break;
        case "newest":
          sortedProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
          break;
        default:
          // Por defecto, no hacer nada (relevancia)
          break;
      }

      renderProducts(sortedProducts);
    });
  }

  // Modal de detalles del producto
  const productModal = document.getElementById("productModal");
  const modalClose = document.getElementById("modalClose");
  const modalBody = document.querySelector(".modal-body");

  // Función para abrir el modal con los detalles del producto
  function openProductModal(productId) {
    const product = products.find((p) => p.id === parseInt(productId));
    if (!product) return;

    // Generar estrellas para la valoración
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

    // Generar HTML para las especificaciones
    let specificationsHTML = "";
    if (product.specifications && product.specifications.length > 0) {
      specificationsHTML = `
              <div class="specifications-list">
                  ${product.specifications
                    .map(
                      (spec) => `
                      <div class="specification-item">
                          <div class="specification-label">${spec.label}</div>
                          <div class="specification-value">${spec.value}</div>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          `;
    }

    // Generar HTML para las imágenes en miniatura
    let thumbnailsHTML = "";
    if (product.images && product.images.length > 0) {
      thumbnailsHTML = product.images
        .map(
          (img, index) => `
              <div class="product-thumbnail ${
                index === 0 ? "active" : ""
              }" data-index="${index}">
                  <img src="${img}" alt="${product.name} - Imagen ${index + 1}">
              </div>
          `
        )
        .join("");
    }

    // Generar HTML para las reseñas
    let reviewsHTML = "";
    if (product.reviews && product.reviews.length > 0) {
      reviewsHTML = product.reviews
        .map((review) => {
          // Generar estrellas para la reseña
          let reviewStarsHTML = "";
          for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
              reviewStarsHTML += '<i class="fas fa-star"></i>';
            } else {
              reviewStarsHTML += '<i class="far fa-star"></i>';
            }
          }

          // Generar HTML para las imágenes de la reseña
          let reviewImagesHTML = "";
          if (review.images && review.images.length > 0) {
            reviewImagesHTML = `
                      <div class="review-images">
                          ${review.images
                            .map(
                              (img) => `
                              <div class="review-image">
                                  <img src="${img}" alt="Imagen de reseña">
                              </div>
                          `
                            )
                            .join("")}
                      </div>
                  `;
          }

          return `
                  <div class="review-item">
                      <div class="review-header">
                          <div class="reviewer-info">
                              <div class="reviewer-avatar">
                                  <img src="${review.avatar}" alt="${review.name}">
                              </div>
                              <div>
                                  <div class="reviewer-name">${review.name}</div>
                                  <div class="review-date">${review.date}</div>
                              </div>
                          </div>
                          <div class="review-rating">
                              ${reviewStarsHTML}
                          </div>
                      </div>
                      <div class="review-content">
                          ${review.comment}
                      </div>
                      ${reviewImagesHTML}
                  </div>
              `;
        })
        .join("");
    }

    // Determinar el estado del stock
    let stockHTML = "";
    if (product.stock === "in-stock") {
      stockHTML =
        '<div class="product-detail-stock in-stock"><i class="fas fa-check-circle"></i> En stock</div>';
    } else if (product.stock === "low-stock") {
      stockHTML =
        '<div class="product-detail-stock low-stock"><i class="fas fa-exclamation-circle"></i> Pocas unidades</div>';
    } else if (product.stock === "out-of-stock") {
      stockHTML =
        '<div class="product-detail-stock out-of-stock"><i class="fas fa-times-circle"></i> Agotado</div>';
    }

    // Construir el contenido del modal
    modalBody.innerHTML = `
          <div class="product-detail-header">
              <div class="product-detail-gallery">
                  <div class="product-main-image">
                      <img src="${
                        product.images && product.images.length > 0
                          ? product.images[0]
                          : product.image
                      }" alt="${product.name}">
                  </div>
                  <div class="product-thumbnails">
                      ${thumbnailsHTML}
                  </div>
              </div>
              <div class="product-detail-info">
                  <div class="product-detail-category">${
                    product.categoryName
                  }</div>
                  <h2 class="product-detail-title">${product.name}</h2>
                  <div class="product-detail-rating">
                      <div class="stars">${starsHTML}</div>
                      <span class="rating-count">(${
                        product.reviewCount
                      } valoraciones)</span>
                  </div>
                  <div class="product-detail-price">
                      <span class="product-detail-current-price">$${product.price.toFixed(
                        2
                      )}</span>
                      ${
                        product.oldPrice
                          ? `
                          <span class="product-detail-old-price">$${product.oldPrice.toFixed(
                            2
                          )}</span>
                          <span class="product-detail-discount">-${
                            product.discount
                          }%</span>
                      `
                          : ""
                      }
                  </div>
                  ${stockHTML}
                  <div class="product-detail-description">
                      ${
                        product.description ||
                        "No hay descripción disponible para este producto."
                      }
                  </div>
                  <div class="product-detail-actions">
                      <button class="add-to-cart-btn" ${
                        product.stock === "out-of-stock" ? "disabled" : ""
                      } data-id="${product.id}">
                          <i class="fas fa-shopping-cart"></i> 
                          ${
                            product.stock === "out-of-stock"
                              ? "Agotado"
                              : "Añadir al carrito"
                          }
                      </button>
                      <button class="wishlist-btn">
                          <i class="fas fa-heart"></i>
                      </button>
                  </div>
              </div>
          </div>

          <div class="product-specifications">
              <h3>Especificaciones</h3>
              ${
                specificationsHTML ||
                "<p>No hay especificaciones disponibles para este producto.</p>"
              }
          </div>

          <div class="product-reviews">
              <h3>Opiniones de clientes <span class="review-count">(${
                product.reviews ? product.reviews.length : 0
              })</span></h3>
              ${
                reviewsHTML ||
                "<p>No hay opiniones disponibles para este producto.</p>"
              }
          </div>
      `;

    // Mostrar el modal
    productModal.classList.add("active");
    document.body.style.overflow = "hidden"; // Evitar scroll en el body

    // Agregar eventos a las miniaturas
    const thumbnails = document.querySelectorAll(".product-thumbnail");
    const mainImage = document.querySelector(".product-main-image img");

    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", function () {
        // Actualizar clase activa
        thumbnails.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");

        // Actualizar imagen principal
        const index = this.getAttribute("data-index");
        mainImage.src = product.images[index];
      });
    });
  }

  // Cerrar el modal
  if (modalClose) {
    modalClose.addEventListener("click", function () {
      productModal.classList.remove("active");
      document.body.style.overflow = ""; // Restaurar scroll
    });
  }

  // Cerrar el modal al hacer clic fuera del contenido
  productModal.addEventListener("click", function (e) {
    if (e.target === productModal) {
      productModal.classList.remove("active");
      document.body.style.overflow = ""; // Restaurar scroll
    }
  });

  // Evento para abrir el modal desde el botón "Ver detalles"
  document.addEventListener("click", function (e) {
    // Verificar si se hizo clic en el botón "Ver detalles" o en el icono del ojo
    if (
      e.target.classList.contains("view-details-btn") ||
      e.target.closest(".view-details-btn") ||
      e.target.classList.contains("view-details") ||
      e.target.closest(".view-details")
    ) {
      e.preventDefault();

      // Obtener el ID del producto
      const button = e.target.classList.contains("view-details-btn")
        ? e.target
        : e.target.closest(".view-details-btn") ||
          e.target.closest(".view-details");

      const productId = button.getAttribute("data-id");
      openProductModal(productId);
    }
  });

  // Funcionalidad de añadir al carrito
  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("add-to-cart-btn") ||
      e.target.closest(".add-to-cart")
    ) {
      e.preventDefault();

      // Obtener el botón o su contenedor
      const button = e.target.classList.contains("add-to-cart-btn")
        ? e.target
        : e.target.closest(".add-to-cart-btn") ||
          e.target.closest(".add-to-cart");

      // Verificar si el botón está deshabilitado
      if (button.disabled) return;

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

  // Toggle del menú móvil
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});
