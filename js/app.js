// ============================================
// CONFIGURACIÓN DE GOOGLE DRIVE
// ============================================

function getGoogleDriveImageUrl(fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
}

// ============================================
// BASE DE DATOS DE TRABAJOS
// ============================================

const trabajos = [
    {
        id: 1,
        titulo: "Construcción de Muro de Contención",
        categoria: "albañileria",
        imagenes: ["TU_ID_AQUI_1_IMG1", "TU_ID_AQUI_1_IMG2", "TU_ID_AQUI_1_IMG3"],
        descripcion: "Muro de contención de 15 metros con acabado en piedra natural",
        rating: 9.2,
        fecha: "2024-12-01"
    },
    {
        id: 2,
        titulo: "Instalación Eléctrica Residencial",
        categoria: "electricidad",
        imagenes: ["TU_ID_AQUI_2_IMG1", "TU_ID_AQUI_2_IMG2"],
        descripcion: "Sistema eléctrico completo para casa de 3 pisos",
        rating: 9.5,
        fecha: "2024-11-28"
    },
    {
        id: 3,
        titulo: "Instalación de Boiler de Paso",
        categoria: "plomeria",
        imagenes: ["1lM9L58Lq8wcMFqOeH4TqpfEyCz8NEkuc"],
        descripcion: "Consiste en el montaje y conexión de un boiler de paso para la generación instantánea de agua caliente. El servicio contempla la fijación del equipo en un punto adecuado, la conexión a las líneas de agua fría, salida de agua caliente y suministro de gas, así como la verificación de presión, caudal y correcta combustión. Se realizan pruebas de operación para asegurar un funcionamiento estable, seguro y conforme a las especificaciones del fabricante.",
        rating: 8.8,
        fecha: "2024-11-25"
    },
    {
        id: 4,
        titulo: "Instalación de Techo de Policarbonato",
        categoria: "herreria",
        imagenes: ["1B1H4wJIZ4WL2XRUAIw0l0TLA5Mf1WEhZ",
                   "1Clwe0UyTVsWe0k5P4C4WfH74g2JnrlS-"
        ],
        descripcion: "Instalación de techo de policarbonato sobre estructura metálica anclada a losa existente, con fijación mecánica puntual, sellado perimetral y tratamiento de juntas para evitar filtraciones, permitiendo el paso de luz natural y protección contra la intemperie.",
        rating: 9.0,
        fecha: "2024-11-20"
    },
    {
        id: 5,
        titulo: "Remodelación de Cocina",
        categoria: "acabados",
        imagenes: ["1K_sd4ZsqhrfPO9zJicGa-WNZtN5QphFu", "1RNFx0fjBkXlnrn6PStt4A1t5_278BPPt", "1aTfL9AEywSi0rUu9jfrCGULBULu5Qivb", "1XPCK-fdNDUrrpZvrx9JrEy_r8Mf9wmBs", "1_hjl8dIXd7p6z2ABv8Pds08c_q2pqDlK"],
        descripcion: "Renovación estética del espacio de cocina mediante la selección y aplicación de acabados, materiales y mobiliario acorde a las necesidades, gustos y estilo del usuario. Se trabaja en la combinación de colores, texturas y recubrimientos logrando un resultado coherente y funcional que se ajusta al uso y carácter de cada espacio.",
        rating: 9.3,
        fecha: "2024-11-15"
    },
    {
        id: 6,
        titulo: "Impermeabilización de Azotea",
        categoria: "impermeabilizacion",
        imagenes: ["1YH50HiDtHhTWlvlgB-tamhxtBpJ831go", "11YCKRC4SgkcZYGHl-WBIHzMhytXxAvlz", "15I_U4b5SP3-xztWWoV0XzZzgTYZGaNEu"],
        descripcion: "Sistema de impermeabilizante prefabricado, aplicada por termofusión, que garantiza un sellado continuo y alta adherencia al sustrato. Ofrece elevada resistencia a la intemperie, rayos UV y movimientos estructurales, proporcionando una barrera efectiva contra filtraciones, humedad y deterioro del techo. Ideal para azoteas, losas de concreto y superficies expuestas.",
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
        titulo: "Instalación de Loseta en Baño",
        categoria: "acabados",
        imagenes: ["1IPgBQzEyEl31W1LI1U8m4hNdNnlgsvXY"],
        descripcion: "Proceso de colocación de loseta en muros y/o pisos de baño, considerando alineación, nivelación y correcta distribución de piezas. Incluye la preparación de superficies, aplicación de adhesivos, cortes y colocación de juntas, logrando un acabado uniforme y estético que se adapta al diseño, formato y estilo definido para el espacio.",
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
    },
    {
        id: 13,
        titulo: "Acabado con Estuco en Muros y Plafon",
        categoria: "acabados",
        imagenes: ["1Cyw6NMH8Xo4kbf0_zOAyxX_NzvAY7DGO", "1O7aCP4D2zBi4xCRNkv7JCIMSI5JYP3yX", "1fS965hP1xF0Y_71QhD7WY7CXtxOdQb0G", "1p1IbZ671d2ormB-zCbqRrnALHAJPBsOX", "1PAqz8RtK4wxupEvd3HbIo5f9PiJOdstG"],
        descripcion: "Consiste en la aplicación de estuco como acabado decorativo en muros y plafones, proporcionando una superficie uniforme y estética. El proceso incluye la preparación del sustrato, nivelación y aplicación del material según la textura y acabado requerido, permitiendo adaptarse al estilo del espacio y a las condiciones del área, mejorando la apariencia y definición de los elementos arquitectónicos.",
        rating: 8.8,
        fecha: "2024-10-15"
    },
    // Categorías de Cómputo
    {
        id: 14,
        titulo: "Instalación de Windows 11",
        categoria: "sistemas-operativos",
        imagenes: ["18ihgBEGB37okRbg4Q2CFXVUqhs6z1lCD"],
        descripcion: "Instalación y configuración de Windows 11, considerando los requisitos de compatibilidad del equipo. Incluye la preparación del sistema, configuración inicial y verificación del correcto funcionamiento para un entorno estable y actualizado.",
        rating: 9.2,
        fecha: "2024-12-20"
    },
    {
        id: 15,
        titulo: "Instalación de Windows 10",
        categoria: "sistemas-operativos",
        imagenes: ["19rqsvDwshD7rtIHmLOgrUnN-xJxNEqjn"],
        descripcion: "Instalación y configuración de Windows 10, adaptada a las características del equipo y a los requerimientos del usuario. El proceso incluye la preparación del sistema, instalación limpia o actualización, configuración inicial, optimización básica y verificación del correcto funcionamiento para asegurar un entorno estable y confiable.",
        rating: 9.2,
        fecha: "2024-12-20"
    },
    {
        id: 16,
        titulo: "Instalación de Linux(Ubuntu)",
        categoria: "sistemas-operativos",
        imagenes: ["1chiETkYzNlnkyMqhyLDVNztFTYg8C5MJ"],
        descripcion: "Instalación de Ubuntu como sistema operativo de código abierto, adaptada a las características del hardware y necesidades del usuario. Incluye la configuración inicial del entorno, controladores necesarios y validación del correcto funcionamiento del sistema.",
        rating: 9.2,
        fecha: "2024-12-20"
    },
    {
        id: 17,
        titulo: "Configuración de Entorno de Desarrollo(VSC)",
        categoria: "software-desarrollo",
        imagenes: ["1-vMss09qtSkBoDGfDyltiGcgxnVPShHu"],
        descripcion: "Configuración de herramientas de control de versiones para el desarrollo de software, incluyendo Git y GitHub Desktop. El proceso contempla la instalación, vinculación de repositorios, configuración de credenciales y flujos básicos de trabajo, asegurando un manejo adecuado del código y un entorno organizado para el control de cambios.",
        rating: 9.0,
        fecha: "2024-12-18"
    },
    {
        id: 18,
        titulo: "Instalacion y Configuracion de Java JDK",
        categoria: "software-desarrollo",
        imagenes: ["1p8pTzjxMPsztnsc0oswAufOKDo5qbm9W"],
        descripcion: "Proceso de instalación y configuración del Java Development Kit (JDK) en el equipo, considerando la versión adecuada según el sistema operativo y las necesidades del usuario. Incluye la correcta configuración de variables de entorno, verificación de compatibilidad y pruebas de funcionamiento para asegurar un entorno de desarrollo estable y operativo.",
        rating: 9.0,
        fecha: "2024-12-18"
    },
    {
        id: 19,
        titulo: "Instalacion y Configuracion de XAMMP",
        categoria: "software-desarrollo",
        imagenes: ["1yld1EXkJZr5ozsQGBdXYRCSdjRGPVejW"],
        descripcion: "Proceso de instalación y puesta en marcha del entorno XAMPP para desarrollo local, que incluye la configuración de Apache, MySQL/MariaDB y PHP según las necesidades del proyecto. Contempla la verificación de servicios, ajuste de puertos, pruebas de funcionamiento y validación del entorno para asegurar un servidor local estable y operativo.",
        rating: 9.0,
        fecha: "2024-12-18"
    },
    {
        id: 20,
        titulo: "Instalación de Adobe Photoshop",
        categoria: "software-diseno",
        imagenes: ["1WCgQu9FN9CZznzBMguerb4kF0hDydvvd"],
        descripcion: "Instalación y configuración de Adobe Photoshop en el equipo, considerando la compatibilidad con el sistema operativo y los requisitos de hardware. Incluye la verificación del correcto funcionamiento del programa y la configuración inicial para su uso en edición y tratamiento de imágenes.",
        rating: 9.3,
        fecha: "2024-12-15"
    },
    {
        id: 21,
        titulo: "Instalación de Adobe Illustrator",
        categoria: "software-diseno",
        imagenes: ["1xAfsNSR3YstrsA_smXIjnphL714WydI5"],
        descripcion: "Proceso de instalación y configuración de Adobe Illustrator, adaptado a las características del sistema y a las necesidades del usuario. Contempla la verificación de compatibilidad, configuración inicial del entorno de trabajo y validación del correcto funcionamiento para diseño gráfico vectorial.",
        rating: 9.3,
        fecha: "2024-12-15"
    },
    {
        id: 22,
        titulo: "Instalación de Adobe Animate",
        categoria: "software-diseno",
        imagenes: ["1k2Ou3ZXeM8Y8Nzyhh5K7Z--6AW_YCcWd"],
        descripcion: "Instalación y configuración de Adobe Animate en el equipo, considerando la compatibilidad con el sistema operativo y los requisitos de hardware. Incluye la verificación del correcto funcionamiento del software y la configuración inicial del entorno de trabajo para la creación de animaciones y contenido interactivo.",
        rating: 9.3,
        fecha: "2024-12-15"
    },
    {
        id: 23,
        titulo: "Microsoft Office 365",
        categoria: "software-productividad",
        imagenes: ["1nYEGW4m80WfRU5vkrXqoEJiXqRQ2tmj5"],
        descripcion: "Instalación y configuración de Office 365 en el equipo, considerando la compatibilidad con el sistema operativo y la correcta activación del software. Incluye la configuración inicial de las aplicaciones y la verificación de su funcionamiento para asegurar un entorno de trabajo estable y operativo.",
        rating: 9.1,
        fecha: "2024-12-12"
    },
    {
        id: 24,
        titulo: "Instalacion de Licencia de Office",
        categoria: "licencias-software",
        imagenes: ["1sKkVebS5-mZDsjC3OOxSF1l_Zd5b3joR"],
        descripcion: "Proceso de instalación y activación de la licencia de Office en el equipo, asegurando el correcto reconocimiento del software por el sistema. Incluye la verificación de activación y funcionamiento de las aplicaciones para un uso estable y continuo.",
        rating: 9.4,
        fecha: "2024-12-10"
    },
    {
        id: 25,
        titulo: "Instalacion de Licencia de Windows",
        categoria: "licencias-software",
        imagenes: ["1R186-G5ypwIW6reGnX2EkEWfF__RID9_"],
        descripcion: "Instalación y activación de la licencia de Windows en el equipo, garantizando que el sistema operativo quede debidamente activado. El proceso contempla la verificación del estado de la licencia y el correcto funcionamiento del sistema.",
        rating: 9.4,
        fecha: "2024-12-10"
    },
    {
        id: 26,
        titulo: "Actualización de Controladores del Sistema",
        categoria: "controladores",
        imagenes: ["18B1ZVrCNAFOlXDDLFLjq9Bui2AkHf2Fc"],
        descripcion: "Proceso de instalación o actualización de los controladores necesarios para el correcto funcionamiento del sistema. Incluye la identificación de dispositivos, instalación de versiones compatibles y verificación del desempeño del hardware, asegurando estabilidad, compatibilidad y un rendimiento adecuado del equipo.",
        rating: 8.9,
        fecha: "2024-12-08"
    },
    {
        id: 27,
        titulo: "Actualización de RAM y SSD",
        categoria: "soporte-hardware",
        imagenes: ["1pVMG3i5yeZydSU5n4yzdtd9mnWt13f0R"],
        descripcion: "Proceso de actualización de memoria RAM y/o unidad de almacenamiento SSD para mejorar el rendimiento general del equipo. Incluye la verificación de compatibilidad, instalación física de los componentes y comprobación del correcto reconocimiento del hardware por el sistema, asegurando un funcionamiento estable y eficiente.",
        rating: 9.5,
        fecha: "2024-12-05"
    },
    {
        id: 27,
        titulo: "Actualización de Tarjeta Gráfica",
        categoria: "soporte-hardware",
        imagenes: ["1g8UkjJGbqvoBtloGxU1lMTVsFoA8VWnL"],
        descripcion: "Proceso de sustitución o actualización de la tarjeta gráfica del equipo para mejorar el rendimiento visual y gráfico. Incluye la verificación de compatibilidad con el sistema, instalación del hardware, configuración básica y validación del correcto funcionamiento para asegurar estabilidad y un desempeño adecuado.",
        rating: 9.5,
        fecha: "2024-12-05"
    },
    {
        id: 28,
        titulo: "Actualización de Motherboard",
        categoria: "soporte-hardware",
        imagenes: ["1_Ye_Oi5ZKuugWIXMjNBDsFPM39w1CiBx"],
        descripcion: "Proceso de sustitución o actualización de la motherboard del equipo, considerando la compatibilidad con el procesador, memoria, almacenamiento y demás componentes. Incluye el montaje del hardware, conexión de componentes esenciales y verificación del correcto funcionamiento del sistema para asegurar estabilidad y operatividad.",
        rating: 9.5,
        fecha: "2024-12-05"
    },
    {
        id: 29,
        titulo: "Actualización de Fuente de Alimentación",
        categoria: "soporte-hardware",
        imagenes: ["1A1MQycXm0WXWHhQ5hNxdiE7XJf5MNFOB"],
        descripcion: "Proceso de sustitución o actualización de la fuente de alimentación del equipo para garantizar un suministro eléctrico estable y adecuado a los componentes. Incluye la verificación de compatibilidad en potencia y conexiones, instalación del hardware y comprobación del correcto funcionamiento del sistema.",
        rating: 9.5,
        fecha: "2024-12-05"
    },
    {
        id: 30,
        titulo: "Mantenimiento Preventivo Completo",
        categoria: "limpieza-mantenimiento",
        imagenes: ["1unDFbcyo8JE_T98fWQ8ZMvZZnyIDgPyY"],
        descripcion: "Procedimiento técnico de mantenimiento preventivo aplicado al equipo de cómputo, que comprende limpieza interna de componentes, eliminación de residuos y polvo, revisión de ventilación y conexiones, así como verificación básica de voltajes, temperaturas y estabilidad del sistema, con el fin de prevenir fallas y prolongar la vida útil del hardware.",
        rating: 9.2,
        fecha: "2024-12-01"
    }
];

