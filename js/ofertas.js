document.addEventListener("DOMContentLoaded", function () {
  // Datos de productos (simulando una base de datos)
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
        "https://m.media-amazon.com/images/I/61MbLLagiVL._AC_SL1000_.jpg",
        "https://m.media-amazon.com/images/I/61RDUiVPJnL._AC_SL1000_.jpg",
        "https://m.media-amazon.com/images/I/61XRbgKYVaL._AC_SL1000_.jpg",
        "https://m.media-amazon.com/images/I/51oJAJ0wJwL._AC_SL1000_.jpg",
      ],
      reviews: [
        {
          name: "María García",
          avatar: "https://randomuser.me/api/portraits/women/12.jpg",
          date: "15/03/2023",
          rating: 5,
          comment:
            "Excelente calidad de sonido para su tamaño. La integración con otros dispositivos es perfecta y Alexa entiende muy bien mis comandos.",
          images: [
            "https://m.media-amazon.com/images/I/71JWFyA7+GL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71Nk9TS7YUL._AC_SL1500_.jpg",
          ],
        },
        {
          name: "Juan Pérez",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
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
      price: 399.99,
      oldPrice: 499.99,
      rating: 4.5,
      reviewCount: 856,
      image:
        "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/specs01.png",
      isNew: false,
      discount: 20,
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
        "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/specs01.png",
        "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/specs02.png",
        "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/specs03.png",
        "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/specs04.png",
      ],
      reviews: [
        {
          name: "Carlos Rodríguez",
          avatar: "https://randomuser.me/api/portraits/men/45.jpg",
          date: "10/02/2023",
          rating: 5,
          comment:
            "Increíble patinete, muy estable y con buena autonomía. Lo uso todos los días para ir al trabajo y me ahorra mucho tiempo en los desplazamientos.",
          images: [
            "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/gallery01.jpg",
            "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/gallery02.jpg",
            "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-electric-scooter-pro2/gallery03.jpg",
          ],
        },
        {
          name: "Laura Martínez",
          avatar: "https://randomuser.me/api/portraits/women/23.jpg",
          date: "25/03/2023",
          rating: 4,
          comment:
            "Muy buen patinete, aunque la autonomía real es algo menor que la anunciada. Por lo demás, muy contenta con la compra.",
          images: [],
        },
      ],
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
        "https://m.media-amazon.com/images/I/61dwRNiAhCL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71cFXWlkRdL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61X3ujOlIML._AC_SL1500_.jpg",
      ],
      reviews: [
        {
          name: "Roberto Gómez",
          avatar: "https://randomuser.me/api/portraits/men/67.jpg",
          date: "20/04/2023",
          rating: 4,
          comment:
            "Buen producto por el precio. Funciona bien con Netflix y YouTube. La interfaz es rápida y fluida.",
          images: [],
        },
        {
          name: "Sofía Martín",
          avatar: "https://randomuser.me/api/portraits/women/54.jpg",
          date: "05/05/2023",
          rating: 5,
          comment:
            "Excelente TV Box, muy fácil de configurar y usar. La calidad de imagen es muy buena y no tiene lag.",
          images: [
            "https://m.media-amazon.com/images/I/61X3ujOlIML._AC_SL1500_.jpg",
          ],
        },
      ],
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
        "https://www.sony.es/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        "https://www.sony.es/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        "https://www.sony.es/image/c814f161373ce9f7fb5a6f4ebf619cc7?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
        "https://www.sony.es/image/5c5628d1bb3a6c57b9a0592dc5c4a4e1?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
      ],
      reviews: [
        {
          name: "Miguel Torres",
          avatar: "https://randomuser.me/api/portraits/men/22.jpg",
          date: "12/03/2023",
          rating: 5,
          comment:
            "Los mejores auriculares que he tenido. La cancelación de ruido es impresionante y el sonido es excelente. La batería dura muchísimo.",
          images: [
            "https://www.sony.es/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
            "https://www.sony.es/image/c814f161373ce9f7fb5a6f4ebf619cc7?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
          ],
        },
        {
          name: "Elena Ruiz",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
          date: "28/04/2023",
          rating: 4,
          comment:
            "Muy buenos auriculares, cómodos incluso para sesiones largas. La app es muy completa y permite personalizar muchos aspectos.",
          images: [],
        },
      ],
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
      description:
        "Altavoz inteligente compacto con Google Assistant. Controla tu hogar inteligente, reproduce música, obtén respuestas y más, todo con tu voz.",
      specifications: [
        { label: "Asistente", value: "Google Assistant" },
        { label: "Conectividad", value: "Wi-Fi, Bluetooth" },
        { label: "Dimensiones", value: "98 x 98 x 42 mm" },
        { label: "Peso", value: "181 g" },
        { label: "Potencia", value: "40mm driver" },
        { label: "Color", value: "Tiza" },
        { label: "Compatibilidad", value: "Android, iOS" },
        { label: "Garantía", value: "2 años" },
      ],
      images: [
        "https://lh3.googleusercontent.com/vNwMcxRkCzpYTX3Hc-QyHtHYcR1CQFVG9iyA9TsyY3MjQrH0nHHzxwM9tGZLKPmZ_jSAKVd2rLHNPw1UkPEMuJyy0lhMhLmtgA=w1000-rw",
        "https://lh3.googleusercontent.com/Ql2DXfv7rQtbvZbBGb_J6zrxJZ-lFNLI2i8K3-WrZlukLu2oXKCPQRjKFTZllKnEEJnXQpPJcregwPvD9zLGkA1Q7aDYsRHx=w1000-rw",
        "https://lh3.googleusercontent.com/Ql2DXfv7rQtbvZbBGb_J6zrxJZ-lFNLI2i8K3-WrZlukLu2oXKCPQRjKFTZllKnEEJnXQpPJcregwPvD9zLGkA1Q7aDYsRHx=w1000-rw",
        "https://lh3.googleusercontent.com/Ql2DXfv7rQtbvZbBGb_J6zrxJZ-lFNLI2i8K3-WrZlukLu2oXKCPQRjKFTZllKnEEJnXQpPJcregwPvD9zLGkA1Q7aDYsRHx=w1000-rw",
      ],
      reviews: [
        {
          name: "Pablo Sánchez",
          avatar: "https://randomuser.me/api/portraits/men/77.jpg",
          date: "10/01/2023",
          rating: 5,
          comment:
            "Excelente altavoz para el precio. El asistente de Google funciona muy bien y la calidad de sonido es sorprendente para su tamaño.",
          images: [],
        },
        {
          name: "Lucía Fernández",
          avatar: "https://randomuser.me/api/portraits/women/88.jpg",
          date: "05/02/2023",
          rating: 4,
          comment:
            "Muy buen producto, fácil de configurar y usar. Lo uso principalmente para controlar las luces y otros dispositivos inteligentes.",
          images: [
            "https://lh3.googleusercontent.com/Ql2DXfv7rQtbvZbBGb_J6zrxJZ-lFNLI2i8K3-WrZlukLu2oXKCPQRjKFTZllKnEEJnXQpPJcregwPvD9zLGkA1Q7aDYsRHx=w1000-rw",
          ],
        },
      ],
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
      description:
        "Televisor Samsung 4K de 55 pulgadas con tecnología HDR, Smart TV con Tizen, conectividad WiFi y Bluetooth, y múltiples puertos HDMI y USB.",
      specifications: [
        { label: "Tamaño de pantalla", value: "55 pulgadas" },
        { label: "Resolución", value: "4K UHD (3840 x 2160)" },
        { label: "Tecnología", value: "LED" },
        { label: "Sistema operativo", value: "Tizen" },
        { label: "HDR", value: "HDR10+" },
        { label: "Conectividad", value: "WiFi, Bluetooth, HDMI, USB" },
        { label: "Audio", value: "20W, Dolby Digital Plus" },
        { label: "Dimensiones", value: "123.1 x 71.4 x 5.9 cm (sin peana)" },
      ],
      images: [
        "https://images.samsung.com/is/image/samsung/p6pim/es/ue55cu7175uxxc/gallery/es-crystal-uhd-cu7000-ue55cu7175uxxc-536856066?$650_519_PNG$",
        "https://images.samsung.com/is/image/samsung/p6pim/es/ue55cu7175uxxc/gallery/es-crystal-uhd-cu7000-ue55cu7175uxxc-536856067?$650_519_PNG$",
        "https://images.samsung.com/is/image/samsung/p6pim/es/ue55cu7175uxxc/gallery/es-crystal-uhd-cu7000-ue55cu7175uxxc-536856068?$650_519_PNG$",
        "https://images.samsung.com/is/image/samsung/p6pim/es/ue55cu7175uxxc/gallery/es-crystal-uhd-cu7000-ue55cu7175uxxc-536856069?$650_519_PNG$",
      ],
      reviews: [
        {
          name: "Antonio López",
          avatar: "https://randomuser.me/api/portraits/men/55.jpg",
          date: "15/03/2023",
          rating: 5,
          comment:
            "Excelente televisor, la calidad de imagen es impresionante y el sistema operativo Tizen es muy fluido. Muy contento con la compra.",
          images: [
            "https://images.samsung.com/is/image/samsung/p6pim/es/ue55cu7175uxxc/gallery/es-crystal-uhd-cu7000-ue55cu7175uxxc-536856069?$650_519_PNG$",
          ],
        },
        {
          name: "Carmen Rodríguez",
          avatar: "https://randomuser.me/api/portraits/women/66.jpg",
          date: "02/04/2023",
          rating: 4,
          comment:
            "Muy buen televisor por el precio. La calidad de imagen es excelente y el sonido está bien, aunque recomendaría añadir una barra de sonido.",
          images: [],
        },
      ],
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
      description:
        "Auriculares inalámbricos con la mejor cancelación de ruido de su clase. Sonido Bose de alta fidelidad, resistencia al agua IPX4 y hasta 6 horas de batería.",
      specifications: [
        { label: "Tipo", value: "In-ear true wireless" },
        { label: "Conectividad", value: "Bluetooth 5.1" },
        { label: "Autonomía", value: "6 horas (18 con estuche)" },
        { label: "Tiempo de carga", value: "2 horas (15 min = 2h uso)" },
        { label: "Cancelación de ruido", value: "11 niveles ajustables" },
        { label: "Resistencia", value: "IPX4 (resistente al agua)" },
        { label: "Peso", value: "8.5g por auricular" },
        { label: "Extras", value: "Control táctil, asistente de voz" },
      ],
      images: [
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/product_silo_images/QCE_PDP_Ecom-Gallery-B03.png/jcr:content/renditions/cq5dam.web.320.320.png",
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/product_silo_images/QCE_PDP_Ecom-Gallery-B02.png/jcr:content/renditions/cq5dam.web.320.320.png",
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/product_silo_images/QCE_PDP_Ecom-Gallery-B01.png/jcr:content/renditions/cq5dam.web.320.320.png",
        "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/product_silo_images/QCE_PDP_Ecom-Gallery-B04.png/jcr:content/renditions/cq5dam.web.320.320.png",
      ],
      reviews: [
        {
          name: "Javier Martín",
          avatar: "https://randomuser.me/api/portraits/men/44.jpg",
          date: "20/02/2023",
          rating: 5,
          comment:
            "La cancelación de ruido es impresionante, mucho mejor que otros auriculares que he probado. El sonido es excelente y son muy cómodos.",
          images: [
            "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/product_silo_images/QCE_PDP_Ecom-Gallery-B01.png/jcr:content/renditions/cq5dam.web.320.320.png",
          ],
        },
        {
          name: "Marta Gómez",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
          date: "15/03/2023",
          rating: 4,
          comment:
            "Muy buenos auriculares, la calidad de sonido es excelente. La batería dura un poco menos de lo esperado, pero por lo demás son perfectos.",
          images: [],
        },
      ],
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
      description:
        "Hoverboard con altavoces Bluetooth, luces LED, motor de 500W y autonomía de hasta 15 km. Perfecto para desplazamientos cortos y diversión.",
      specifications: [
        { label: "Velocidad máxima", value: "15 km/h" },
        { label: "Autonomía", value: "15 km" },
        { label: "Potencia", value: "500W (2x250W)" },
        { label: "Batería", value: "4400 mAh" },
        { label: "Tiempo de carga", value: "2-3 horas" },
        { label: "Peso máximo soportado", value: "100 kg" },
        { label: "Peso del producto", value: "10 kg" },
        { label: "Extras", value: "Bluetooth, luces LED, altavoces" },
      ],
      images: [
        "https://m.media-amazon.com/images/I/71JbRLnJnNL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71JbRLnJnNL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71JbRLnJnNL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71JbRLnJnNL._AC_SL1500_.jpg",
      ],
      reviews: [
        {
          name: "Daniel Torres",
          avatar: "https://randomuser.me/api/portraits/men/77.jpg",
          date: "10/01/2023",
          rating: 4,
          comment:
            "Muy divertido y fácil de usar. La batería dura bastante y las luces LED son geniales. Los altavoces Bluetooth son un plus.",
          images: [
            "https://m.media-amazon.com/images/I/71JbRLnJnNL._AC_SL1500_.jpg",
          ],
        },
        {
          name: "Sara López",
          avatar: "https://randomuser.me/api/portraits/women/88.jpg",
          date: "05/02/2023",
          rating: 5,
          comment:
            "Mi hijo está encantado con él. Es estable y seguro, y la batería dura lo suficiente para varias horas de diversión.",
          images: [],
        },
      ],
    },
  ];

  // Filtrar solo productos con descuento
  const discountedProducts = products.filter((product) => product.discount);

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
    const favoritesCount = document.querySelector(".favorites-count");
    if (favoritesCount) {
      favoritesCount.textContent = favorites.length;
    }
  }

  // Función para renderizar los productos
  function renderProducts(productsToRender) {
    const productsGrid = document.getElementById("productsGrid");
    productsGrid.innerHTML = "";

    // Obtener favoritos actuales
    const favorites = getFavorites();

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

      // Calcular el ahorro
      const savings = product.oldPrice - product.price;
      const savingsPercentage = Math.round((savings / product.oldPrice) * 100);

      // Verificar si el producto está en favoritos
      const isFavorite = favorites.includes(product.id);
      const heartIcon = isFavorite ? "fas fa-heart" : "far fa-heart";
      const heartTitle = isFavorite
        ? "Eliminar de favoritos"
        : "Añadir a favoritos";

      // Crear el HTML de la tarjeta de producto
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
              <div class="product-badge badge-sale">Oferta Flash</div>
              <div class="discount-percentage">-${product.discount}%</div>
              <div class="product-image">
                  <img src="${product.image}" alt="${product.name}">
                  <div class="product-actions">
                      <button class="action-btn toggle-favorite" title="${heartTitle}" data-id="${
        product.id
      }"><i class="${heartIcon}"></i></button>
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
                      <div class="price-wrapper">
                          <span class="current-price">$${product.price.toFixed(
                            2
                          )}</span>
                          <span class="old-price">$${product.oldPrice.toFixed(
                            2
                          )}</span>
                      </div>
                      <div class="savings">Ahorras: $${savings.toFixed(
                        2
                      )} (${savingsPercentage}%)</div>
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
    const productsCount = document.getElementById("productsCount");
    if (productsCount) {
      productsCount.textContent = `${productsToRender.length} productos`;
    }

    // Actualizar contador de favoritos
    updateFavoritesCount();
  }

  // Inicializar la página con productos en oferta
  renderProducts(discountedProducts);

  // Filtrar productos por categoría
  const categoryFilter = document.getElementById("category-filter");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", function () {
      const selectedCategory = this.value;
      let filteredProducts;

      if (selectedCategory === "all") {
        filteredProducts = discountedProducts;
      } else {
        filteredProducts = discountedProducts.filter(
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
      let sortedProducts = [...discountedProducts];

      switch (selectedSort) {
        case "discount-high":
          sortedProducts.sort((a, b) => b.discount - a.discount);
          break;
        case "price-low":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-high":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          sortedProducts.sort((a, b) => b.rating - a.rating);
          break;
        default:
          // Por defecto, ordenar por mayor descuento
          sortedProducts.sort((a, b) => b.discount - a.discount);
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

    // Generar HTML para las especificaciones con iconos apropiados
    let specificationsHTML = "";
    if (product.specifications && product.specifications.length > 0) {
      // Mapeo de etiquetas a iconos
      const iconMap = {
        Conectividad: "fa-wifi",
        Asistente: "fa-microphone",
        Dimensiones: "fa-ruler-combined",
        Peso: "fa-weight-hanging",
        Potencia: "fa-bolt",
        Color: "fa-palette",
        Compatibilidad: "fa-mobile-alt",
        Garantía: "fa-shield-alt",
        "Velocidad máxima": "fa-tachometer-alt",
        Autonomía: "fa-battery-full",
        Batería: "fa-battery-three-quarters",
        "Tiempo de carga": "fa-plug",
        "Peso máximo soportado": "fa-weight",
        "Sistema operativo": "fa-cog",
        Procesador: "fa-microchip",
        RAM: "fa-memory",
        Almacenamiento: "fa-hdd",
        Resolución: "fa-tv",
        Puertos: "fa-usb",
        Tipo: "fa-headphones",
        Códecs: "fa-file-audio",
        Extras: "fa-plus-circle",
        "Tamaño de pantalla": "fa-desktop",
        Tecnología: "fa-microchip",
        HDR: "fa-adjust",
        Audio: "fa-volume-up",
        Resistencia: "fa-tint",
        // Añadir más mapeos según sea necesario
      };

      specificationsHTML = `
              <div class="specifications-list">
                  ${product.specifications
                    .map((spec) => {
                      // Determinar el icono apropiado o usar uno predeterminado
                      const iconClass = iconMap[spec.label] || "fa-info-circle";

                      return `
                          <div class="specification-item">
                              <div class="specification-label">
                                  <i class="fas ${iconClass}"></i>
                                  ${spec.label}
                              </div>
                              <div class="specification-value">${spec.value}</div>
                          </div>
                      `;
                    })
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

    // Calcular el ahorro
    const savings = product.oldPrice - product.price;
    const savingsPercentage = Math.round((savings / product.oldPrice) * 100);

    // Verificar si el producto está en favoritos
    const favorites = getFavorites();
    const isFavorite = favorites.includes(product.id);
    const heartIcon = isFavorite ? "fas fa-heart" : "far fa-heart";
    const heartTitle = isFavorite
      ? "Eliminar de favoritos"
      : "Añadir a favoritos";

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
                      <span class="product-detail-old-price">$${product.oldPrice.toFixed(
                        2
                      )}</span>
                      <span class="product-detail-discount">-${
                        product.discount
                      }%</span>
                  </div>
                  <div class="savings" style="font-size: 16px; margin-bottom: 15px;">
                      Ahorras: $${savings.toFixed(2)} (${savingsPercentage}%)
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
                      <button class="wishlist-btn toggle-favorite" data-id="${
                        product.id
                      }">
                          <i class="${heartIcon}"></i>
                      </button>
                  </div>
              </div>
          </div>

          <div class="product-specifications">
              <h3><i class="fas fa-clipboard-list"></i> Especificaciones técnicas</h3>
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

  // Funcionalidad de favoritos
  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("toggle-favorite") ||
      e.target.closest(".toggle-favorite")
    ) {
      e.preventDefault();

      // Obtener el botón o su contenedor
      const button = e.target.classList.contains("toggle-favorite")
        ? e.target
        : e.target.closest(".toggle-favorite");

      // Obtener el ID del producto
      const productId = parseInt(button.getAttribute("data-id"));

      // Obtener favoritos actuales
      let favorites = getFavorites();

      // Verificar si el producto ya está en favoritos
      const index = favorites.indexOf(productId);

      if (index === -1) {
        // Añadir a favoritos
        favorites.push(productId);
        showNotification("Producto añadido a favoritos");
      } else {
        // Eliminar de favoritos
        favorites.splice(index, 1);
        showNotification("Producto eliminado de favoritos");
      }

      // Guardar favoritos actualizados
      saveFavorites(favorites);

      // Actualizar icono del corazón
      const heartIcon = button.querySelector("i");
      if (heartIcon) {
        if (index === -1) {
          heartIcon.className = "fas fa-heart";
          button.title = "Eliminar de favoritos";
        } else {
          heartIcon.className = "far fa-heart";
          button.title = "Añadir a favoritos";
        }
      }

      // Actualizar contador de favoritos
      updateFavoritesCount();
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

  // Cuenta regresiva
  function startCountdown() {
    // Establecer la hora de finalización (final del día actual)
    const now = new Date();
    const endTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59
    );

    // Actualizar el contador cada segundo
    const countdownInterval = setInterval(function () {
      const currentTime = new Date();
      const diff = endTime - currentTime;

      // Si la cuenta regresiva ha terminado
      if (diff <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
      }

      // Calcular horas, minutos y segundos restantes
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Actualizar el DOM
      document.getElementById("hours").textContent =
        hours < 10 ? "0" + hours : hours;
      document.getElementById("minutes").textContent =
        minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").textContent =
        seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
  }

  // Iniciar la cuenta regresiva
  startCountdown();

  // Actualizar contador de favoritos al cargar la página
  updateFavoritesCount();

  // Añadir enlace a favoritos en el icono del corazón del header
  const headerFavoriteIcon = document.querySelector(".header-icon i.fa-heart");
  if (headerFavoriteIcon) {
    const headerFavoriteLink = headerFavoriteIcon.closest("a");
    if (headerFavoriteLink) {
      headerFavoriteLink.href = "favorites.html";
    }
  }
});
