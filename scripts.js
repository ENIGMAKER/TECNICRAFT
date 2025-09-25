const $ = (id) => document.getElementById(id)
const $$ = (sel) => document.querySelectorAll(sel)

const state = {
  messageIndex: 0,
  currentSlide: 0,
  totalSlides: 0,
  constructionCurrentSlide: 0,
  constructionTotalSlides: 0,
  wallpaperCurrentSlide: 0,
  wallpaperTotalSlides: 0,
}

const data = {
  characters: {
    enigmaker: {
      specialty:
        "Maestro en construcciones complejas y sistemas de redstone avanzados. Especializado en crear mecanismos únicos y estructuras imposibles.",
      projects:
        "Castillo Flotante Automático, Ciudad Subterránea con Metro, Fábrica de Items Completamente Automatizada",
      achievements:
        "Más de 500 construcciones completadas, Creador del sistema de redstone más complejo del servidor, Mentor de nuevos constructores",
      images: ["/enigmaker-minecraft-builds.jpg", "/enigmaker-redstone-contraptions.jpg", "/enigmaker-castle-construction.jpg"],
    },
    erifb1200: {
      specialty:
        "Experto en granjas automáticas y optimización de recursos. Creador de los sistemas más eficientes del servidor.",
      projects:
        "Granja Universal de Todos los Items, Sistema de Almacenamiento Infinito, Complejo Agrícola Automatizado",
      achievements:
        "Record de eficiencia en granjas automáticas, Diseñador de 50+ tipos de granjas diferentes, Consultor en optimización",
      images: ["/erifb1200-automatic-farms.jpg", "/erifb1200-storage-system.jpg", "/erifb1200-agricultural-complex.jpg"],
    },
    yaapo: {
      specialty:
        "Arquitecto creativo especializado en diseños únicos y construcciones artísticas que desafían la imaginación.",
      projects: "Biblioteca Celestial, Jardines Colgantes Modernos, Museo de Arte Interactivo",
      achievements:
        "Ganador de 3 concursos de construcción, Creador de más de 200 diseños únicos, Inspiración para la comunidad",
      images: ["/yaapo-celestial-library.jpg", "/yaapo-hanging-gardens.jpg", "/yaapo-art-museum.jpg"],
    },
    mantrix30: {
      specialty:
        "Ingeniero de redstone y creador de mecanismos innovadores. Especialista en automatización y sistemas complejos.",
      projects: "Computadora Funcional en Minecraft, Sistema de Transporte Inteligente, Robot Constructor Automático",
      achievements:
        "Inventor de 15 mecanismos únicos, Creador de la primera IA básica en redstone, Profesor de ingeniería redstone",
      images: ["/mantrix30-redstone-computer.jpg", "/mantrix30-transport-system.jpg", "/mantrix30-automatic-robot.jpg"],
    },
    endercessar789: {
      specialty:
        "Especialista en construcciones medievales y castillos épicos. Maestro en arquitectura histórica y defensiva.",
      projects: "Fortaleza de las Mil Torres, Ciudad Medieval Completa, Catedral Gótica Monumental",
      achievements:
        "Constructor de 25 castillos únicos, Experto en arquitectura medieval, Creador de la ciudad más grande del servidor",
      images: ["/endercessar789-medieval-fortress.jpg", "/endercessar789-medieval-city.jpg", "/endercessar789-gothic-cathedral.jpg"],
    },
    hotox: {
      specialty: "Creador de ciudades modernas y estructuras futuristas. Visionario de la arquitectura del mañana.",
      projects: "Metrópolis Neo-Tokyo, Rascacielos Inteligentes, Ciudad Espacial Orbital",
      achievements:
        "Diseñador de 10 ciudades futuristas, Pionero en arquitectura espacial, Creador de edificios inteligentes",
      images: [
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
      ],
    },
    alexnenejr: {
      specialty:
        "Artista digital y diseñador de skins personalizados únicos. Creador de identidades visuales memorables.",
      projects: "Colección de 500+ Skins Únicos, Galería de Arte Pixel, Estudio de Diseño Virtual",
      achievements: "Más de 1000 skins creados, Artista oficial del servidor, Mentor en diseño digital",
      images: [
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
      ],
    },
    GLa2: {
      specialty:
        "Equipo de constructores especializados en proyectos colaborativos masivos. Maestros del trabajo en equipo.",
      projects: "Mundo Temático Completo, Parque de Diversiones Gigante, Recreación de Ciudades Reales",
      achievements:
        "Líderes en proyectos colaborativos, Constructores de las estructuras más grandes, Organizadores de eventos de construcción",
      images: [
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
      ],
    },
    veguitagg: {
      specialty:
        "Constructor versátil con experiencia en todos los estilos arquitectónicos. Maestro de la adaptabilidad.",
      projects: "Museo de Estilos Arquitectónicos, Villa Multicultural, Complejo de Entretenimiento",
      achievements:
        "Experto en 20+ estilos diferentes, Constructor más versátil del servidor, Creador de tutoriales populares",
      images: [
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
      ],
    },
  },
  constructions: {
    "el-castillo": {
      name: "El Castillo",
      description:
        "Una fortaleza medieval épica construida con más de 10,000 días de trabajo dedicado. Representa la culminación de la arquitectura defensiva en TECNICRAFT.",
      features:
        "Torres de vigilancia, Murallas defensivas, Salón del trono, Mazmorras, Puente levadizo, Sistemas de defensa con dispensadores",
      materials: "Piedra, Ladrillos de piedra, Madera de roble, Hierro, Cristal, Antorchas, Lana para banderas",
      images: [
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
      ],
    },
    "el-dragon": {
      name: "El Dragón",
      description:
        "Una escultura colosal de un dragón dorado construida con más de 65,000 lingotes de oro. Una hazaña de ingeniería y arte que desafía la imaginación.",
      features:
        "Estructura de oro macizo, Alas desplegadas, Detalles anatómicos precisos, Iluminación interior, Sistema de acceso interno",
      materials: "Lingotes de oro, Bloques de oro, Glowstone para iluminación, Redstone para efectos",
      images: [
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
      ],
    },
    "el-sakura": {
      name: "El Sakura",
      description:
        "Un árbol de cerezo gigante que simboliza la belleza y la transitoriedad. Ubicado en una zona especial del servidor, representa la armonía entre naturaleza y construcción.",
      features:
        "Tronco gigante realista, Ramas extendidas, Flores de cerezo rosadas, Iluminación nocturna, Área de contemplación",
      materials: "Madera de cerezo, Hojas de cerezo, Flores rosadas, Glowstone oculto, Piedra para base",
      images: [
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
      ],
    },
    "la-granja-de-shulkers": {
      name: "La Granja de Shulkers",
      description:
        "Una instalación técnica avanzada para la reproducción de shulkers. Representa la culminación de la ingeniería de granjas en el servidor.",
      features:
        "Sistema de transporte de shulkers, Mecanismos de reproducción, Recolección automática, Almacenamiento masivo, Controles de redstone",
      materials: "Obsidiana, Redstone, Pistones, Tolvas, Cofres, Bloques de construcción varios",
      images: [
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
        "/placeholder.svg?height=300&width=800",
      ],
    },
  },
  gallery: {
    "screenshots-epicos": { title: "Screenshots Épicos", image: "/placeholder.svg?height=600&width=800" },
    timelapses: { title: "Timelapses", image: "/placeholder.svg?height=600&width=800" },
    "renders-3d": { title: "Renders 3D", image: "/placeholder.svg?height=600&width=800" },
    "construcciones-nocturnas": { title: "Construcciones Nocturnas", image: "/placeholder.svg?height=600&width=800" },
    "paisajes-naturales": { title: "Paisajes Naturales", image: "/placeholder.svg?height=600&width=800" },
    "detalles-arquitectonicos": { title: "Detalles Arquitectónicos", image: "/placeholder.svg?height=600&width=800" },
  },
  drawings: {
    "bocetos-originales": { title: "Bocetos Originales", image: "/placeholder.svg?height=600&width=800" },
    "arte-digital": { title: "Arte Digital", image: "/placeholder.svg?height=600&width=800" },
    "pixel-art": { title: "Pixel Art", image: "/placeholder.svg?height=600&width=800" },
    "personajes-fanart": { title: "Personajes Fanart", image: "/placeholder.svg?height=600&width=800" },
    "ilustraciones-conceptuales": {
      title: "Ilustraciones Conceptuales",
      image: "/placeholder.svg?height=600&width=800",
    },
    "comics-minecraft": { title: "Comics Minecraft", image: "/placeholder.svg?height=600&width=800" },
  },
  wallpapers: {
    "paisajes-epicos": {
      title: "Paisajes Épicos",
      images: [
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
      ],
    },
    "construcciones-destacadas": {
      title: "Construcciones Destacadas",
      images: [
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
      ],
    },
    "arte-conceptual": {
      title: "Arte Conceptual",
      images: [
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
      ],
    },
    minimalista: {
      title: "Minimalista",
      images: [
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
      ],
    },
    abstracto: {
      title: "Abstracto",
      images: [
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
      ],
    },
    "retro-pixel": {
      title: "Retro Pixel",
      images: [
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
        "/placeholder.svg?height=1080&width=1920",
      ],
    },
  },
}

