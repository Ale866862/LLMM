// scripts/toc.js
// Destaca el enlace del TOC según scroll, añade smooth scroll y funcionalidad copiar código.

(function () {
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', this.getAttribute('href'));
      }
    });
  });

  // Highlight TOC item when section is in view
  const sections = Array.from(document.querySelectorAll('main article section[id]'));
  const tocLinks = Array.from(document.querySelectorAll('.toc a'));
  if ('IntersectionObserver' in window && sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector('.toc a[href="#' + id + '"]');
        if (link) {
          if (entry.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            // Add aria-current to nav main links if needed
          }
        }
      });
    }, { threshold: 0.45 });
    sections.forEach(s => io.observe(s));
  }

  // Copy code buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const text = this.getAttribute('data-copy') || '';
      if (!text) return;
      navigator.clipboard.writeText(text).then(() => {
        const original = this.textContent;
        this.textContent = 'Copiado ✓';
        this.disabled = true;
        setTimeout(() => {
          this.textContent = original;
          this.disabled = false;
        }, 1200);
      }).catch(() => {
        alert('No se pudo copiar automáticamente. Selecciona y copia manualmente.');
      });
    });
  });

})();
