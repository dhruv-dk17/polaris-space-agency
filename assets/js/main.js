/**
 * Polaris Space Agency — main.js (Ponytail Minimalist Edition)
 * 8 Modular, framework-aligned interactive space agency tools.
 */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Launch Countdown
  const cd = document.getElementById('countdown-timer');
  if (cd) {
    let t = localStorage.getItem('polaris-launch-target') || new Date(Date.now() + 30 * 864e5).toISOString();
    localStorage.setItem('polaris-launch-target', t);
    const pad = n => String(Math.floor(n)).padStart(2, '0');
    const tick = () => {
      const d = new Date(t) - new Date();
      if (d <= 0) return;
      ['days', 'hours', 'minutes', 'seconds'].forEach((id, i) => {
        const val = [d / 864e5, (d % 864e5) / 36e5, (d % 36e5) / 6e4, (d % 6e4) / 1e3][i];
        const el = document.getElementById(id);
        if (el) el.textContent = pad(val);
      });
    };
    tick();
    setInterval(tick, 1000);
  }

  // 2. Mission Filter
  const filterBtns = document.querySelectorAll('#filter-bar .mission-filter-btn');
  filterBtns.forEach(btn => {
    btn.onclick = () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.mission-item').forEach(item => {
        item.style.display = (f === 'all' || item.dataset.category === f) ? '' : 'none';
      });
    };
  });

  // 3. Planetary Gravity Calculator
  const calcBtn = document.getElementById('calc-gravity-btn');
  if (calcBtn) {
    const g = { moon: [0.166, 'The Moon'], mars: [0.377, 'Mars'], jupiter: [2.528, 'Jupiter'], sun: [27.9, 'The Sun'] };
    calcBtn.onclick = () => {
      const w = parseFloat(document.getElementById('earth-weight').value);
      const b = document.getElementById('destination-body').value;
      if (!w || w <= 0 || isNaN(w)) return;
      document.getElementById('calc-body-label').textContent = g[b][1];
      document.getElementById('calc-value').textContent = (w * g[b][0]).toFixed(1) + ' kg';
      document.getElementById('calc-result').classList.remove('d-none');
    };
  }

  // 4. Password Strength Meter
  const pass = document.getElementById('reg-password');
  if (pass) {
    pass.oninput = function () {
      const v = this.value, bar = document.getElementById('strength-bar'), lbl = document.getElementById('strength-label');
      const score = [v.length >= 8, v.length >= 12, /[A-Z]/.test(v), /[0-9]/.test(v), /[^A-Za-z0-9]/.test(v)].filter(Boolean).length;
      bar.className = 'strength-bar ' + (v ? (score <= 2 ? 'weak' : score <= 3 ? 'medium' : 'strong') : '');
      lbl.textContent = v ? (score <= 2 ? 'Weak password' : score <= 3 ? 'Medium strength' : 'Strong password') : '';
    };
  }

  // 5. Job Application Prefill
  document.querySelectorAll('.job-card').forEach(card => {
    card.onclick = () => {
      const sel = document.getElementById('apply-role');
      if (sel) sel.value = card.querySelector('.job-title')?.textContent.trim() || '';
    };
  });

  // 6. Cosmic Facts Explorer
  const facts = [
    "Neutron stars are so dense that a single teaspoon would weigh about 6 billion tons on Earth.",
    "One day on Venus is longer than its year: 243 Earth days to rotate, 225 to orbit the Sun.",
    "Footprints left on the Moon will remain for millions of years because there is no atmosphere or wind.",
    "The Milky Way galaxy is 100,000 light-years across and contains over 100 billion stars.",
    "Sunlight takes approximately 8 minutes and 20 seconds to reach Earth.",
    "Space is completely silent with no atmosphere for sound waves to travel."
  ];
  let factIdx = 0;
  const factBtn = document.getElementById('next-fact-btn');
  if (factBtn) {
    factBtn.onclick = () => {
      const el = document.getElementById('fact-text');
      el.style.opacity = '0';
      setTimeout(() => {
        el.textContent = facts[++factIdx % facts.length];
        el.style.opacity = '1';
      }, 150);
    };
  }

  // 7. Gallery Category Switcher & Lightbox
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.onclick = () => {
      const img = document.getElementById('lightbox-img'), title = document.getElementById('lightbox-title'), desc = document.getElementById('lightbox-desc');
      if (img) img.src = card.dataset.img || '';
      if (title) title.textContent = card.dataset.title || '';
      if (desc) desc.textContent = card.dataset.desc || '';
    };
  });

  const catScreen = document.getElementById('gallery-categories-screen');
  const imgScreen = document.getElementById('gallery-images-screen');
  if (catScreen && imgScreen) {
    catScreen.querySelectorAll('.category-card').forEach(c => {
      c.onclick = () => {
        const cat = c.dataset.category;
        document.getElementById('selected-category-title').textContent = c.querySelector('h3').textContent;
        imgScreen.querySelectorAll('.gallery-item').forEach(it => it.style.display = it.classList.contains(cat) ? 'block' : 'none');
        catScreen.classList.add('d-none');
        imgScreen.classList.remove('d-none');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    });

    const btnBack = document.getElementById('btn-back-categories');
    if (btnBack) {
      btnBack.onclick = () => {
        imgScreen.classList.add('d-none');
        catScreen.classList.remove('d-none');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  }

  // 8. Bootstrap Form Validation Handler
  function handleForm(id, successId, errorId, check) {
    const f = document.getElementById(id);
    if (!f) return;
    f.onsubmit = e => {
      e.preventDefault();
      f.classList.add('was-validated');
      const valid = f.checkValidity() && (!check || check());
      document.getElementById(successId)?.classList.toggle('d-none', !valid);
      if (errorId) document.getElementById(errorId)?.classList.toggle('d-none', valid);
      if (valid) {
        f.classList.remove('was-validated');
        f.reset();
        const bar = document.getElementById('strength-bar'), lbl = document.getElementById('strength-label');
        if (bar) { bar.className = 'strength-bar'; bar.style.width = '0'; }
        if (lbl) lbl.textContent = '';
      }
    };
  }

  handleForm('register-form', 'reg-success', null, () => {
    const p1 = document.getElementById('reg-password'), p2 = document.getElementById('reg-confirm'), t = document.getElementById('reg-terms');
    const match = p1 && p2 && p1.value === p2.value;
    p2?.classList.toggle('is-invalid', !match);
    return match && (!t || t.checked);
  });

  handleForm('login-form', 'login-success', 'login-error', () => {
    return !!(document.getElementById('login-email')?.value && document.getElementById('login-password')?.value);
  });

  handleForm('contact-form', 'contact-success');
  handleForm('career-apply-form', 'career-success');

});
