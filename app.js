// Aadhya Jewellery E-commerce Website JavaScript

// Product data from the provided JSON
const productData = [
  {
    id: 1,
    name: "Royal Kundan Necklace Set",
    category: "Necklaces",
    price: 2499,
    originalPrice: 3199,
    discount: 22,
    rating: 4.8,
    reviews: 45,
    description: "Exquisite kundan necklace set with matching earrings, perfect for weddings and special occasions.",
    features: ["Premium kundan stones", "Gold-plated finish", "Adjustable chain", "Matching earrings included"],
    inStock: true,
    bestseller: true
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    category: "Earrings",
    price: 799,
    originalPrice: 1099,
    discount: 27,
    rating: 4.6,
    reviews: 32,
    description: "Elegant pearl drop earrings that add sophistication to any outfit.",
    features: ["Natural-looking pearls", "Lightweight design", "Hypoallergenic", "Anti-tarnish coating"],
    inStock: true,
    bestseller: true
  },
  {
    id: 3,
    name: "Traditional Choker Set",
    category: "Necklaces",
    price: 1899,
    originalPrice: 2399,
    discount: 21,
    rating: 4.9,
    reviews: 67,
    description: "Beautiful traditional choker with intricate design work and matching earrings.",
    features: ["Intricate design", "Comfortable fit", "Traditional motifs", "Matching earrings"],
    inStock: true,
    bestseller: true
  },
  {
    id: 4,
    name: "Rose Gold Bangles Set",
    category: "Bracelets",
    price: 1299,
    originalPrice: 1699,
    discount: 24,
    rating: 4.5,
    reviews: 28,
    description: "Set of 4 rose gold bangles with delicate patterns and smooth finish.",
    features: ["Set of 4 bangles", "Rose gold plating", "Smooth finish", "Multiple sizes available"],
    inStock: true,
    bestseller: false
  },
  {
    id: 5,
    name: "Bridal Maang Tikka",
    category: "Bridal Sets",
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.7,
    reviews: 38,
    description: "Stunning bridal maang tikka with kundan and pearl detailing.",
    features: ["Bridal collection", "Kundan & pearl work", "Adjustable chain", "Premium quality"],
    inStock: true,
    bestseller: true
  },
  {
    id: 6,
    name: "Statement Ring Collection",
    category: "Rings",
    price: 599,
    originalPrice: 799,
    discount: 25,
    rating: 4.4,
    reviews: 22,
    description: "Set of 3 statement rings with different designs and stones.",
    features: ["Set of 3 rings", "Adjustable sizes", "Mixed stone designs", "Trendy styles"],
    inStock: true,
    bestseller: false
  },
  {
    id: 7,
    name: "Chandbali Earrings",
    category: "Earrings",
    price: 1199,
    originalPrice: 1599,
    discount: 25,
    rating: 4.8,
    reviews: 41,
    description: "Classic chandbali earrings with intricate work and dangling pearls.",
    features: ["Traditional chandbali design", "Pearl drops", "Lightweight", "Secure closures"],
    inStock: true,
    bestseller: true
  },
  {
    id: 8,
    name: "Antique Gold Chain",
    category: "Necklaces",
    price: 1699,
    originalPrice: 2199,
    discount: 23,
    rating: 4.6,
    reviews: 35,
    description: "Long antique gold chain perfect for layering or wearing alone.",
    features: ["Antique finish", "Adjustable length", "Durable chain", "Vintage look"],
    inStock: true,
    bestseller: false
  },
  {
    id: 9,
    name: "Temple Jewellery Set",
    category: "Necklaces",
    price: 2199,
    originalPrice: 2899,
    discount: 24,
    rating: 4.9,
    reviews: 52,
    description: "Traditional temple jewellery set with goddess motifs and rich detailing.",
    features: ["Temple design", "Goddess motifs", "Rich gold plating", "Complete set"],
    inStock: true,
    bestseller: true
  },
  {
    id: 10,
    name: "Modern Hoop Earrings",
    category: "Earrings",
    price: 699,
    originalPrice: 999,
    discount: 30,
    rating: 4.3,
    reviews: 26,
    description: "Trendy hoop earrings with modern design and comfortable fit.",
    features: ["Modern design", "Comfortable hoops", "Multiple sizes", "Daily wear friendly"],
    inStock: true,
    bestseller: false
  },
  {
    id: 11,
    name: "Delicate Chain Bracelet",
    category: "Bracelets",
    price: 799,
    originalPrice: 1099,
    discount: 27,
    rating: 4.5,
    reviews: 29,
    description: "Delicate chain bracelet with heart charm and adjustable length.",
    features: ["Heart charm", "Adjustable length", "Delicate design", "Rose gold finish"],
    inStock: true,
    bestseller: false
  },
  {
    id: 12,
    name: "Bridal Necklace Set",
    category: "Bridal Sets",
    price: 3299,
    originalPrice: 4199,
    discount: 21,
    rating: 4.9,
    reviews: 73,
    description: "Complete bridal necklace set with matching earrings and maang tikka.",
    features: ["Complete bridal set", "3-piece collection", "Premium stones", "Luxury packaging"],
    inStock: true,
    bestseller: true
  },
  {
    id: 13,
    name: "Anklet with Bells",
    category: "Accessories",
    price: 499,
    originalPrice: 699,
    discount: 29,
    rating: 4.4,
    reviews: 18,
    description: "Traditional anklet with small bells and adjustable chain.",
    features: ["Traditional bells", "Adjustable size", "Silver plating", "Comfortable wear"],
    inStock: true,
    bestseller: false
  },
  {
    id: 14,
    name: "Cocktail Ring Set",
    category: "Rings",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    rating: 4.6,
    reviews: 24,
    description: "Set of 2 cocktail rings with large statement stones.",
    features: ["Set of 2 rings", "Large statement stones", "Party wear", "Adjustable sizes"],
    inStock: true,
    bestseller: false
  },
  {
    id: 15,
    name: "Hair Chain Accessory",
    category: "Accessories",
    price: 699,
    originalPrice: 999,
    discount: 30,
    rating: 4.2,
    reviews: 15,
    description: "Elegant hair chain with pearls and crystals for special occasions.",
    features: ["Hair accessory", "Pearl & crystal work", "Adjustable fit", "Special occasions"],
    inStock: true,
    bestseller: false
  }
];

