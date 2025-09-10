// footer.js - Shared footer component
document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
        <footer>
            <div class="footer-content">
                <div class="footer-section">
                    <h3>MAISON VEX</h3>
                    <p>Abuja's Premier Luxury Boutique</p>
                    <p>Curating Global Fashion Since 2011</p>
                </div>
                <div class="footer-section">
                    <h3>QUICK LINKS</h3>
                    <a href="index.html">Home</a><br>
                    <a href="brands.html">Our Brands</a><br>
                    <a href="shop.html">Shop Collection</a><br>
                    <a href="about.html">About Us</a><br>
                    <a href="contact.html">Contact</a>
                </div>
                <div class="footer-section">
                    <h3>CUSTOMER SERVICE</h3>
                    <a href="#">Personal Shopping</a><br>
                    <a href="#">Size Guide</a><br>
                    <a href="#">Shipping & Returns</a><br>
                    <a href="#">Authentication Guarantee</a><br>
                    <a href="#">Terms & Conditions</a>
                </div>
                <div class="footer-section">
                    <h3>CONNECT</h3>
                    <a href="#">Instagram</a><br>
                    <a href="#">Facebook</a><br>
                    <a href="#">WhatsApp</a><br>
                    <a href="#">Newsletter</a><br>
                    <a href="#">VIP Club</a>
                </div>
                <div class="footer-section">
                    <h3>LOCATION</h3>
                    <p>42B Libreville Crescent</p>
                    <p>Wuse 2, Abuja</p>
                    <p>Nigeria</p>
                    <br>
                    <p>📞 +234 XXX XXX XXXX</p>
                    <p>✉️ info@maisonvex.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 Maison Vex Luxury Boutique. All Rights Reserved. | Authentic Luxury Since 2011</p>
            </div>
        </footer>
    `;
    
    // Insert footer into the page
    const footerContainer = document.getElementById('footer');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
    
    // Smooth scrolling for footer links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});