// Mapeo de categorías
const categoriaNames = {
    'albañileria': 'Albañilería',
    'electricidad': 'Electricidad',
    'plomeria': 'Plomería',
    'herreria': 'Herrería',
    'acabados': 'Acabados de Interiores',
    'impermeabilizacion': 'Impermeabilización',
    'sistemas-operativos': 'Sistemas Operativos',
    'software-desarrollo': 'Software de Desarrollo',
    'software-diseno': 'Software de Diseño Gráfico',
    'software-productividad': 'Software de Productividad',
    'licencias-software': 'Licencias de Software',
    'controladores': 'Controladores (Drivers)',
    'soporte-hardware': 'Soporte y Actualización de Hardware',
    'limpieza-mantenimiento': 'Limpieza y Mantenimiento Preventivo'
};

// Grupos de categorías
const gruposCategorias = {
    'construccion': ['albañileria', 'electricidad', 'plomeria', 'herreria', 'acabados', 'impermeabilizacion'],
    'computo': ['sistemas-operativos', 'software-desarrollo', 'software-diseno', 'software-productividad', 'licencias-software', 'controladores', 'soporte-hardware', 'limpieza-mantenimiento']
};

// ============================================
// VARIABLES GLOBALES
// ============================================

let filtroActual = 'construccion';
let trabajosFiltrados = [];
let carouselIndex = 0;
let currentTrabajo = null;

