/**
 * Ty Zephyrria - Script de gestion dynamique des éléments visuels
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation des différentes sections dynamiques
    initWind();
    initFireFlames();
    initWaves();
    initDroplets();
    initFoliage();
    initBoutiqueFilter();
    initLikes();
    initCart();
    initModal();
    initVisitorCounter();
    initPhotoBoutique();
});

/**
 * Génère dynamiquement les symboles de vent.
 */
function initWind() {
    const container = document.querySelector('.wind-container');
    if (!container) return;

    const isMobile = window.innerWidth <= 768;
    const windData = [
        { p1: {}, p2: { delay: 0.2 } },
        { p1: { delay: 0.8, duration: 6 }, p2: { delay: 1.2 } },
        { p1: { delay: 1, duration: 7 }, p2: { delay: 0.8 } },
        { p1: { delay: 1.5, duration: 4 }, p2: { delay: 1.7 } }
    ];

    if (!isMobile) {
        windData.push(
            { p1: { delay: 0.9, duration: 4 }, p2: { delay: 1.5 } },
            { p1: { delay: 1.4, duration: 6 }, p2: { delay: 0.5 } },
            { p1: { delay: 0.6, duration: 7 }, p2: { delay: 1.8 } },
            { p1: { delay: 1.2, duration: 5 }, p2: { delay: 0.6 } }
        );
    }

    container.querySelectorAll('.wind-symbol').forEach(el => el.remove());

    const fragment = document.createDocumentFragment();

    windData.forEach(data => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'wind-symbol');
        svg.setAttribute('viewBox', '0 0 200 60');

        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('class', 'wind-path');
        path1.setAttribute('d', 'M10,30 C40,5 90,5 120,30 C135,42.5 160,45 175,35 C185,28 185,15 175,8 C165,1 152,8 152,20 C152,28 160,33 168,30');
        if (data.p1.delay) path1.style.animationDelay = `${data.p1.delay}s`;
        if (data.p1.duration) path1.style.animationDuration = `${data.p1.duration}s`;

        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('class', 'wind-path');
        path2.setAttribute('d', 'M30,45 C70,30 110,30 155,45');
        path2.setAttribute('opacity', '0.3');
        if (data.p2.delay) path2.style.animationDelay = `${data.p2.delay}s`;

        svg.appendChild(path1);
        svg.appendChild(path2);
        fragment.appendChild(svg);
    });
    container.appendChild(fragment);
}

function initFireFlames() {
    const layers = ['.layer-back', '.layer-mid', '.layer-front'];
    const step = 20;
    const windowWidth = window.innerWidth;
    const numFlames = Math.ceil(windowWidth / step) + 5;

    layers.forEach((selector, layerIndex) => {
        const container = document.querySelector(selector);
        if (!container) return;
        container.innerHTML = '';
        const fragment = document.createDocumentFragment();
        container.style.transform = `translateX(${layerIndex * -12}px)`;

        for (let i = 0; i < numFlames; i++) {
            const delay = (Math.random() * -5).toFixed(2);
            const duration = (1.6 + Math.random() * 1.8).toFixed(2);
            const group = document.createElement('div');
            group.className = 'fire-group';
            const scale = (0.85 + Math.random() * 0.3).toFixed(2);
            const flip = Math.random() > 0.5 ? -1 : 1;
            const xOffset = (Math.random() * 4 - 2).toFixed(0);
            group.style.transform = `translateX(${xOffset}px) scaleX(${flip * scale}) scaleY(${scale})`;
            group.innerHTML = `<svg class="flame-svg" style="animation-delay: ${delay}s; animation-duration: ${duration}s;"><use href="#multi-flame"/></svg>`;
            fragment.appendChild(group);
        }
        container.appendChild(fragment);
    });
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        initWind();
        initFireFlames();
        initWaves();
        initDroplets();
    }, 250);
});

