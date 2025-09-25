const elements = {
  particles: document.getElementById("particles"),
  messages: document.querySelectorAll(".info-message"),
  navItems: document.querySelectorAll(".nav-item"),
  sections: document.querySelectorAll(".content-section"),
  homeSection: document.getElementById("homeSection"),
  header: document.getElementById("header"),
  subsectionBtns: document.querySelectorAll(".subsection-btn"),
  subsectionContents: document.querySelectorAll(".subsection-content"),
  characterModal: document.getElementById("characterModal"),
  constructionModal: document.getElementById("constructionModal"),
  imageModal: document.getElementById("imageModal"),
  wallpaperModal: document.getElementById("wallpaperModal"),
  constructionModalElements: {
    name: document.getElementById("constructionModalName"),
    description: document.getElementById("constructionDescription"),
    features: document.getElementById("constructionFeatures"),
    materials: document.getElementById("constructionMaterials"),
    carousel: document.getElementById("constructionCarousel"),
    prevBtn: document.getElementById("constructionPrevBtn"),
    nextBtn: document.getElementById("constructionNextBtn"),
  },
  modalElements: {
    avatar: document.getElementById("modalAvatar"),
    name: document.getElementById("modalName"),
    specialty: document.getElementById("modalSpecialty"),
    projects: document.getElementById("modalProjects"),
    achievements: document.getElementById("modalAchievements"),
    carousel: document.getElementById("carousel"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
  },
  imageModalElements: {
    title: document.getElementById("imageModalTitle"),
    img: document.getElementById("imageModalImg"),
  },
  wallpaperModalElements: {
    title: document.getElementById("wallpaperModalTitle"),
    carousel: document.getElementById("wallpaperCarousel"),
    prevBtn: document.getElementById("wallpaperPrevBtn"),
    nextBtn: document.getElementById("wallpaperNextBtn"),
    downloadBtn: document.getElementById("downloadBtn"),
  },
}

let currentSlide = 0,
  totalSlides = 0,
  messageIndex = 0
let constructionCurrentSlide = 0,
  constructionTotalSlides = 0
let wallpaperCurrentSlide = 0,
  wallpaperTotalSlides = 0

const createParticles = () => {
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.cssText = `left:${Math.random() * 100}%;animation-delay:${Math.random() * 20}s;animation-duration:${Math.random() * 10 + 15}s`
    fragment.appendChild(particle)
  }
  elements.particles.appendChild(fragment)
}

const rotateMessages = () => {
  setInterval(() => {
    const current = elements.messages[messageIndex]
    current.classList.add("exiting")
    setTimeout(() => {
      current.classList.remove("active", "exiting")
      messageIndex = (messageIndex + 1) % elements.messages.length
      elements.messages[messageIndex].classList.add("active")
    }, 400)
  }, 4000)
}

const navigate = {
  toSection: (targetSection) => {
    elements.navItems.forEach((nav) => nav.classList.remove("active"))
    const activeNav = document.querySelector(`[data-section="${targetSection}"]`)
    if (activeNav?.classList.contains("nav-item")) activeNav.classList.add("active")

    if (targetSection === "home") {
      elements.homeSection.style.display = "flex"
      elements.sections.forEach((section) => section.classList.remove("active"))
      elements.header.classList.remove("visible")
      document.querySelector('.nav-item[data-section="home"]').classList.add("active")
    } else {
      elements.homeSection.style.display = "none"
      elements.sections.forEach((section) => section.classList.remove("active"))
      document.getElementById(targetSection).classList.add("active")
      elements.header.classList.add("visible")
    }
  },
}