const createParticles = () => {
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.cssText = `left:${Math.random() * 100}%;animation-delay:${Math.random() * 20}s;animation-duration:${Math.random() * 10 + 15}s`
    fragment.appendChild(particle)
  }
  $("particles").appendChild(fragment)
}

const rotateMessages = () => {
  const messages = $$(".info-message")
  setInterval(() => {
    const current = messages[state.messageIndex]
    current.classList.add("exiting")
    setTimeout(() => {
      current.classList.remove("active", "exiting")
      state.messageIndex = (state.messageIndex + 1) % messages.length
      messages[state.messageIndex].classList.add("active")
    }, 400)
  }, 4000)
}

const navigate = (targetSection) => {
  $$(".nav-item").forEach((nav) => nav.classList.remove("active"))
  const activeNav = document.querySelector(`[data-section="${targetSection}"]`)
  if (activeNav?.classList.contains("nav-item")) activeNav.classList.add("active")

  if (targetSection === "home") {
    $("homeSection").style.display = "flex"
    $$(".content-section").forEach((section) => section.classList.remove("active"))
    $("header").classList.remove("visible")
    document.querySelector('.nav-item[data-section="home"]').classList.add("active")
  } else {
    $("homeSection").style.display = "none"
    $$(".content-section").forEach((section) => section.classList.remove("active"))
    $(targetSection).classList.add("active")
    $("header").classList.add("visible")
  }
}

