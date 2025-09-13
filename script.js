// Product data with real images
const products = [
    {
        id: 1,
        brand: 'CHANEL',
        name: 'Classic Flap Bag Medium',
        price: 8500,
        category: 'Bags',
        badge: 'ICONIC',
        image: 'images/18092363_38341574_1000.jpg',
        description: 'Timeless elegance in quilted leather with gold-tone hardware'
    },
    {
        id: 2,
        brand: 'GUCCI',
        name: 'Dionysus GG Supreme',
        price: 3200,
        category: 'Bags',
        badge: 'NEW ARRIVAL',
        image: 'images/20049697_50886154_1000.jpg',
        description: 'Iconic GG canvas with tiger head closure'
    },
    {
        id: 3,
        brand: 'LOUIS VUITTON',
        name: 'Neverfull MM Tote',
        price: 2050,
        category: 'Bags',
        badge: 'BESTSELLER',
        image: 'images/19261636_42271623_2048.png',
        description: 'Spacious monogram canvas tote with leather trim'
    },
    {
        id: 4,
        brand: 'VALENTINO',
        name: 'Rockstud Satin Ballerina',
        price: 950,
        category: 'Shoes',
        badge: 'EXCLUSIVE',
        image: 'images/ROCKSTUD-SATIN-BALLERINAn.jpg',
        description: 'Signature studded ballerinas in luxe satin'
    },
    {
        id: 5,
        brand: 'DIOR',
        name: 'Lady Dior Medium',
        price: 6500,
        category: 'Bags',
        badge: 'LIMITED',
        image: 'images/21553836_51561235_1000.jpg',
        description: 'Cannage quilted leather with Dior charms'
    },
    {
        id: 6,
        brand: 'DOLCE & GABBANA',
        name: 'Logo Jacquard Sweater',
        price: 2450,
        category: 'Ready-to-Wear',
        badge: 'RUNWAY',
        image: 'images/dolce-gabbana-logo-detail-jacquard-sweater-black-red-p15682-23285_image.jpg',
        description: 'Bold logo design in premium Italian wool'
    },
    {
        id: 7,
        brand: 'PRADA',
        name: 'Re-Edition 2005 Bag',
        price: 1850,
        category: 'Bags',
        badge: 'TRENDING',
        image: 'images/20217288_50174393_1000.jpg',
        description: 'Nylon shoulder bag with silver-tone hardware'
    },
    {
        id: 8,
        brand: 'GIVENCHY',
        name: 'Antigone Medium',
        price: 2350,
        category: 'Bags',
        badge: 'CLASSIC',
        image: 'images/ANTIGONE-592x592.png',
        description: 'Structured leather bag with signature triangular patch'
    },
    {
        id: 9,
        brand: 'CAMILLA',
        name: 'Jardim Party Long Dress',
        price: 895,
        category: 'Ready-to-Wear',
        badge: 'BOHEMIAN',
        image: 'images/CAMILLA_00033711_WOMENS_WOVEN_DRESS_LONG_JARDIM_PARTY_3-592x592.jpg',
        description: 'Vibrant print silk dress with crystal embellishments'
    },
    {
        id: 10,
        brand: 'SAINT LAURENT',
        name: 'Medium Envelope Bag',
        price: 2950,
        category: 'Bags',
        badge: 'MUST-HAVE',
        image: 'images/Medium-7760811TVVV1000_A.jpg',
        description: 'Quilted leather with YSL monogram closure'
    },
    {
        id: 11,
        brand: 'MONTBLANC',
        name: 'Leather Card Holder',
        price: 350,
        category: 'Accessories',
        badge: 'ESSENTIAL',
        image: 'images/MONT-BLANC-CARDHOLDER.jpg',
        description: 'Premium leather card holder with signature emblem'
    },
    {
        id: 12,
        brand: 'SLEEPER',
        name: 'Suzi Maxi Dress with Feathers',
        price: 650,
        category: 'Ready-to-Wear',
        badge: 'PARTY READY',
        image: 'images/SLEEPER_FW2410FD_SuziMaxiDresswithDetachableFeathersinBlue.jpg',
        description: 'Elegant evening dress with detachable feather trim'
    },
    {
        id: 13,
        brand: 'VERSACE',
        name: 'Gold Baroque Pump',
        price: 1450,
        category: 'Shoes',
        badge: 'GLAMOUR',
        image: 'images/473Wx593H-469134669-gold-MODEL.jpg',
        description: 'Gold metallic pumps with baroque heel'
    },
    {
        id: 14,
        brand: 'BALENCIAGA',
        name: 'Hourglass Small Bag',
        price: 3250,
        category: 'Bags',
        badge: 'ARCHITECTURAL',
        image: 'images/19696094_44146684_1000.jpg',
        description: 'Sculptural silhouette in smooth calfskin'
    },
    {
        id: 15,
        brand: 'JIMMY CHOO',
        name: 'Saeda 100 Crystal Pump',
        price: 1250,
        category: 'Shoes',
        badge: 'RED CARPET',
        image: 'images/SAEDA100ZPJ_112558_SIDE_vg196.jpg',
        description: 'Crystal-embellished pumps for special occasions'
    },
    {
        id: 16,
        brand: 'FENDI',
        name: 'Baguette Bag',
        price: 3950,
        category: 'Bags',
        badge: 'ICON',
        image: 'images/20046940_51572914_1000.jpg',
        description: 'The iconic baguette in FF monogram fabric'
    },
    {
        id: 17,
        brand: 'BOTTEGA VENETA',
        name: 'Intrecciato Clutch',
        price: 2250,
        category: 'Bags',
        badge: 'CRAFTSMANSHIP',
        image: 'images/20548590_50535028_1000.jpg',
        description: 'Signature woven leather clutch'
    },
    {
        id: 18,
        brand: 'CELINE',
        name: 'Triomphe Canvas Bag',
        price: 2650,
        category: 'Bags',
        badge: 'PARISIAN',
        image: 'images/21344338_51316198_1000-1.jpg',
        description: 'Classic triomphe canvas with leather trim'
    },
    {
        id: 19,
        brand: 'DR MARTENS',
        name: 'Platform Chelsea Boots',
        price: 250,
        category: 'Shoes',
        badge: 'EDGY',
        image: 'images/editorialimage-DR-BOOT.jpg',
        description: 'Iconic boots with modern platform sole'
    },
    {
        id: 20,
        brand: 'MONTBLANC',
        name: 'Leather Wallet',
        price: 550,
        category: 'Accessories',
        badge: 'LUXURY',
        image: 'images/mont-b-leather.jpg',
        description: 'Full-grain leather wallet with multiple compartments'
    }
];