const characterData = {
  enigmaker: {
    specialty:
      "Maestro en construcciones complejas y sistemas de redstone avanzados. Especializado en crear mecanismos únicos y estructuras imposibles.",
    projects: "Castillo Flotante Automático, Ciudad Subterránea con Metro, Fábrica de Items Completamente Automatizada",
    achievements:
      "Más de 500 construcciones completadas, Creador del sistema de redstone más complejo del servidor, Mentor de nuevos constructores",
    images: [
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
      "Personajes/ENIGMAKER/3.jpg",
    ],
  },
  erifb1200: {
    specialty:
      "Experto en granjas automáticas y optimización de recursos. Creador de los sistemas más eficientes del servidor.",
    projects: "Granja Universal de Todos los Items, Sistema de Almacenamiento Infinito, Complejo Agrícola Automatizado",
    achievements:
      "Record de eficiencia en granjas automáticas, Diseñador de 50+ tipos de granjas diferentes, Consultor en optimización",
    images: [
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
    ],
  },
  yaapo: {
    specialty:
      "Arquitecto creativo especializado en diseños únicos y construcciones artísticas que desafían la imaginación.",
    projects: "Biblioteca Celestial, Jardines Colgantes Modernos, Museo de Arte Interactivo",
    achievements:
      "Ganador de 3 concursos de construcción, Creador de más de 200 diseños únicos, Inspiración para la comunidad",
    images: [
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
    ],
  },
  mantrix30: {
    specialty:
      "Ingeniero de redstone y creador de mecanismos innovadores. Especialista en automatización y sistemas complejos.",
    projects: "Computadora Funcional en Minecraft, Sistema de Transporte Inteligente, Robot Constructor Automático",
    achievements:
      "Inventor de 15 mecanismos únicos, Creador de la primera IA básica en redstone, Profesor de ingeniería redstone",
    images: [
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
    ],
  },
  endercessar789: {
    specialty:
      "Especialista en construcciones medievales y castillos épicos. Maestro en arquitectura histórica y defensiva.",
    projects: "Fortaleza de las Mil Torres, Ciudad Medieval Completa, Catedral Gótica Monumental",
    achievements:
      "Constructor de 25 castillos únicos, Experto en arquitectura medieval, Creador de la ciudad más grande del servidor",
    images: [
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
    ],
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
}

// Gallery data
const galleryData = {
  "screenshots-epicos": {
    title: "Screenshots Épicos",
    image: "/placeholder.svg?height=600&width=800",
  },
  timelapses: {
    title: "Timelapses",
    image: "/placeholder.svg?height=600&width=800",
  },
  "renders-3d": {
    title: "Renders 3D",
    image: "/placeholder.svg?height=600&width=800",
  },
  "construcciones-nocturnas": {
    title: "Construcciones Nocturnas",
    image: "/placeholder.svg?height=600&width=800",
  },
  "paisajes-naturales": {
    title: "Paisajes Naturales",
    image: "/placeholder.svg?height=600&width=800",
  },
  "detalles-arquitectonicos": {
    title: "Detalles Arquitectónicos",
    image: "/placeholder.svg?height=600&width=800",
  },
}

// Drawing data
const drawingData = {
  "bocetos-originales": {
    title: "Bocetos Originales",
    image: "/placeholder.svg?height=600&width=800",
  },
  "arte-digital": {
    title: "Arte Digital",
    image: "/placeholder.svg?height=600&width=800",
  },
  "pixel-art": {
    title: "Pixel Art",
    image: "/placeholder.svg?height=600&width=800",
  },
  "personajes-fanart": {
    title: "Personajes Fanart",
    image: "/placeholder.svg?height=600&width=800",
  },
  "ilustraciones-conceptuales": {
    title: "Ilustraciones Conceptuales",
    image: "/placeholder.svg?height=600&width=800",
  },
  "comics-minecraft": {
    title: "Comics Minecraft",
    image: "/placeholder.svg?height=600&width=800",
  },
}

// Wallpaper data
const wallpaperData = {
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
}

const modal = {
  open: (characterId) => {
    const data = characterData[characterId]
    if (!data) return

    const characterCard = document.querySelector(`[data-character="${characterId}"]`)
    const originalAvatar = characterCard.querySelector(".character-avatar")

    elements.modalElements.avatar.src = originalAvatar.src
    elements.modalElements.avatar.alt = characterId
    elements.modalElements.name.textContent = characterId.toUpperCase()
    elements.modalElements.specialty.textContent = data.specialty
    elements.modalElements.projects.textContent = data.projects
    elements.modalElements.achievements.textContent = data.achievements

    elements.modalElements.carousel.innerHTML = ""
    data.images.forEach((src) => {
      const img = document.createElement("img")
      img.src = src
      img.alt = `${characterId} project`
      elements.modalElements.carousel.appendChild(img)
    })

    totalSlides = data.images.length
    currentSlide = 0
    carousel.update()
    elements.characterModal.classList.add("active")
  },
  close: () => elements.characterModal.classList.remove("active"),
}

// Image modal for gallery and drawings
const imageModal = {
  open: (type, itemId) => {
    const data = type === "gallery" ? galleryData[itemId] : drawingData[itemId]
    if (!data) return

    elements.imageModalElements.title.textContent = data.title
    elements.imageModalElements.img.src = data.image
    elements.imageModalElements.img.alt = data.title
    elements.imageModal.classList.add("active")
  },
  close: () => elements.imageModal.classList.remove("active"),
}

// Wallpaper modal
const wallpaperModal = {
  open: (wallpaperId) => {
    const data = wallpaperData[wallpaperId]
    if (!data) return

    elements.wallpaperModalElements.title.textContent = data.title
    elements.wallpaperModalElements.carousel.innerHTML = ""

    data.images.forEach((src) => {
      const img = document.createElement("img")
      img.src = src
      img.alt = `${data.title} wallpaper`
      elements.wallpaperModalElements.carousel.appendChild(img)
    })

    wallpaperTotalSlides = data.images.length
    wallpaperCurrentSlide = 0
    wallpaperCarousel.update()
    elements.wallpaperModal.classList.add("active")
  },
  close: () => elements.wallpaperModal.classList.remove("active"),
}

const carousel = {
  update: () => {
    elements.modalElements.carousel.style.transform = `translateX(${-currentSlide * 100}%)`
  },
  next: () => {
    currentSlide = (currentSlide + 1) % totalSlides
    carousel.update()
  },
  prev: () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    carousel.update()
  },
}