// Global variables
let currentPage = 'home';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let filteredProducts = [...productData];
let currentTestimonial = 0;
let searchQuery = '';
let currentSort = 'popularity';
let currentCategory = '';
let maxPrice = 5000;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen briefly
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
        }
    }, 1500);

    // Initialize all components
    initializeNavigation();
    initializeSearch();
    initializeTestimonialsSlider();
    initializeBackToTop();
    initializeChatWidget();
    initializeProductFilters();
    initializeForms();
    loadBestsellers();
    updateCartDisplay();
    updateWishlistDisplay();
    
    // Show home page by default
    showPage('home');
});

// Navigation system
function initializeNavigation() {
    // Handle mobile menu toggle
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
}

function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Load page-specific content
        switch(pageName) {
            case 'products':
                loadProducts();
                break;
            case 'cart':
                loadCart();
                break;
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('search-input');
    searchQuery = searchInput.value.toLowerCase().trim();
    
    if (searchQuery) {
        showPage('products');
        filterProducts();
        showToast(`Searching for "${searchQuery}"...`, 'success');
    }
}

// Product filtering and sorting
function initializeProductFilters() {
    const categoryFilter = document.getElementById('category-filter');
    const priceRange = document.getElementById('price-range');
    const priceDisplay = document.getElementById('price-display');
    const sortSelect = document.getElementById('sort-select');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            currentCategory = e.target.value;
            filterProducts();
        });
    }
    
    if (priceRange) {
        priceRange.addEventListener('input', (e) => {
            maxPrice = parseInt(e.target.value);
            if (priceDisplay) {
                priceDisplay.textContent = `₹0 - ₹${maxPrice}`;
            }
            filterProducts();
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            filterProducts();
        });
    }
}

function filterByCategory(category) {
    currentCategory = category;
    showPage('products');
    
    // Update the category filter dropdown
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.value = category;
    }
    
    filterProducts();
}

