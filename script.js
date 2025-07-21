// Data
const projects = [
  {
    title: "EduPapers LK",
    description:
      "Comprehensive Android mobile application providing Sri Lankan students access to educational papers across all academic levels. Features Firebase authentication, paper management system, and modern UI with Jetpack Compose.",
    tech: ["Kotlin", "Android Studio", "Firebase", "Firestore", "Jetpack Compose", "Material Design 3"],
    github: "https://github.com/thamaravp/SriEdu",
    role: "Full-stack Mobile Developer",
    featured: true,
  },
  {
    title: "PawRescue",
    description:
      "Mobile app for pet-focused social media where users can post about lost/found pets. Features real-time pet tracking, veterinary services access, and online store for pet supplies.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/thamaravp/PawRescue",
    role: "Full-stack Developer",
    featured: true,
  },
  {
    title: "Movie Knowledge App",
    description:
      "Movie database application allowing users to add movies, search actors, and discover filmographies. Integrated with third-party movie API for dynamic content.",
    tech: ["Kotlin"],
    github: "https://github.com/thamaravp/Movie-Finder",
    role: "Mobile Developer",
    featured: false,
  },
  {
    title: "Healthcare Website",
    description:
      "Responsive healthcare website providing access to medical information and services with clean, professional UI design.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/thamaravp/Healthcare-Site",
    role: "Frontend Developer",
    featured: false,
  },
]

const skills = {
  Development: ["Java", "Python", "JavaScript", "Dart"],
  Frontend: ["HTML5", "CSS3", "React", "Jetpack Compose"],
  Backend: ["Firebase", "MySQL", "Firestore"],
  Mobile: ["Flutter", "Kotlin", "Android Studio"],
  Tools: ["Git", "GitHub", "Material Design"],
}

const competencies = [
  "Effective communication and collaboration",
  "Open to new ideas and continuous learning",
  "Independent yet strong team player",
  "Flexible mindset for workplace adaptability",
  "Strong time management and problem-solving",
  "Technical and creative contribution capabilities",
]

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  createParticles()
  populateProjects()
  populateSkills()
  populateCompetencies()
  initializeAnimations()
})

// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  const particleCount = 20

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"

    // Random position
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"

    // Random animation delay and duration
    particle.style.animationDelay = Math.random() * 5 + "s"
    particle.style.animationDuration = 3 + Math.random() * 4 + "s"

    particlesContainer.appendChild(particle)
  }
}

// Populate projects
function populateProjects() {
  const projectsGrid = document.getElementById("projectsGrid")

  projects.forEach((project, index) => {
    const projectCard = document.createElement("div")
    projectCard.className = "project-card"
    projectCard.style.animationDelay = index * 200 + "ms"

    const techTags = project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")

    projectCard.innerHTML = `
            <div class="project-header">
                <div>
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-role">${project.role}</span>
                </div>
                <button class="project-link" onclick="window.open('${project.github}', '_blank')">
                    <i class="fas fa-external-link-alt"></i>
                </button>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            <button class="project-github" onclick="window.open('${project.github}', '_blank')">
                <i class="fab fa-github"></i>
                View on GitHub
            </button>
        `

    projectsGrid.appendChild(projectCard)
  })
}

// Populate skills
function populateSkills() {
  const skillsGrid = document.getElementById("skillsGrid")

  Object.entries(skills).forEach(([category, skillList], index) => {
    const skillCard = document.createElement("div")
    skillCard.className = "skill-card"
    skillCard.style.animationDelay = index * 150 + "ms"

    const skillTags = skillList.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")

    skillCard.innerHTML = `
            <h3 class="skill-category">${category}</h3>
            <div class="skill-tags">${skillTags}</div>
        `

    skillsGrid.appendChild(skillCard)
  })
}

// Populate competencies
function populateCompetencies() {
  const competenciesGrid = document.getElementById("competenciesGrid")

  competencies.forEach((competency, index) => {
    const competencyItem = document.createElement("div")
    competencyItem.className = "competency-item"
    competencyItem.style.animationDelay = index * 100 + "ms"

    competencyItem.innerHTML = `
            <div class="competency-dot"></div>
            <span class="competency-text">${competency}</span>
        `

    competenciesGrid.appendChild(competencyItem)
  })
}

// Initialize animations and interactions
function initializeAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
      }
    })
  }, observerOptions)

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(".project-card, .skill-card, .competency-item")
  animatedElements.forEach((el) => {
    el.style.animationPlayState = "paused"
    observer.observe(el)
  })

  // Smooth scrolling for scroll indicator
  const scrollIndicator = document.querySelector(".scroll-indicator")
  if (scrollIndicator) {
    scrollIndicator.addEventListener("click", () => {
      document.querySelector(".education-section").scrollIntoView({
        behavior: "smooth",
      })
    })
  }
}

// Download CV function
function downloadCV() {
  // Create a temporary link element
  const link = document.createElement("a")
  link.href = "cv/Thamara_Perera_CV.pdf"
  link.download = "Thamara_Perera_CV.pdf"

  // Append to body, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Add click handlers for contact buttons
document.addEventListener("DOMContentLoaded", () => {
  // Email buttons
  const emailButtons = document.querySelectorAll(".contact-btn:first-child, .btn:has(.fa-envelope)")
  emailButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "mailto:thamaraperera1039@gmail.com"
    })
  })

  // LinkedIn buttons
  const linkedinButtons = document.querySelectorAll(".btn:has(.fa-linkedin)")
  linkedinButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.open("https://www.linkedin.com/in/thamara-perera-me", "_blank")
    })
  })

  // GitHub buttons
  const githubButtons = document.querySelectorAll(".btn:has(.fa-github)")
  githubButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.open("https://github.com/thamaravp", "_blank")
    })
  })
})

// Add parallax effect to background elements
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallaxElements = document.querySelectorAll(".bg-element")

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1
    element.style.transform = `translateY(${scrolled * speed}px)`
  })
})

// Add typing effect enhancement
function enhanceTypewriter() {
  const typewriterElement = document.getElementById("typewriter")
  const text = typewriterElement.textContent
  typewriterElement.textContent = ""

  let i = 0
  const typeInterval = setInterval(() => {
    if (i < text.length) {
      typewriterElement.textContent += text.charAt(i)
      i++
    } else {
      clearInterval(typeInterval)
    }
  }, 50)
}

// Initialize enhanced typewriter effect
setTimeout(enhanceTypewriter, 1000)
