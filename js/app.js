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
    // Método 1: Thumbnail (más rápido y confiable)
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    
    // Método 2 (alternativo): Si el método 1 no funciona, descomentar la siguiente línea
    // return `https://lh3.googleusercontent.com/d/${fileId}`;
}

// ============================================
// BASE DE DATOS DE TRABAJOS
// ============================================

// IMPORTANTE: Reemplaza los 'googleDriveId' con los IDs reales de tus imágenes
const trabajos = [
    {
        id: 1,
        titulo: "Construcción de Muro de Contención",
        categoria: "albañileria",
        googleDriveId: "TU_ID_AQUI_1", // Reemplazar con ID real
        descripcion: "Muro de contención de 15 metros con acabado en piedra natural",
        rating: 9.2,
        fecha: "2024-12-01"
    },
    {
        id: 2,
        titulo: "Instalación Eléctrica Residencial",
        categoria: "electricidad",
        googleDriveId: "TU_ID_AQUI_2",
        descripcion: "Sistema eléctrico completo para casa de 3 pisos",
        rating: 9.5,
        fecha: "2024-11-28"
    },
    {
        id: 3,
        titulo: "Sistema de Drenaje",
        categoria: "plomeria",
        googleDriveId: "TU_ID_AQUI_3",
        descripcion: "Instalación de sistema de drenaje pluvial y sanitario",
        rating: 8.8,
        fecha: "2024-11-25"
    },
    {
        id: 4,
        titulo: "Portón Automático",
        categoria: "herreria",
        googleDriveId: "TU_ID_AQUI_4",
        descripcion: "Portón corredizo automatizado con acabado en herrería artística",
        rating: 9.0,
        fecha: "2024-11-20"
    },
    {
        id: 5,
        titulo: "Remodelación de Sala",
        categoria: "acabados",
        googleDriveId: "TU_ID_AQUI_5",
        descripcion: "Renovación completa con pintura, pisos y mobiliario",
        rating: 9.3,
        fecha: "2024-11-15"
    },
    {
        id: 6,
        titulo: "Impermeabilización de Azotea",
        categoria: "impermeabilizacion",
        googleDriveId: "15I_U4b5SP3-xztWWoV0XzZzgTYZGaNEu",
        descripcion: "Sistema de impermeabilización mediante membrana asfáltica prefabricada, aplicada por termofusión, que garantiza un sellado continuo y alta adherencia al sustrato. Ofrece elevada resistencia a la intemperie, rayos UV y movimientos estructurales, proporcionando una barrera efectiva contra filtraciones, humedad y deterioro del techo. Ideal para azoteas, losas de concreto y superficies expuestas.",
        rating: 8.9,
        fecha: "2024-11-10"
    },
    {
        id: 7,
        titulo: "Ampliación de Cocina",
        categoria: "albañileria",
        googleDriveId: "TU_ID_AQUI_7",
        descripcion: "Ampliación de 20m² con estructura de concreto armado",
        rating: 9.1,
        fecha: "2024-11-05"
    },
    {
        id: 8,
        titulo: "Panel Solar Residencial",
        categoria: "electricidad",
        googleDriveId: "TU_ID_AQUI_8",
        descripcion: "Instalación de sistema fotovoltaico de 5kW",
        rating: 9.4,
        fecha: "2024-11-01"
    },
    {
        id: 9,
        titulo: "Reparación de Tubería Principal",
        categoria: "plomeria",
        googleDriveId: "TU_ID_AQUI_9",
        descripcion: "Cambio de tubería principal de agua potable",
        rating: 8.7,
        fecha: "2024-10-28"
    },
    {
        id: 10,
        titulo: "Escalera de Hierro Forjado",
        categoria: "herreria",
        googleDriveId: "TU_ID_AQUI_10",
        descripcion: "Escalera helicoidal con pasamanos decorativo",
        rating: 9.6,
        fecha: "2024-10-25"
    },
    {
        id: 11,
        titulo: "Acabados en Baño Completo",
        categoria: "acabados",
        googleDriveId: "TU_ID_AQUI_11",
        descripcion: "Renovación completa con azulejo y accesorios modernos",
        rating: 8.9,
        fecha: "2024-10-20"
    },
    {
        id: 12,
        titulo: "Impermeabilización de Fachada",
        categoria: "impermeabilizacion",
        googleDriveId: "TU_ID_AQUI_12",
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
    
    // Usar imagen de Google Drive o placeholder
    const imageUrl = trabajo.googleDriveId.startsWith('TU_ID_AQUI') 
        ? 'https://via.placeholder.com/400x300/667eea/ffffff?text=' + encodeURIComponent(trabajo.titulo)
        : getGoogleDriveImageUrl(trabajo.googleDriveId);
    
    // Descripción breve (primeros 80 caracteres)
    const descripcionBreve = trabajo.descripcion.length > 80 
        ? trabajo.descripcion.substring(0, 80) + '...' 
        : trabajo.descripcion;
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${trabajo.titulo}" class="card-image" loading="lazy">
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
// MODAL
// ============================================

function openModal(trabajo) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    
    const imageUrl = trabajo.googleDriveId.startsWith('TU_ID_AQUI')
        ? 'https://via.placeholder.com/800x600/667eea/ffffff?text=' + encodeURIComponent(trabajo.titulo)
        : getGoogleDriveImageUrl(trabajo.googleDriveId);
    
    modalImage.src = imageUrl;
    modalTitle.textContent = trabajo.titulo;
    modalCategory.textContent = categoriaNames[trabajo.categoria];
    modalDescription.textContent = trabajo.descripcion;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll del body
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
            
            // Mostrar sección de galería
            mostrarSeccion('galeria');
            
            // Actualizar clase activa
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Filtrar
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
    
    // Botón de contacto en el sidebar
    const contactoBtn = document.getElementById('contactoBtn');
    if (contactoBtn) {
        contactoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mostrarSeccion('contacto');
            
            // Remover active de todos los items del menú
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            contactoBtn.classList.add('active');
        });
    }
    
    // Controles de carrusel
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const gallery = document.getElementById('galleryGrid');
            gallery.scrollBy({ left: -400, behavior: 'smooth' });
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const gallery = document.getElementById('galleryGrid');
            gallery.scrollBy({ left: 400, behavior: 'smooth' });
        });
    }
    
    // Modal
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
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