// Wallpaper carousel
const wallpaperCarousel = {
  update: () => {
    elements.wallpaperModalElements.carousel.style.transform = `translateX(${-wallpaperCurrentSlide * 100}%)`
    // Update download button
    const currentImages = elements.wallpaperModalElements.carousel.querySelectorAll("img")
    if (currentImages[wallpaperCurrentSlide]) {
      elements.wallpaperModalElements.downloadBtn.href = currentImages[wallpaperCurrentSlide].src
    }
  },
  next: () => {
    wallpaperCurrentSlide = (wallpaperCurrentSlide + 1) % wallpaperTotalSlides
    wallpaperCarousel.update()
  },
  prev: () => {
    wallpaperCurrentSlide = (wallpaperCurrentSlide - 1 + wallpaperTotalSlides) % wallpaperTotalSlides
    wallpaperCarousel.update()
  },
}

const constructionData = {
  "el-castillo": {
    name: "El Castillo",
    description: "XXXXXXXX",
    features:
      "Torres de vigilancia, Murallas defensivas, Salón del trono, Mazmorras, Puente levadizo, Sistemas de defensa con dispensadores",
    materials: "Piedra, Ladrillos de piedra, Madera de roble, Hierro, Cristal, Antorchas, Lana para banderas",
    images: [
      "Construcciones/El Castillo.png",
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
    ],
  },
  "el-dragon": {
    name: "El Dragón",
    description:
      "Metrópolis futuristas que combinan rascacielos impresionantes con sistemas de transporte avanzados. Estas ciudades incluyen distritos comerciales, residenciales y de entretenimiento con diseños urbanos innovadores.",
    features:
      "Rascacielos de cristal, Sistema de metro, Distritos temáticos, Iluminación nocturna, Parques urbanos, Centros comerciales",
    materials: "Cristal, Hormigón, Hierro, Glowstone, Redstone para iluminación, Bloques de cuarzo",
    images: [
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
    ],
  },
  "el-sakura": {
    name: "El Sakura",
    description:
      "Estructuras místicas inspiradas en civilizaciones perdidas que combinan arquitectura sagrada con secretos ocultos. Cada templo cuenta una historia única a través de sus pasillos, cámaras secretas y decoraciones ancestrales.",
    features:
      "Arquitectura sagrada, Cámaras secretas, Trampas antiguas, Decoraciones místicas, Altares ceremoniales, Pasadizos ocultos",
    materials: "Piedra antigua, Oro, Lapislázuli, Obsidiana, Antorchas, Bloques decorativos especiales",
    images: [
      "Construcciones/El Sakura.jpg",
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
    ],
  },
  "la-granja-de-shulkers": {
    name: "La Granja de Shulkers",
    description:
      "Conexiones arquitectónicas impresionantes que no solo cumplen una función práctica, sino que se convierten en obras de arte. Cada puente combina ingeniería avanzada con belleza visual extraordinaria.",
    features:
      "Diseño arquitectónico único, Iluminación decorativa, Materiales premium, Vistas panorámicas, Accesos elegantes, Detalles ornamentales",
    materials: "Piedra pulida, Hierro, Cristal, Glowstone, Bloques de cuarzo, Materiales decorativos variados",
    images: [
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
      "/placeholder.svg?height=300&width=800",
    ],
  },
}