const updateCarousel = (carouselId, currentSlide) => {
  $(carouselId).style.transform = `translateX(${-currentSlide * 100}%)`
}

const createCarousel = (containerId, images) => {
  const container = $(containerId)
  container.innerHTML = ""
  images.forEach((src) => {
    const img = document.createElement("img")
    img.src = src
    img.alt = "Carousel image"
    img.style.width = "100%"
    img.style.height = "100%"
    img.style.objectFit = "cover"
    img.style.flexShrink = "0"
    container.appendChild(img)
  })
}

const modals = {
  character: {
    open: (characterId) => {
      const charData = data.characters[characterId]
      if (!charData) return

      $("modalAvatar").src = `/placeholder.svg?height=64&width=64&query=minecraft player skin ${characterId}`
      $("modalName").textContent = characterId.toUpperCase()
      $("modalSpecialty").textContent = charData.specialty
      $("modalProjects").textContent = charData.projects
      $("modalAchievements").textContent = charData.achievements

      createCarousel("carousel", charData.images)
      state.totalSlides = charData.images.length
      state.currentSlide = 0
      updateCarousel("carousel", state.currentSlide)
      $("characterModal").classList.add("active")
    },
    close: () => $("characterModal").classList.remove("active"),
  },
  construction: {
    open: (constructionId) => {
      const constData = data.constructions[constructionId]
      if (!constData) return

      $("constructionModalName").textContent = constData.name
      $("constructionDescription").textContent = constData.description
      $("constructionFeatures").textContent = constData.features
      $("constructionMaterials").textContent = constData.materials

      createCarousel("constructionCarousel", constData.images)
      state.constructionTotalSlides = constData.images.length
      state.constructionCurrentSlide = 0
      updateCarousel("constructionCarousel", state.constructionCurrentSlide)
      $("constructionModal").classList.add("active")
    },
    close: () => $("constructionModal").classList.remove("active"),
  },
  image: {
    open: (type, itemId) => {
      const itemData = data[type][itemId]
      if (!itemData) return

      $("imageModalTitle").textContent = itemData.title
      $("imageModalImg").src = itemData.image
      $("imageModal").classList.add("active")
    },
    close: () => $("imageModal").classList.remove("active"),
  },
  wallpaper: {
    open: (wallpaperId) => {
      const wallData = data.wallpapers[wallpaperId]
      if (!wallData) return

      $("wallpaperModalTitle").textContent = wallData.title
      createCarousel("wallpaperCarousel", wallData.images)
      state.wallpaperTotalSlides = wallData.images.length
      state.wallpaperCurrentSlide = 0
      updateCarousel("wallpaperCarousel", state.wallpaperCurrentSlide)
      $("downloadBtn").href = wallData.images[0]
      $("wallpaperModal").classList.add("active")
    },
    close: () => $("wallpaperModal").classList.remove("active"),
  },
}

