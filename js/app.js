// ============================================
// CONFIGURACIÓN DE GOOGLE DRIVE
// ============================================

// INSTRUCCIONES PARA CONFIGURAR GOOGLE DRIVE:
// 1. Sube tus imágenes a Google Drive
// 2. Organiza las carpetas por categoría (opcional)
// 3. Para cada imagen:
//    - Click derecho > Compartir > Cambiar a "Cualquier persona con el enlace"
//    - Copia el ID de la imagen del enlace (es la parte entre /d/ y /view)
// 4. Reemplaza los IDs en el array de 'trabajos' abajo

// Función para convertir ID de Google Drive a URL de imagen directa
function getGoogleDriveImageUrl(fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
}

// ============================================
// BASE DE DATOS DE TRABAJOS
// ============================================

// IMPORTANTE: Ahora cada trabajo puede tener múltiples imágenes en el array 'imagenes'
const trabajos = [
    {
        id: 1,
        titulo: "Construcción de Muro de Contención",
        categoria: "albañileria",
        imagenes: [
            "TU_ID_AQUI_1_IMG1",
            "TU_ID_AQUI_1_IMG2",
            "TU_ID_AQUI_1_IMG3"
        ],
        descripcion: "Muro de contención de 15 metros con acabado en piedra natural",
        rating: 9.2,
        fecha: "2024-12-01"
    },
    {
        id: 2,
        titulo: "Instalación Eléctrica Residencial",
        categoria: "electricidad",
        imagenes: [
            "TU_ID_AQUI_2_IMG1",
            "TU_ID_AQUI_2_IMG2"
        ],
        descripcion: "Sistema eléctrico completo para casa de 3 pisos",
        rating: 9.5,
        fecha: "2024-11-28"
    },
    {
        id: 3,
        titulo: "Sistema de Drenaje",
        categoria: "plomeria",
        imagenes: ["TU_ID_AQUI_3"],
        descripcion: "Instalación de sistema de drenaje pluvial y sanitario",
        rating: 8.8,
        fecha: "2024-11-25"
    },
    {
        id: 4,
        titulo: "Portón Automático",
        categoria: "herreria",
        imagenes: ["TU_ID_AQUI_4"],
        descripcion: "Portón corredizo automatizado con acabado en herrería artística",
        rating: 9.0,
        fecha: "2024-11-20"
    },
    {
        id: 5,
        titulo: "Remodelación de Sala",
        categoria: "acabados",
        imagenes: ["TU_ID_AQUI_5"],
        descripcion: "Renovación completa con pintura, pisos y mobiliario",
        rating: 9.3,
        fecha: "2024-11-15"
    },
    {
        id: 6,
        titulo: "Impermeabilización de Azotea",
        categoria: "impermeabilizacion",
        imagenes: [
            "1YH50HiDtHhTWlvlgB-tamhxtBpJ831go",
            "11YCKRC4SgkcZYGHl-WBIHzMhytXxAvlz",
            "15I_U4b5SP3-xztWWoV0XzZzgTYZGaNEu"
        ],
        descripcion: "Sistema de impermeabilización mediante membrana asfáltica prefabricada, aplicada por termofusión, que garantiza un sellado continuo y alta adherencia al sustrato. Ofrece elevada resistencia a la intemperie, rayos UV y movimientos estructurales, proporcionando una barrera efectiva contra filtraciones, humedad y deterioro del techo. Ideal para azoteas, losas de concreto y superficies expuestas.",
        rating: 8.9,
        fecha: "2024-11-10"
    },
    {
        id: 7,
        titulo: "Ampliación de Cocina",
        categoria: "albañileria",
        imagenes: ["TU_ID_AQUI_7"],
        descripcion: "Ampliación de 20m² con estructura de concreto armado",
        rating: 9.1,
        fecha: "2024-11-05"
    },
    {
        id: 8,
        titulo: "Panel Solar Residencial",
        categoria: "electricidad",
        imagenes: ["TU_ID_AQUI_8"],
        descripcion: "Instalación de sistema fotovoltaico de 5kW",
        rating: 9.4,
        fecha: "2024-11-01"
    },
    {
        id: 9,
        titulo: "Reparación de Tubería Principal",
        categoria: "plomeria",
        imagenes: ["TU_ID_AQUI_9"],
        descripcion: "Cambio de tubería principal de agua potable",
        rating: 8.7,
        fecha: "2024-10-28"
    },
    {
        id: 10,
        titulo: "Escalera de Hierro Forjado",
        categoria: "herreria",
        imagenes: ["TU_ID_AQUI_10"],
        descripcion: "Escalera helicoidal con pasamanos decorativo",
        rating: 9.6,
        fecha: "2024-10-25"
    },
    {
        id: 11,
        titulo: "Acabados en Baño Completo",
        categoria: "acabados",
        imagenes: ["TU_ID_AQUI_11"],
        descripcion: "Renovación completa con azulejo y accesorios modernos",
        rating: 8.9,
        fecha: "2024-10-20"
    },
    {
        id: 12,
        titulo: "Impermeabilización de Fachada",
        categoria: "impermeabilizacion",
        imagenes: ["TU_ID_AQUI_12"],
        descripcion: "Tratamiento anti-humedad en fachada principal",
        rating: 8.8,
        fecha: "2024-10-15"
    }
];