function initWaves() {
    const svg = document.querySelector('.wave-container svg');
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const svgWidthPx = rect.width;
    if (svgWidthPx === 0) return;
    const scale = svgWidthPx / 1000;
    const wavelengthPx = 100;
    const amplitudePx = 15;

    function buildPath(yOffsetPx, closed = false) {
        const numSegments = Math.ceil(svgWidthPx / wavelengthPx) + 1;
        let d = `M 0 ${(yOffsetPx / scale).toFixed(1)}`;
        for (let i = 0; i < numSegments; i++) {
            const cpX = (i * wavelengthPx + wavelengthPx / 2) / scale;
            const cpY = (yOffsetPx + amplitudePx) / scale;
            const endX = ((i + 1) * wavelengthPx) / scale;
            const endY = (yOffsetPx / scale);
            d += ` Q ${cpX.toFixed(1)} ${cpY.toFixed(1)}, ${endX.toFixed(1)} ${endY.toFixed(1)}`;
        }
        if (closed) {
            d += ` L 1000 100 Q 950 115, 900 100 T 800 100 T 700 100 T 600 100 T 500 100 T 400 100 T 300 100 T 200 100 T 100 100 T 0 100 Z`;
        }
        return d;
    }

    const waveFill = document.getElementById('wave-fill');
    const waveLine1 = document.getElementById('wave-line-1');
    const waveLine2 = document.getElementById('wave-line-2');
    const waveLine3 = document.getElementById('wave-line-3');

    if (waveFill) waveFill.setAttribute('d', buildPath(0, true));
    if (waveLine1) waveLine1.setAttribute('d', buildPath(0));
    if (waveLine2) waveLine2.setAttribute('d', buildPath(20));
    if (waveLine3) waveLine3.setAttribute('d', buildPath(40));
}

function initDroplets() {
    const container = document.getElementById('droplets-collection');
    if (!container) return;
    const svg = container.closest('svg');
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const svgWidthPx = rect.width;
    if (svgWidthPx === 0) return;
    const scale = svgWidthPx / 1000;
    const minSpacingPx = 15;
    const numDroplets = 25;

    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    const placed = [];

    for (let i = 0; i < numDroplets; i++) {
        let attempts = 0;
        let success = false;
        while (attempts < 50 && !success) {
            const sizes = [20, 30, 40, 50];
            const wPx = sizes[Math.floor(Math.random() * sizes.length)];
            const hPx = wPx * (1.2 + Math.random() * 0.4);
            const xPx = Math.random() * (svgWidthPx - wPx);
            const yPx = Math.random() * 40;
            const overlap = placed.some(other => !(xPx + wPx + minSpacingPx < other.x || xPx > other.x + other.w + minSpacingPx));
            if (!overlap) {
                success = true;
                placed.push({ x: xPx, w: wPx });
                const xSvg = xPx / scale;
                const ySvg = yPx / scale;
                const wSvg = wPx / scale;
                const hSvg = hPx / scale;
                const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                use.setAttribute('href', '#real-droplet');
                use.setAttribute('x', xSvg.toFixed(1));
                use.setAttribute('y', ySvg.toFixed(1));
                use.setAttribute('width', wSvg.toFixed(1));
                use.setAttribute('height', hSvg.toFixed(1));
                fragment.appendChild(use);
            }
            attempts++;
        }
    }
    container.appendChild(fragment);
}

function initFoliage() {
    const foliageContainer = document.getElementById('foliage-group');
    if (!foliageContainer) return;
    const foliageData = [
        [40, 85, 10, 32, 'leaf-dark', 165], [70, 75, 12, 36, 'leaf-mid', 190],
        [110, 80, 14, 40, 'leaf-bright', 170], [150, 65, 9, 28, 'leaf-dark', 205],
        [190, 70, 13, 38, 'leaf-mid', 155], [230, 60, 11, 34, 'leaf-bright', 185],
        [270, 75, 12, 36, 'leaf-dark', 175], [310, 85, 10, 30, 'leaf-mid', 200],
        [350, 70, 14, 42, 'leaf-bright', 160], [390, 80, 12, 34, 'leaf-dark', 195],
        [430, 75, 11, 32, 'leaf-mid', 180], [470, 85, 13, 39, 'leaf-bright', 170],
        [510, 70, 12, 35, 'leaf-dark', 210], [550, 80, 10, 30, 'leaf-mid', 165],
        [590, 75, 13, 38, 'leaf-bright', 190], [630, 90, 14, 42, 'leaf-dark', 175],
        [670, 75, 11, 33, 'leaf-mid', 200], [710, 65, 12, 36, 'leaf-bright', 160],
        [750, 80, 13, 38, 'leaf-dark', 185], [790, 90, 11, 32, 'leaf-mid', 210],
        [830, 70, 14, 40, 'leaf-bright', 170], [870, 85, 12, 35, 'leaf-dark', 195],
        [910, 75, 10, 30, 'leaf-mid', 180], [940, 80, 13, 38, 'leaf-bright', 160],
        [15, 90, 11, 34, 'leaf-mid', 175], [250, 95, 12, 36, 'leaf-bright', 185],
        [400, 95, 10, 30, 'leaf-mid', 205], [600, 95, 14, 40, 'leaf-bright', 170],
        [850, 95, 11, 32, 'leaf-mid', 185], [975, 85, 12, 36, 'leaf-dark', 195]
    ];
    foliageContainer.innerHTML = '';
    const fragment = document.createDocumentFragment();
    foliageData.forEach(([x, y, w, h, cls, angle]) => {
        const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttribute('href', '#long-leaf');
        use.setAttribute('x', x);
        use.setAttribute('y', y);
        use.setAttribute('width', w);
        use.setAttribute('height', h);
        use.setAttribute('class', cls);
        use.setAttribute('transform', `rotate(${angle} ${x} ${y})`);
        fragment.appendChild(use);
    });
    foliageContainer.appendChild(fragment);
}

