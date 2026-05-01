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

    // Add more wind symbols only on desktop
    if (!isMobile) {
        windData.push(
            { p1: { delay: 0.9, duration: 4 }, p2: { delay: 1.5 } },
            { p1: { delay: 1.4, duration: 6 }, p2: { delay: 0.5 } },
            { p1: { delay: 0.6, duration: 7 }, p2: { delay: 1.8 } },
            { p1: { delay: 1.2, duration: 5 }, p2: { delay: 0.6 } }
        );
    }

    container.innerHTML = '';
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

/**
 * Génère dynamiquement les flammes pour les trois couches du feu.
 * Le nombre de flammes est calculé en fonction de la largeur de l'écran pour remplir de bout en bout.
 */
function initFireFlames() {
    const layers = ['.layer-back', '.layer-mid', '.layer-front'];
    
    const flameBaseWidth = 50; 
    const step = 48; // Rapproché de 5px (53px -> 48px)    
    const windowWidth = window.innerWidth;
    const numFlames = Math.ceil(windowWidth / step) + 5;

    layers.forEach((selector, layerIndex) => {
        const container = document.querySelector(selector);
        if (!container) return;
        container.innerHTML = '';
        const fragment = document.createDocumentFragment();
        
        // Stagger les couches horizontalement
        container.style.transform = `translateX(${layerIndex * -12}px)`;
        
        for (let i = 0; i < numFlames; i++) {
            const delay = (Math.random() * -5).toFixed(2);
            const duration = (1.6 + Math.random() * 1.8).toFixed(2);
            
            const group = document.createElement('div');
            group.className = 'fire-group';
            
            // Variations organiques : Taille (+/- 15%), Miroir et micro-décalage
            const scale = (0.85 + Math.random() * 0.3).toFixed(2);
            const flip = Math.random() > 0.5 ? -1 : 1;
            const xOffset = (Math.random() * 4 - 2).toFixed(0);
            
            // Application des transformations combinées
            group.style.transform = `translateX(${xOffset}px) scaleX(${flip * scale}) scaleY(${scale})`;
            
            group.innerHTML = `<svg class="flame-svg" style="animation-delay: ${delay}s; animation-duration: ${duration}s;"><use href="#multi-flame"/></svg>`;
            fragment.appendChild(group);
        }
        container.appendChild(fragment);
    });
}

// Gestion du redimensionnement pour recalculer les éléments dynamiques
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

/**
 * Génère dynamiquement les vagues pour qu'elles gardent une taille fixe en pixels.
 */
function initWaves() {
    const svg = document.querySelector('.wave-container svg');
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const svgWidthPx = rect.width;
    if (svgWidthPx === 0) return;
    const scale = svgWidthPx / 1000;

    // Paramètres fixes en PIXELS pour la stabilité visuelle
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
            // Fermeture du tracé pour le fond dégradé
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

/**
 * Génère dynamiquement les gouttes d'eau.
 */
function initDroplets() {
    const container = document.getElementById('droplets-collection');
    if (!container) return;
    const svg = container.closest('svg');
    if (!svg) return;

    // Récupération de la largeur réelle de l'SVG pour calculer l'échelle
    // On utilise getBoundingClientRect pour avoir la taille de rendu exacte
    const rect = svg.getBoundingClientRect();
    const svgWidthPx = rect.width;
    if (svgWidthPx === 0) return;
    
    // Le viewBox est de 1000 unités de large. 
    // L'échelle nous permet de convertir les pixels en unités SVG.
    const scale = svgWidthPx / 1000;

    // Paramètres en PIXELS pour la stabilité visuelle
    const targetBaseW_Px = 30; // Largeur de base souhaitée à l'écran
    const minSpacingPx = 15;   // Espace minimum entre les gouttes
    
    // On calcule le nombre de gouttes maximum pour éviter de saturer l'espace
    const maxDroplets = Math.floor(svgWidthPx / (targetBaseW_Px + minSpacingPx));
    const numDroplets = Math.min(maxDroplets, 25); // Capé à 25 pour le style

    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    
    const placed = []; // Stockage des positions {x, w} en pixels

    for (let i = 0; i < numDroplets; i++) {
        let attempts = 0;
        let success = false;

        while (attempts < 50 && !success) {
            // Sélection parmi 4 tailles fixes en pixels (20, 30, 40, 50)
            const sizes = [20, 30, 40, 50];
            const wPx = sizes[Math.floor(Math.random() * sizes.length)];
            const hPx = wPx * (1.2 + Math.random() * 0.4);
            
            // Position x en pixels
            const xPx = Math.random() * (svgWidthPx - wPx);
            // Position y en pixels (zone haute entre 0 et 40px)
            const yPx = Math.random() * 40;

            // Vérification de collision/espacement
            const overlap = placed.some(other => {
                return !(xPx + wPx + minSpacingPx < other.x || xPx > other.x + other.w + minSpacingPx);
            });

            if (!overlap) {
                success = true;
                placed.push({ x: xPx, w: wPx });

                // Conversion des pixels en unités SVG relatives au viewBox (0-1000)
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

/**
 * Génère dynamiquement le feuillage.
 */
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

