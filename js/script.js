// ===== MENU DATA =====
const menuItems = [
  {name:"Obsidian Espresso",desc:"Dark-roasted single origin, pulled long and slow",price:"₹280",cat:"espresso",tag:"Espresso"},
  {name:"Cortado Noire",desc:"A velvet balance of ristretto and steamed oat",price:"₹320",cat:"espresso",tag:"Espresso"},
  {name:"Aeropress Ritual",desc:"Bright, clean, and terroir-forward",price:"₹340",cat:"pour-over",tag:"Pour Over"},
  {name:"V60 Dawn",desc:"Ethiopian Yirgacheffe, citrus and jasmine finish",price:"₹360",cat:"pour-over",tag:"Pour Over"},
  {name:"Shadow Cold Brew",desc:"18-hour steep, black as midnight, smooth as silk",price:"₹290",cat:"cold-brew",tag:"Cold Brew"},
  {name:"Ceremonial Matcha",desc:"First-flush Uji, whisked with intention",price:"₹370",cat:"matcha",tag:"Matcha"},
  {name:"Ricotta Toast",desc:"Seasonal jam, toasted sesame, flaked salt",price:"₹420",cat:"food",tag:"Food"},
  {name:"Kouign-Amann",desc:"Caramelised layers, honey butter, warm from the oven",price:"₹380",cat:"food",tag:"Food"},
];

function renderMenu(cat) {
  const grid = document.getElementById('menuGrid');
  const items = cat === 'all' ? menuItems : menuItems.filter(i => i.cat === cat);
  grid.innerHTML = items.map((item,i) => `
    <div class="menu-card reveal" style="transition-delay:${i*80}ms" data-tilt>
      <div class="card-blob"></div>
      <div class="card-specular" id="spec-${i}"></div>
      <span class="card-tag">${item.tag}</span>
      <div class="card-name">${item.name}</div>
      <div class="card-desc">${item.desc}</div>
      <div class="card-price">${item.price}</div>
    </div>
  `).join('');
  // re-observe
  observeReveal();
  initTilt();
}

// ===== TABS =====
document.getElementById('tabRow').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderMenu(tab.dataset.cat);
});

// ===== PARTICLES =====
function createParticles() {
  const container = document.getElementById('particlesContainer');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.bottom = '-10px';
    p.style.width = p.style.height = (Math.random() * 3 + 1.5) + 'px';
    const dur = Math.random() * 12 + 10;
    p.style.animationDuration = dur + 's';
    p.style.animationDelay = (Math.random() * 12) + 's';
    container.appendChild(p);
  }
}

// ===== HERO PARALLAX =====
document.addEventListener('mousemove', e => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;
  const heading = document.getElementById('heroHeading');
  const blob = document.getElementById('heroBlob');
  if (heading) {
    heading.style.transform = `translate(${dx * -12}px, ${dy * -8}px)`;
  }
  if (blob) {
    blob.style.transform = `translate(calc(-50% + ${dx * 20}px), calc(-50% + ${dy * 20}px)) rotate(${dx * 8}deg)`;
  }
});

// ===== 3D CARD TILT =====
function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = -(e.clientY - cy) / (rect.height / 2) * 10;
      const ry = (e.clientX - cx) / (rect.width / 2) * 10;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
      const spec = card.querySelector('.card-specular');
      if (spec) {
        const px = ((e.clientX - rect.left) / rect.width) * 100;
        const py = ((e.clientY - rect.top) / rect.height) * 100;
        spec.style.background = `radial-gradient(circle at ${px}% ${py}%,rgba(201,169,110,0.14) 0%,transparent 55%)`;
        spec.style.opacity = '1';
      }
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      const spec = card.querySelector('.card-specular');
      if (spec) spec.style.opacity = '0';
    });
  });
}

// ===== INTERSECTION OBSERVER =====
function observeReveal() {
  const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseFloat(el.style.transitionDelay || 0) * 1000;
        setTimeout(() => el.classList.add('visible'), delay > 0 ? 0 : 0);
        el.classList.add('visible');
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

// ===== NAV SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  const backTop = document.getElementById('backTop');
  if (window.scrollY > 80) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  if (window.scrollY > 300) backTop.classList.add('visible');
  else backTop.classList.remove('visible');
});

// ===== BACK TO TOP =====
document.getElementById('backTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== HAMBURGER =====
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
});

// ===== FORM SUBMIT =====
function submitReservation(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.classList.add('loading');
  btn.textContent = 'Confirming…';
  setTimeout(() => {
    btn.classList.remove('loading');
    btn.textContent = '✓ Reservation Confirmed';
    btn.style.background = '#3a7c5a';
    setTimeout(() => {
      btn.textContent = 'Confirm Reservation';
      btn.style.background = '';
    }, 3000);
  }, 1800);
}

// ===== INIT =====
createParticles();
renderMenu('all');
observeReveal();