function initBoutiqueFilter() {
    const filterContainer = document.querySelector('.filter-container');
    const grid = document.getElementById('productGrid');
    if (!filterContainer || !grid) return;
    const buttons = filterContainer.querySelectorAll('.filter-btn');
    const cards = grid.querySelectorAll('.product-card');

    function applyFilter(category) {
        buttons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === category));
        cards.forEach(card => card.classList.toggle('hidden', category !== 'all' && card.getAttribute('data-category') !== category));
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            applyFilter(category);
            const newUrl = category === 'all' ? window.location.pathname : `?cat=${category}`;
            window.history.pushState({ path: newUrl }, '', newUrl);
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('cat');
    if (initialCat) applyFilter(initialCat);
}

function initLikes() {
    const savedLikes = JSON.parse(localStorage.getItem('tyZephyrriaLikes')) || [];
    
    // Initialiser les boutons existants
    document.querySelectorAll('.like-button').forEach(btn => {
        const itemId = btn.getAttribute('data-item-id');
        if (savedLikes.includes(itemId)) btn.classList.add('active');
    });

    // Délégation d'événement pour gérer les nouveaux boutons dynamiques
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.like-button');
        if (!btn) return;

        e.preventDefault();
        e.stopPropagation();

        const itemId = btn.getAttribute('data-item-id');
        if (!itemId) return;

        const isActive = btn.classList.toggle('active');
        const currentLikes = JSON.parse(localStorage.getItem('tyZephyrriaLikes')) || [];

        if (isActive) {
            if (!currentLikes.includes(itemId)) currentLikes.push(itemId);
        } else {
            const index = currentLikes.indexOf(itemId);
            if (index > -1) currentLikes.splice(index, 1);
        }
        localStorage.setItem('tyZephyrriaLikes', JSON.stringify(currentLikes));
    });
}

