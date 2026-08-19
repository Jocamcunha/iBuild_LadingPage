// =========================================================
// iBuild — script.js
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  // Render lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  /* ---------- Smooth scroll for every [data-scroll] / .footer-scroll-link ---------- */
  function scrollToSelector(selector) {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  document.querySelectorAll("[data-scroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      scrollToSelector(btn.getAttribute("data-scroll"));
      closeMobileMenu();
    });
  });

  document.querySelectorAll(".footer-scroll-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToSelector("#sobre");
    });
  });

  document.getElementById("logo-home")?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Navbar scroll background ---------- */
  const navbar = document.getElementById("navbar");
  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll);
  onScroll();

  /* ---------- Mobile menu toggle ---------- */
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  let menuOpen = false;

  function closeMobileMenu() {
    menuOpen = false;
    mobileMenu.classList.remove("open");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }

  function toggleMobileMenu() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle("open", menuOpen);
    menuIcon.style.display = menuOpen ? "none" : "block";
    closeIcon.style.display = menuOpen ? "block" : "none";
  }

  hamburgerBtn?.addEventListener("click", toggleMobileMenu);

  /* ---------- TCC tabs ---------- */
  const tccContent = {
    Resumo: {
      title: "Sobre o TCC",
      text: "O iBuild foi desenvolvido como Trabalho de Conclusão de Curso, com o objetivo de propor uma solução tecnológica inovadora para o setor de construção civil e reformas. O projeto abrange desde a pesquisa de mercado até a prototipação funcional do aplicativo, passando pela modelagem de negócios e arquitetura técnica.",
    },
    Problema: {
      title: "O problema que identificamos",
      text: "O mercado de construção civil brasileiro movimenta bilhões por ano, mas ainda carece de digitalização. Há informalidade na contratação de serviços, desperdício massivo de materiais, ausência de verificação de profissionais e falta de mecanismos de segurança em transações. Esses problemas afetam todos os envolvidos: proprietários, trabalhadores e fornecedores.",
    },
    "Solução": {
      title: "A solução proposta",
      text: "O iBuild propõe um ecossistema digital completo: um marketplace de economia circular para materiais, um sistema de contratação de profissionais com verificação biométrica e documental, uma conta escrow para garantir pagamentos, e ferramentas de gestão de projeto — tudo integrado em um único app mobile.",
    },
    Tecnologia: {
      title: "Stack tecnológica",
      text: "A plataforma foi projetada com React Native para o front-end mobile, Node.js e microserviços no backend, PostgreSQL e Redis para armazenamento, integração com APIs de biometria e pagamento, e AWS para infraestrutura escalável. A arquitetura garante segurança, performance e escalabilidade para crescer junto com o mercado.",
    },
  };

  const tccTabs = document.querySelectorAll(".tcc-tab");
  const tccTitleEl = document.getElementById("tcc-content-title");
  const tccTextEl = document.getElementById("tcc-content-text");

  tccTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-tab");
      tccTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      tccTitleEl.textContent = tccContent[key].title;
      tccTextEl.textContent = tccContent[key].text;
    });
  });

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const sentPanel = document.getElementById("sent-panel");
  const sendAgainBtn = document.getElementById("send-again-btn");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span>';

    setTimeout(() => {
      form.classList.add("hidden-panel");
      sentPanel.classList.remove("hidden-panel");
    }, 1500);
  });

  sendAgainBtn?.addEventListener("click", () => {
    sentPanel.classList.add("hidden-panel");
    form.classList.remove("hidden-panel");
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i data-lucide="send" size="16"></i><span>Enviar mensagem</span>';
    if (window.lucide) lucide.createIcons();
  });
});