// ============================================
// FUNCIONES DE RENDERIZADO
// ============================================

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

function createGalleryCard(trabajo) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.setAttribute('data-id', trabajo.id);
    card.setAttribute('data-categoria', trabajo.categoria);
    
    const primeraImagen = trabajo.imagenes[0];
    const imageUrl = primeraImagen.startsWith('TU_ID_AQUI') 
        ? 'https://via.placeholder.com/400x300/667eea/ffffff?text=' + encodeURIComponent(trabajo.titulo)
        : getGoogleDriveImageUrl(primeraImagen);
    
    const descripcionBreve = trabajo.descripcion.length > 80 
        ? trabajo.descripcion.substring(0, 80) + '...' 
        : trabajo.descripcion;
    
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
    
    card.addEventListener('click', () => openModal(trabajo));
    
    return card;
}

// ============================================
// FUNCIONES DE FILTRADO
// ============================================

function filtrarPorGrupo(grupo) {
    filtroActual = grupo;
    
    if (gruposCategorias[grupo]) {
        trabajosFiltrados = trabajos.filter(t => gruposCategorias[grupo].includes(t.categoria));
    } else {
        trabajosFiltrados = [];
    }
    
    renderGallery(trabajosFiltrados);
    
    // Mostrar/ocultar categorías según el grupo
    actualizarCategoriasVisibles(grupo);
}