function initModal() {
    let modal = document.getElementById('productModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'productModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-container">
                <div class="modal-close">&times;</div>
                <div class="modal-image"><img src="" alt="Zoom produit"></div>
                <div class="modal-content">
                    <div class="modal-category">Catégorie</div>
                    <h2 class="modal-title">Nom du Produit</h2>
                    <p class="modal-description">Cette pièce unique est le fruit d'un travail artisanal minutieux...</p>
                    <div class="modal-price">0,00 €</div>
                    <div class="modal-actions"><button class="modal-add-to-cart">Ajouter au panier</button></div>
                </div>
            </div>`;
        document.body.appendChild(modal);
    }

    const closeBtn = modal.querySelector('.modal-close');
    const modalImg = modal.querySelector('.modal-image img');
    const modalTitle = modal.querySelector('.modal-title');
    const modalPrice = modal.querySelector('.modal-price');
    const modalCat = modal.querySelector('.modal-category');
    const modalDesc = modal.querySelector('.modal-description');
    const addToCartBtn = modal.querySelector('.modal-add-to-cart');
    let currentItem = null;

    function openModal(data) {
        currentItem = data;
        modalImg.src = data.image;
        modalTitle.textContent = data.title;
        modalPrice.textContent = data.price || "";
        modalCat.textContent = data.category || "";
        modalDesc.textContent = data.description || "Cette pièce unique est le fruit d'un travail artisanal minutieux...";
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentItem = null;
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    addToCartBtn.addEventListener('click', () => {
        if (currentItem && window.addToCart) {
            const itemTitle = currentItem.title;
            window.addToCart(currentItem);
            closeModal();
            if (window.showSuccessNotification) window.showSuccessNotification(`"${itemTitle}" ajouté au panier !`);
        }
    });

    document.addEventListener('click', (e) => {
        // Bouton Ajout Rapide au Panier
        const quickAddBtn = e.target.closest('.quick-add-btn');
        if (quickAddBtn) {
            const card = quickAddBtn.closest('.product-card');
            const photoItem = quickAddBtn.closest('.modal-photo-item');
            const prestaCard = quickAddBtn.closest('.prestations-content');

            if (card && window.addToCart) {
                const itemData = {
                    image: card.querySelector('img').src,
                    title: card.querySelector('h3').textContent,
                    price: card.querySelector('.product-price')?.textContent || "",
                    category: card.querySelector('.product-tag')?.textContent || "",
                    id: card.querySelector('.like-button')?.getAttribute('data-item-id') || Date.now()
                };
                window.addToCart(itemData);
                if (window.showSuccessNotification) window.showSuccessNotification(`"${itemData.title}" ajouté au panier !`);
            } else if (photoItem && window.addToCart) {
                const itemData = {
                    image: photoItem.querySelector('img').src,
                    title: photoItem.querySelector('strong').textContent,
                    price: photoItem.innerText.split('\n').pop().trim(),
                    category: "Photographie",
                    id: photoItem.querySelector('.like-button')?.getAttribute('data-item-id') || Date.now()
                };
                window.addToCart(itemData);
                if (window.showSuccessNotification) window.showSuccessNotification(`"${itemData.title}" ajouté au panier !`);
            } else if (prestaCard && window.addToCart) {
                const itemData = {
                    image: prestaCard.querySelector('img').src,
                    title: prestaCard.querySelector('h3').textContent,
                    price: prestaCard.querySelector('.presta-price').textContent,
                    category: "Prestation Photo",
                    id: prestaCard.querySelector('.like-button')?.getAttribute('data-item-id') || Date.now()
                };
                window.addToCart(itemData);
                if (window.showSuccessNotification) window.showSuccessNotification(`"${itemData.title}" ajouté au panier !`);
            }
            return;
        }

        const card = e.target.closest('.product-card');
        if (card && !e.target.closest('.like-button') && !e.target.closest('.quick-add-btn')) {
            openModal({
                image: card.querySelector('img').src,
                title: card.querySelector('h3').textContent,
                price: card.querySelector('.product-price')?.textContent || "",
                category: card.querySelector('.product-tag')?.textContent || "",
                id: card.querySelector('.like-button')?.getAttribute('data-item-id') || Date.now()
            });
        }
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem && !e.target.closest('.like-button') && !e.target.closest('.quick-add-btn')) {
            openModal({
                image: portfolioItem.querySelector('img').src,
                title: portfolioItem.querySelector('.portfolio-overlay span').textContent,
                price: "Sur devis",
                category: "Réalisation Portfolio",
                description: "Cette réalisation fait partie de mon portfolio. Contactez-moi pour un devis personnalisé."
            });
        }
    });
}

function initPhotoBoutique() {
    const btnPhotos = document.getElementById('btn-photos');
    const btnPresta = document.getElementById('btn-presta');
    const prestaModal = document.getElementById('prestaModal');
    const galleryModal = document.getElementById('galleryModal');
    const themesGrid = document.getElementById('themesGrid');
    const zoomPopup = document.getElementById('zoomPopup');
    const zoomImg = document.getElementById('zoomImg');

    // Fermeture des modales (générique)
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = '';
        });
    });

    // Ouverture Modale Prestations
    if (btnPresta && prestaModal) {
        btnPresta.addEventListener('click', () => {
            prestaModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const galleryData = {
        'nature': [{ id: 'ph-nat-1', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600', title: 'Forêt', price: '15 €' }],
        'animaux': [{ id: 'ph-ani-1', url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=600', title: 'Tortue', price: '20 €' }],
        'spectacles': [{ id: 'ph-spe-1', url: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=600', title: 'Scène', price: '25 €' }],
        'macro': [{ id: 'ph-mac-1', url: 'https://images.unsplash.com/photo-1476101015682-330df3e81cb8?q=80&w=600', title: 'Fleur', price: '15 €' }],
        'urbain': [{ id: 'ph-urb-1', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600', title: 'Ville', price: '18 €' }],
        'nuit': [{ id: 'ph-nui-1', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600', title: 'Étoiles', price: '30 €' }],
        'portrait': [{ id: 'ph-por-1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600', title: 'Regard', price: '22 €' }],
        'noirblanc': [{ id: 'ph-nb-1', url: 'https://images.unsplash.com/photo-1502759683299-cdcc69741a7f?q=80&w=600', title: 'Contraste', price: '15 €' }],
        'voyage': [{ id: 'ph-voy-1', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600', title: 'Horizon', price: '20 €' }],
        'mer': [{ id: 'ph-mer-1', url: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=600', title: 'Vagues', price: '18 €' }],
        'saisons': [{ id: 'ph-sai-1', url: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=600', title: 'Automne', price: '15 €' }],
        'insolite': [{ id: 'ph-ins-1', url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600', title: 'Angle', price: '25 €' }]
    };

    if (themesGrid && galleryModal) {
        themesGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.theme-card');
            if (!card) return;
            const theme = card.dataset.theme;
            const data = galleryData[theme];
            const grid = document.getElementById('modalPhotoGrid');
            const title = document.getElementById('galleryTitle');
            if (data && grid) {
                title.textContent = card.querySelector('h3').textContent;
                grid.innerHTML = '';
                data.forEach(photo => {
                    const item = document.createElement('div');
                    item.className = 'modal-photo-item product-image';
                    item.innerHTML = `
                        <button class="like-button" data-item-id="${photo.id}" title="J'aime">
                            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                        </button>
                        <button class="quick-add-btn" title="Ajout rapide au panier">
                            <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>
                        </button>
                        <img src="${photo.url}" alt="${photo.title}" class="zoomable-img">
                        <div class="photo-info-overlay" style="padding: 10px; text-align: center; background: rgba(255,255,255,0.9); position: absolute; bottom: 0; width: 100%; font-size: 0.9rem;">
                            <strong>${photo.title}</strong><br>${photo.price}
                        </div>
                    `;
                    grid.appendChild(item);
                });
                galleryModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoomable-img')) {
            if (zoomPopup && zoomImg) {
                zoomImg.src = e.target.src;
                zoomPopup.style.display = 'flex';
            }
        }
    });

    if (zoomPopup) {
        zoomPopup.addEventListener('click', () => { zoomPopup.style.display = 'none'; });
        zoomPopup.addEventListener('contextmenu', (e) => { e.preventDefault(); zoomPopup.style.display = 'none'; });
    }
}

function initCart() {
    let cart = JSON.parse(localStorage.getItem('tyZephyrriaCart')) || [];
    let drawer = document.getElementById('cartDrawer');
    let overlay = document.getElementById('cartDrawerOverlay');

    if (!drawer) {
        overlay = document.createElement('div');
        overlay.id = 'cartDrawerOverlay';
        overlay.className = 'cart-drawer-overlay';
        drawer = document.createElement('div');
        drawer.id = 'cartDrawer';
        drawer.className = 'cart-drawer';
        drawer.innerHTML = `
            <div class="cart-drawer-header"><h2>Votre Panier</h2><div class="cart-drawer-close">&times;</div></div>
            <div class="cart-drawer-items"></div>
            <div class="cart-drawer-footer">
                <div class="cart-total"><span>Total :</span><span class="cart-total-value">0,00 €</span></div>
                <button class="cart-checkout-btn">Valider ma commande</button>
            </div>`;
        document.body.appendChild(overlay);
        document.body.appendChild(drawer);

        const closeBtn = drawer.querySelector('.cart-drawer-close');
        if (closeBtn) closeBtn.addEventListener('click', toggleDrawer);
        if (overlay) overlay.addEventListener('click', toggleDrawer);

        const checkoutBtn = drawer.querySelector('.cart-checkout-btn');
        if (checkoutBtn) checkoutBtn.addEventListener('click', () => { window.location.href = 'validation-commande.html'; });
    }

    const drawerItems = drawer.querySelector('.cart-drawer-items');
    const totalValue = drawer.querySelector('.cart-total-value');

    function toggleDrawer() {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
        if (drawer.classList.contains('active')) renderCart();
    }

    function renderCart() {
        drawerItems.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            drawerItems.innerHTML = '<div class="cart-empty-msg">Votre panier est encore vide...</div>';
            totalValue.textContent = '0,00 €';
            return;
        }
        cart.forEach((item, index) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            const priceNum = parseFloat(item.price.replace(',', '.').replace(/[^\d.]/g, '')) || 0;
            total += priceNum;
            itemEl.innerHTML = `
                <img src="${item.image}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-remove" data-index="${index}">Supprimer</div>
                </div>`;
            drawerItems.appendChild(itemEl);
        });
        totalValue.textContent = total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
        drawerItems.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                cart.splice(btn.getAttribute('data-index'), 1);
                localStorage.setItem('tyZephyrriaCart', JSON.stringify(cart));
                updateCartUI(); renderCart();
            });
        });
    }

    window.updateCartUI = function () {
        const cartIcons = document.querySelectorAll('.cart-icon');
        const currentCart = JSON.parse(localStorage.getItem('tyZephyrriaCart')) || [];
        const count = currentCart.length;
        cartIcons.forEach(icon => {
            let badge = icon.querySelector('.cart-badge');
            if (count > 0) {
                if (!badge) { badge = document.createElement('span'); badge.className = 'cart-badge'; icon.appendChild(badge); }
                badge.textContent = count;
            } else if (badge) badge.remove();
        });
    }


    document.addEventListener('click', (e) => { if (e.target.closest('.cart-icon')) toggleDrawer(); });

    window.addToCart = function (item) {
        cart.push({ id: item.id || Date.now(), title: item.title, price: item.price, image: item.image, date: new Date().toISOString() });
        localStorage.setItem('tyZephyrriaCart', JSON.stringify(cart));
        updateCartUI();
        const cartIcon = document.querySelector('.cart-icon');
        if (cartIcon) { cartIcon.classList.add('cart-animate'); setTimeout(() => cartIcon.classList.remove('cart-animate'), 500); }
    };

    window.showSuccessNotification = function (message) {
        let notification = document.getElementById('successNotification');
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'successNotification';
            notification.className = 'success-notification';
            notification.innerHTML = `<div class="success-icon">✓</div><div class="success-message"></div><button class="success-close-btn">Continuer mes achats</button>`;
            document.body.appendChild(notification);
            notification.querySelector('.success-close-btn').addEventListener('click', () => notification.classList.remove('active'));
        }
        notification.querySelector('.success-message').textContent = message;
        setTimeout(() => notification.classList.add('active'), 10);
        setTimeout(() => notification.classList.remove('active'), 3000);
    };

    updateCartUI();
}

/**
 * Initialisation de la page de validation de commande
 */
window.initCheckout = function () {
    let cart = JSON.parse(localStorage.getItem('tyZephyrriaCart')) || [];
    const itemsList = document.getElementById('checkoutItemsList');
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const grandTotalEl = document.getElementById('checkoutGrandTotal');
    const form = document.getElementById('checkoutForm');

    // État local pour suivre les items marqués comme supprimés sur cette page
    let removedIndices = [];

    if (!itemsList) return;

    function renderCheckout() {
        itemsList.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            itemsList.innerHTML = '<div class="cart-empty-msg">Votre panier est vide. Retournez à la boutique pour choisir vos créations.</div>';
            subtotalEl.textContent = '0,00 €';
            grandTotalEl.textContent = '0,00 €';
            return;
        }

        cart.forEach((item, index) => {
            const isRemoved = removedIndices.includes(index);
            const itemEl = document.createElement('div');
            itemEl.className = `checkout-item ${isRemoved ? 'is-removed' : ''}`;

            const priceNum = parseFloat(item.price.replace(',', '.').replace(/[^\d.]/g, '')) || 0;
            if (!isRemoved) total += priceNum;

            itemEl.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="checkout-item-img">
                <div class="checkout-item-info">
                    <div class="checkout-item-title">${item.title} ${isRemoved ? '<span class="status-tag">(Supprimé)</span>' : ''}</div>
                    <div class="checkout-item-price">${item.price}</div>
                    ${isRemoved ? '<div class="restore-item" data-index="' + index + '">Remettre dans le panier</div>' : ''}
                </div>
                ${!isRemoved ? '<div class="checkout-item-remove" data-index="' + index + '" title="Supprimer de la sélection">&times;</div>' : ''}
            `;
            itemsList.appendChild(itemEl);
        });

        const formattedTotal = total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
        subtotalEl.textContent = formattedTotal;
        grandTotalEl.textContent = formattedTotal;

        // Gestion des actions (Supprimer / Restaurer)
        itemsList.querySelectorAll('.checkout-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'));
                removedIndices.push(idx);
                renderCheckout();
            });
        });

        itemsList.querySelectorAll('.restore-item').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-index'));
                removedIndices = removedIndices.filter(i => i !== idx);
                renderCheckout();
            });
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Filtrer le panier pour ne garder que ce qui n'est pas "supprimé"
            const finalCart = cart.filter((_, index) => !removedIndices.includes(index));

            if (finalCart.length === 0) {
                alert("Votre panier est vide ou tous les articles ont été supprimés.");
                return;
            }

            const formData = new FormData(form);
            const lastName = document.getElementById('lastName').value;
            const firstName = document.getElementById('firstName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value || "Non précisé";
            const address = document.getElementById('address').value;
            const sendCopy = document.getElementById('sendCopy').checked;

            // Construction du récapitulatif pour l'email (Texte et HTML)
            let itemsDetails = "";
            let itemsHtml = '<ul style="list-style: none; padding: 0;">';
            let total = 0;

            finalCart.forEach(item => {
                // Version Texte
                itemsDetails += `- ${item.title} (${item.price})\n`;
                
                // Version HTML avec miniature
                itemsHtml += `
                    <li style="margin-bottom: 15px; display: flex; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                        <img src="${item.image}" width="60" height="60" style="object-fit: cover; border-radius: 4px; margin-right: 15px; border: 1px solid #ddd;">
                        <div style="font-family: Arial, sans-serif;">
                            <strong style="color: #333;">${item.title}</strong><br>
                            <span style="color: #D4AF37; font-weight: bold;">${item.price}</span>
                        </div>
                    </li>`;

                const priceNum = parseFloat(item.price.replace(',', '.').replace(/[^\d.]/g, '')) || 0;
                total += priceNum;
            });
            itemsHtml += "</ul>";
            
            const formattedTotal = total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

            // Changement d'état du bouton
            const submitBtn = checkoutForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = "Envoi en cours...";

            // Préparation des paramètres pour le modèle EmailJS
            const templateParams = {
                user_name: firstName + " " + lastName,
                user_email: email,
                user_phone: phone,
                user_address: address,
                cart_details: itemsDetails, // Gardé pour la compatibilité
                cart_html: itemsHtml,       // Nouvelle variable avec les photos
                total_amount: formattedTotal,
                cc_email: sendCopy ? email : "" 
            };

            // Envoi via EmailJS
            emailjs.send("service_6qeqf35", "template_ypwrd7s", templateParams)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Affichage de la modale de succès
                    const thankYouModal = document.getElementById('thankYouModal');
                    if (thankYouModal) {
                        thankYouModal.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    }
                    
                    // Vider le panier RÉEL (localStorage)
                    localStorage.removeItem('tyZephyrriaCart');
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    alert("Désolé, une erreur technique est survenue. Merci de nous contacter directement par mail à tyzephyrria@gmail.com.");
                    
                    // Réactiver le bouton en cas d'échec
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                });

            // La redirection automatique est désactivée car l'utilisateur a un bouton "Retourner à l'accueil" dans la modale
        });
    }


    // Gestion de la modale "Comment commander"
    const howToModal = document.getElementById('howToModal');
    const openHowToBtn = document.getElementById('openHowToModal');
    const closeHowToBtn = howToModal ? howToModal.querySelector('.modal-close') : null;
    const closeHowToBtn2 = howToModal ? howToModal.querySelector('.close-how-to') : null;

    if (openHowToBtn && howToModal) {
        openHowToBtn.addEventListener('click', (e) => {
            e.preventDefault();
            howToModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        const closeHowTo = () => {
            howToModal.classList.remove('active');
            document.body.style.overflow = '';
        };

        if (closeHowToBtn) closeHowToBtn.addEventListener('click', closeHowTo);
        if (closeHowToBtn2) closeHowToBtn2.addEventListener('click', closeHowTo);
        howToModal.addEventListener('click', (e) => { if (e.target === howToModal) closeHowTo(); });
    }

    renderCheckout();
};

/**
 * Compteur de visites (API CounterAPI.dev)
 * Limitation : une incrémentation max toutes les 15 minutes par visiteur
 */
function initVisitorCounter() {
    const counterEl = document.getElementById('visit-count');
    if (!counterEl) return;

    const now = Date.now();
    const thirtyMinutes = 30 * 60 * 1000;
    const lastVisit = localStorage.getItem('tyZephyrria_lastVisit');

    // Déterminer si on doit incrémenter ou juste lire
    let url = 'https://api.counterapi.dev/v1/tyzephyrria/global'; // Lecture simple

    if (!lastVisit || (now - parseInt(lastVisit)) > thirtyMinutes) {
        url = 'https://api.counterapi.dev/v1/tyzephyrria/global/up'; // Incrémentation
        localStorage.setItem('tyZephyrria_lastVisit', now.toString());
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data && data.count) {
                counterEl.textContent = data.count.toLocaleString('fr-FR');
            }
        })
        .catch(err => {
            console.error("Erreur compteur:", err);
            counterEl.textContent = "---";
        });
}





