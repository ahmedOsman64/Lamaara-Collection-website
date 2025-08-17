// Product Data
const products = [
    // Handbags
    {
        id: 1,
        name: "Elegant Rose Gold Tote Bag",
        category: "handbags",
        price: 89.99,
        description: "Beautiful rose gold tote bag perfect for everyday use",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&crop=center",
        featured: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 2,
        name: "Mini Crossbody Purse",
        category: "handbags",
        price: 45.99,
        description: "Compact crossbody bag with adjustable strap",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=400&h=400&fit=crop&crop=center",
        featured: true,
        bestSeller: true,
        newArrival: true
    },
    {
        id: 3,
        name: "Designer Wallet",
        category: "handbags",
        price: 32.99,
        description: "Elegant wallet with multiple card slots",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&crop=center",
        featured: false,
        bestSeller: false,
        newArrival: false
    },
    {
        id: 4,
        name: "Evening Clutch",
        category: "handbags",
        price: 65.99,
        description: "Perfect clutch for special occasions",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    // Sunglasses
    {
        id: 5,
        name: "Rose Gold Aviator Sunglasses",
        category: "sunglasses",
        price: 78.99,
        description: "Stylish aviator sunglasses with rose gold frame",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&crop=center",
        featured: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 6,
        name: "Cat Eye Fashion Glasses",
        category: "sunglasses",
        price: 92.99,
        description: "Trendy cat eye sunglasses for a bold look",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    {
        id: 7,
        name: "Round Vintage Sunglasses",
        category: "sunglasses",
        price: 68.99,
        description: "Classic round frame sunglasses",
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    // Jewelry
    {
        id: 8,
        name: "Rose Gold Necklace Set",
        category: "jewelry",
        price: 125.99,
        description: "Elegant necklace and earring set",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center",
        featured: true,
        bestSeller: true,
        newArrival: false
    },
    {
        id: 9,
        name: "Pearl Bracelet",
        category: "jewelry",
        price: 45.99,
        description: "Delicate pearl bracelet with rose gold clasp",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    {
        id: 10,
        name: "Statement Ring",
        category: "jewelry",
        price: 38.99,
        description: "Bold statement ring with crystal details",
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2b9?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    {
        id: 11,
        name: "Anklet Collection",
        category: "jewelry",
        price: 28.99,
        description: "Dainty anklet perfect for summer",
        image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    // Hair Accessories
    {
        id: 12,
        name: "Rose Gold Hair Clips Set",
        category: "hair-accessories",
        price: 18.99,
        description: "Set of 6 elegant hair clips",
        image: "https://images.unsplash.com/photo-1522338146-1115d7d6b0b9?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    {
        id: 13,
        name: "Silk Scrunchies",
        category: "hair-accessories",
        price: 12.99,
        description: "Soft silk scrunchies in various colors",
        image: "https://images.unsplash.com/photo-1552642084-9b0c0c0c0c0c?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    {
        id: 14,
        name: "Crystal Hair Pins",
        category: "hair-accessories",
        price: 22.99,
        description: "Beautiful crystal hair pins for special occasions",
        image: "https://images.unsplash.com/photo-1605496036008-38a51ea3ad70?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    // Scarves
    {
        id: 15,
        name: "Silk Hijab Scarf",
        category: "scarves",
        price: 35.99,
        description: "Elegant silk scarf with beautiful patterns",
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    {
        id: 16,
        name: "Hijab Pins Set",
        category: "scarves",
        price: 15.99,
        description: "Set of decorative hijab pins",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    // Perfumes
    {
        id: 17,
        name: "Rose Gold Perfume Spray",
        category: "perfumes",
        price: 85.99,
        description: "Luxurious rose gold perfume with elegant packaging",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center",
        featured: true,
        bestSeller: false,
        newArrival: true
    },
    {
        id: 18,
        name: "Floral Body Mist",
        category: "perfumes",
        price: 28.99,
        description: "Light floral body mist for everyday use",
        image: "https://images.unsplash.com/photo-1592945403244-b3faa5b613b0?w=400&h=400&fit=crop&crop=center",
        featured: false
    },
    // Gift Sets
    {
        id: 19,
        name: "Luxury Gift Set",
        category: "gift-sets",
        price: 199.99,
        description: "Complete gift set with bag, jewelry, and perfume",
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=400&fit=crop&crop=center",
        featured: true,
        bestSeller: false,
        newArrival: true
    },
    {
        id: 20,
        name: "Beauty Essentials Kit",
        category: "gift-sets",
        price: 149.99,
        description: "Essential beauty accessories in elegant packaging",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center",
        featured: false
    }
];

// Cart functionality
let cart = [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentSlideIndex = 0;

// DOM Elements
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeModal = document.getElementById('close-modal');
const checkoutForm = document.getElementById('checkout-form');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const productsGrid = document.getElementById('products-grid');
const featuredProducts = document.getElementById('featured-products');
const bestSellers = document.getElementById('best-sellers');
const newArrivalsGrid = document.getElementById('new-arrivals-grid');
const newsletterForm = document.getElementById('newsletter-form');
const contactForm = document.getElementById('contact-form');
const quickViewModal = document.getElementById('quick-view-modal');
const closeQuickView = document.getElementById('close-quick-view');
const sizeGuideModal = document.getElementById('size-guide-modal');
const closeSizeGuide = document.getElementById('close-size-guide');
const liveChatBtn = document.getElementById('live-chat-btn');
const giftWrappingCheckbox = document.getElementById('gift-wrapping');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize missing properties for all products
    products.forEach(product => {
        if (product.bestSeller === undefined) product.bestSeller = false;
        if (product.newArrival === undefined) product.newArrival = false;
    });
    
    loadFeaturedProducts();
    loadBestSellers();
    loadNewArrivals();
    loadAllProducts();
    loadInstagramFeed();
    setupEventListeners();
    updateCartDisplay();
    startPromoSlider();
    updateWishlistButtons();
});

// Setup Event Listeners
function setupEventListeners() {
    // Cart functionality
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', openCheckoutModal);
    closeModal.addEventListener('click', closeCheckoutModal);
    
    // Quick view and size guide
    closeQuickView.addEventListener('click', closeQuickViewModal);
    closeSizeGuide.addEventListener('click', closeSizeGuideModal);
    
    // Live chat
    liveChatBtn.addEventListener('click', openLiveChat);
    
    // Mobile menu
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProducts(category);
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Form submissions
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    contactForm.addEventListener('submit', handleContactSubmit);
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
            cartSidebar.classList.remove('open');
        }
    });
    
    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target === checkoutModal) {
            closeCheckoutModal();
        }
        if (e.target === quickViewModal) {
            closeQuickViewModal();
        }
        if (e.target === sizeGuideModal) {
            closeSizeGuideModal();
        }
    });
}

// Load Featured Products
function loadFeaturedProducts() {
    const featured = products.filter(product => product.featured);
    featuredProducts.innerHTML = featured.map(product => createProductCard(product)).join('');
}

// Load All Products
function loadAllProducts() {
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Load Best Sellers
function loadBestSellers() {
    const bestSellersList = products.filter(product => product.bestSeller);
    bestSellers.innerHTML = bestSellersList.map(product => createProductCard(product)).join('');
}

// Load New Arrivals
function loadNewArrivals() {
    const newArrivalsList = products.filter(product => product.newArrival);
    newArrivalsGrid.innerHTML = newArrivalsList.map(product => createProductCard(product)).join('');
}

// Load Instagram Feed
function loadInstagramFeed() {
    const instagramGrid = document.getElementById('instagram-grid');
    const instagramPosts = [
        { image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop', likes: '1.2k' },
        { image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop', likes: '856' },
        { image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop', likes: '2.1k' },
        { image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', likes: '943' },
        { image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop', likes: '1.5k' },
        { image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop', likes: '1.8k' }
    ];
    
    instagramGrid.innerHTML = instagramPosts.map(post => `
        <div class="instagram-post">
            <img src="${post.image}" alt="Instagram Post" loading="lazy">
            <div class="instagram-overlay">
                <div class="instagram-stats">
                    <i class="fas fa-heart"></i>
                    <span>${post.likes}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Create Product Card
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="openQuickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="wishlist-btn" onclick="toggleWishlist(${product.id})" data-product-id="${product.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-details">
                <div class="product-category">${product.category.replace('-', ' ')}</div>
                <h3>${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                    <button class="quick-view-btn-small" onclick="openQuickView(${product.id})">
                        Quick View
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showNotification('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    showNotification('Product removed from cart!');
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
        }
    }
}

function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'">
            </div>
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-item">&times;</button>
        </div>
    `).join('');
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
}

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(productId);
        showNotification('Added to wishlist');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistButtons();
}

function updateWishlistButtons() {
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        const productId = parseInt(btn.dataset.productId);
        if (wishlist.includes(productId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Quick View Functions
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const quickViewBody = document.getElementById('quick-view-body');
    quickViewBody.innerHTML = `
        <div class="quick-view-product">
            <div class="quick-view-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="quick-view-details">
                <h3>${product.name}</h3>
                <div class="product-category">${product.category.replace('-', ' ')}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <p class="product-description">${product.description}</p>
                <div class="quick-view-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id}); closeQuickViewModal();">
                        Add to Cart
                    </button>
                    <button class="wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="product-info-links">
                    <button class="size-guide-link" onclick="openSizeGuide()">Size Guide</button>
                    <button class="care-instructions-link" onclick="showCareInstructions()">Care Instructions</button>
                </div>
            </div>
        </div>
    `;
    
    quickViewModal.classList.add('show');
}

function closeQuickViewModal() {
    quickViewModal.classList.remove('show');
}

function openSizeGuide() {
    closeQuickViewModal();
    sizeGuideModal.classList.add('show');
    loadSizeGuide('rings');
}

function closeSizeGuideModal() {
    sizeGuideModal.classList.remove('show');
}

function loadSizeGuide(type) {
    const sizeTable = document.getElementById('size-table');
    const sizeGuides = {
        rings: {
            title: 'Ring Sizes',
            headers: ['US Size', 'UK Size', 'EU Size', 'Diameter (mm)'],
            data: [
                ['6', 'L', '52', '16.5'],
                ['7', 'M', '54', '17.3'],
                ['8', 'N', '56', '18.2'],
                ['9', 'O', '58', '19.0'],
                ['10', 'P', '60', '19.8']
            ]
        },
        necklaces: {
            title: 'Necklace Lengths',
            headers: ['Length', 'Style', 'Best For'],
            data: [
                ['16"', 'Choker', 'Petite frames'],
                ['18"', 'Princess', 'Most necklines'],
                ['20"', 'Matinee', 'Business wear'],
                ['24"', 'Opera', 'Evening wear'],
                ['30"', 'Rope', 'Layered looks']
            ]
        },
        bags: {
            title: 'Bag Sizes',
            headers: ['Size', 'Dimensions', 'Best For'],
            data: [
                ['Mini', '8" x 6" x 2"', 'Evening out'],
                ['Small', '10" x 8" x 3"', 'Daily use'],
                ['Medium', '12" x 10" x 4"', 'Work/office'],
                ['Large', '15" x 12" x 5"', 'Travel/weekend']
            ]
        }
    };
    
    const guide = sizeGuides[type];
    sizeTable.innerHTML = `
        <h4>${guide.title}</h4>
        <table class="size-table-content">
            <thead>
                <tr>${guide.headers.map(h => `<th>${h}</th>`).join('')}</tr>
            </thead>
            <tbody>
                ${guide.data.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
            </tbody>
        </table>
    `;
}

function showCareInstructions() {
    showNotification('Care Instructions: Clean with soft cloth, avoid chemicals, store in dry place');
}

// Live Chat Function
function openLiveChat() {
    const phoneNumber = '252612652151'; // WhatsApp number for Lamaara Collection
    const message = 'Hi! I have a question about your products.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Promotional Slider Functions
function startPromoSlider() {
    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % 3;
        showSlide(currentSlideIndex + 1);
    }, 5000);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.promo-slide');
    const dots = document.querySelectorAll('.dot');
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[n - 1].classList.add('active');
    dots[n - 1].classList.add('active');
}

function currentSlide(n) {
    currentSlideIndex = n - 1;
    showSlide(n);
}

// Search Functionality
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        loadAllProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

// Filter Functionality
function filterProducts(category) {
    if (category === 'all') {
        loadAllProducts();
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Mobile Menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Modal Functions
function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    checkoutModal.classList.add('show');
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('show');
}

// Form Handlers
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate newsletter subscription
    showNotification('Thank you for subscribing to our newsletter!');
    e.target.reset();
}

function handleContactSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Simulate form submission
    showNotification('Thank you for your message! We will get back to you soon.');
    e.target.reset();
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const giftWrapping = giftWrappingCheckbox.checked;
    
    // Calculate total with gift wrapping
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (giftWrapping) {
        total += 5.00;
    }
    
    // Simulate order placement
    const message = giftWrapping ? 
        'Order placed successfully! Your items will be gift-wrapped. Thank you for your purchase.' :
        'Order placed successfully! Thank you for your purchase.';
    showNotification(message);
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    
    // Close modal and reset form
    closeCheckoutModal();
    e.target.reset();
    giftWrappingCheckbox.checked = false;
}

// Utility Functions
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--rose-gold);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: var(--shadow);
        z-index: 1003;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.product-card, .review-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