const constructionModal = {
  open: (constructionId) => {
    const data = constructionData[constructionId]
    if (!data) return

    elements.constructionModalElements.name.textContent = data.name
    elements.constructionModalElements.description.textContent = data.description
    elements.constructionModalElements.features.textContent = data.features
    elements.constructionModalElements.materials.textContent = data.materials

    elements.constructionModalElements.carousel.innerHTML = ""
    data.images.forEach((src) => {
      const img = document.createElement("img")
      img.src = src
      img.alt = `${data.name} project`
      elements.constructionModalElements.carousel.appendChild(img)
    })

    constructionTotalSlides = data.images.length
    constructionCurrentSlide = 0
    constructionCarousel.update()
    elements.constructionModal.classList.add("active")
  },
  close: () => elements.constructionModal.classList.remove("active"),
}

const constructionCarousel = {
  update: () => {
    elements.constructionModalElements.carousel.style.transform = `translateX(${-constructionCurrentSlide * 100}%)`
  },
  next: () => {
    constructionCurrentSlide = (constructionCurrentSlide + 1) % constructionTotalSlides
    constructionCarousel.update()
  },
  prev: () => {
    constructionCurrentSlide = (constructionCurrentSlide - 1 + constructionTotalSlides) % constructionTotalSlides
    constructionCarousel.update()
  },
}

document.addEventListener("click", (e) => {
  const { target } = e
  const section = target.getAttribute("data-section")

  if (section && (target.classList.contains("nav-item") || target.classList.contains("home-nav-btn"))) {
    e.preventDefault()
    navigate.toSection(section)
  }

  if (target.classList.contains("character-btn")) {
    const characterId = target.closest(".character-card").getAttribute("data-character")
    modal.open(characterId)
  }

  if (target.classList.contains("construction-btn")) {
    const constructionId = target.closest(".construction-card").getAttribute("data-construction")
    constructionModal.open(constructionId)
  }

  // Gallery card clicks
  if (target.closest(".gallery-card")) {
    const galleryId = target.closest(".gallery-card").getAttribute("data-gallery")
    imageModal.open("gallery", galleryId)
  }

  // Drawing card clicks
  if (target.closest(".drawing-card")) {
    const drawingId = target.closest(".drawing-card").getAttribute("data-drawing")
    imageModal.open("drawing", drawingId)
  }

  // Wallpaper card clicks
  if (target.closest(".wallpaper-card")) {
    const wallpaperId = target.closest(".wallpaper-card").getAttribute("data-wallpaper")
    wallpaperModal.open(wallpaperId)
  }

  if (target.classList.contains("modal-close")) {
    modal.close()
    constructionModal.close()
    imageModal.close()
    wallpaperModal.close()
  }

  // Close modals when clicking outside
  if (target === elements.characterModal) modal.close()
  if (target === elements.constructionModal) constructionModal.close()
  if (target === elements.imageModal) imageModal.close()
  if (target === elements.wallpaperModal) wallpaperModal.close()
})

document.addEventListener("keydown", (e) => {
  if (
    !elements.characterModal.classList.contains("active") &&
    !elements.constructionModal.classList.contains("active") &&
    !elements.imageModal.classList.contains("active") &&
    !elements.wallpaperModal.classList.contains("active")
  )
    return

  const actions = {
    Escape: () => {
      modal.close()
      constructionModal.close()
      imageModal.close()
      wallpaperModal.close()
    },
    ArrowLeft: () => {
      if (elements.characterModal.classList.contains("active")) carousel.prev()
      if (elements.constructionModal.classList.contains("active")) constructionCarousel.prev()
      if (elements.wallpaperModal.classList.contains("active")) wallpaperCarousel.prev()
    },
    ArrowRight: () => {
      if (elements.characterModal.classList.contains("active")) carousel.next()
      if (elements.constructionModal.classList.contains("active")) constructionCarousel.next()
      if (elements.wallpaperModal.classList.contains("active")) wallpaperCarousel.next()
    },
  }

  actions[e.key]?.()
})

document.addEventListener("DOMContentLoaded", () => {
  createParticles()
  rotateMessages()
  document.documentElement.style.scrollBehavior = "smooth"
})