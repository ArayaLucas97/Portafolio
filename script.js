// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Función para aplicar el tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';  // Cambia el texto/icono
        } else {
            body.classList.remove('dark-mode');
            themeToggle.textContent = '🌙';
        }
    }
// --- BOTÓN DE RGB ---
const rgbToggle = document.getElementById("rgb-toggle");
const portadaButtons = document.querySelectorAll(".boton-portada a");

rgbToggle.addEventListener("click", () => {
  portadaButtons.forEach(btn => {
    btn.classList.toggle("rgb-on");
  });

  // Cambia el texto del botón según estado
  if (portadaButtons[0].classList.contains("rgb-on")) {
    rgbToggle.textContent = "RGB";
    rgbToggle.setAttribute("aria-label", "RGB");
  } else {
    rgbToggle.textContent = "RGB";
    rgbToggle.setAttribute("aria-label", "RGB");
  }
});

    // Cargar tema guardado (o detectar preferencia del sistema)
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    // Evento del botón con delay para evitar clics dobles
    let toggleTimeout;
    themeToggle.addEventListener('click', () => {
        clearTimeout(toggleTimeout);
        toggleTimeout = setTimeout(() => {
            const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);  // Guarda en localStorage
        }, 200);  // Delay de 200ms
    });

    // Scroll suave para enlaces de navegación
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Botón "Volver arriba"
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = '↑';
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg,
            var(--color-rojo) 0%,
            var(--color-naranja) 25%,
            var(--color-magenta) 50%,
            var(--color-morado) 100%
          ),
          url('Sin título.jpg') center/cover no-repeat fixed;
        color: var(--color-claro);
        border: 2px solid var(--color-claro);
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, background 0.3s;
        z-index: 1000;
    `;
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(backToTopBtn);

    // Mostrar/ocultar botón "Volver arriba" al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
        }
    });

    // Animaciones de entrada para secciones
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,  // Activa cuando el 10% de la sección es visible
        rootMargin: '0px 0px -50px 0px'  // Ajusta el margen inferior
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

//btn rgb
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-rgb");
    const botones = document.querySelectorAll(".boton-portada");
    let rgbActivo = false;

    toggleBtn.addEventListener("click", () => {
        rgbActivo = !rgbActivo;

        botones.forEach(boton => {
            if (rgbActivo) {
                boton.classList.add("rgb-button");
            } else {
                boton.classList.remove("rgb-button");
            }
        });

        toggleBtn.textContent = rgbActivo ? "Desactivar Luces RGB" : "Activar Luces RGB";
    });
});