function initPhotoBoutique() {
    const btnPhotos = document.getElementById('btn-photos');
    const btnPresta = document.getElementById('btn-presta');
    const prestaModal = document.getElementById('prestaModal');
    const galleryModal = document.getElementById('galleryModal');
    const themesGrid = document.getElementById('themesGrid');
    const zoomPopup = document.getElementById('zoomPopup');
    const zoomImg = document.getElementById('zoomImg');

    // Fermeture des modales (générique)
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
            document.body.style.overflow = '';
        });
    });

    // Ouverture Modale Prestations
    if (btnPresta && prestaModal) {
        btnPresta.addEventListener('click', () => {
            prestaModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const galleryData = {
        'nature': [{ id: 'ph-nat-1', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600', title: 'Forêt', price: '15 €' }],
        'animaux': [{ id: 'ph-ani-1', url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=600', title: 'Tortue', price: '20 €' }],
        'spectacles': [{ id: 'ph-spe-1', url: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=600', title: 'Scène', price: '25 €' }],
        'macro': [{ id: 'ph-mac-1', url: 'https://images.unsplash.com/photo-1476101015682-330df3e81cb8?q=80&w=600', title: 'Fleur', price: '15 €' }],
        'urbain': [{ id: 'ph-urb-1', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600', title: 'Ville', price: '18 €' }],
        'nuit': [{ id: 'ph-nui-1', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600', title: 'Étoiles', price: '30 €' }],
        'portrait': [{ id: 'ph-por-1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600', title: 'Regard', price: '22 €' }],
        'noirblanc': [{ id: 'ph-nb-1', url: 'https://images.unsplash.com/photo-1502759683299-cdcc69741a7f?q=80&w=600', title: 'Contraste', price: '15 €' }],
        'voyage': [{ id: 'ph-voy-1', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600', title: 'Horizon', price: '20 €' }],
        'mer': [{ id: 'ph-mer-1', url: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=600', title: 'Vagues', price: '18 €' }],
        'saisons': [{ id: 'ph-sai-1', url: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=600', title: 'Automne', price: '15 €' }],
        'insolite': [{ id: 'ph-ins-1', url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600', title: 'Angle', price: '25 €' }]
    };

    if (themesGrid && galleryModal) {
        themesGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.theme-card');
            if (!card) return;
            const theme = card.dataset.theme;
            const data = galleryData[theme];
            const grid = document.getElementById('modalPhotoGrid');
            const title = document.getElementById('galleryTitle');
            if (data && grid) {
                title.textContent = card.querySelector('h3').textContent;
                grid.innerHTML = '';
                data.forEach(photo => {
                    const item = document.createElement('div');
                    item.className = 'modal-photo-item product-image';
                    item.innerHTML = `
                        <button class="like-button" data-item-id="${photo.id}" title="J'aime">
                            <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                        </button>
                        <button class="quick-add-btn" title="Ajout rapide au panier">
                            <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>
                        </button>
                        <img src="${photo.url}" alt="${photo.title}" class="zoomable-img">
                        <div class="photo-info-overlay" style="padding: 10px; text-align: center; background: rgba(255,255,255,0.9); position: absolute; bottom: 0; width: 100%; font-size: 0.9rem;">
                            <strong>${photo.title}</strong><br>${photo.price}
                        </div>
                    `;
                    grid.appendChild(item);
                });
                galleryModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('zoomable-img')) {
            if (zoomPopup && zoomImg) {
                zoomImg.src = e.target.src;
                zoomPopup.style.display = 'flex';
            }
        }
    });

    if (zoomPopup) {
        zoomPopup.addEventListener('click', () => { zoomPopup.style.display = 'none'; });
        zoomPopup.addEventListener('contextmenu', (e) => { e.preventDefault(); zoomPopup.style.display = 'none'; });
    }
}
