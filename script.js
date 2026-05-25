/**
 * Ty Zephyrria - Script de gestion dynamique des éléments visuels et composants communs
 */

/* ==========================================================================
   COMPOSANTS COMMUNS (HEADER, SOCIAL, FOOTER)
   ========================================================================== */
const COMMON_TEMPLATES = {
    banner: `
        <header class="top-banner">
            <h1>Bienvenue sur Ty Zephyrria</h1>
            <p class="small-text">« La Multipotentialité au service de la Curiosité »</p>
            <div class="cart-icon" title="Panier">🛒</div>
        </header>
    `,
    nav: `
        <nav>
            <div class="nav-container-new">
                <div class="nav-row row-main">
                    <!-- Groupe Gauche -->
                    <ul class="nav-menu menu-side menu-left">
                        <li class="nav-item btn-underlined small-text">
                            <a href="valeurs.html" class="two-lines">Ty Zephyrria,<br>ses valeurs</a>
                        </li>
                        <li class="nav-item btn-underlined small-text">
                            <a href="qui-suis-je.html">Qui suis-je ?</a>
                        </li>
                    </ul>

                    <!-- Groupe Centre -->
                    <ul class="nav-menu menu-center-buttons">
                        <li class="nav-item btn-bordered dropdown">
                            <a href="boutique-creations.html">Créations artisanales</a>
                            <ul class="dropdown-content">
                                <li><a href="boutique-creations.html">Tout</a></li>
                                <li><a href="boutique-creations.html?cat=bijoux">Bijoux fantaisies</a></li>
                                <li><a href="boutique-creations.html?cat=point-de-croix">Point de croix</a></li>
                                <li><a href="boutique-creations.html?cat=gravure">Gravures diverses</a></li>
                                <li><a href="boutique-creations.html?cat=bois">Travail sur bois</a></li>
                            </ul>
                        </li>
                        <li class="nav-item btn-bordered">
                            <a href="boutique-photo.html">Photographie</a>
                        </li>
                        <li class="nav-item btn-bordered dropdown">
                            <a href="boutique-graphisme.html">Graphisme</a>
                            <ul class="dropdown-content">
                                <li><a href="boutique-graphisme.html">Tout</a></li>
                                <li><a href="boutique-graphisme.html?cat=logo">Logo</a></li>
                                <li><a href="boutique-graphisme.html?cat=cartes">Cartes de visite</a></li>
                                <li><a href="boutique-graphisme.html?cat=affiches">Affiches</a></li>
                            </ul>
                        </li>
                        <li class="nav-item btn-bordered dropdown">
                            <a href="boutique-auteur-et-illustrations-manuelles.html">Auteur/Illustrations</a>
                            <ul class="dropdown-content">
                                <li><a href="boutique-auteur-et-illustrations-manuelles.html">Tout</a></li>
                                <li><a href="boutique-auteur-et-illustrations-manuelles.html?cat=auteur">Auteur</a></li>
                                <li><a href="boutique-auteur-et-illustrations-manuelles.html?cat=crayon">Dessins au Crayon</a></li>
                                <li><a href="boutique-auteur-et-illustrations-manuelles.html?cat=aquarelle">Aquarelle</a></li>
                                <li><a href="boutique-auteur-et-illustrations-manuelles.html?cat=acrylique">Acrylique</a></li>
                                <li><a href="boutique-auteur-et-illustrations-manuelles.html?cat=autres">Autres techniques</a></li>
                            </ul>
                        </li>
                    </ul>

                    <!-- Bloc Accueil -->
                    <ul class="nav-menu menu-accueil">
                        <li class="nav-item btn-underlined">
                            <a href="accueil.html">Accueil</a>
                        </li>
                    </ul>

                    <!-- Groupe Droite -->
                    <ul class="nav-menu menu-side menu-right">
                        <li class="nav-item btn-underlined small-text">
                            <a href="contact.html">Contactez-moi</a>
                        </li>
                        <li class="nav-item btn-underlined small-text">
                            <a href="#social-section">RDV sur les médias</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `,
    social: `
        <section id="social-section" class="social-container">
            <div class="social-line">
                <strong>Suivez-moi</strong>
                <svg class="arrow-svg" viewBox="42 68.5 116 62.999" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M118.941 98.239c-19.29.475-38.567-4.876-57.731-1.939-1.689 8.823-1.442 12.03 1.349 18.1 1.132.106 2.412.375 3.679.323 15.109-.619 30.217-1.241 45.32-1.962 5.712-.273 1.179 2.137 4.225 7.298l-.695 7.966c11.316-6.604 27.986-20.773 37.028-29.365l-31.278-17.954c-.676 5.252-1.196 12.082-1.897 17.533z" fill="#FDD900"></path>
                        <path d="M158 96.5c-1.115-.745-2.355-1.645-3.662-2.432-10.048-6.055-20.137-12.043-30.147-18.159-2.663-1.627-5.022-3.748-7.656-5.431-3.756-2.4-7.961-2.513-11.897-.893-3.524 1.45-1.646 5.067-2.064 7.724-.557 3.537-.878 7.111-1.378 11.328-6.188-.335-11.625-.643-17.063-.921-11.221-.574-22.439-1.283-33.667-1.631-5.35-.166-7.646 2.065-8.12 7.375-.596 6.681-.681 13.348 1.895 20.208.419 1.117 1.541 1.813 2.732 1.779l59.435-1.666c0 3.569-.263 6.953.057 10.281.601 6.239 3.195 8.175 9.595 7.198 2.073-.316 5.194-1.562 6.961-2.691 13.067-8.343 23.679-19.577 34.807-30.196.27-.257.105-.971.172-1.873zm-40.039 25.214l.695-7.966c-.495-5.093-8.328-5.665-14.041-5.393-15.104.721-30.212 1.343-45.32 1.962-1.267.052-2.547-.216-3.679-.323-2.791-6.069-3.038-9.277-1.349-18.1 19.164-2.937 38.441 2.414 57.731 1.939l1.896-14.744 31.278 17.954c-9.041 8.593-15.896 18.067-27.211 24.671z" fill="#000010"></path>
                    </g>
                </svg>
                <div class="icons-list">
                    <a href="https://facebook.com" class="social-item">
                        <svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/tyzephyrria_creations?igsh=bDZmazk4aHJ3N3Iy" class="social-item">
                        <svg viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        <span><strong>Créations</strong></span>
                    </a>
                    <a href="https://www.instagram.com/tycorn_pictures?igsh=MTJyY2t3Z21zNmkwYw==" class="social-item">
                        <svg viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        <span><strong>Photo</strong></span>
                    <a href="https://www.instagram.com/tyzephyrria_chant?igsh=MTgwZTh4aG1iaG41Yw==" class="social-item">
                        <svg viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        <span><strong>Chant</strong></span>
                    </a>
                    <a href="https://www.instagram.com/braizhe_de_phoenix?igsh=MTE4M3hvNHozMnd1dg==" class="social-item">
                        <svg viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        <span><strong>Braizhe de Phoenix</strong></span>
                    </a>
                    <a href="https://youtube.com" class="social-item">
                        <svg viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                </div>
            </div>

            <div class="social-line">
                <strong>Partagez ce site</strong>
                <svg class="arrow-svg" viewBox="42 68.5 116 62.999" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M118.941 98.239c-19.29.475-38.567-4.876-57.731-1.939-1.689 8.823-1.442 12.03 1.349 18.1 1.132.106 2.412.375 3.679.323 15.109-.619 30.217-1.241 45.32-1.962 5.712-.273 1.179 2.137 4.225 7.298l-.695 7.966c11.316-6.604 27.986-20.773 37.028-29.365l-31.278-17.954c-.676 5.252-1.196 12.082-1.897 17.533z" fill="#FDD900"></path>
                        <path d="M158 96.5c-1.115-.745-2.355-1.645-3.662-2.432-10.048-6.055-20.137-12.043-30.147-18.159-2.663-1.627-5.022-3.748-7.656-5.431-3.756-2.4-7.961-2.513-11.897-.893-3.524 1.45-1.646 5.067-2.064 7.724-.557 3.537-.878 7.111-1.378 11.328-6.188-.335-11.625-.643-17.063-.921-11.221-.574-22.439-1.283-33.667-1.631-5.35-.166-7.646 2.065-8.12 7.375-.596 6.681-.681 13.348 1.895 20.208.419 1.117 1.541 1.813 2.732 1.779l59.435-1.666c0 3.569-.263 6.953.057 10.281.601 6.239 3.195 8.175 9.595 7.198 2.073-.316 5.194-1.562 6.961-2.691 13.067-8.343 23.679-19.577 34.807-30.196.27-.257.105-.971.172-1.873zm-40.039 25.214l.695-7.966c-.495-5.093-8.328-5.665-14.041-5.393-15.104.721-30.212 1.343-45.32 1.962-1.267.052-2.547-.216-3.679-.323-2.791-6.069-3.038-9.277-1.349-18.1 19.164-2.937 38.441 2.414 57.731 1.939l1.896-14.744 31.278 17.954c-9.041 8.593-15.896 18.067-27.211 24.671z" fill="#000010"></path>
                    </g>
                </svg>
                <div class="icons-list">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://tyzephyrria.fr" target="_blank" class="social-item" title="Partager sur Facebook">
                        <svg viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/tyzephyrria_creations?igsh=bDZmazk4aHJ3N3Iy" target="_blank" class="social-item" title="Partager sur Instagram">
                        <svg viewBox="0 0 24 24" fill="#E4405F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        <span>Instagram</span>
                    </a>
                    <a href="https://wa.me/?text=Découvrez Ty Zephyrria : https://tyzephyrria.fr" target="_blank" class="social-item" title="Partager sur WhatsApp">
                        <svg viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.611 6.008L0 24l6.132-1.61a11.805 11.805 0 005.912 1.586h.005c6.635 0 12.046-5.411 12.049-12.047a11.823 11.823 0 00-3.48-8.452"/></svg>
                        <span>whatsapp</span>
                    </a>                                        
                    <a href="https://twitter.com/intent/tweet?url=https://tyzephyrria.fr&text=Découvrez Ty Zephyrria !" target="_blank" class="social-item" title="Partager sur X">
                        <svg viewBox="0 0 24 24" fill="#000000"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/></svg>
                        <span>X<br>(ex-twitter)</span>
                    </a>
                    <a href="https://tiktok.com" target="_blank" class="social-item" title="Partager sur TikTok">
                        <svg viewBox="0 0 24 24" fill="#000000"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.1-1.32-.09-.07-.11-.17-.11-.27V13.5c0 1.49-.18 3.01-.83 4.34-.63 1.33-1.7 2.49-3.05 3.11-1.32.65-2.91.88-4.38.73-1.46-.14-2.85-.74-3.95-1.74-1.1-1.02-1.83-2.45-2.07-3.93-.24-1.48-.02-3.04.64-4.42.66-1.37 1.83-2.52 3.24-3.11 1.34-.59 2.87-.73 4.3-.44v4.07c-.44-.05-.89-.04-1.33.02-.45.07-.88.22-1.26.47-.38.25-.68.6-.86 1.02-.19.42-.25.89-.16 1.34.09.44.33.84.66 1.15.33.31.75.52 1.21.6.45.07.92.01 1.34-.17.41-.19.75-.51.96-.92.21-.42.29-.89.29-1.36V.02z"/></svg>
                        <span>tiktok</span>
                    </a>
                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://tyzephyrria.fr" target="_blank" class="social-item" title="Partager sur LinkedIn">
                        <svg viewBox="0 0 24 24" fill="#0077B5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        <span>linkedin</span>
                    </a>
                    <a href="https://www.threads.net/intent/post?text=Découvrez Ty Zephyrria : https://tyzephyrria.fr" target="_blank" class="social-item" title="Partager sur Threads">
                        <svg viewBox="0 0 24 24" fill="#000000"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>
                        <span>thread</span>
                    </a>
                    <a href="https://pinterest.com/pin/create/button/?url=https://tyzephyrria.fr&description=Découvrez Ty Zephyrria !" target="_blank" class="social-item" title="Partager sur Pinterest">
                        <svg viewBox="0 0 24 24" fill="#BD081C"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C24.02 5.367 18.633 0 12.017 0z"/></svg>
                        <span>pinterest</span>
                    </a>
                    <a href="mailto:?subject=Découvrez Ty Zephyrria&body=Je vous invite à découvrir ce site : https://tyzephyrria.fr" class="social-item" title="Partager par Email">
                        <svg viewBox="0 0 24 24" fill="#777777"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        <span>mail</span>
                    </a>
                    <button class="social-item copy-link-btn" title="Copier le lien du site" onclick="copySiteLink()">
                        <svg viewBox="0 0 24 24" fill="#555555"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        <span>copier le lien<br>du site</span>
                    </button>
                </div>
            </div>
        </section>
    `,
    preFooter: `
        <section class="pre-footer-section">
            <div class="image-container">
                <img src="assets/0-accueil-valeurs-qui-suis-je/ty-zephyrria-officiel.png" alt="Visuel Ty Zephyrria">
            </div>
        </section>
    `,
    backToTop: `
        <div class="back-to-top-row">
            <a href="#top" class="back-link">Haut de page</a>
            <a href="#top" class="back-link desktop-only">Haut de page</a>
        </div>
    `,
    footer: `
        <div class="visitor-counter">
            <span>VISITES :</span>
            <span id="visit-count" class="count-number">...</span>
        </div>
        <footer>
            <p><a href="index.html" style="text-decoration: none; color: inherit; cursor: default;">&copy;</a> 2026 TY ZEPHYRRIA — SAINT-NAZAIRE — FRANCE</p>
            <p>Créations artisanales, Photographie, Graphisme, Auteur et Illustrations</p>
        </footer>
    `
};