// Mapeo de categorías a nombres amigables
const categoriaNames = {
    'albañileria': 'Albañilería',
    'electricidad': 'Electricidad',
    'plomeria': 'Plomería',
    'herreria': 'Herrería',
    'acabados': 'Acabados de Interiores',
    'impermeabilizacion': 'Impermeabilización'
};

// ============================================
// VARIABLES GLOBALES
// ============================================

let filtroActual = 'all';
let trabajosFiltrados = [...trabajos];
let carouselIndex = 0;
let currentTrabajo = null;

// ============================================
// FUNCIONES DE RENDERIZADO
// ============================================

// Renderizar tarjetas en la galería principal
function renderGallery(trabajosArray) {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    if (trabajosArray.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 3rem;">No se encontraron trabajos con ese criterio.</p>';
        return;
    }
    
    trabajosArray.forEach(trabajo => {
        const card = createGalleryCard(trabajo);
        galleryGrid.appendChild(card);
    });
}

// Crear tarjeta individual
function createGalleryCard(trabajo) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.setAttribute('data-id', trabajo.id);
    card.setAttribute('data-categoria', trabajo.categoria);
    
    // Usar la primera imagen del array
    const primeraImagen = trabajo.imagenes[0];
    const imageUrl = primeraImagen.startsWith('TU_ID_AQUI') 
        ? 'https://via.placeholder.com/400x300/667eea/ffffff?text=' + encodeURIComponent(trabajo.titulo)
        : getGoogleDriveImageUrl(primeraImagen);
    
    // Descripción breve (primeros 80 caracteres)
    const descripcionBreve = trabajo.descripcion.length > 80 
        ? trabajo.descripcion.substring(0, 80) + '...' 
        : trabajo.descripcion;
    
    // Mostrar indicador si hay múltiples imágenes
    const multipleImages = trabajo.imagenes.length > 1 
        ? `<div class="image-count">📷 ${trabajo.imagenes.length}</div>` 
        : '';
    
    card.innerHTML = `
        <div class="card-image-wrapper">
            <img src="${imageUrl}" alt="${trabajo.titulo}" class="card-image" loading="lazy">
            ${multipleImages}
        </div>
        <div class="card-content">
            <h3 class="card-title">${trabajo.titulo}</h3>
            <div class="card-category">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="2" y="2" width="5" height="5"/>
                    <rect x="9" y="2" width="5" height="5"/>
                    <rect x="2" y="9" width="5" height="5"/>
                    <rect x="9" y="9" width="5" height="5"/>
                </svg>
                ${categoriaNames[trabajo.categoria]}
            </div>
            <p class="card-description">${descripcionBreve}</p>
        </div>
    `;
    
    // Event listener para abrir modal
    card.addEventListener('click', () => openModal(trabajo));
    
    return card;
}

// ============================================
// FUNCIONES DE FILTRADO
// ============================================

function filtrarPorCategoria(categoria) {
    filtroActual = categoria;
    
    if (categoria === 'all') {
        trabajosFiltrados = [...trabajos];
    } else {
        trabajosFiltrados = trabajos.filter(t => t.categoria === categoria);
    }
    
    renderGallery(trabajosFiltrados);
}

// ============================================
// NAVEGACIÓN ENTRE SECCIONES
// ============================================

function mostrarSeccion(seccion) {
    const galeriaSection = document.getElementById('galeria');
    const contactoSection = document.getElementById('contacto');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (seccion === 'galeria') {
        galeriaSection.style.display = 'block';
        contactoSection.style.display = 'none';
        navLinks[0].classList.add('active');
        navLinks[1].classList.remove('active');
    } else if (seccion === 'contacto') {
        galeriaSection.style.display = 'none';
        contactoSection.style.display = 'block';
        navLinks[0].classList.remove('active');
        navLinks[1].classList.add('active');
    }
}

// ============================================
// MODAL Y CARRUSEL
// ============================================

