// header.js - Shared navigation component
document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header>
            <div class="announcement-bar">
                COMPLIMENTARY SHIPPING ON ORDERS ABOVE $500 | AUTHENTIC LUXURY SINCE 2011
            </div>
            <nav>
                <div class="logo">MAISON VEX</div>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="brands.html">Brands</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="nav-icons">
                    <div class="cart-icon" onclick="toggleCart()">
                        🛍️
                        <span class="cart-count" id="cartCount">0</span>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    // Insert header into the page
    const headerContainer = document.getElementById('header');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
    
    // Highlight active page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.style.color = 'var(--luxury-gold)';
            link.style.fontWeight = '500';
        }
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.08)';
            }
        }
    });
});