function filterProducts() {
    filteredProducts = productData.filter(product => {
        const matchesSearch = !searchQuery || 
            product.name.toLowerCase().includes(searchQuery) ||
            product.description.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery);
        
        const matchesCategory = !currentCategory || product.category === currentCategory;
        const matchesPrice = product.price <= maxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    // Sort products
    switch(currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default: // popularity
            filteredProducts.sort((a, b) => {
                if (a.bestseller && !b.bestseller) return -1;
                if (!a.bestseller && b.bestseller) return 1;
                return b.reviews - a.reviews;
            });
    }
    
    loadProducts();
}

// Product display functions
function loadBestsellers() {
    const bestsellers = productData.filter(product => product.bestseller).slice(0, 8);
    const grid = document.getElementById('bestsellers-grid');
    
    if (grid) {
        grid.innerHTML = bestsellers.map(product => createProductCard(product)).join('');
    }
}

function loadProducts() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms.</p>
                <button class="btn btn--primary" onclick="clearFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    const isInWishlist = wishlist.includes(product.id);
    const stars = '⭐'.repeat(Math.floor(product.rating));
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <div class="product-placeholder">${getProductIcon(product.category)} ${product.name.split(' ')[0]}</div>
                ${product.discount ? `<div class="discount-badge">${product.discount}% OFF</div>` : ''}
                ${product.bestseller ? `<div class="bestseller-badge">BESTSELLER</div>` : ''}
                <div class="product-actions">
                    <button class="action-btn" onclick="event.stopPropagation(); quickView(${product.id})" title="Quick View">👁️</button>
                    <button class="action-btn ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Add to Wishlist">❤️</button>
                </div>
            </div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-pricing">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="product-actions-bottom">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                    <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})">❤️</button>
                </div>
            </div>
        </div>
    `;
}

function getProductIcon(category) {
    const icons = {
        'Necklaces': '📿',
        'Earrings': '💎',
        'Bracelets': '🔗',
        'Rings': '💍',
        'Bridal Sets': '👑',
        'Accessories': '✨'
    };
    return icons[category] || '💎';
}

function clearFilters() {
    currentCategory = '';
    searchQuery = '';
    maxPrice = 5000;
    currentSort = 'popularity';
    
    // Reset form controls
    const categoryFilter = document.getElementById('category-filter');
    const priceRange = document.getElementById('price-range');
    const priceDisplay = document.getElementById('price-display');
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('search-input');
    
    if (categoryFilter) categoryFilter.value = '';
    if (priceRange) priceRange.value = 5000;
    if (priceDisplay) priceDisplay.textContent = '₹0 - ₹5000';
    if (sortSelect) sortSelect.value = 'popularity';
    if (searchInput) searchInput.value = '';
    
    filterProducts();
}

// Product detail functionality
function quickView(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('quick-view-modal');
    const content = document.getElementById('quick-view-content');
    
    content.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-gallery">
                <div class="main-image">${getProductIcon(product.category)} ${product.name.split(' ')[0]}</div>
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-pricing">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    <h4>Features:</h4>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="quantity-selector">
                    <label>Quantity:</label>
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" id="quick-view-quantity">
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
                <div class="product-actions">
                    <button class="btn btn--primary" onclick="addToCartWithQuantity(${product.id})">Add to Cart</button>
                    <button class="btn btn--outline" onclick="showProductDetail(${product.id})">View Details</button>
                </div>
            </div>
        </div>
    `;
    
    showModal('quick-view-modal');
}

function showProductDetail(productId) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;
    
    // Close any open modals
    closeModal('quick-view-modal');
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('product-breadcrumb');
    if (breadcrumb) {
        breadcrumb.textContent = product.name;
    }
    
    // Load product detail content
    const content = document.getElementById('product-detail-content');
    content.innerHTML = `
        <div class="product-detail-grid">
            <div class="product-gallery">
                <div class="main-image">${getProductIcon(product.category)} ${product.name.split(' ')[0]}</div>
                <div class="thumbnail-images">
                    <div class="thumbnail active">${getProductIcon(product.category)}</div>
                    <div class="thumbnail">${getProductIcon(product.category)}</div>
                    <div class="thumbnail">${getProductIcon(product.category)}</div>
                </div>
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <div class="product-rating">
                    <span class="stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                </div>
                <div class="product-pricing">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-features">
                    <h4>Features:</h4>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-options">
                    <div class="option-group">
                        <label>Size:</label>
                        <div class="size-options">
                            <div class="size-option selected" onclick="selectSize(this)">Regular</div>
                            <div class="size-option" onclick="selectSize(this)">Large</div>
                        </div>
                    </div>
                </div>
                <div class="quantity-selector">
                    <label>Quantity:</label>
                    <button class="quantity-btn" onclick="changeQuantity(-1)">-</button>
                    <input type="number" class="quantity-input" value="1" min="1" id="detail-quantity">
                    <button class="quantity-btn" onclick="changeQuantity(1)">+</button>
                </div>
                <div class="product-actions">
                    <button class="btn btn--primary" onclick="addToCartWithQuantity(${product.id})">Add to Cart</button>
                    <button class="btn btn--outline" onclick="toggleWishlist(${product.id})">Add to Wishlist</button>
                </div>
            </div>
        </div>
        
        <div class="related-products" style="margin-top: 3rem;">
            <h3>Related Products</h3>
            <div class="products-grid">
                ${getRelatedProducts(product).map(p => createProductCard(p)).join('')}
            </div>
        </div>
    `;
    
    showPage('product-detail');
}

