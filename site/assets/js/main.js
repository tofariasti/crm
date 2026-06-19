document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupMobileMenu();
  setupWhatsAppModal();
  setupWhatsAppForm();
});

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page-section');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetPage = item.dataset.nav;

      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');

      pages.forEach(page => page.classList.remove('active'));
      const targetSection = document.querySelector(`[data-page="${targetPage}"]`);
      if (targetSection) {
        targetSection.classList.add('active');
      }

      if (targetPage === 'relatorios') {
        setTimeout(() => {
          if (window.createSalesPerformanceChart) window.createSalesPerformanceChart();
          if (window.createLeadSourceChart) window.createLeadSourceChart();
        }, 300);
      }
    });
  });
}

function setupMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });

    mainContent.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
          sidebar.classList.remove('active');
        }
      }
    });
  }
}

function setupWhatsAppModal() {
  const whatsappBtn = document.getElementById('whatsappBtn');
  const newLeadBtn = document.getElementById('newLeadBtn');
  const modal = document.getElementById('whatsappModal');
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = modal?.querySelector('.modal-overlay');

  const openModal = () => {
    modal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  };

  whatsappBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  newLeadBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  const newLeadBtn2 = document.getElementById('newLeadBtn2');
  newLeadBtn2?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });
}

function setupWhatsAppForm() {
  const form = document.getElementById('whatsappForm');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const nome = formData.get('nome');
    const email = formData.get('email');
    const telefone = formData.get('telefone');
    const empresa = formData.get('empresa');
    const horario = formData.get('horario');
    const mensagem = formData.get('mensagem');

    let whatsappMessage = `*Nova solicitação de demonstração CRM*\n\n`;
    whatsappMessage += `*Nome:* ${nome}\n`;
    whatsappMessage += `*E-mail:* ${email}\n`;
    whatsappMessage += `*Telefone:* ${telefone}\n`;
    
    if (empresa) {
      whatsappMessage += `*Empresa:* ${empresa}\n`;
    }
    
    if (horario) {
      const horarioTexto = {
        'manha': 'Manhã (9h - 12h)',
        'tarde': 'Tarde (13h - 18h)',
        'noite': 'Noite (18h - 21h)'
      };
      whatsappMessage += `*Melhor horário:* ${horarioTexto[horario] || horario}\n`;
    }
    
    if (mensagem) {
      whatsappMessage += `\n*Mensagem:*\n${mensagem}`;
    }

    const phoneNumber = '5551989030405';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    form.reset();
    
    const modal = document.getElementById('whatsappModal');
    modal?.classList.remove('active');
    document.body.style.overflow = '';

    showSuccessMessage();
  });
}

function showSuccessMessage() {
  const message = document.createElement('div');
  message.style.cssText = `
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(16, 185, 129, 0.5);
    z-index: 3000;
    animation: slideIn 0.4s ease-out;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  `;

  message.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    Mensagem enviada! Verifique o WhatsApp.
  `;

  document.body.appendChild(message);

  setTimeout(() => {
    message.style.animation = 'slideOut 0.4s ease-in';
    setTimeout(() => message.remove(), 400);
  }, 4000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

window.addEventListener('load', () => {
  const preloader = document.createElement('div');
  preloader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.5s ease-out;
  `;

  preloader.innerHTML = `
    <div style="text-align: center;">
      <div style="width: 60px; height: 60px; border: 4px solid rgba(99, 102, 241, 0.2); border-top-color: #6366f1; border-radius: 50%; animation: spin 1s linear infinite;"></div>
      <p style="color: #cbd5e1; margin-top: 1rem; font-weight: 600;">Carregando CRM Pro...</p>
    </div>
  `;

  const spinStyle = document.createElement('style');
  spinStyle.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(spinStyle);

  document.body.appendChild(preloader);

  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
  }, 1500);
});