/**
 * Injecte les composants communs dans les placeholders prévus
 */
function injectCommonComponents() {
    const placeholders = {
        'banner-placeholder': COMMON_TEMPLATES.banner,
        'nav-placeholder': COMMON_TEMPLATES.nav,
        'social-placeholder': COMMON_TEMPLATES.social,
        'pre-footer-placeholder': COMMON_TEMPLATES.preFooter,
        'back-to-top-placeholder': COMMON_TEMPLATES.backToTop,
        'footer-placeholder': COMMON_TEMPLATES.footer
    };

    for (const [id, html] of Object.entries(placeholders)) {
        const el = document.getElementById(id);
        if (el) {
            let finalHtml = html;
            // Si on est sur la page e-santé et qu'on injecte le footer, on ajoute la mention
            if (id === 'footer-placeholder' && window.location.pathname.includes('e-sante.html')) {
                finalHtml = finalHtml.replace(
                    'Auteur et Illustrations',
                    'Auteur et Illustrations, Spécialiste Assistant Clinique'
                );
            }
            el.innerHTML = finalHtml;
        }
    }

    // Ré-initialiser les écouteurs pour le panier car le header a été injecté
    const cartIcon = document.querySelector('.cart-icon');
    const closeCart = document.querySelector('.cart-drawer-close');

    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            document.getElementById('cart-drawer').classList.add('active');
        });
    }
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            document.getElementById('cart-drawer').classList.remove('active');
        });
    }

    // Mettre à jour le compteur du panier
    // Mettre à jour le compteur du panier
    if (window.updateCartUI) window.updateCartUI();
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialiser le panier en premier pour avoir updateCartUI disponible
    initCart();

    // 2. Injecter les composants communs
    injectCommonComponents();

    // 3. Initialisation des autres sections dynamiques
    initWind();
    initFireFlames();
    initWaves();
    initDroplets();
    initFoliage();
    initBoutiqueFilter();
    initLikes();
    initModal();
    initVisitorCounter();
    initPhotoBoutique();
    initContactForm();
    initKeyboardNavigation();
});

