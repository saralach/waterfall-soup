const template = document.createElement('template');

template.innerHTML = `
    <header class="header">

        <nav class="navbar">

            <a href="index.html" class="logo">
                <img src="images\\waterfall-soup-logo.svg" class="logo">
                <h1>Waterfall Soup</h1>
            </a>

            <ul>
                <li> <a href="index.html" class="basictab">About Us</a> </li>
                <li> <a href="menu.html" class="basictab">Menu</a> </li>
                <li> <a href="#order" class="basictab">Order</a> </li>
            </ul>
            
        </nav>
    </header>
    <footer>
        <h5>Waterfall Soup</h5>
        <div class="footerinfo">
            <div>
                <p>123 Sixth Street<br/>New Eridu 12345</p>
                <p>(123) 456-7890</p>
            </div>
            <ul>
                <li><a href="#">Nutrition & Allergens</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <ul id="socials">
                <li>
                    <a href="https://www.facebook.com/">
                        <img src="../images/socials/facebook.svg" alt="Facebook">
                    </a>
                </li>
                <li>
                    <a href="https://x.com/">
                        <img src="../images/socials/twitter-x.svg" alt="X (Twitter)">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <img src="../images/socials/instagram.svg" alt="Instagram">
                    </a>
                </li>
            </ul>
        </div>
        <p class="copy">&copy; 2025 Waterfall Soup. All rights reserved.</p>
    </footer>
`;

document.body.appendChild(template.content);