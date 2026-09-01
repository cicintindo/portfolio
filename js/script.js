document.addEventListener('DOMContentLoaded', function () {

  // ============================================================
  // Splash cinematográfico de abertura
  // Mostra "Apresentando Cintia Kamei" e só revela o site
  // quando o usuário clica em ENTRAR (ou após tocar em mobile).
  // ============================================================
  var splash = document.getElementById('splash');
  var splashEnter = document.getElementById('splashEnter');

  // Bloqueia o scroll enquanto o splash estiver aberto
  document.body.style.overflow = 'hidden';

  function fecharSplash() {
    if (!splash) { document.body.style.overflow = ''; return; }
    splash.classList.add('done');
    document.body.classList.add('entered');
    document.body.style.overflow = '';
    window.setTimeout(function () {
      if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
    }, 1000);
  }

  if (splashEnter) {
    splashEnter.addEventListener('click', fecharSplash);
  } else if (splash) {
    // Mobile / sem JS para interação: fecha após um tempo
    window.setTimeout(fecharSplash, 2800);
  }

  // Controles de acessibilidade: fecha com Enter, se for o foco
  if (splashEnter) {
    splashEnter.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') fecharSplash();
    });
  }

  // Fallback: se por algum motivo o usuário não clicar, nunca trava
  window.setTimeout(function () {
    if (splash && !splash.classList.contains('done')) fecharSplash();
  }, 20000);

  // ============================================================
  // Fallback de fotos (caso assets/foto.jpg não exista)
  // ============================================================
  const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#ffe3e8"/><stop offset="1" stop-color="#f6ecfb"/>' +
    '</linearGradient></defs>' +
    '<rect width="100%" height="100%" fill="url(#g)"/>' +
    '<text x="50%" y="55%" font-family="Poppins, Arial, sans-serif" font-size="200" font-weight="600" ' +
    'fill="#d67ab1" text-anchor="middle" dominant-baseline="middle">CK</text></svg>'
  );
  document.querySelectorAll('img').forEach(function (img) {
    img.addEventListener('error', function () { img.src = fallback; });
  });

  // ============================================================
  // Navbar: sombra ao rolar + link ativo + menu mobile
  // ============================================================
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-links a');
  const navToggle = document.getElementById('navToggle');
  const menu = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const secoes = document.querySelectorAll('section[id]');

  function aoRolar() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);

    const pos = window.scrollY + 120;
    let atual = '';
    secoes.forEach(function (s) {
      if (s.offsetTop <= pos) atual = s.id;
    });
    navLinks.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + atual);
    });
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  function fecharMenu() {
    if (menu) menu.classList.remove('open');
    if (navToggle) navToggle.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (navToggle && menu) {
    navToggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      navToggle.classList.toggle('active');
      if (navOverlay) navOverlay.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
  if (navOverlay) {
    navOverlay.addEventListener('click', fecharMenu);
  }
  navLinks.forEach(function (l) {
    l.addEventListener('click', fecharMenu);
  });

  // ============================================================
  // Botão voltar ao topo
  // ============================================================
  const btnTopo = document.getElementById('btnTopo');
  if (btnTopo) {
    window.addEventListener('scroll', function () {
      btnTopo.classList.toggle('visivel', window.scrollY > 500);
    }, { passive: true });
    btnTopo.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================================
  // Botões magnéticos
  // ============================================================
  const reducer = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = window.matchMedia('(hover: none)').matches;
  if (!reducer && !touch) {
    document.querySelectorAll('.magnetic-btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.25;
        var y = (e.clientY - r.top - r.height / 2) * 0.25;
        btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
      });
    });
  }

  // ============================================================
  // Pétalas de sakura no hero
  // ============================================================
  const blossomsContainer = document.getElementById('blossoms');
  if (blossomsContainer && !reducer) {
    var total = window.innerWidth < 768 ? 15 : 30;
    for (var i = 0; i < total; i++) {
      var p = document.createElement('span');
      p.className = 'blossom';
      var left = Math.random() * 100;
      var size = 7 + Math.random() * 10;
      var dur = 9 + Math.random() * 12;
      var delay = Math.random() * 12;
      var sway = (Math.random() - 0.5) * 60;
      p.style.left = left + '%';
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.animation = 'drift ' + dur + 's linear infinite';
      p.style.animationDelay = delay + 's';
      p.style.setProperty('--sway', sway + 'px');
      blossomsContainer.appendChild(p);
    }
  }

  // ============================================================
  // Parallax suave nas fotos
  // ============================================================
  if (!reducer) {
    document.querySelectorAll('.about-photo img').forEach(function (img) {
      var wrap = img.closest('.about-photo');
      window.addEventListener('scroll', function () {
        var y = window.scrollY;
        var r = wrap.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          var offset = (window.innerHeight / 2 - (r.top + r.height / 2)) * 0.05;
          img.style.transform = 'translateY(' + offset + 'px)';
        }
      }, { passive: true });
    });
  }

  // ============================================================
  // Reveal ao rolar
  // ============================================================
  var revealEls = document.querySelectorAll(
    '.section-title, .section-label, .about-desc, .about-stats, .about-visual, .edu-card, .project-card, .skill-tag, .exp-item, .hobby-card, .travel-featured, .travel-card, .contact-item, .contact-grid'
  );
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var delay = entry.target.style.getPropertyValue('--delay') || 0;
          entry.target.style.transitionDelay = (parseFloat(delay) * 0.12) + 's';
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { el.classList.add('reveal'); revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('revealed'); });
  }

  // ============================================================
  // Formulário de contato
  // ============================================================
  var formContato = document.getElementById('formContato');
  if (formContato) {
    formContato.addEventListener('submit', function (event) {
      event.preventDefault();
      var nome = document.getElementById('nome').value.trim();
      var email = document.getElementById('email').value.trim();
      var mensagem = document.getElementById('mensagem').value.trim();
      var msgBox = document.getElementById('formMsg');
      var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      msgBox.classList.remove('d-none', 'form-msg-sucesso', 'form-msg-erro');

      if (nome === '' || email === '' || mensagem === '') {
        msgBox.classList.add('form-msg-erro');
        msgBox.textContent = 'Atenção: preencha todos os campos do formulário.';
        return;
      }
      if (!emailValido) {
        msgBox.classList.add('form-msg-erro');
        msgBox.textContent = 'Atenção: o e-mail informado não parece válido. Verifique e tente novamente.';
        return;
      }
      msgBox.classList.add('form-msg-sucesso');
      msgBox.textContent = 'Mensagem enviada com sucesso. Obrigada pelo contato, ' + nome + '! Responderei em breve no e-mail informado.';
      formContato.reset();
    });
  }

});