/**
 * Gère la navigation au clavier (Touche Effacer -> Page précédente)
 */
function initKeyboardNavigation() {
    window.addEventListener('keydown', function (e) {
        // Vérifier si c'est la touche Backspace (Retour arrière)
        if (e.key === 'Backspace' || e.keyCode === 8) {
            const target = e.target;
            const isInput = target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA' ||
                target.isContentEditable;

            // Si on n'est pas dans un champ de saisie, on revient en arrière
            if (!isInput) {
                e.preventDefault(); // Évite certains comportements par défaut du navigateur
                window.history.back();
            }
        }
    });
}

/**
 * Initialise le formulaire de contact
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        const formData = new FormData(form);

        submitBtn.disabled = true;
        submitBtn.textContent = "Envoi en cours...";

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                if (window.showSuccessNotification) {
                    window.showSuccessNotification("Message envoyé avec succès ! Je vous répondrai bientôt.");
                } else {
                    alert("Message envoyé avec succès ! Je vous répondrai bientôt.");
                }
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oups ! Un problème est survenu lors de l'envoi.");
                    }
                });
            }
        }).catch(error => {
            alert("Oups ! Un problème est survenu lors de l'envoi.");
        }).finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    });
}

/**
 * Copie le lien du site dans le presse-papier
 */