function selectSize(element) {
    // Remove selected class from all size options
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.remove('selected');
    });
    // Add selected class to clicked option
    element.classList.add('selected');
}

function getRelatedProducts(product) {
    return productData
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
}

function changeQuantity(delta) {
    const input = document.querySelector('.quantity-input');
    if (input) {
        const newValue = Math.max(1, parseInt(input.value) + delta);
        input.value = newValue;
    }
}

// Cart functionality
function addToCart(productId) {
    addToCartWithQuantity(productId, 1);
}

function addToCartWithQuantity(productId, customQuantity = null) {
    const product = productData.find(p => p.id === productId);
    if (!product) return;
    
    let quantity = customQuantity;
    if (quantity === null) {
        const quantityInput = document.querySelector('.quantity-input');
        quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showToast(`${product.name} added to cart!`, 'success');
    
    // Close modal if open
    closeModal('quick-view-modal');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    loadCart();
    showToast('Item removed from cart', 'success');
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            loadCart();
        }
    }
}

function updateCartDisplay() {
    const cartLink = document.getElementById('cart-link');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartLink) {
        cartLink.textContent = totalItems > 0 ? `🛒 Cart (${totalItems})` : '🛒 Cart';
    }
}

function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    
    if (!cartItems || !cartSummary) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty" style="text-align: center; padding: 3rem;">
                <h3>Your cart is empty</h3>
                <p>Start shopping to add items to your cart!</p>
                <button class="btn btn--primary" onclick="showPage('products')">Shop Now</button>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }
    
    let subtotal = 0;
    
    cartItems.innerHTML = cart.map(item => {
        const product = productData.find(p => p.id === item.id);
        if (!product) return '';
        
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">${getProductIcon(product.category)} ${product.name.split(' ')[0]}</div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${product.name}</h4>
                    <p class="cart-item-price">₹${product.price.toLocaleString()} each</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity(${product.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${product.id}, ${item.quantity + 1})">+</button>
                        <button class="btn btn--outline btn--sm" onclick="removeFromCart(${product.id})" style="margin-left: auto;">Remove</button>
                    </div>
                </div>
                <div class="cart-item-total">
                    <strong>₹${itemTotal.toLocaleString()}</strong>
                </div>
            </div>
        `;
    }).join('');
    
    const shipping = subtotal >= 1999 ? 0 : 99;
    const total = subtotal + shipping;
    
    cartSummary.innerHTML = `
        <h3>Order Summary</h3>
        <div class="summary-row">
            <span>Subtotal:</span>
            <span>₹${subtotal.toLocaleString()}</span>
        </div>
        <div class="summary-row">
            <span>Shipping:</span>
            <span>${shipping === 0 ? 'Free' : '₹' + shipping}</span>
        </div>
        <div class="summary-row summary-total">
            <span>Total:</span>
            <span>₹${total.toLocaleString()}</span>
        </div>
        
        <div class="coupon-section">
            <h4>Have a coupon?</h4>
            <div class="coupon-form">
                <input type="text" placeholder="Enter coupon code" id="coupon-input">
                <button onclick="applyCoupon()">Apply</button>
            </div>
        </div>
        
        <button class="btn btn--primary btn--full-width" onclick="proceedToCheckout()">Proceed to Checkout</button>
        <button class="btn btn--outline btn--full-width" onclick="showPage('products')" style="margin-top: 12px;">Continue Shopping</button>
    `;
}

function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const code = couponInput.value.trim().toUpperCase();
    
    if (code === 'FESTIVE25') {
        showToast('Coupon applied! 25% discount added.', 'success');
    } else if (code === 'FESTIVE20') {
        showToast('Coupon applied! 20% discount added.', 'success');
    } else {
        showToast('Invalid coupon code', 'error');
    }
}

function proceedToCheckout() {
    showToast('Redirecting to checkout...', 'success');
    setTimeout(() => {
        alert('Checkout functionality would be implemented here.\n\nThis would typically redirect to a secure payment gateway.');
    }, 1000);
}

// Wishlist functionality
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const product = productData.find(p => p.id === productId);
    
    if (index === -1) {
        wishlist.push(productId);
        showToast(`${product.name} added to wishlist!`, 'success');
    } else {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from wishlist`, 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistDisplay();
    
    // Update wishlist buttons
    document.querySelectorAll(`[onclick*="toggleWishlist(${productId})"]`).forEach(btn => {
        btn.classList.toggle('active', wishlist.includes(productId));
    });
}

function updateWishlistDisplay() {
    // Update any wishlist counters if needed
}

function showWishlist() {
    const modal = document.getElementById('wishlist-modal');
    const content = document.getElementById('wishlist-content');
    
    if (wishlist.length === 0) {
        content.innerHTML = `
            <div class="cart-empty" style="text-align: center; padding: 2rem;">
                <h3>Your wishlist is empty</h3>
                <p>Start adding products you love!</p>
                <button class="btn btn--primary" onclick="closeModal('wishlist-modal'); showPage('products')">Shop Now</button>
            </div>
        `;
    } else {
        const wishlistProducts = wishlist.map(id => productData.find(p => p.id === id)).filter(Boolean);
        content.innerHTML = `
            <div class="products-grid">
                ${wishlistProducts.map(product => createProductCard(product)).join('')}
            </div>
        `;
    }
    
    showModal('wishlist-modal');
}

// Testimonials slider
function initializeTestimonialsSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    
    if (!slides.length) return;
    
    let autoSlideInterval;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentTestimonial = (currentTestimonial + 1) % slides.length;
        showSlide(currentTestimonial);
    }
    
    function prevSlide() {
        currentTestimonial = (currentTestimonial - 1 + slides.length) % slides.length;
        showSlide(currentTestimonial);
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
    }
    
    // Pause on hover
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    }
    
    startAutoSlide();
}

