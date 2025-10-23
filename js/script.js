// Navegación activa
document.addEventListener('DOMContentLoaded', function() {
    // Marcar enlace activo basado en la página actual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Form submission handling - Redirección a WhatsApp
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const level = document.getElementById('level')?.value || 'No especificado';
    const urgency = document.getElementById('urgency')?.value || 'Normal';
    const message = document.getElementById('message').value;
    
    // Validar que todos los campos requeridos estén llenos
    if (!name || !email || !service || !message) {
        alert('Por favor, completa todos los campos requeridos (*).');
        return;
    }
    
    // Crear mensaje estructurado para WhatsApp
    const whatsappMessage = `¡Hola! Soy *${name}*.

📧 *Email:* ${email}
🎯 *Servicio de interés:* ${service}
📊 *Nivel de inglés:* ${level}
⏰ *Urgencia:* ${urgency}

💬 *Mensaje:*
${message}

_Enviado desde English Mastery Website_`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/593939307753?text=${encodedMessage}`;
    
    // Redirigir a WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Mostrar mensaje de confirmación
    alert('¡Gracias por tu mensaje! Serás redirigido a WhatsApp para completar el envío.');
    
    // Opcional: Resetear el formulario después de un breve delay
    setTimeout(() => {
        this.reset();
    }, 1000);
});

// Animación al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.backgroundColor = 'var(--primary-color)';
    }
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = document.querySelectorAll('.service-card, .pricing-card, .contact-form, .service-detail, .preview-card, .faq-item');
    
    elementsToObserve.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

// Agregar estilos para animaciones
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Mejoras visuales para el formulario */
    .form-group input:valid,
    .form-group textarea:valid,
    .form-group select:valid {
        border-color: #27ae60;
    }
    
    .form-group input:invalid:not(:focus):not(:placeholder-shown),
    .form-group textarea:invalid:not(:focus):not(:placeholder-shown),
    .form-group select:invalid:not(:focus) {
        border-color: #e74c3c;
    }
    
    /* Estilos para páginas específicas */
    .page-hero {
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
        color: white;
        padding: 150px 0 80px;
        margin-top: 70px;
        text-align: center;
    }
    
    .page-hero h1 {
        font-size: 2.5rem;
        margin-bottom: 15px;
    }
    
    .service-detail {
        background: white;
        border-radius: 10px;
        padding: 40px;
        margin-bottom: 30px;
        box-shadow: var(--shadow);
        border-left: 4px solid var(--secondary-color);
    }
    
    .service-header {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        border-bottom: 1px solid #eee;
        padding-bottom: 20px;
    }
    
    .service-icon {
        font-size: 2.5rem;
        color: var(--secondary-color);
        margin-right: 20px;
    }
    
    .service-title {
        flex: 1;
    }
    
    .service-title h2 {
        margin-bottom: 5px;
        color: var(--primary-color);
    }
    
    .service-price {
        background: var(--success-color);
        color: white;
        padding: 5px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .service-features {
        margin: 25px 0;
    }
    
    .service-features h4 {
        color: var(--primary-color);
        margin-bottom: 15px;
    }
    
    .service-features ul {
        list-style: none;
        padding-left: 0;
    }
    
    .service-features li {
        padding: 8px 0;
        border-bottom: 1px solid #f5f5f5;
        position: relative;
        padding-left: 25px;
    }
    
    .service-features li:before {
        content: "✓";
        color: var(--success-color);
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .service-cta {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        margin-top: 30px;
    }
    
    .cta-section {
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
        color: white;
        text-align: center;
        padding: 60px 0;
    }
    
    .cta-section h2 {
        margin-bottom: 15px;
    }
    
    .cta-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 25px;
    }
    
    /* Estilos para precios */
    .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin: 50px 0;
    }
    
    .pricing-card {
        background: white;
        border-radius: 10px;
        padding: 30px;
        box-shadow: var(--shadow);
        position: relative;
        transition: var(--transition);
        border: 2px solid transparent;
    }
    
    .pricing-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    
    .pricing-card.featured {
        border-color: var(--secondary-color);
        transform: scale(1.05);
    }
    
    .pricing-card.featured:hover {
        transform: scale(1.05) translateY(-5px);
    }
    
    .featured-badge {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--secondary-color);
        color: white;
        padding: 8px 20px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .pricing-header {
        text-align: center;
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
    }
    
    .price-main {
        font-size: 3rem;
        font-weight: 700;
        color: var(--primary-color);
        margin: 15px 0;
    }
    
    .price-main span {
        font-size: 1.2rem;
        font-weight: 400;
    }
    
    .price-desc {
        color: #666;
        font-size: 0.9rem;
    }
    
    .pricing-features ul {
        list-style: none;
        padding: 0;
        margin-bottom: 30px;
    }
    
    .pricing-features li {
        padding: 10px 0;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        align-items: center;
    }
    
    .pricing-features i {
        color: var(--success-color);
        margin-right: 10px;
    }
    
    .pricing-cta {
        text-align: center;
    }
    
    .table-container {
        overflow-x: auto;
        margin: 30px 0;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        background: white;
        box-shadow: var(--shadow);
        border-radius: 8px;
        overflow: hidden;
    }
    
    th, td {
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #eee;
    }
    
    th {
        background: var(--primary-color);
        color: white;
        font-weight: 600;
    }
    
    tr:hover {
        background: #f8f9fa;
    }
    
    .homework-examples {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin: 30px 0;
    }
    
    .example-card {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: var(--shadow);
        text-align: center;
        border-top: 4px solid var(--secondary-color);
    }
    
    .price-range {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--primary-color);
        margin: 15px 0;
    }
    
    .example-card ul {
        list-style: none;
        padding: 0;
        text-align: left;
    }
    
    .example-card li {
        padding: 8px 0;
        border-bottom: 1px solid #f5f5f5;
        position: relative;
        padding-left: 20px;
    }
    
    .example-card li:before {
        content: "•";
        color: var(--secondary-color);
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    
    .pricing-note {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 5px;
        padding: 15px;
        margin-top: 20px;
    }
    
    /* Estilos para contacto */
    .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        margin: 50px 0;
    }
    
    .contact-card {
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        text-align: center;
        transition: var(--transition);
    }
    
    .contact-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
    
    .contact-icon {
        font-size: 3rem;
        color: var(--secondary-color);
        margin-bottom: 20px;
    }
    
    .form-container {
        background: white;
        padding: 40px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        max-width: 800px;
        margin: 0 auto;
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
    
    @media (max-width: 768px) {
        .form-row {
            grid-template-columns: 1fr;
        }
        
        .service-cta, .cta-buttons {
            flex-direction: column;
        }
        
        .pricing-card.featured {
            transform: none;
        }
        
        .pricing-card.featured:hover {
            transform: translateY(-5px);
        }
    }
    
    .faq-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
        margin-top: 40px;
    }
    
    .faq-item {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: var(--shadow);
        border-left: 4px solid var(--secondary-color);
    }
    
    .faq-item h3 {
        color: var(--primary-color);
        margin-bottom: 15px;
        font-size: 1.2rem;
    }
`;
document.head.appendChild(style);