window.copySiteLink = function () {
    const url = "https://tyzephyrria.fr";
    navigator.clipboard.writeText(url).then(() => {
        if (window.showSuccessNotification) {
            window.showSuccessNotification("Lien du site copié !");
        } else {
            alert("Lien du site copié !");
        }
    }).catch(err => {
        console.error('Erreur lors de la copie : ', err);
    });
};

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

    const prestaThemeCard = document.getElementById('prestaThemeCard');
    if (prestaThemeCard && prestaModal) {
        prestaThemeCard.addEventListener('click', () => {
            prestaModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    const galleryData = {
        'nature': [
            { id: 'ph-nat-1', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=600', title: 'Forêt', price: '15 €', description: 'Une immersion paisible au cœur de la forêt bretonne.' }
        ],
        'mer': [
            { id: 'ph-mer-1', url: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=600', title: 'Vagues', price: '18 €', description: 'La puissance de l\'océan capturée en un instant.' }
        ],
        'saisons': [
            { id: 'ph-sai-1', url: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=600', title: 'Automne', price: '15 €', description: 'Les couleurs flamboyantes de l\'automne.' }
        ],
        'fleurs': [
            { id: 'ph-fle-1', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=600', title: 'Printemps', price: '18 €', description: 'L\'éveil de la nature au printemps.' }
        ],

        'animaux': [
            { id: 'ph-ani-1', url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=600', title: 'Tortue', price: '20 €', description: 'Le temps s\'arrête pour cette tortue centenaire.' }
        ],
        'petits-animaux': [
            { id: 'ph-pan-1', url: 'https://images.unsplash.com/photo-1548767791-514d367c83be?q=80&w=600', title: 'Écureuil', price: '15 €', description: 'Un petit habitant des bois en pleine exploration.' }
        ],
        'insectes-papillons': [
            { id: 'ph-ins-2', url: 'https://images.unsplash.com/photo-1470114716159-e389f8712fad?q=80&w=600', title: 'Machaon', price: '20 €', description: 'La délicatesse d\'un papillon posé sur une fleur.' }
        ],
        'oiseaux': [
            { id: 'ph-ois-1', url: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?q=80&w=600', title: 'Petit Oiseau', price: '18 €', description: 'Le chant matinal d\'un oiseau sur sa branche.' }
        ],

        'eau-cascades': [
            { id: 'ph-eau-1', url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=600', title: 'Chute d\'eau', price: '18 €', description: 'La force tranquille de l\'eau en mouvement.' }
        ],
        'feux-lumiere': [
            { id: 'ph-feu-1', url: 'https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?q=80&w=600', title: 'Bouquet Final', price: '25 €', description: 'L\'explosion de couleurs illuminant la nuit noire.' }
        ],
        'nuit': [
            { id: 'ph-nui-1', url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600', title: 'Étoiles', price: '30 €', description: 'Le silence étoilé d\'une nuit sans nuages.' }
        ],
        'voyage': [
            { id: 'ph-voy-1', url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600', title: 'Horizon', price: '20 €', description: 'L\'appel de l\'aventure vers de nouveaux horizons.' }
        ],

        'macro': [
            { id: 'ph-mac-1', url: 'https://images.unsplash.com/photo-1476101015682-330df3e81cb8?q=80&w=600', title: 'Fleur', price: '15 €', description: 'La beauté délicate de l\'infiniment petit.' }
        ],
        'spectacles': [
            { id: 'ph-spe-1', url: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=600', title: 'Scène', price: '25 €', description: 'L\'énergie brute d\'un concert sous les projecteurs.' }
        ],
        'urbain': [
            { id: 'ph-urb-1', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600', title: 'Ville', price: '18 €', description: 'Géométrie urbaine et jeux de lumières citadines.' }
        ],
        'sport': [
            { id: 'ph-spo-1', url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600', title: 'Patinage Artistique', price: '20 €', description: 'La grâce et la technique sur la glace lors des JO de Milan Cortina 2026.' },
            { id: 'ph-spo-2', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600', title: 'Athlétisme', price: '15 €', description: 'Le dépassement de soi dans l\'effort intense.' }
        ],

        'manuel': [
            { id: 'ph-man-1', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600', title: 'Travail Manuel', price: '18 €', description: 'Travail artisanales minutieux.' }
        ],

        'insolite': [
            { id: 'ph-ins-1', url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600', title: 'Angle', price: '25 €', description: 'Un regard différent sur les choses du quotidien.' }
        ],
        'portrait': [
            { id: 'ph-por-1', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600', title: 'Regard', price: '22 €', description: 'L\'expression d\'une âme à travers un portrait.' }
        ],
        'noirblanc': [
            { id: 'ph-nb-1', url: 'https://images.unsplash.com/photo-1502759683299-cdcc69741a7f?q=80&w=600', title: 'Contraste', price: '15 €', description: 'L\'élégance intemporelle du noir et blanc.' }
        ],
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
                        <button class="zoom-icon-btn" title="Agrandir">
                            <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor" stroke="none"/></svg>
                        </button>
                        <img src="${photo.url}" alt="${photo.title}" class="zoomable-img" loading="lazy" data-description="${photo.description || ''}">
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

    // Gestion du paramètre URL "cat" pour ouvrir automatiquement un thème (ex: boutique-photo.html?cat=portrait)
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat');
    if (cat && themesGrid) {
        const targetCard = themesGrid.querySelector(`.theme-card[data-theme="${cat}"]`);
        if (targetCard) {
            // Un petit délai pour s'assurer que le DOM est bien stable
            setTimeout(() => {
                targetCard.click();
            }, 500);
        }
    }

    let currentZoomImages = [];
    let currentZoomIndex = 0;

    const updateZoomDisplay = () => {
        if (currentZoomImages.length > 0 && zoomImg) {
            zoomImg.style.opacity = '0';
            setTimeout(() => {
                const currentImg = currentZoomImages[currentZoomIndex];
                zoomImg.src = currentImg.src.replace('&w=600', '&w=1600');

                const counter = document.getElementById('zoomCounter');
                if (counter) {
                    counter.textContent = `${currentZoomIndex + 1} / ${currentZoomImages.length}`;
                }

                const desc = currentImg.getAttribute('data-description');
                const descEl = document.getElementById('zoomDescription');
                if (descEl) descEl.textContent = desc;
            }, 200);
        }
    };

    if (zoomImg) {
        zoomImg.addEventListener('load', () => {
            zoomImg.style.opacity = '1';
        });
    }

    document.addEventListener('keydown', (e) => {
        if (zoomPopup && zoomPopup.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                currentZoomIndex = (currentZoomIndex - 1 + currentZoomImages.length) % currentZoomImages.length;
                updateZoomDisplay();
            } else if (e.key === 'ArrowRight') {
                currentZoomIndex = (currentZoomIndex + 1) % currentZoomImages.length;
                updateZoomDisplay();
            } else if (e.key === 'Escape') {
                zoomPopup.style.display = 'none';
            }
        }
    });

    document.addEventListener('click', (e) => {
        const zoomImgTarget = e.target.closest('.zoomable-img');
        if (zoomImgTarget) {
            e.preventDefault();
            e.stopPropagation();
            if (zoomPopup && zoomImg) {
                currentZoomImages = Array.from(document.querySelectorAll('#modalPhotoGrid .zoomable-img'));
                currentZoomIndex = currentZoomImages.indexOf(zoomImgTarget);
                if (currentZoomIndex === -1) {
                    currentZoomImages = [zoomImgTarget];
                    currentZoomIndex = 0;
                }
                updateZoomDisplay();
                zoomPopup.style.display = 'flex';
            }
        }

        // Animation bouton ajout panier
        const addBtn = e.target.closest('.quick-add-btn');
        if (addBtn) {
            const itemContainer = addBtn.closest('.modal-photo-item');
            if (itemContainer) {
                const img = itemContainer.querySelector('img');
                const title = itemContainer.querySelector('strong');
                const price = itemContainer.querySelector('.photo-info-overlay').innerText.split('\n').pop();

                if (window.addToCart) {
                    window.addToCart({
                        title: title ? title.textContent : "Photo",
                        price: price || "15 €",
                        image: img ? img.src : ""
                    });
                }

                addBtn.classList.add('success');
                setTimeout(() => addBtn.classList.remove('success'), 600);
            }
        }
    });

    if (zoomPopup) {
        const zoomPrev = document.getElementById('zoomPrev');
        const zoomNext = document.getElementById('zoomNext');
        const zoomClose = document.getElementById('zoomClose');

        if (zoomPrev) {
            zoomPrev.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentZoomImages.length > 0) {
                    currentZoomIndex = (currentZoomIndex - 1 + currentZoomImages.length) % currentZoomImages.length;
                    updateZoomDisplay();
                }
            });
        }

        if (zoomNext) {
            zoomNext.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentZoomImages.length > 0) {
                    currentZoomIndex = (currentZoomIndex + 1) % currentZoomImages.length;
                    updateZoomDisplay();
                }
            });
        }

        if (zoomClose) {
            zoomClose.addEventListener('click', (e) => {
                e.stopPropagation();
                zoomPopup.style.display = 'none';
            });
        }

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
                <div class="cart-clear-container" style="text-align: center; margin-top: 10px;">
                    <a href="#" onclick="window.clearCart(); return false;" style="font-size: 0.85rem; color: #666; text-decoration: underline;">Vider le panier</a>
                </div>
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

    window.clearCart = function () {
        if (confirm('Voulez-vous vraiment vider votre panier ?')) {
            localStorage.removeItem('tyZephyrriaCart');
            cart = [];
            if (window.updateCartUI) window.updateCartUI();
            if (window.location.pathname.includes('validation-commande.html')) {
                window.location.href = 'boutique-creations.html';
            } else {
                renderCart();
            }
        }
    };

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
    let url = 'https://api.counterapi.dev/v1/tyzephyrria/global/'; // Lecture simple

    if (!lastVisit || (now - parseInt(lastVisit)) > thirtyMinutes) {
        url = 'https://api.counterapi.dev/v1/tyzephyrria/global/up'; // Incrémentation
    }

    fetch(url)
        .then(res => {
            if (!res.ok) throw new Error("HTTP " + res.status);
            return res.json();
        })
        .then(data => {
            if (data && typeof data.count !== 'undefined') {
                counterEl.textContent = data.count.toLocaleString('fr-FR');
                if (url.endsWith('/up')) {
                    localStorage.setItem('tyZephyrria_lastVisit', now.toString());
                }
            } else {
                throw new Error("Pas de compteur dans les données");
            }
        })
        .catch(err => {
            console.warn("Erreur compteur principal:", err);
            // Si l'incrémentation échoue (ex: limite atteinte), on tente une lecture simple
            if (url.endsWith('/up')) {
                fetch('https://api.counterapi.dev/v1/tyzephyrria/global/')
                    .then(r => r.json())
                    .then(d => {
                        if (d && typeof d.count !== 'undefined') {
                            counterEl.textContent = d.count.toLocaleString('fr-FR');
                        } else {
                            counterEl.textContent = "---";
                        }
                    })
                    .catch(() => counterEl.textContent = "---");
            } else {
                counterEl.textContent = "---";
            }
        });
}




