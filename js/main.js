/* =========================================================
   LRCP - JavaScript Principal
   - Menú móvil hamburguesa
   - Scroll suave a secciones
   - Header con sombra al hacer scroll
   - Acordeón de servicios (solo uno abierto)
   - Tabs de servicios (Personal / Empresa)
   - Carrusel del equipo
   - Selector de tipo de consulta (formulario)
   - Validación básica del formulario
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ============ 1. MENÚ MÓVIL ============ */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  /* ============ 2. HEADER CON SOMBRA AL HACER SCROLL ============ */
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  /* ============ 3. ACORDEÓN DE SERVICIOS ============ */
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      // Cierra todos los demás
      accordionItems.forEach(other => {
        other.classList.remove('active');
        const toggle = other.querySelector('.accordion-toggle .icon-plus');
        const toggleMinus = other.querySelector('.accordion-toggle .icon-minus');
        if (toggle) toggle.style.display = 'block';
        if (toggleMinus) toggleMinus.style.display = 'none';
      });

      // Si no estaba activo, lo abre
      if (!isActive) {
        item.classList.add('active');
        const toggle = item.querySelector('.accordion-toggle .icon-plus');
        const toggleMinus = item.querySelector('.accordion-toggle .icon-minus');
        if (toggle) toggle.style.display = 'none';
        if (toggleMinus) toggleMinus.style.display = 'block';
      }
    });
  });

  /* ============ 4. TABS DE SERVICIOS (Personal / Empresa) ============ */
  const serviceTabs = document.querySelectorAll('.services-tab');

  serviceTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      serviceTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Aquí puedes agregar lógica para cambiar el contenido del acordeón
      // según la pestaña seleccionada (Personal vs Empresa)
    });
  });

  /* ============ 5. CARRUSEL DEL EQUIPO ============ */
  const teamGrid = document.querySelector('.team-grid');
  const prevBtn = document.querySelector('.team-control-prev');
  const nextBtn = document.querySelector('.team-control-next');

  if (teamGrid && prevBtn && nextBtn) {
    let scrollAmount = 0;
    const scrollStep = 300;

    prevBtn.addEventListener('click', () => {
      teamGrid.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      teamGrid.scrollBy({ left: scrollStep, behavior: 'smooth' });
    });
  }

  /* ============ 6. TIPO DE CONSULTA (Empresa / Persona Natural) ============ */
  const radioOptions = document.querySelectorAll('.form-radio-option');

  radioOptions.forEach(option => {
    option.addEventListener('click', function () {
      radioOptions.forEach(o => o.classList.remove('active'));
      option.classList.add('active');

      // Guardar valor en input oculto si lo necesitas
      const value = option.getAttribute('data-value');
      const hiddenInput = document.querySelector('#tipo-consulta-value');
      if (hiddenInput) hiddenInput.value = value;
    });
  });

  /* ============ 7. VALIDACIÓN DEL FORMULARIO ============ */
  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Aquí va la lógica de envío (puedes usar fetch a tu backend)
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());

      console.log('Datos del formulario:', data);

      // Validación simple
      if (!data.nombre || !data.email || !data.mensaje) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
      }

      // Simulación de envío exitoso
      alert('¡Consulta enviada! Te contactaremos pronto.');
      contactForm.reset();
    });
  }

  /* ============ 8. ANIMACIÓN AL HACER SCROLL (IntersectionObserver) ============ */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Aplica animación a elementos con clase .animate-on-scroll
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

});