function filtrarPorCategoria(categoria) {
    trabajosFiltrados = trabajos.filter(t => t.categoria === categoria);
    renderGallery(trabajosFiltrados);
}

function actualizarCategoriasVisibles(grupo) {
    const menuItems = document.querySelectorAll('.menu-item[data-grupo]');
    
    menuItems.forEach(item => {
        const itemGrupo = item.getAttribute('data-grupo');
        if (itemGrupo === grupo) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
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
// MENÚ MÓVIL RETRÁCTIL
// ============================================

function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const menuToggle = document.getElementById('menuToggle');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const menuToggle = document.getElementById('menuToggle');
    
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
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
    
    if (hasMultipleImages) {
        document.getElementById('carouselPrev')?.addEventListener('click', (e) => {
            e.stopPropagation();
            previousImage();
        });
        
        document.getElementById('carouselNext')?.addEventListener('click', (e) => {
            e.stopPropagation();
            nextImage();
        });
        
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
    // Renderizado inicial - mostrar grupo de construcción
    filtrarPorGrupo('construccion');
    
    const menuToggle = document.getElementById('menuToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    menuToggle.addEventListener('click', toggleMobileMenu);
    sidebarOverlay.addEventListener('click', closeMobileMenu);
    
    // Filtros del menú principal (grupos)
    document.querySelectorAll('.menu-item[data-filter]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            mostrarSeccion('galeria');
            
            // Remover active de todos los items del menú
            document.querySelectorAll('.menu-section .menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const filter = item.getAttribute('data-filter');
            
            // Si es un grupo (construccion o computo)
            if (gruposCategorias[filter]) {
                filtrarPorGrupo(filter);
            } else {
                // Si es una categoría específica
                filtrarPorCategoria(filter);
            }
            
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Filtros de categorías individuales
    document.querySelectorAll('.menu-item[data-grupo]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            mostrarSeccion('galeria');
            
            // Remover active solo de las categorías
            document.querySelectorAll('.menu-item[data-grupo]').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const categoria = item.getAttribute('data-filter');
            filtrarPorCategoria(categoria);
            
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
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
    
    // Cerrar menú móvil al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
});

// ============================================
// FUNCIONES AUXILIARES ÚTILES
// ============================================

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
        if (gruposCategorias[filtroActual]) {
            filtrarPorGrupo(filtroActual);
        } else {
            filtrarPorCategoria(filtroActual);
        }
    }
    
    console.log('Trabajo agregado:', nuevoTrabajo);
}

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
%c📸 Portafolio de Trabajos - Comandos disponibles:

%cagregarTrabajo(titulo, categoria, [array_de_IDs], descripcion, rating)
%c- Agrega un nuevo trabajo con múltiples imágenes

%cCategorías disponibles:
%cConstrucción: albañileria, electricidad, plomeria, herreria, acabados, impermeabilizacion
%cCómputo: sistemas-operativos, software-desarrollo, software-diseno, software-productividad, 
         licencias-software, controladores, soporte-hardware, limpieza-mantenimiento

%cEjemplo:
%cagregarTrabajo("Instalación de Ubuntu", "sistemas-operativos", ["ID1", "ID2"], "Descripción", 9.0)
`, 
    'color: #3247a1ff; font-size: 16px; font-weight: bold;',
    'color: #764ba2; font-weight: bold;',
    'color: #7f8c8d;',
    'color: #27ae60; font-weight: bold;',
    'color: #7f8c8d;',
    'color: #7f8c8d;',
    'color: #e74c3c; font-weight: bold;',
    'color: #f39c12;'
);