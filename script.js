const pages = {
    home: `
        <div class="animate-in home-section smooth-reveal">
            <div style="text-align:center; padding: 3rem 0 1rem;">
                <h2 style="font-size: 1rem; letter-spacing: 5px; text-transform: uppercase; color: var(--clay-red);">Featured Pieces</h2>
            </div>

            <div class="marquee-container" id="draggable-scroll">
                <div class="marquee-content">
                    <div class="scroll-item" data-page="product-forest-zardosi"><img src="images/Emerald Beaded Sleeve Blouse.png"><h4>Forest Zardosi</h4></div>
                    <div class="scroll-item" data-page="product-temple-gold"><img src="images/Maroon Temple Border Blouse.png"><h4>Temple Gold</h4></div>
                    <div class="scroll-item" data-page="product-velvet-zardosi"><img src="images/Purple Brocade Knot-Tie Blouse.png"><h4>Velvet Zardosi</h4></div>
                    <div class="scroll-item" data-page="product-ochre-pearl"><img src="images/Mustard Floral Shoulder Blouse.png"><h4>Ochre Pearl</h4></div>
                    <div class="scroll-item" data-page="product-royal-silk"><img src="images/Pink Pearl V-Neck Blouse.png"><h4>Royal Silk</h4></div>
                    <div class="scroll-item" data-page="product-forest-zardosi"><img src="images/Emerald Beaded Sleeve Blouse.png"><h4>Forest Zardosi</h4></div>
                    <div class="scroll-item" data-page="product-temple-gold"><img src="images/Maroon Temple Border Blouse.png"><h4>Temple Gold</h4></div>
                    <div class="scroll-item" data-page="product-velvet-zardosi"><img src="images/Purple Brocade Knot-Tie Blouse.png"><h4>Velvet Zardosi</h4></div>
                    <div class="scroll-item" data-page="product-ochre-pearl"><img src="images/Mustard Floral Shoulder Blouse.png"><h4>Ochre Pearl</h4></div>
                    <div class="scroll-item" data-page="product-royal-silk"><img src="images/Pink Pearl V-Neck Blouse.png"><h4>Royal Silk</h4></div>
                </div>
            </div>
        </div>
        <div class="home-section hero-model-section smooth-reveal">
            <div class="hero-model-content">
                <div class="hero-model-copy">
                    <p class="small-label">EXCLUSIVE STYLING</p>
                    <h2>Model-inspired elegance for every celebration</h2>
                    <p>Build a luxurious wardrobe with pieces that feel couture enough for the runway and warm enough for your special day.</p>
                </div>
                <div class="hero-model-visual">
                    <img src="images/NavyLehengaFull.png" alt="Model wearing designer lehenga">
                </div>
            </div>
        </div>
        <div class="home-section smooth-reveal">
            <div style="text-align:center; padding: 4rem 0;">
                <h1 style="font-size: 4rem; font-style: italic; font-family: 'Cormorant Garamond';">The Gallery</h1>
            </div>
            
            <div class="product-grid">
                <div class="product-card" data-page="product-forest-zardosi">
                    <div class="image-container">
                        <img src="images/Emerald Beaded Sleeve Blouse.png" class="primary-img">
                        <img src="images/Green Stone-Work Sleeve Blouse.png" class="secondary-img">
                    </div>
                    <div class="info">
                        <h3>Forest Zardosi</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-temple-gold">
                    <div class="image-container">
                        <img src="images/Maroon Temple Border Blouse.png" class="primary-img">
                        <img src="images/Black Embroidered Blouse.png" class="secondary-img">
                    </div>
                    <div class="info">
                        <h3>Temple Gold</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-velvet-zardosi">
                    <div class="image-container">
                        <img src="images/Purple Brocade Knot-Tie Blouse.png" class="primary-img">
                        <img src="images/Teal Embroidered Blouse.png" class="secondary-img">
                    </div>
                    <div class="info">
                        <h3>Velvet Zardosi</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-royal-silk">
                    <div class="image-container">
                        <img src="images/Pink Pearl V-Neck Blouse.png" class="primary-img">
                        <img src="images/Pink Dual-Tone Back Blouse.png" class="secondary-img">
                    </div>
                    <div class="info">
                        <h3>Royal Silk</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-ochre-pearl">
                    <div class="image-container">
                        <img src="images/Mustard Floral Shoulder Blouse.png" class="primary-img">
                        <img src="images/Pink Cut-Out Back Blouse.png" class="secondary-img">
                    </div>
                    <div class="info">
                        <h3>Ochre Pearl</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-navy-lehenga">
                    <div class="image-container">
                        <img src="images/NavyLehenga.png" class="primary-img">
                        <img src="images/NavyLehengaFull.png" class="secondary-img">
                    </div>
                    <div class="info">
                        <h3>Navy Lehenga</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    collections: `
        <div class="animate-in collections-page">
            <div class="collections-intro">
                <div style="text-align:center; padding: 3rem 0 1rem;">
                    <h2 style="font-size: 1rem; letter-spacing: 5px; text-transform: uppercase; color: var(--clay-red);">The Collections</h2>
                    <p style="font-size: 0.75rem; opacity: 0.55; letter-spacing: 2px; text-transform: uppercase; margin-top: 0.5rem;">A gallery of our signature products</p>
                </div>

                <div style="text-align:center; padding: 1rem 5%;">
                <p style="max-width: 720px; margin: 0 auto; opacity: 0.65;">Browse a dedicated collection of hand-finished lehengas, bridal silks, and festive ensembles presented in a clean gallery layout.</p>
            </div>
            </div>

            <div class="product-grid">
                <div class="product-card" data-page="product-navy-lehenga">
                    <div class="image-container">
                        <img src="images/NavyLehenga.png" alt="Navy Lehenga">
                    </div>
                    <div class="info">
                        <h3>Navy Lehenga</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-forest-zardosi">
                    <div class="image-container">
                        <img src="images/Emerald Beaded Sleeve Blouse.png" alt="Forest Zardosi">
                    </div>
                    <div class="info">
                        <h3>Forest Zardosi</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-temple-gold">
                    <div class="image-container">
                        <img src="images/Maroon Temple Border Blouse.png" alt="Temple Gold">
                    </div>
                    <div class="info">
                        <h3>Temple Gold</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-velvet-zardosi">
                    <div class="image-container">
                        <img src="images/Purple Brocade Knot-Tie Blouse.png" alt="Velvet Zardosi">
                    </div>
                    <div class="info">
                        <h3>Velvet Zardosi</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-ochre-pearl">
                    <div class="image-container">
                        <img src="images/Mustard Floral Shoulder Blouse.png" alt="Ochre Pearl">
                    </div>
                    <div class="info">
                        <h3>Ochre Pearl</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-royal-silk">
                    <div class="image-container">
                        <img src="images/Pink Pearl V-Neck Blouse.png" alt="Royal Silk">
                    </div>
                    <div class="info">
                        <h3>Royal Silk</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-lotus-motif">
                    <div class="image-container">
                        <img src="images/Mint Blue Floral Blouse.png" alt="Lotus Motif">
                    </div>
                    <div class="info">
                        <h3>Lotus Motif</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-aqua-sheer">
                    <div class="image-container">
                        <img src="images/Aqua Sheer-Panel Blouse.png" alt="Aqua Sheer-Panel">
                    </div>
                    <div class="info">
                        <h3>Aqua Sheer-Panel</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-aqua-sweetheart">
                    <div class="image-container">
                        <img src="images/Aqua Sweetheart Blouse.png" alt="Aqua Sweetheart">
                    </div>
                    <div class="info">
                        <h3>Aqua Sweetheart</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-black-border">
                    <div class="image-container">
                        <img src="images/Black Border Blouse.png" alt="Black Border">
                    </div>
                    <div class="info">
                        <h3>Black Border</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-black-embroidered">
                    <div class="image-container">
                        <img src="images/Black Embroidered Blouse.png" alt="Black Embroidered">
                    </div>
                    <div class="info">
                        <h3>Black Embroidered</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-black-pink-saree">
                    <div class="image-container">
                        <img src="images/Black Pink Saree-Work Blouse.png" alt="Black Pink Saree-Work">
                    </div>
                    <div class="info">
                        <h3>Black Pink Saree-Work</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-blue-green-lotus">
                    <div class="image-container">
                        <img src="images/Blue–Green Lotus Neck Blouse.png" alt="Blue-Green Lotus">
                    </div>
                    <div class="info">
                        <h3>Blue-Green Lotus</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-green-stone-work">
                    <div class="image-container">
                        <img src="images/Green Stone-Work Sleeve Blouse.png" alt="Green Stone-Work">
                    </div>
                    <div class="info">
                        <h3>Green Stone-Work</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-kanchana-sleeveless">
                    <div class="image-container">
                        <img src="images/Kanchana Sleeveless  Blouse.png" alt="Kanchana Sleeveless">
                    </div>
                    <div class="info">
                        <h3>Kanchana Sleeveless</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-maitri-dual-tone">
                    <div class="image-container">
                        <img src="images/Maitri Dual-Tone Embroidered Blouse.png" alt="Maitri Dual-Tone">
                    </div>
                    <div class="info">
                        <h3>Maitri Dual-Tone</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-maroon-silk">
                    <div class="image-container">
                        <img src="images/Maroon Silk Blouse.png" alt="Maroon Silk">
                    </div>
                    <div class="info">
                        <h3>Maroon Silk</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-navy-floral">
                    <div class="image-container">
                        <img src="images/Navy Floral Maxi Dress.png" alt="Navy Floral Maxi">
                    </div>
                    <div class="info">
                        <h3>Navy Floral Maxi</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-pink-cutout-back">
                    <div class="image-container">
                        <img src="images/Pink Cut-Out Back Blouse.png" alt="Pink Cut-Out Back">
                    </div>
                    <div class="info">
                        <h3>Pink Cut-Out Back</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-pink-cutwork">
                    <div class="image-container">
                        <img src="images/Pink Cut-Work Blouse.png" alt="Pink Cut-Work">
                    </div>
                    <div class="info">
                        <h3>Pink Cut-Work</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-pink-dual-tone">
                    <div class="image-container">
                        <img src="images/Pink Dual-Tone Back Blouse.png" alt="Pink Dual-Tone Back">
                    </div>
                    <div class="info">
                        <h3>Pink Dual-Tone Back</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-pink-openback">
                    <div class="image-container">
                        <img src="images/Pink Open-Back Blouse.png" alt="Pink Open-Back">
                    </div>
                    <div class="info">
                        <h3>Pink Open-Back</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-teal-embroidered">
                    <div class="image-container">
                        <img src="images/Teal Embroidered Blouse.png" alt="Teal Embroidered">
                    </div>
                    <div class="info">
                        <h3>Teal Embroidered</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-teal-gold-broadneck">
                    <div class="image-container">
                        <img src="images/Teal Gold Broad-Neck Blouse.png" alt="Teal Gold Broad-Neck">
                    </div>
                    <div class="info">
                        <h3>Teal Gold Broad-Neck</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-teal-mirror-vneck">
                    <div class="image-container">
                        <img src="images/Teal Mirror V-Neck Blouse.png" alt="Teal Mirror V-Neck">
                    </div>
                    <div class="info">
                        <h3>Teal Mirror V-Neck</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-teal-saree-vneck">
                    <div class="image-container">
                        <img src="images/Teal Saree V-Neck Blouse.png" alt="Teal Saree V-Neck">
                    </div>
                    <div class="info">
                        <h3>Teal Saree V-Neck</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-teal-maroon-embroidered">
                    <div class="image-container">
                        <img src="images/Teal–Maroon Embroidered Back Blouse.png" alt="Teal-Maroon Embroidered">
                    </div>
                    <div class="info">
                        <h3>Teal-Maroon Embroidered</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-crimson-bridal">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 2, 2025, 01_49_36 PM.png" alt="Crimson Bridal Bliss">
                    </div>
                    <div class="info">
                        <h3>Crimson Bridal Bliss</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-golden-hour">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 2, 2025, 02_08_53 PM.png" alt="Golden Hour Drape">
                    </div>
                    <div class="info">
                        <h3>Golden Hour Drape</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-ivory-lace">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 2, 2025, 02_10_24 PM.png" alt="Ivory Lace Ensemble">
                    </div>
                    <div class="info">
                        <h3>Ivory Lace Ensemble</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-saffron-silk">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 2, 2025, 02_17_42 PM.png" alt="Saffron Silk Weave">
                    </div>
                    <div class="info">
                        <h3>Saffron Silk Weave</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-rose-petal">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 2, 2025, 02_39_10 PM.png" alt="Rose Petal Kurti">
                    </div>
                    <div class="info">
                        <h3>Rose Petal Kurti</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-dawn-zari">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 2, 2025, 09_39_06 AM.png" alt="Dawn Zari Blouse">
                    </div>
                    <div class="info">
                        <h3>Dawn Zari Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-pearl-mist">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 2, 2025, 10_42_17 AM.png" alt="Pearl Mist Blouse">
                    </div>
                    <div class="info">
                        <h3>Pearl Mist Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-copper-thread">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 2, 2025, 11_55_18 AM.png" alt="Copper Thread Blouse">
                    </div>
                    <div class="info">
                        <h3>Copper Thread Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-festive-heirloom">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 25, 2025, 12_56_12 PM.png" alt="Festive Heirloom Set">
                    </div>
                    <div class="info">
                        <h3>Festive Heirloom Set</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-champagne-zardosi">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 25, 2025, 12_58_12 PM.png" alt="Champagne Zardosi">
                    </div>
                    <div class="info">
                        <h3>Champagne Zardosi</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-twilight-silk">
                    <div class="image-container">
                        <img src="images/ChatGPT Image Dec 25, 2025, 12_59_23 PM.png" alt="Twilight Silk Blouse">
                    </div>
                    <div class="info">
                        <h3>Twilight Silk Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-jade-mirror">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_3mj6i13mj6i13mj6.png" alt="Jade Mirror Work">
                    </div>
                    <div class="info">
                        <h3>Jade Mirror Work</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-peacock-brocade">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_6lwiwn6lwiwn6lwi.png" alt="Peacock Brocade">
                    </div>
                    <div class="info">
                        <h3>Peacock Brocade</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-amber-kadwa">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_94b7jv94b7jv94b7.png" alt="Amber Kadwa Blouse">
                    </div>
                    <div class="info">
                        <h3>Amber Kadwa Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-blush-garden">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_9cu3n9cu3n9cu3n9.png" alt="Blush Garden Blouse">
                    </div>
                    <div class="info">
                        <h3>Blush Garden Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-midnight-embellished">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_d1whlfd1whlfd1wh.png" alt="Midnight Embellished">
                    </div>
                    <div class="info">
                        <h3>Midnight Embellished</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-coral-festive">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_eneaxseneaxsenea.png" alt="Coral Festive Blouse">
                    </div>
                    <div class="info">
                        <h3>Coral Festive Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-indigo-heritage">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_gvcbh9gvcbh9gvcb.png" alt="Indigo Heritage Blouse">
                    </div>
                    <div class="info">
                        <h3>Indigo Heritage Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-sand-dune">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_l6e09vl6e09vl6e0.png" alt="Sand Dune Silk">
                    </div>
                    <div class="info">
                        <h3>Sand Dune Silk</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-vermilion-bridal">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_m5tefom5tefom5te.png" alt="Vermilion Bridal Blouse">
                    </div>
                    <div class="info">
                        <h3>Vermilion Bridal Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-lilac-mirror">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_pdxssypdxssypdxs.png" alt="Lilac Mirror Blouse">
                    </div>
                    <div class="info">
                        <h3>Lilac Mirror Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-bronze-weave">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_tdamp6tdamp6tdam.png" alt="Bronze Weave Blouse">
                    </div>
                    <div class="info">
                        <h3>Bronze Weave Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-mocha-zari">
                    <div class="image-container">
                        <img src="images/Gemini_Generated_Image_xz06a8xz06a8xz06.png" alt="Mocha Zari Blouse">
                    </div>
                    <div class="info">
                        <h3>Mocha Zari Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-vintage-silk">
                    <div class="image-container">
                        <img src="images/WhatsApp Image 2025-12-23 at 09.43.16 (1).png" alt="Vintage Silk Lehenga">
                    </div>
                    <div class="info">
                        <h3>Vintage Silk Lehenga</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-mint-chiffon">
                    <div class="image-container">
                        <img src="images/Mint.png" alt="Mint Chiffon Blouse">
                    </div>
                    <div class="info">
                        <h3>Mint Chiffon Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
                <div class="product-card" data-page="product-lotus-cream">
                    <div class="image-container">
                        <img src="images/l.png" alt="Lotus Cream Blouse">
                    </div>
                    <div class="info">
                        <h3>Lotus Cream Blouse</h3>
                        <p class="price-enquire">Price on enquiry</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    "product-forest-zardosi": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Emerald Beaded Sleeve Blouse.png" alt="Forest Zardosi">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Forest Zardosi</h2>
                    <p class="detail-description">A lush forest-green blouse adorned with intricate zardosi embroidery along the sleeves, blending nature-inspired hues with traditional craftsmanship.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Zardosi embroidery</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Forest%20Zardosi%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-navy-lehenga": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/NavyLehenga.png" alt="Navy Lehenga">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Navy Lehenga</h2>
                    <p class="detail-description">A luxurious navy lehenga finished with hand-embellished floral motifs, perfect for weddings and festive evenings.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk blend</div>
                        <div><strong>Work</strong> Zardosi & thread embroidery</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>XS / S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Navy%20Lehenga" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-temple-gold": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Maroon Temple Border Blouse.png" alt="Temple Gold">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Temple Gold</h2>
                    <p class="detail-description">A traditional ensemble with metallic thread highlights and elegant golden accents for refined celebrations.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure brocade</div>
                        <div><strong>Work</strong> Gold zari embroidery</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Temple%20Gold%20ensemble" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-velvet-zardosi": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Purple Brocade Knot-Tie Blouse.png" alt="Velvet Zardosi">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Velvet Zardosi</h2>
                    <p class="detail-description">A dramatic velvet lehenga with intricate zari work and refined detailing for evening bridal look.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Velvet</div>
                        <div><strong>Work</strong> Zardosi & glass beads</div>
                        <div><strong>Delivery</strong> 10-14 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Velvet%20Zardosi" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-ochre-pearl": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Mustard Floral Shoulder Blouse.png" alt="Ochre Pearl">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Ochre Pearl</h2>
                    <p class="detail-description">A warm ochre piece accented with pearls and delicate embroidery for a timeless, elegant finish.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk satin</div>
                        <div><strong>Work</strong> Pearl detailing</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Ochre%20Pearl%20set" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-royal-silk": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Pink Pearl V-Neck Blouse.png" alt="Royal Silk">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Royal Silk</h2>
                    <p class="detail-description">An exquisite silk creation with royal motifs, designed for a polished and ceremonial appearance.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Traditional embroidery</div>
                        <div><strong>Delivery</strong> 8-12 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Royal%20Silk%20ensemble" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-lotus-motif": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Mint Blue Floral Blouse.png" alt="Lotus Motif">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Lotus Motif</h2>
                    <p class="detail-description">A graceful lotus motif set with fine embroidery, ideal for refined festive gifting and bridal occasions.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Soft silk blend</div>
                        <div><strong>Work</strong> Motif embroidery</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Lotus%20Motif%20set" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-aqua-sheer": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Aqua Sheer-Panel Blouse.png" alt="Aqua Sheer-Panel">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Aqua Sheer-Panel</h2>
                    <p class="detail-description">A delicate aqua blouse with sheer panel detailing, offering a contemporary twist on traditional elegance.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk with sheer panel</div>
                        <div><strong>Work</strong> Fine detailing</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>XS / S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Aqua%20Sheer-Panel%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-pink-openback": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Pink Open-Back Blouse.png" alt="Pink Open-Back">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Pink Open-Back</h2>
                    <p class="detail-description">A striking pink blouse with an elegant open-back design, perfect for a bold and sophisticated look.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk satin</div>
                        <div><strong>Work</strong> Open-back design</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Pink%20Open-Back%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-maroon-silk": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Maroon Silk Blouse.png" alt="Maroon Silk">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Maroon Silk</h2>
                    <p class="detail-description">A rich maroon silk blouse with timeless appeal, ideal for formal celebrations and festive occasions.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Traditional finish</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Maroon%20Silk%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-navy-floral": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Navy Floral Maxi Dress.png" alt="Navy Floral Maxi">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Navy Floral Maxi</h2>
                    <p class="detail-description">An enchanting navy maxi dress with delicate floral detailing, perfect for evening celebrations and garden festivities.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Soft silk blend</div>
                        <div><strong>Work</strong> Floral embroidery</div>
                        <div><strong>Delivery</strong> 8-11 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Navy%20Floral%20Maxi%20dress" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-aqua-sweetheart": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Aqua Sweetheart Blouse.png" alt="Aqua Sweetheart">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Aqua Sweetheart</h2>
                    <p class="detail-description">A delicate aqua blouse with elegant sweetheart neckline, ideal for intimate celebrations.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk satin</div>
                        <div><strong>Work</strong> Fine embellishments</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Aqua%20Sweetheart%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-black-border": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Black Border Blouse.png" alt="Black Border">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Black Border</h2>
                    <p class="detail-description">A classic black blouse with an elegant border design, versatile for any occasion.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Border detailing</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Black%20Border%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-black-embroidered": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Black Embroidered Blouse.png" alt="Black Embroidered">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Black Embroidered</h2>
                    <p class="detail-description">A sophisticated black blouse with fine embroidery work, perfect for formal events.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Embroidery & detailing</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Black%20Embroidered%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-black-pink-saree": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Black Pink Saree-Work Blouse.png" alt="Black Pink Saree-Work">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Black Pink Saree-Work</h2>
                    <p class="detail-description">A stunning contrast blouse with traditional saree-work embellishments in black and pink.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk blend</div>
                        <div><strong>Work</strong> Saree-work embroidery</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Black%20Pink%20Saree-Work%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-blue-green-lotus": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Blue–Green Lotus Neck Blouse.png" alt="Blue-Green Lotus">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Blue-Green Lotus</h2>
                    <p class="detail-description">A graceful blue-green blouse with lotus neck design, embodying tranquility and grace.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Soft silk</div>
                        <div><strong>Work</strong> Lotus motif embroidery</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Blue-Green%20Lotus%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-green-stone-work": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Green Stone-Work Sleeve Blouse.png" alt="Green Stone-Work">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Green Stone-Work</h2>
                    <p class="detail-description">A vibrant green blouse featuring intricate stone-work on sleeves for a premium look.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Stone-work on sleeves</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Green%20Stone-Work%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-kanchana-sleeveless": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Kanchana Sleeveless  Blouse.png" alt="Kanchana Sleeveless">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Kanchana Sleeveless</h2>
                    <p class="detail-description">A contemporary sleeveless design perfect for modern celebrations with traditional artistry.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk satin</div>
                        <div><strong>Work</strong> Contemporary design</div>
                        <div><strong>Delivery</strong> 4-7 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Kanchana%20Sleeveless%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-maitri-dual-tone": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Maitri Dual-Tone Embroidered Blouse.png" alt="Maitri Dual-Tone">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Maitri Dual-Tone</h2>
                    <p class="detail-description">An artisanal dual-tone blouse with embroidered details, symbolizing friendship and harmony.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Dual-tone embroidery</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Maitri%20Dual-Tone%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-pink-cutout-back": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Pink Cut-Out Back Blouse.png" alt="Pink Cut-Out Back">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Pink Cut-Out Back</h2>
                    <p class="detail-description">A striking pink blouse with elegant cut-out back design, perfect for a bold statement.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk satin</div>
                        <div><strong>Work</strong> Cut-out back design</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Pink%20Cut-Out%20Back%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-pink-cutwork": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Pink Cut-Work Blouse.png" alt="Pink Cut-Work">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Pink Cut-Work</h2>
                    <p class="detail-description">A delicate pink blouse with traditional cut-work embroidery, essential for any wardrobe.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Fine silk</div>
                        <div><strong>Work</strong> Cut-work embroidery</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Pink%20Cut-Work%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-pink-dual-tone": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Pink Dual-Tone Back Blouse.png" alt="Pink Dual-Tone Back">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Pink Dual-Tone Back</h2>
                    <p class="detail-description">A sophisticated pink blouse with dual-tone back detailing for a modern twist.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Dual-tone back design</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Pink%20Dual-Tone%20Back%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,

    "product-teal-embroidered": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Teal Embroidered Blouse.png" alt="Teal Embroidered">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Teal Embroidered</h2>
                    <p class="detail-description">A stunning teal blouse with fine embroidered details, perfect for any celebration.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Fine embroidery</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Teal%20Embroidered%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-teal-gold-broadneck": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Teal Gold Broad-Neck Blouse.png" alt="Teal Gold Broad-Neck">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Teal Gold Broad-Neck</h2>
                    <p class="detail-description">An elegant teal blouse with a broad neck design and golden accents for a regal appearance.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Gold accents & broad-neck design</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Teal%20Gold%20Broad-Neck%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-teal-mirror-vneck": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Teal Mirror V-Neck Blouse.png" alt="Teal Mirror V-Neck">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Teal Mirror V-Neck</h2>
                    <p class="detail-description">A contemporary teal blouse with mirror detailing on a flattering V-neck design.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk satin</div>
                        <div><strong>Work</strong> Mirror detailing & V-neck</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Teal%20Mirror%20V-Neck%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-teal-saree-vneck": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Teal Saree V-Neck Blouse.png" alt="Teal Saree V-Neck">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Teal Saree V-Neck</h2>
                    <p class="detail-description">A beautiful teal blouse with traditional saree-inspired V-neck and intricate detailing.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Saree-inspired embroidery</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Teal%20Saree%20V-Neck%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-teal-maroon-embroidered": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Teal–Maroon Embroidered Back Blouse.png" alt="Teal-Maroon Embroidered">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Teal-Maroon Embroidered</h2>
                    <p class="detail-description">A stunning contrast design with teal front and maroon embroidered back for a dramatic look.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Teal-maroon contrast embroidery</div>
                        <div><strong>Delivery</strong> 8-11 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Teal-Maroon%20Embroidered%20blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-crimson-bridal": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 2, 2025, 01_49_36 PM.png" alt="Crimson Bridal Bliss">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Crimson Bridal Bliss</h2>
                    <p class="detail-description">A resplendent crimson bridal blouse with lustrous silk base and hand-stitched embellishments fit for your most special day.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Zardosi & bead work</div>
                        <div><strong>Delivery</strong> 8-12 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Crimson%20Bridal%20Bliss" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-golden-hour": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 2, 2025, 02_08_53 PM.png" alt="Golden Hour Drape">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Golden Hour Drape</h2>
                    <p class="detail-description">A radiant golden drape ensemble that catches the light gracefully, perfect for evening ceremonies and festive gatherings.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk georgette</div>
                        <div><strong>Work</strong> Gold thread embroidery</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Golden%20Hour%20Drape" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-ivory-lace": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 2, 2025, 02_10_24 PM.png" alt="Ivory Lace Ensemble">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Ivory Lace Ensemble</h2>
                    <p class="detail-description">An ethereal ivory blouse adorned with delicate lace-inspired motifs, exuding quiet elegance for timeless occasions.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Fine silk</div>
                        <div><strong>Work</strong> Lace motif detailing</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Ivory%20Lace%20Ensemble" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-saffron-silk": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 2, 2025, 02_17_42 PM.png" alt="Saffron Silk Weave">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Saffron Silk Weave</h2>
                    <p class="detail-description">A vibrant saffron blouse woven with traditional silk threads, celebrating the warmth of festive colour and artisanship.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Woven silk detailing</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Saffron%20Silk%20Weave" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-rose-petal": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 2, 2025, 02_39_10 PM.png" alt="Rose Petal Kurti">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Rose Petal Kurti</h2>
                    <p class="detail-description">A soft rose-toned kurti embellished with delicate petal motifs, blending contemporary silhouette with traditional charm.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Cotton silk</div>
                        <div><strong>Work</strong> Petal motif work</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Rose%20Petal%20Kurti" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-dawn-zari": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 2, 2025, 09_39_06 AM.png" alt="Dawn Zari Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Dawn Zari Blouse</h2>
                    <p class="detail-description">A sunrise-inspired blouse with fine zari threadwork that glimmers at dawn and dusk alike, ideal for festival wear.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk</div>
                        <div><strong>Work</strong> Zari thread embroidery</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Dawn%20Zari%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-pearl-mist": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 2, 2025, 10_42_17 AM.png" alt="Pearl Mist Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Pearl Mist Blouse</h2>
                    <p class="detail-description">A soft misty blouse finished with luminous pearl accents, offering an understated glamour for every celebration.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk satin</div>
                        <div><strong>Work</strong> Pearl detailing</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Pearl%20Mist%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-copper-thread": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 2, 2025, 11_55_18 AM.png" alt="Copper Thread Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Copper Thread Blouse</h2>
                    <p class="detail-description">A rich copper-toned blouse featuring intricate thread-work borders drawing from ancient Tamil weaving traditions.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Brocade silk</div>
                        <div><strong>Work</strong> Copper thread embroidery</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Copper%20Thread%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-festive-heirloom": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 25, 2025, 12_56_12 PM.png" alt="Festive Heirloom Set">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Festive Heirloom Set</h2>
                    <p class="detail-description">A heritage ensemble crafted with the precision of heirloom artisans, made to be worn and cherished through generations.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure kanjeevaram silk</div>
                        <div><strong>Work</strong> Heirloom embroidery</div>
                        <div><strong>Delivery</strong> 10-14 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Festive%20Heirloom%20Set" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-champagne-zardosi": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 25, 2025, 12_58_12 PM.png" alt="Champagne Zardosi">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Champagne Zardosi</h2>
                    <p class="detail-description">A champagne toned blouse rich with zardosi work, an ideal choice for intimate receptions and elegant evenings.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk velvet</div>
                        <div><strong>Work</strong> Zardosi & sequin work</div>
                        <div><strong>Delivery</strong> 8-12 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Champagne%20Zardosi" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-twilight-silk": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/ChatGPT Image Dec 25, 2025, 12_59_23 PM.png" alt="Twilight Silk Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Twilight Silk Blouse</h2>
                    <p class="detail-description">A twilight-hued blouse that transitions beautifully from dusk to evening with its lustrous silk and embellished details.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Thread & mirror work</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Twilight%20Silk%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-jade-mirror": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_3mj6i13mj6i13mj6.png" alt="Jade Mirror Work">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Jade Mirror Work</h2>
                    <p class="detail-description">A deep jade green blouse featuring hand-set mirror work accents, reflecting folk traditions in a contemporary silhouette.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk blend</div>
                        <div><strong>Work</strong> Mirror work embroidery</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Jade%20Mirror%20Work" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-peacock-brocade": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_6lwiwn6lwiwn6lwi.png" alt="Peacock Brocade">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Peacock Brocade</h2>
                    <p class="detail-description">A majestic brocade blouse inspired by the peacock's plumage, woven with iridescent threads in jewel tones.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure brocade</div>
                        <div><strong>Work</strong> Woven peacock motif</div>
                        <div><strong>Delivery</strong> 9-12 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Peacock%20Brocade" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-amber-kadwa": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_94b7jv94b7jv94b7.png" alt="Amber Kadwa Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Amber Kadwa Blouse</h2>
                    <p class="detail-description">A warm amber blouse featuring kadwa weave technique with traditional motifs passed down through generations of weavers.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Banarasi silk</div>
                        <div><strong>Work</strong> Kadwa weave</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Amber%20Kadwa%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-blush-garden": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_9cu3n9cu3n9cu3n9.png" alt="Blush Garden Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Blush Garden Blouse</h2>
                    <p class="detail-description">A soft blush blouse scattered with garden-inspired floral embroidery, evoking the romance of spring celebrations.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Soft silk</div>
                        <div><strong>Work</strong> Floral thread embroidery</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Blush%20Garden%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-midnight-embellished": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_d1whlfd1whlfd1wh.png" alt="Midnight Embellished">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Midnight Embellished</h2>
                    <p class="detail-description">A dramatic dark blouse adorned with twinkling embellishments, designed for bold and unforgettable evenings.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Velvet silk</div>
                        <div><strong>Work</strong> Sequin & bead embellishments</div>
                        <div><strong>Delivery</strong> 8-11 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Midnight%20Embellished" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-coral-festive": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_eneaxseneaxsenea.png" alt="Coral Festive Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Coral Festive Blouse</h2>
                    <p class="detail-description">A vibrant coral blouse with festive detailing that radiates warmth and celebration at every occasion.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Cotton silk</div>
                        <div><strong>Work</strong> Festive embroidery</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Coral%20Festive%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-indigo-heritage": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_gvcbh9gvcbh9gvcb.png" alt="Indigo Heritage Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Indigo Heritage Blouse</h2>
                    <p class="detail-description">A deep indigo blouse rooted in heritage block-print traditions, combining age-old craft with modern tailoring.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk cotton</div>
                        <div><strong>Work</strong> Heritage block print</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Indigo%20Heritage%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-sand-dune": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_l6e09vl6e09vl6e0.png" alt="Sand Dune Silk">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Sand Dune Silk</h2>
                    <p class="detail-description">A subtle sand-toned silk blouse with fine texture work that evokes the quiet grandeur of desert landscapes.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Fine texture work</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Sand%20Dune%20Silk" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-vermilion-bridal": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_m5tefom5tefom5te.png" alt="Vermilion Bridal Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Vermilion Bridal Blouse</h2>
                    <p class="detail-description">A bold vermilion bridal blouse with intricate gold embroidery, perfect for the most auspicious moments of your life.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Gold zari & stone work</div>
                        <div><strong>Delivery</strong> 9-12 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Vermilion%20Bridal%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-lilac-mirror": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_pdxssypdxssypdxs.png" alt="Lilac Mirror Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Lilac Mirror Blouse</h2>
                    <p class="detail-description">A dreamy lilac blouse with hand-set mirror accents, bringing a whimsical elegance to festive celebrations.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk</div>
                        <div><strong>Work</strong> Mirror & sequin work</div>
                        <div><strong>Delivery</strong> 7-10 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Lilac%20Mirror%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-bronze-weave": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_tdamp6tdamp6tdam.png" alt="Bronze Weave Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Bronze Weave Blouse</h2>
                    <p class="detail-description">A richly textured bronze-toned blouse with woven geometric patterns, an homage to South India's weaving legacy.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk blend</div>
                        <div><strong>Work</strong> Geometric weave</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Bronze%20Weave%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-mocha-zari": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Gemini_Generated_Image_xz06a8xz06a8xz06.png" alt="Mocha Zari Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Mocha Zari Blouse</h2>
                    <p class="detail-description">A sophisticated mocha blouse with zari border detailing, striking the perfect balance between understated and refined.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Pure silk</div>
                        <div><strong>Work</strong> Zari border work</div>
                        <div><strong>Delivery</strong> 6-9 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Mocha%20Zari%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-vintage-silk": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/WhatsApp Image 2025-12-23 at 09.43.16 (1).png" alt="Vintage Silk Lehenga">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Vintage Silk Lehenga</h2>
                    <p class="detail-description">A cherished vintage-style silk lehenga with timeless embroidery, evoking the grandeur of old-world Indian bridal wear.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Silk blend</div>
                        <div><strong>Work</strong> Vintage zari embroidery</div>
                        <div><strong>Delivery</strong> 10-14 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Vintage%20Silk%20Lehenga" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-mint-chiffon": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/Mint.png" alt="Mint Chiffon Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Mint Chiffon Blouse</h2>
                    <p class="detail-description">A refreshing mint chiffon blouse with subtle shimmer and light embellishments, ideal for daytime and garden celebrations.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Chiffon silk</div>
                        <div><strong>Work</strong> Fine embellishments</div>
                        <div><strong>Delivery</strong> 5-7 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Mint%20Chiffon%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    "product-lotus-cream": `
        <div class="animate-in product-detail-page">
            <a href="#" data-page="collections" class="detail-back">← Back to Collections</a>
            <div class="detail-grid">
                <div class="detail-image">
                    <img src="images/l.png" alt="Lotus Cream Blouse">
                </div>
                <div class="detail-meta">
                    <p class="small-label">PRODUCT DETAIL</p>
                    <h2>Lotus Cream Blouse</h2>
                    <p class="detail-description">An elegant cream blouse with lotus-inspired neck detailing, bringing a serene and pristine beauty to your ensemble.</p>
                    <p class="detail-price">Price on enquiry — based on fabric, work &amp; length</p>
                    <div class="detail-info-list">
                        <div><strong>Fabric</strong> Soft silk</div>
                        <div><strong>Work</strong> Lotus neck design</div>
                        <div><strong>Delivery</strong> 5-8 days</div>
                    </div>
                    <div class="detail-option-row">
                        <div><strong>Sizes</strong><br>S / M / L / XL</div>
                        <div><strong>Availability</strong><br>Made to Order</div>
                    </div>
                    <a href="https://wa.me/919047474752?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Lotus%20Cream%20Blouse" target="_blank" rel="noreferrer" class="detail-action">Enquire on WhatsApp</a>
                </div>
            </div>
        </div>
    `,
    story: `
        <div class="animate-in story-page">
            <div class="story-header">
                <p class="small-label">ARTISANAL HERITAGE</p>
                <h2>Handcrafted in Coimbatore, inspired by Tamil Nadu's timeless weaving traditions</h2>
                <p class="story-intro">Every piece at Thamarai Designers begins with a hand-tied thread and a maker's care. Our collections celebrate artisanal technique, thoughtful homemade finishes, and premium luxury made with love.</p>
            </div>
            <div class="story-grid">
                <div class="story-copy">
                    <p>From quiet loom rooms in Coimbatore to curated designs for modern celebration, we honour the slow craft of embroidery and the soulful values of homegrown creativity.</p>
                    <p>Each ensemble is made with skilled hands, traditional weaving, and an elevated sense of refinement—creating heirloom-quality pieces that feel both authentic and undeniably luxurious.</p>
                    <div class="story-badges">
                        <span>Artisanal weaving</span>
                        <span>Handcrafted in Tamil Nadu</span>
                        <span>Premium homegrown luxury</span>
                    </div>
                    <ul class="story-highlights">
                        <li>Handwoven textiles finished in rich premium detail</li>
                        <li>Made by artisans rooted in Tamil Nadu heritage</li>
                        <li>Locally crafted, beautifully personal, thoughtfully designed</li>
                    </ul>
                </div>
                <div class="story-images">
                    <div class="story-image story-image-large">
                        <img src="images/colorweave.png" alt="Color weave craftsmanship">
                    </div>
                    <div class="story-image-stack">
                        <div class="story-image story-image-small story-image-top">
                            <img src="images/weave.png" alt="Artisanal weave detail">
                        </div>
                        <div class="story-image story-image-small story-image-bottom">
                            <img src="images/whiteweave.png" alt="Premium white woven texture">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    contact: `
        <div class="animate-in contact-page">
            <div class="contact-top">
                <div class="contact-map-panel">
                    <div class="map-frame">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1002444.6849472626!2d75.81891047812498!3d11.053650100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8570011b7e14d%3A0x39879a1be0a00086!2sTHAMARAI%20DESIGNERS!5e0!3m2!1sen!2sin!4v1774978673514!5m2!1sen!2sin" title="Office Location" style="border:0; width:100%; height:100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="contact-info-panel">
                    <p class="small-label">OFFICE LOCATION</p>
                    <h2>THAMARAI DESIGNERS</h2>
                    <p class="contact-location">4, Cherama, 332/3, Thirumurugan Nagar Road, Saravanampatti, Coimbatore, Tamil Nadu 641014</p>
                    <a href="https://maps.app.goo.gl/ZzQCXFLvf24v3u3KA?g_st=iw" target="_blank" rel="noreferrer" class="contact-link">View on Google Maps →</a>
                </div>
            </div>
            <div class="contact-grid">
                <div class="contact-card">
                    <span class="contact-icon">📞</span>
                    <h3>Phone</h3>
                    <p>Thamarai Selvi</p>
                    <a href="tel:+919047474752">+91 90474 74752</a>
                </div>
                <div class="contact-card">
                    <span class="contact-icon">💬</span>
                    <h3>WhatsApp</h3>
                    <p>Chat with us instantly</p>
                    <a href="https://wa.me/919047474752" target="_blank" rel="noreferrer">Open WhatsApp →</a>
                </div>
                <div class="contact-card">
                    <span class="contact-icon">✉️</span>
                    <h3>Email</h3>
                    <p>thamaraidesigner24@gmail.com</p>
                    <a href="mailto:thamaraidesigner24@gmail.com">Send an email →</a>
                </div>
                <div class="contact-card">
                    <span class="contact-icon">📸</span>
                    <h3>Instagram</h3>
                    <p>Follow us</p>
                    <a href="https://www.instagram.com/threads_by_thamarai/" target="_blank" rel="noreferrer">Open Instagram →</a>
                </div>
            </div>
        </div>
    `
};

const productCatalog = {
    "product-forest-zardosi": { name: "Green Beaded Blouse", code: "TD-001" },
    "product-navy-lehenga": { name: "Navy Floral Lehenga", code: "TD-002" },
    "product-temple-gold": { name: "Maroon Temple Blouse", code: "TD-003" },
    "product-velvet-zardosi": { name: "Purple Brocade Blouse", code: "TD-004" },
    "product-ochre-pearl": { name: "Mustard Floral Blouse", code: "TD-005" },
    "product-royal-silk": { name: "Pink Pearl Blouse", code: "TD-006" },
    "product-lotus-motif": { name: "Blue Floral Blouse", code: "TD-007" },
    "product-aqua-sheer": { name: "Aqua Panel Blouse", code: "TD-008" },
    "product-pink-openback": { name: "Pink Open Back Blouse", code: "TD-009" },
    "product-maroon-silk": { name: "Maroon Silk Blouse", code: "TD-010" },
    "product-navy-floral": { name: "Navy Floral Dress", code: "TD-011" },
    "product-aqua-sweetheart": { name: "Aqua Sweetheart Blouse", code: "TD-012" },
    "product-black-border": { name: "Black Border Blouse", code: "TD-013" },
    "product-black-embroidered": { name: "Black Embroidered Blouse", code: "TD-014" },
    "product-black-pink-saree": { name: "Black Saree Work Blouse", code: "TD-015" },
    "product-blue-green-lotus": { name: "Lotus Neck Blouse", code: "TD-016" },
    "product-green-stone-work": { name: "Green Stone Work Blouse", code: "TD-017" },
    "product-kanchana-sleeveless": { name: "Gold Sleeveless Blouse", code: "TD-018" },
    "product-maitri-dual-tone": { name: "Dual Tone Blouse", code: "TD-019" },
    "product-pink-cutout-back": { name: "Pink Cutout Blouse", code: "TD-020" },
    "product-pink-cutwork": { name: "Pink Cutwork Blouse", code: "TD-021" },
    "product-pink-dual-tone": { name: "Pink Back Tie Blouse", code: "TD-022" },
    "product-teal-embroidered": { name: "Teal Embroidered Blouse", code: "TD-023" },
    "product-teal-gold-broadneck": { name: "Teal Gold Blouse", code: "TD-024" },
    "product-teal-mirror-vneck": { name: "Teal Mirror Blouse", code: "TD-025" },
    "product-teal-saree-vneck": { name: "Teal Saree Blouse", code: "TD-026" },
    "product-teal-maroon-embroidered": { name: "Teal Maroon Blouse", code: "TD-027" },
    "product-crimson-bridal": { name: "Red Bridal Blouse", code: "TD-028" },
    "product-golden-hour": { name: "Gold Drape Set", code: "TD-029" },
    "product-ivory-lace": { name: "Ivory Lace Blouse", code: "TD-030" },
    "product-saffron-silk": { name: "Saffron Silk Blouse", code: "TD-031" },
    "product-rose-petal": { name: "Rose Kurti", code: "TD-032" },
    "product-dawn-zari": { name: "Dawn Zari Blouse", code: "TD-033" },
    "product-pearl-mist": { name: "Pearl Mist Blouse", code: "TD-034" },
    "product-copper-thread": { name: "Copper Thread Blouse", code: "TD-035" },
    "product-festive-heirloom": { name: "Festive Silk Set", code: "TD-036" },
    "product-champagne-zardosi": { name: "Champagne Blouse", code: "TD-037" },
    "product-twilight-silk": { name: "Twilight Silk Blouse", code: "TD-038" },
    "product-jade-mirror": { name: "Jade Mirror Blouse", code: "TD-039" },
    "product-peacock-brocade": { name: "Peacock Brocade Blouse", code: "TD-040" },
    "product-amber-kadwa": { name: "Amber Kadwa Blouse", code: "TD-041" },
    "product-blush-garden": { name: "Blush Garden Blouse", code: "TD-042" },
    "product-midnight-embellished": { name: "Midnight Blouse", code: "TD-043" },
    "product-coral-festive": { name: "Coral Festive Blouse", code: "TD-044" },
    "product-indigo-heritage": { name: "Indigo Heritage Blouse", code: "TD-045" },
    "product-sand-dune": { name: "Sand Dune Blouse", code: "TD-046" },
    "product-vermilion-bridal": { name: "Vermilion Bridal Blouse", code: "TD-047" },
    "product-lilac-mirror": { name: "Lilac Mirror Blouse", code: "TD-048" },
    "product-bronze-weave": { name: "Bronze Weave Blouse", code: "TD-049" },
    "product-mocha-zari": { name: "Mocha Zari Blouse", code: "TD-050" },
    "product-vintage-silk": { name: "Vintage Silk Lehenga", code: "TD-051" },
    "product-mint-chiffon": { name: "Mint Chiffon Blouse", code: "TD-052" },
    "product-lotus-cream": { name: "Lotus Cream Blouse", code: "TD-053" }
};

function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateScrollMarkup(markup, pageKey, product) {
    const scrollPattern = new RegExp(
        `(<div class="scroll-item" data-page="${escapeRegExp(pageKey)}"[\\s\\S]*?<h4>)[^<]+(<\\/h4>)`,
        'g'
    );

    return markup.replace(scrollPattern, `$1${product.name}$2<p class="scroll-code">${product.code}</p>`);
}

function updateCardMarkup(markup, pageKey, product) {
    const cardPattern = new RegExp(
        `(<div class="product-card" data-page="${escapeRegExp(pageKey)}"[\\s\\S]*?<div class="info">\\s*<h3>)[^<]+(<\\/h3>)(\\s*)(<p class="price-enquire">)`,
        'g'
    );

    const altPattern = new RegExp(
        `(<div class="product-card" data-page="${escapeRegExp(pageKey)}"[\\s\\S]*?<img[^>]+alt=")[^"]+(")`,
        'g'
    );

    return markup
        .replace(cardPattern, `$1${product.name}$2$3<p class="product-code">${product.code}</p>\n                        $4`)
        .replace(altPattern, `$1${product.name}$2`);
}