function openModal(trabajo) {
    currentTrabajo = trabajo;
    carouselIndex = 0;
    
    const modal = document.getElementById('imageModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    
    modalTitle.textContent = trabajo.titulo;
    modalCategory.textContent = categoriaNames[trabajo.categoria];
    modalDescription.textContent = trabajo.descripcion;
    
    // Renderizar carrusel
    renderCarousel(trabajo);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderCarousel(trabajo) {
    const carouselContainer = document.getElementById('carouselContainer');
    const hasMultipleImages = trabajo.imagenes.length > 1;
    
    const imageUrl = trabajo.imagenes[carouselIndex].startsWith('TU_ID_AQUI')
        ? 'https://via.placeholder.com/800x600/667eea/ffffff?text=' + encodeURIComponent(trabajo.titulo)
        : getGoogleDriveImageUrl(trabajo.imagenes[carouselIndex]);
    
    carouselContainer.innerHTML = `
        <img src="${imageUrl}" alt="${trabajo.titulo}" id="modalImage" class="carousel-image">
        ${hasMultipleImages ? `
            <button class="carousel-control prev" id="carouselPrev">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button class="carousel-control next" id="carouselNext">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
            <div class="carousel-indicators">
                ${trabajo.imagenes.map((_, i) => 
                    `<span class="indicator ${i === carouselIndex ? 'active' : ''}" data-index="${i}"></span>`
                ).join('')}
            </div>
            <div class="carousel-counter">${carouselIndex + 1} / ${trabajo.imagenes.length}</div>
        ` : ''}
    `;
    
    // Agregar event listeners si hay múltiples imágenes
    if (hasMultipleImages) {
        document.getElementById('carouselPrev')?.addEventListener('click', (e) => {
            e.stopPropagation();
            previousImage();
        });
        
        document.getElementById('carouselNext')?.addEventListener('click', (e) => {
            e.stopPropagation();
            nextImage();
        });
        
        // Indicadores
        document.querySelectorAll('.indicator').forEach(indicator => {
            indicator.addEventListener('click', (e) => {
                e.stopPropagation();
                carouselIndex = parseInt(indicator.getAttribute('data-index'));
                renderCarousel(currentTrabajo);
            });
        });
    }
}

function nextImage() {
    if (!currentTrabajo) return;
    carouselIndex = (carouselIndex + 1) % currentTrabajo.imagenes.length;
    renderCarousel(currentTrabajo);
}

function previousImage() {
    if (!currentTrabajo) return;
    carouselIndex = (carouselIndex - 1 + currentTrabajo.imagenes.length) % currentTrabajo.imagenes.length;
    renderCarousel(currentTrabajo);
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentTrabajo = null;
    carouselIndex = 0;
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Renderizado inicial
    renderGallery(trabajos);
    
    // Filtros del menú
    document.querySelectorAll('.menu-item[data-filter]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            mostrarSeccion('galeria');
            
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const filter = item.getAttribute('data-filter');
            filtrarPorCategoria(filter);
        });
    });
    
    // Navegación del header
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (index === 0) {
                mostrarSeccion('galeria');
            } else if (index === 1) {
                mostrarSeccion('contacto');
            }
        });
    });
    
    // Modal
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (currentTrabajo) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                previousImage();
            }
        }
    });
    
    // Smooth scroll para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#galeria') {
                e.preventDefault();
                mostrarSeccion('galeria');
            } else if (href === '#contacto') {
                e.preventDefault();
                mostrarSeccion('contacto');
            }
        });
    });
});

// ============================================
// FUNCIONES AUXILIARES ÚTILES
// ============================================

// Para agregar trabajos con múltiples imágenes
function agregarTrabajo(titulo, categoria, imagenes, descripcion, rating = 8.5) {
    const nuevoTrabajo = {
        id: trabajos.length + 1,
        titulo,
        categoria,
        imagenes: Array.isArray(imagenes) ? imagenes : [imagenes],
        descripcion,
        rating,
        fecha: new Date().toISOString().split('T')[0]
    };
    
    trabajos.push(nuevoTrabajo);
    
    if (document.getElementById('galeria').style.display !== 'none') {
        if (filtroActual === 'all') {
            renderGallery(trabajos);
        } else {
            filtrarPorCategoria(filtroActual);
        }
    }
    
    console.log('Trabajo agregado:', nuevoTrabajo);
}

// Exportar trabajos a JSON
function exportarTrabajos() {
    const dataStr = JSON.stringify(trabajos, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'trabajos_backup.json';
    link.click();
}

console.log(`
%c🔸 Portafolio de Trabajos - Comandos disponibles:

%cagregarTrabajo(titulo, categoria, [array_de_IDs], descripcion, rating)
%c- Agrega un nuevo trabajo con múltiples imágenes

%cEjemplo:
%cagregarTrabajo("Mi Trabajo", "albañileria", ["ID1", "ID2", "ID3"], "Descripción", 9.0)
`, 
    'color: #3247a1ff; font-size: 16px; font-weight: bold;',
    'color: #764ba2; font-weight: bold;',
    'color: #7f8c8d;',
    'color: #e74c3c; font-weight: bold;',
    'color: #f39c12;'
);