// Cart functionality
let cart = [];

// Load products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}'); background-size: cover; background-position: center;">
                <div class="product-badge">${product.badge}</div>
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-description" style="font-size: 12px; color: var(--gray); margin: 8px 0; line-height: 1.4;">${product.description}</div>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">ADD TO BAG</button>
            </div>
        </div>
    `).join('');
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showNotification('Item added to bag');
}

// Update cart display
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999;">Your bag is empty</p>';
        cartTotal.textContent = '$0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image" style="background-image: url('${item.image}'); background-size: cover; background-position: center;"></div>
            <div class="cart-item-info">
                <div style="font-weight: 500;">${item.brand}</div>
                <div style="font-size: 14px; color: #666;">${item.name}</div>
                <div style="margin-top: 10px;">
                    <span>$${item.price.toLocaleString()}</span>
                    <span style="margin-left: 20px;">Qty: ${item.quantity}</span>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: none; border: none; cursor: pointer; font-size: 20px;">×</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toLocaleString()}`;
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-black);
        color: white;
        padding: 15px 25px;
        border-radius: 4px;
        z-index: 3000;
        animation: fadeInUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Paystack checkout
function processCheckout() {
    if (cart.length === 0) {
        alert('Your bag is empty');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Initialize Paystack payment
    const handler = PaystackPop.setup({
        key: 'pk_live_8a1f4393bfba58f00a4fe50770a31041e055b068', // Replace with your Paystack public key
        email: 'sales@maisonvexluxuryboutique.com', // Get from user input
        amount: total * 100, // Paystack expects amount in kobo
        currency: 'NGN',
        ref: 'MV_' + Math.floor((Math.random() * 1000000000) + 1),
        metadata: {
            custom_fields: [
                {
                    display_name: "Items",
                    variable_name: "items",
                    value: cart.map(item => `${item.brand} - ${item.name} (${item.quantity})`).join(', ')
                }
            ]
        },
        callback: function(response) {
            // Payment successful
            alert('Payment successful! Reference: ' + response.reference);
            cart = [];
            updateCart();
            toggleCart();
        },
        onClose: function() {
            alert('Transaction cancelled');
        }
    });
    
    handler.openIframe();
}

// Smooth scrolling
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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    updateCart();
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
    }
});