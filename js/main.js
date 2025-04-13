document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Featured Products Carousel
    const carousel = document.getElementById('featuredProductsCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (carousel && prevBtn && nextBtn) {
        const cardWidth = carousel.querySelector('.product-card').offsetWidth;
        const gap = 24; // 1.5rem gap
        const scrollAmount = cardWidth + gap;
        
        prevBtn.addEventListener('click', function() {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextBtn.addEventListener('click', function() {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    
    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    
    if (addToCartButtons.length > 0 && cartCount) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                count++;
                cartCount.textContent = count;
                
                // Show notification
                const notification = document.createElement('div');
                notification.className = 'cart-notification';
                notification.innerHTML = '<i class="fas fa-check-circle"></i> Producto añadido al carrito';
                document.body.appendChild(notification);
                
                // Add styles for notification
                notification.style.position = 'fixed';
                notification.style.bottom = '20px';
                notification.style.right = '20px';
                notification.style.backgroundColor = 'var(--success-color)';
                notification.style.color = 'white';
                notification.style.padding = '10px 20px';
                notification.style.borderRadius = 'var(--border-radius)';
                notification.style.boxShadow = 'var(--box-shadow)';
                notification.style.zIndex = '1000';
                notification.style.display = 'flex';
                notification.style.alignItems = 'center';
                notification.style.gap = '10px';
                
                // Remove notification after 3 seconds
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 500);
                }, 3000);
            });
        });
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                
                // Change icon
                const icon = item.querySelector('.faq-toggle i');
                if (item.classList.contains('active')) {
                    icon.className = 'fas fa-minus';
                } else {
                    icon.className = 'fas fa-plus';
                }
            });
        });
    }
    
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            const privacy = document.getElementById('privacy');
            
            if (!name.value.trim()) {
                valid = false;
                showError(name, 'Por favor, introduce tu nombre');
            } else {
                removeError(name);
            }
            
            if (!email.value.trim()) {
                valid = false;
                showError(email, 'Por favor, introduce tu email');
            } else if (!isValidEmail(email.value)) {
                valid = false;
                showError(email, 'Por favor, introduce un email válido');
            } else {
                removeError(email);
            }
            
            if (!subject.value.trim()) {
                valid = false;
                showError(subject, 'Por favor, introduce el asunto');
            } else {
                removeError(subject);
            }
            
            if (!message.value.trim()) {
                valid = false;
                showError(message, 'Por favor, introduce tu mensaje');
            } else {
                removeError(message);
            }
            
            if (!privacy.checked) {
                valid = false;
                showError(privacy, 'Debes aceptar la política de privacidad');
            } else {
                removeError(privacy);
            }
            
            if (valid) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo pronto.';
                
                // Add styles for success message
                successMessage.style.backgroundColor = 'var(--success-color)';
                successMessage.style.color = 'white';
                successMessage.style.padding = '15px';
                successMessage.style.borderRadius = 'var(--border-radius)';
                successMessage.style.marginBottom = '20px';
                successMessage.style.display = 'flex';
                successMessage.style.alignItems = 'center';
                successMessage.style.gap = '10px';
                
                // Insert before form
                contactForm.parentNode.insertBefore(successMessage, contactForm);
                
                // Reset form
                contactForm.reset();
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.opacity = '0';
                    successMessage.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        successMessage.parentNode.removeChild(successMessage);
                    }, 500);
                }, 5000);
            }
        });
    }
    
    // Helper functions for form validation
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message') || document.createElement('div');
        
        if (!formGroup.querySelector('.error-message')) {
            errorMessage.className = 'error-message';
            formGroup.appendChild(errorMessage);
        }
        
        errorMessage.textContent = message;
        errorMessage.style.color = 'var(--danger-color)';
        errorMessage.style.fontSize = '0.8rem';
        errorMessage.style.marginTop = '5px';
        
        input.style.borderColor = 'var(--danger-color)';
    }
    
    function removeError(input) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');
        
        if (errorMessage) {
            formGroup.removeChild(errorMessage);
        }
        
        input.style.borderColor = 'var(--light-gray-color)';
    }
    
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Product Filters
    const priceSlider = document.getElementById('price-slider');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    
    if (priceSlider && minPrice && maxPrice) {
        priceSlider.addEventListener('input', function() {
            maxPrice.value = this.value;
        });
        
        minPrice.addEventListener('input', function() {
            if (parseInt(this.value) > parseInt(maxPrice.value)) {
                this.value = maxPrice.value;
            }
        });
        
        maxPrice.addEventListener('input', function() {
            if (parseInt(this.value) < parseInt(minPrice.value)) {
                this.value = minPrice.value;
            }
            priceSlider.value = this.value;
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                alert('Por favor, introduce un email válido');
                return;
            }
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> ¡Gracias por suscribirte a nuestro boletín!';
            
            // Add styles for success message
            successMessage.style.backgroundColor = 'var(--success-color)';
            successMessage.style.color = 'white';
            successMessage.style.padding = '15px';
            successMessage.style.borderRadius = 'var(--border-radius)';
            successMessage.style.marginTop = '20px';
            successMessage.style.display = 'flex';
            successMessage.style.alignItems = 'center';
            successMessage.style.gap = '10px';
            
            // Insert after form
            newsletterForm.parentNode.insertBefore(successMessage, newsletterForm.nextSibling);
            
            // Reset form
            newsletterForm.reset();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                successMessage.style.opacity = '0';
                successMessage.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    successMessage.parentNode.removeChild(successMessage);
                }, 500);
            }, 5000);
        });
    }
});