// Para agregar trabajos dinámicamente desde consola (útil para pruebas)
function agregarTrabajo(titulo, categoria, googleDriveId, descripcion, rating = 8.5) {
    const nuevoTrabajo = {
        id: trabajos.length + 1,
        titulo,
        categoria,
        googleDriveId,
        descripcion,
        rating,
        fecha: new Date().toISOString().split('T')[0]
    };
    
    trabajos.push(nuevoTrabajo);
    
    // Si estamos en la vista de galería, re-renderizar
    if (document.getElementById('galeria').style.display !== 'none') {
        if (filtroActual === 'all') {
            renderGallery(trabajos);
        } else {
            filtrarPorCategoria(filtroActual);
        }
    }
    
    console.log('Trabajo agregado:', nuevoTrabajo);
}

// Exportar trabajos a JSON (útil para backup)
function exportarTrabajos() {
    const dataStr = JSON.stringify(trabajos, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'trabajos_backup.json';
    link.click();
}

// Actualizar nombre de empresa
function actualizarNombreEmpresa(nombre) {
    const empresaElement = document.getElementById('empresaNombre');
    if (empresaElement) {
        empresaElement.textContent = nombre;
        console.log('Nombre de empresa actualizado a:', nombre);
    }
}

// Consola de ayuda
console.log(`
%c📸 Portafolio de Trabajos - Comandos disponibles:

%cagregarTrabajo(titulo, categoria, googleDriveId, descripcion, rating)
%c- Agrega un nuevo trabajo al portafolio

%cexportarTrabajos()
%c- Descarga un backup JSON de todos los trabajos

%cgetGoogleDriveImageUrl(fileId)
%c- Convierte un ID de Google Drive a URL de imagen

%cactualizarNombreEmpresa(nombre)
%c- Actualiza el nombre de la empresa en la sección de contacto

%cEjemplo de uso:
%cagregarTrabajo("Mi Nuevo Trabajo", "albañileria", "1a2b3c4d5e6f", "Descripción del trabajo", 9.0)
%cactualizarNombreEmpresa("Construcciones XYZ")
`, 
    'color: #3247a1ff; font-size: 16px; font-weight: bold;',
    'color: #764ba2; font-weight: bold;',
    'color: #7f8c8d;',
    'color: #764ba2; font-weight: bold;',
    'color: #7f8c8d;',
    'color: #764ba2; font-weight: bold;',
    'color: #7f8c8d;',
    'color: #764ba2; font-weight: bold;',
    'color: #7f8c8d;',
    'color: #e74c3c; font-weight: bold;',
    'color: #f39c12;',
    'color: #f39c12;'
);