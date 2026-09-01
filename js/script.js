document.addEventListener('DOMContentLoaded', function () {

  // ============================================================
  // Splash cinematográfico de abertura
  // Apresenta a marca e libera o site sozinho em ~1,5s;
  // ENTRAR/Enter/Escape apenas adiantam a entrada.
  // ============================================================
  var splash = document.getElementById('splash');
  var splashEnter = document.getElementById('splashEnter');

  var fechadoPorTeclado = false;
  var navBrand = document.querySelector('.nav-brand');

  function fecharSplash() {
    if (!splash) return;
    splash.classList.add('done');
    document.body.classList.add('entered');
    if (fechadoPorTeclado && navBrand) navBrand.focus();
    window.setTimeout(function () {
      if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
    }, 1000);
  }

  if (splashEnter) {
    splashEnter.addEventListener('click', fecharSplash);
  }

  // Controles de acessibilidade: fecha com Enter (no foco) ou Escape
  if (splashEnter) {
    splashEnter.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        fechadoPorTeclado = true;
        fecharSplash();
      }
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && splash && !splash.classList.contains('done')) {
      fechadoPorTeclado = true;
      fecharSplash();
    }
  });

  // Auto-revelação: ninguém fica preso, o site entra sozinho em ~1,5s
  window.setTimeout(function () {
    if (splash && !splash.classList.contains('done')) fecharSplash();
  }, 1500);

  // ============================================================
  // Fallback de fotos (caso assets/foto.jpg não exista)
  // ============================================================
  const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="#ffe3e8"/><stop offset="1" stop-color="#fff0f3"/>' +
    '</linearGradient></defs>' +
    '<rect width="100%" height="100%" fill="url(#g)"/>' +
    '<text x="50%" y="55%" font-family="Poppins, Arial, sans-serif" font-size="200" font-weight="600" ' +
    'fill="#a63a78" text-anchor="middle" dominant-baseline="middle">CK</text></svg>'
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
      var ativo = l.getAttribute('href') === '#' + atual;
      l.classList.toggle('active', ativo);
      if (ativo) { l.setAttribute('aria-current', 'page'); }
      else { l.removeAttribute('aria-current'); }
    });
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  function fecharMenu() {
    if (menu) menu.classList.remove('open');
    if (navToggle) {
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Abrir menu');
    }
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
  }

  if (navToggle && menu) {
    navToggle.addEventListener('click', function () {
      var aberto = menu.classList.toggle('open');
      navToggle.classList.toggle('active', aberto);
      navToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      navToggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
      if (navOverlay) navOverlay.classList.toggle('active', aberto);
      document.body.classList.toggle('menu-open', aberto);
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
    '.section-title, .section-label, .about-desc, .edu-card, .project-card, .hobby-card, .travel-featured, .travel-card, .contact-item'
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
    var campoNome = document.getElementById('nome');
    var campoEmail = document.getElementById('email');
    var campoMensagem = document.getElementById('mensagem');
    var msgBox = document.getElementById('formMsg');

    function marcarCampo(campo, ok, mensagem) {
      var group = campo.closest('.input-group');
      var msgEl = group.querySelector('.campo-erro');
      campo.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (group) group.classList.toggle('has-error', !ok);
      if (msgEl) {
        msgEl.textContent = ok ? '' : mensagem;
        msgEl.classList.toggle('d-none', ok);
      }
      return ok;
    }

    function resetarErros() {
      [campoNome, campoEmail, campoMensagem].forEach(function (c) {
        if (c) {
          c.removeAttribute('aria-invalid');
          c.closest('.input-group').classList.remove('has-error');
          var msgEl = c.closest('.input-group').querySelector('.campo-erro');
          if (msgEl) { msgEl.textContent = ''; msgEl.classList.add('d-none'); }
        }
      });
    }

    formContato.addEventListener('submit', function (event) {
      event.preventDefault();
      var nome = campoNome.value.trim();
      var email = campoEmail.value.trim();
      var mensagem = campoMensagem.value.trim();
      var btn = formContato.querySelector('button[type="submit"]');

      msgBox.classList.remove('d-none', 'form-msg-sucesso', 'form-msg-erro');
      msgBox.removeAttribute('tabindex');
      msgBox.setAttribute('role', 'status');

      var okNome = marcarCampo(campoNome, nome !== '', 'Preencha seu nome.');
      var okEmail = marcarCampo(campoEmail, email !== '', 'Preencha seu e-mail.');
      var okMensagem = marcarCampo(campoMensagem, mensagem !== '', 'Escreva sua mensagem.');
      if (okEmail) okEmail = marcarCampo(campoEmail, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), 'Informe um e-mail válido, por exemplo nome@dominio.com.');

      if (!okNome || !okEmail || !okMensagem) {
        msgBox.classList.add('form-msg-erro');
        msgBox.setAttribute('role', 'alert');
        msgBox.textContent = 'Corrija os campos destacados e tente de novo.';
        return;
      }

      var original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando…';
      msgBox.textContent = 'Enviando sua mensagem…';

      var dados = new FormData(formContato);

      fetch(formContato.getAttribute('action'), {
        method: 'POST',
        body: dados,
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        return res.json().then(function (d) {
          if (!res.ok) {
            var motivo = (d && d.errors && Object.values(d.errors).join(' ')) || 'Falha no envio.';
            throw new Error(motivo);
          }
          return d;
        });
      }).then(function () {
        formContato.reset();
        resetarErros();
        msgBox.classList.add('form-msg-sucesso');
        msgBox.setAttribute('role', 'status');
        msgBox.textContent = 'Mensagem enviada! Respondo pelo e-mail informado assim que puder.';
      }).catch(function () {
        msgBox.classList.add('form-msg-erro');
        msgBox.setAttribute('role', 'alert');
        msgBox.textContent = 'Não consegui enviar agora. Tente novamente em instantes ou escreva direto para cintia.kamei@aluno.ifsp.edu.br.';
      }).finally(function () {
        btn.disabled = false;
        btn.textContent = original;
      });
    });

    formContato.addEventListener('input', function (event) {
      var campo = event.target;
      if (campo.tagName === 'INPUT' || campo.tagName === 'TEXTAREA') {
        marcarCampo(campo, true, '');
        msgBox.classList.add('d-none');
      }
    });
  }

});
