// Aguarda o carregamento completo do documento HTML
document.addEventListener('DOMContentLoaded', function () {

    // ============================================================
    // 1. Fallback da foto de perfil (caso assets/foto.jpg não exista)
    // ============================================================
    const foto = document.getElementById('fotoPerfil');
    if (foto) {
      const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">' +
        '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#ffe3e8"/><stop offset="1" stop-color="#f6ecfb"/>' +
        '</linearGradient></defs>' +
        '<rect width="100%" height="100%" fill="url(#g)"/>' +
        '<text x="50%" y="55%" font-family="Poppins, Arial, sans-serif" font-size="200" font-weight="600" ' +
        'fill="#d67ab1" text-anchor="middle" dominant-baseline="middle">CK</text></svg>'
      );
      foto.addEventListener('error', function () {
        foto.src = fallback;
      });
    }
  
    // ============================================================
    // 2. Animações de entrada (reveal) ao rolar a página
    // ============================================================
    const elementosReveal = document.querySelectorAll('.section-tag, .section-title, .card-custom, .skill-pill');
    if ('IntersectionObserver' in window && elementosReveal.length > 0) {
      const observer = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('revelado');
            observer.unobserve(entrada.target);
          }
        });
      }, { threshold: 0.12 });
      elementosReveal.forEach(function (el) { observer.observe(el); });
    } else {
      elementosReveal.forEach(function (el) { el.classList.add('revelado'); });
    }
  
    // ============================================================
    // 3. Navbar ganha sombra ao rolar + link ativo (scrollspy)
    // ============================================================
    const nav = document.getElementById('mainNav');
    const secoes = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.custom-nav .nav-link');
  
    function aoRolar() {
      if (nav) {
        nav.classList.toggle('nav-solida', window.scrollY > 30);
      }
  
      const posicaoScroll = window.scrollY + 140;
      let idAtual = '';
      secoes.forEach(function (secao) {
        if (secao.offsetTop <= posicaoScroll) {
          idAtual = secao.getAttribute('id');
        }
      });
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + idAtual);
      });
    }
    window.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar();
  
    // ============================================================
    // 4. Fechar o menu mobile automaticamente ao clicar em um link
    // ============================================================
    const collapseEl = document.getElementById('navbarNav');
    document.querySelectorAll('#navbarNav a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992 && typeof bootstrap !== 'undefined' && collapseEl) {
          bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
        }
      });
    });
  
    // ============================================================
    // 5. Botão "Voltar ao Topo"
    // ============================================================
    const btnTopo = document.getElementById('btnTopo');
    if (btnTopo) {
      window.addEventListener('scroll', function () {
        btnTopo.classList.toggle('visivel', window.scrollY > 400);
      }, { passive: true });
  
      btnTopo.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // ============================================================
    // 6. Formulário de contato com validação e mensagens inline
    // ============================================================
    const formContato = document.getElementById('formContato');
    if (formContato) {
      formContato.addEventListener('submit', function (event) {
        event.preventDefault();
  
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        const msgBox = document.getElementById('formMsg');
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
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
      msgBox.textContent = `Mensagem enviada com sucesso. Obrigada pelo contato, ${nome}! Responderei em breve no e-mail informado.`;
  
        formContato.reset();
      });
    }
  
  });