// Form handling
function initializeForms() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
        showToast('Please fill in all required fields', 'error');
        return;
    }
    
    // Simulate form submission
    showToast('Sending message...', 'success');
    
    setTimeout(() => {
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
        e.target.reset();
    }, 2000);
}

function handleNewsletterForm(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (!email) {
        showToast('Please enter your email address', 'error');
        return;
    }
    
    showToast('Subscribing...', 'success');
    
    setTimeout(() => {
        showToast('Successfully subscribed to our newsletter!', 'success');
        e.target.reset();
    }, 1000);
}

// Modal functionality
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Toast notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    container.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (container.contains(toast)) {
                container.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Back to top functionality
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Chat widget functionality
function initializeChatWidget() {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    
    if (chatToggle) {
        chatToggle.addEventListener('click', toggleChat);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
}

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
        chatWindow.classList.toggle('hidden');
    }
}

function sendChatMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !chatMessages) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(userMessage);
    
    chatInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'chat-message bot';
        botMessage.innerHTML = `<p>Thank you for your message! Our team will help you with "${message}". In the meantime, feel free to browse our beautiful jewellery collection! 💎</p>`;
        chatMessages.appendChild(botMessage);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Product card click handlers
document.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    if (productCard && !e.target.closest('button') && !e.target.closest('.product-actions')) {
        const productId = parseInt(productCard.dataset.productId);
        showProductDetail(productId);
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)';
        }
    }
});

// Intersection Observer for animations
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements when they're added to the DOM
    const observeElements = () => {
        document.querySelectorAll('.product-card, .category-card, .feature-item').forEach(el => {
            if (!el.classList.contains('observed')) {
                el.classList.add('observed');
                observer.observe(el);
            }
        });
    };
    
    // Initial observation
    setTimeout(observeElements, 100);
    
    // Re-observe when content changes
    const contentObserver = new MutationObserver(observeElements);
    contentObserver.observe(document.body, { childList: true, subtree: true });
}

// Export functions for global access
window.showPage = showPage;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.toggleWishlist = toggleWishlist;
window.showWishlist = showWishlist;
window.quickView = quickView;
window.showProductDetail = showProductDetail;
window.filterByCategory = filterByCategory;
window.clearFilters = clearFilters;
window.showModal = showModal;
window.closeModal = closeModal;
window.toggleChat = toggleChat;
window.sendChatMessage = sendChatMessage;
window.applyCoupon = applyCoupon;
window.proceedToCheckout = proceedToCheckout;
window.changeQuantity = changeQuantity;
window.addToCartWithQuantity = addToCartWithQuantity;
window.selectSize = selectSize;