function updateDetailMarkup(markup, product) {
    const enquiryText = encodeURIComponent(`Hello, I would like to enquire about ${product.name} (${product.code})`);

    return markup
        .replace(/(<img[^>]+alt=")[^"]+(")/, `$1${product.name}$2`)
        .replace(/(<h2>)[^<]+(<\/h2>)/, `$1${product.name}$2\n                    <p class="detail-code">${product.code}</p>`)
        .replace(/https:\/\/wa\.me\/919047474752\?text=[^"]+/, `https://wa.me/919047474752?text=${enquiryText}`);
}

function applyProductCatalogUpdates() {
    Object.entries(productCatalog).forEach(([pageKey, product]) => {
        pages.home = updateScrollMarkup(pages.home, pageKey, product);
        pages.home = updateCardMarkup(pages.home, pageKey, product);
        pages.collections = updateCardMarkup(pages.collections, pageKey, product);

        if (pages[pageKey]) {
            pages[pageKey] = updateDetailMarkup(pages[pageKey], product);
        }
    });
}

applyProductCatalogUpdates();

const contentArea = document.getElementById('page-content');

function loadPage(pageKey) {
    contentArea.style.opacity = '0';
    setTimeout(() => {
        contentArea.innerHTML = pages[pageKey] || pages['home'];
        contentArea.style.opacity = '1';
        
        if(pageKey === 'home' || !pageKey) {
            initDraggable();
        }
        initHoverCarousel();
        initSectionReveal();
        window.scrollTo(0,0);
    }, 400);
}

// DRAG TO SCROLL LOGIC
function initDraggable() {
    const slider = document.getElementById('draggable-scroll');
    if(!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        // Logic to stop animation might be needed if CSS doesn't handle hover-pause well enough for you
    });
    slider.addEventListener('mouseleave', () => isDown = false);
    slider.addEventListener('mouseup', () => isDown = false);
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; 
        slider.scrollLeft = scrollLeft - walk;
    });
}

function initHoverCarousel() {
    const cards = document.querySelectorAll('.product-card[data-images]');
    cards.forEach((card) => {
        const frames = card.dataset.images.split(',').map(src => src.trim()).filter(Boolean);
        if(frames.length < 2) return;

        const img = card.querySelector('img.carousel-img');
        if(!img) return;

        let frameIndex = 0;
        let intervalId = null;

        const showFrame = (index) => {
            if(!frames[index]) return;
            img.style.opacity = '0';
            setTimeout(() => {
                img.src = frames[index];
                img.style.opacity = '1';
            }, 150);
        };

        const startRotation = () => {
            if(intervalId) return;
            intervalId = setInterval(() => {
                frameIndex = (frameIndex + 1) % frames.length;
                showFrame(frameIndex);
            }, 1200);
        };

        const stopRotation = () => {
            if(intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
            frameIndex = 0;
            showFrame(frameIndex);
        };

        card.addEventListener('mouseenter', startRotation);
        card.addEventListener('mouseleave', stopRotation);
    });
}

function initSectionReveal() {
    const sections = document.querySelectorAll('.home-section');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25
    });

    sections.forEach((section) => observer.observe(section));
}

// Hamburger menu
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');
const navOverlay = document.getElementById('nav-overlay');

function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
        closeMenu();
    } else {
        hamburger.classList.add('open');
        navLinks.classList.add('open');
        navOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
});

navOverlay.addEventListener('click', closeMenu);

document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-page]');
    if(link) {
        e.preventDefault();
        closeMenu();
        loadPage(link.getAttribute('data-page'));
    }
});

window.onload = () => loadPage('home');