const carouselControls = {
  character: {
    next: () => {
      state.currentSlide = (state.currentSlide + 1) % state.totalSlides
      updateCarousel("carousel", state.currentSlide)
    },
    prev: () => {
      state.currentSlide = (state.currentSlide - 1 + state.totalSlides) % state.totalSlides
      updateCarousel("carousel", state.currentSlide)
    },
  },
  construction: {
    next: () => {
      state.constructionCurrentSlide = (state.constructionCurrentSlide + 1) % state.constructionTotalSlides
      updateCarousel("constructionCarousel", state.constructionCurrentSlide)
    },
    prev: () => {
      state.constructionCurrentSlide =
        (state.constructionCurrentSlide - 1 + state.constructionTotalSlides) % state.constructionTotalSlides
      updateCarousel("constructionCarousel", state.constructionCurrentSlide)
    },
  },
  wallpaper: {
    next: () => {
      state.wallpaperCurrentSlide = (state.wallpaperCurrentSlide + 1) % state.wallpaperTotalSlides
      updateCarousel("wallpaperCarousel", state.wallpaperCurrentSlide)
      $("downloadBtn").href = data.wallpapers[Object.keys(data.wallpapers)[0]].images[state.wallpaperCurrentSlide]
    },
    prev: () => {
      state.wallpaperCurrentSlide =
        (state.wallpaperCurrentSlide - 1 + state.wallpaperTotalSlides) % state.wallpaperTotalSlides
      updateCarousel("wallpaperCarousel", state.wallpaperCurrentSlide)
      $("downloadBtn").href = data.wallpapers[Object.keys(data.wallpapers)[0]].images[state.wallpaperCurrentSlide]
    },
  },
}

document.addEventListener("click", (e) => {
  const { target } = e
  const section = target.getAttribute("data-section")

  if (section && (target.classList.contains("nav-item") || target.classList.contains("home-nav-btn"))) {
    e.preventDefault()
    navigate(section)
  }

  if (target.classList.contains("character-btn")) {
    const characterId = target.closest(".character-card").getAttribute("data-character")
    modals.character.open(characterId)
  }

  if (target.classList.contains("construction-btn")) {
    const constructionId = target.closest(".construction-card").getAttribute("data-construction")
    modals.construction.open(constructionId)
  }

  if (target.closest(".gallery-card")) {
    const galleryId = target.closest(".gallery-card").getAttribute("data-gallery")
    modals.image.open("gallery", galleryId)
  }

  if (target.closest(".drawing-card")) {
    const drawingId = target.closest(".drawing-card").getAttribute("data-drawing")
    modals.image.open("drawings", drawingId)
  }

  if (target.closest(".wallpaper-card")) {
    const wallpaperId = target.closest(".wallpaper-card").getAttribute("data-wallpaper")
    modals.wallpaper.open(wallpaperId)
  }

  if (target.classList.contains("modal-close")) {
    Object.values(modals).forEach((modal) => modal.close())
  }

  // Carousel controls
  if (target.id === "nextBtn") carouselControls.character.next()
  if (target.id === "prevBtn") carouselControls.character.prev()
  if (target.id === "constructionNextBtn") carouselControls.construction.next()
  if (target.id === "constructionPrevBtn") carouselControls.construction.prev()
  if (target.id === "wallpaperNextBtn") carouselControls.wallpaper.next()
  if (target.id === "wallpaperPrevBtn") carouselControls.wallpaper.prev()

  // Close modals when clicking outside
  if (
    target.classList.contains("character-modal") ||
    target.classList.contains("construction-modal") ||
    target.classList.contains("image-modal") ||
    target.classList.contains("wallpaper-modal")
  ) {
    Object.values(modals).forEach((modal) => modal.close())
  }
})

document.addEventListener("keydown", (e) => {
  const isModalOpen =
    $("characterModal").classList.contains("active") ||
    $("constructionModal").classList.contains("active") ||
    $("imageModal").classList.contains("active") ||
    $("wallpaperModal").classList.contains("active")

  if (!isModalOpen) return

  const actions = {
    Escape: () => Object.values(modals).forEach((modal) => modal.close()),
    ArrowLeft: () => {
      if ($("characterModal").classList.contains("active")) carouselControls.character.prev()
      if ($("constructionModal").classList.contains("active")) carouselControls.construction.prev()
      if ($("wallpaperModal").classList.contains("active")) carouselControls.wallpaper.prev()
    },
    ArrowRight: () => {
      if ($("characterModal").classList.contains("active")) carouselControls.character.next()
      if ($("constructionModal").classList.contains("active")) carouselControls.construction.next()
      if ($("wallpaperModal").classList.contains("active")) carouselControls.wallpaper.next()
    },
  }

  actions[e.key]?.()
})

document.addEventListener("DOMContentLoaded", () => {
  createParticles()
  rotateMessages()
  document.documentElement.style.scrollBehavior = "smooth"
})
