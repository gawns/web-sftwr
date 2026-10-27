/**
 * Configuration for G. Software Web
 * All configurable values in one place for easy maintenance
 */

// ============================================================================
// FORM / LEAD CAPTURE CONFIGURATION
// ============================================================================
// sendEndpoint: Your server endpoint that receives POST JSON {contact, type, features, summary, text, sentAt}
//               and forwards to WhatsApp/email/CRM using server-side API key (never put API key in browser!)
// waNumber:     Fallback WhatsApp number in international format without + (e.g., "6281234567890")
//               Used when sendEndpoint is empty: opens WhatsApp with pre-filled message
//               If both empty, copies message to clipboard
window.GSW_CONFIG = {
  sendEndpoint: '',  // kosong: pesan dikirim lewat WhatsApp (wa.me)
  waNumber: '6283114241995'  // 083114241995
};

// ============================================================================
// TEXT STRINGS (Indonesian - can be extended for i18n)
// ============================================================================
window.GSW_TEXT = {
  // Navigation & UI
  skipLink: 'Lewati ke konten utama',
  navAriaLabel: 'Navigasi utama',
  mobileMenuOpen: 'Buka menu navigasi',
  mobileMenuClose: 'Tutup menu navigasi',

  // Hero
  heroTagline: 'Web dan software yang dibangun rapi, tanpa drama.',
  ctaPrimary: 'Minta penawaran',
  ctaSecondary: 'Lihat karya',

  // About / How it works
  aboutTitle: 'Tentang: cara website ini berjalan.',
  sysFlowSteps: [
    {
      label: 'Halaman',
      text: 'Seluruh situs dimuat sekali di browser. Berpindah bagian hanya menggulir, tanpa memuat ulang.'
    },
    {
      label: 'Canvas',
      text: 'Klip karya tidak memakai gambar atau video. Semuanya digambar di browser lewat canvas dan bergerak mengikuti gulir.'
    },
    {
      label: 'Permintaan',
      text: 'Jenis proyek, detail tambahan, dan ringkasan yang kamu tulis diubah jadi gambaran awal rancangan secara langsung.'
    },
    {
      label: 'Kirim',
      text: 'Belum tersambung ke email atau WhatsApp. Akan diaktifkan setelah desain final.'
    }
  ],

  // Showcase
  showcaseTitle: 'Sembilan karya dan gerakan yang sudah dibuat.',
  skipShowcase: 'Lewati ke penawaran',

  // Process
  processTitle: 'Alurnya pendek dan bisa kamu pantau.',
  processSteps: [
    { num: '01', title: 'Brief' },
    { num: '02', title: 'Penawaran' },
    { num: '03', title: 'Bangun' },
    { num: '04', title: 'Rilis' }
  ],

  // Quote Builder
  builderTitle: 'Rancang dulu, hitung kemudian.',
  builderTabs: { configure: 'Atur', preview: 'Pratinjau' },
  projectTypes: {
    portofolio: 'Portofolio',
    landing: 'Landing page',
    company: 'Company profile',
    toko: 'Toko online',
    blog: 'Blog / berita',
    booking: 'Booking',
    undangan: 'Undangan digital',
    dashboard: 'Dashboard / sistem'
  },
  features: {
    form: 'Form kontak',
    pay: 'Pembayaran',
    login: 'Login pengguna',
    search: 'Pencarian',
    lang: 'Dua bahasa',
    chat: 'Chat WhatsApp',
    gallery: 'Galeri',
    testi: 'Testimoni',
    faq: 'FAQ',
    price: 'Harga / paket',
    map: 'Peta lokasi',
    news: 'Newsletter',
    blog: 'Blog',
    dark: 'Mode gelap',
    anim: 'Animasi'
  },
  featureKeywords: {
    form: /kontak|form|hubungi|pesan/,
    pay: /bayar|pembayaran|checkout|keranjang|transaksi/,
    login: /login|akun|member|masuk|daftar/,
    search: /cari|pencarian|search/,
    lang: /bahasa|inggris|english/,
    chat: /whatsapp|chat|\bwa\b/,
    gallery: /galeri|gallery|foto/,
    testi: /testimoni|ulasan|review/,
    faq: /faq|tanya jawab/,
    price: /harga|paket|pricing/,
    map: /peta|lokasi|maps/,
    news: /newsletter|langganan/,
    blog: /blog|artikel|berita/,
    dark: /gelap|dark/,
    anim: /animasi|interaktif|smooth|efek|motion/
  },
  projectKeywords: [
    ['toko', /toko|jual|produk|katalog|belanja|e-?commerce/],
    ['booking', /booking|reservasi|jadwal|appointment|salon|klinik|sewa/],
    ['undangan', /undangan|nikah|pernikahan|wedding|ulang tahun/],
    ['dashboard', /dashboard|admin|sistem|laporan|monitor|aplikasi/],
    ['blog', /blog|berita|artikel|majalah/],
    ['company', /company|perusahaan|profil usaha|profile|kantor/],
    ['portofolio', /portofolio|portfolio|porto\b|\bcv\b|karya|fotografer|desainer/],
    ['landing', /landing|promosi|jasa|bisnis|kampanye/]
  ],
  basePages: { portofolio: 4, landing: 1, company: 5, toko: 6, blog: 5, booking: 4, undangan: 1, dashboard: 5 },
  bodyNames: {
    portofolio: ['grid proyek', 'tentang'],
    landing: ['kartu layanan', 'statistik'],
    company: ['tentang', 'kartu layanan', 'tim'],
    booking: ['kalender', 'kartu layanan'],
    undangan: ['hitung mundur', 'kartu acara']
  },
  summaryLabel: 'Ringkasan kebutuhan',
  summaryPlaceholder: 'Contoh: portofolio fotografer, 5 halaman, ada galeri dan form kontak, tampilan gelap.',
  ideaButton: 'Ide lain',
  contactLabel: 'Kontak untuk balasan',
  contactPlaceholder: 'Email atau WhatsApp',
  sendButton: 'Kirim',

  // Send Flow
  sendStatusSending: 'Menyiapkan pesan WhatsApp',
  sendStatusReceived: 'Menerima Ide',
  sendStatusDelivering: 'Membuka WhatsApp',
  sendResult: {
    ok: 'Terkirim, Terima Kasih',
    wa: 'Pesan sudah siap di WhatsApp. Tekan kirim di sana.',
    copied: 'Belum tersambung. Ringkasan disalin.',
    nocfg: 'Belum tersambung ke penerima.',
    fail: 'Belum terkirim. Coba lagi sebentar.'
  },
  sendErrorConnection: 'Belum terkirim. Periksa koneksi lalu coba lagi.',
  sendErrorNoConfig: 'Pengiriman belum tersambung ke penerima.',
  statusRequiredContact: 'Isi email atau WhatsApp dulu.',
  validationError: 'Masukkan email atau nomor WhatsApp yang valid (contoh: 081234567890 atau email@domain.com).',

  // Footer
  copyright: '© 2026 G. Software Web'
};

// ============================================================================
// CANVAS SCENE CONFIGURATION
// ============================================================================
window.GSW_SCENES = {
  // Scene IDs match data-scene attributes in HTML
  // Each scene can have custom parameters here
  pool: { name: 'Billiard Hub' },
  food: { name: 'Leckers Turi' },
  mono: { name: 'Miftyahlaun' },
  chair: { name: 'Jepara Mebelku' },
  wood: { name: 'Serat Kayu' },
  island: { name: 'Pulau Senja' },
  mining: { name: 'Mining Depths' },
  wave: { name: 'Portofolks' },
  car: { name: 'Portofolio 3D Mobil' },
  builder: { name: 'Preview Builder' }
};

// ============================================================================
// PROJECT PORTFOLIO DATA
// ============================================================================
window.GSW_PROJECTS = [
  {
    id: 'billiard-hub',
    title: 'Billiard Hub',
    scene: 'pool',
    description: 'Real-time multiplayer billiards with physics engine',
    tech: ['Canvas', 'WebSocket', 'Node.js'],
    demoUrl: 'https://billiard.example.com',
    thumbnail: null // Generated from canvas scene
  },
  {
    id: 'leckers-turi',
    title: 'Leckers Turi',
    scene: 'food',
    description: 'E-commerce for traditional Indonesian snacks with custom animations',
    tech: ['Next.js', 'Canvas', 'Tailwind'],
    demoUrl: 'https://leckers.example.com',
    thumbnail: null
  },
  {
    id: 'miftyahlaun',
    title: 'Miftyahlaun',
    scene: 'mono',
    description: 'Laundry service web app with real-time tracking',
    tech: ['React', 'Firebase', 'PWA'],
    demoUrl: 'https://miftyahlaun.example.com',
    thumbnail: null
  },
  {
    id: 'jepara-mebelku',
    title: 'Jepara Mebelku',
    scene: 'chair',
    description: 'Jepara furniture catalog with interactive 3D viewer',
    tech: ['Three.js', 'Next.js', 'GSAP'],
    demoUrl: 'https://jepara.example.com',
    thumbnail: null
  },
  {
    id: 'serat-kayu',
    title: 'Serat Kayu',
    scene: 'wood',
    description: 'Wood grain pattern generator for designers',
    tech: ['Canvas', 'WebGL', 'Vite'],
    demoUrl: 'https://seratkayu.example.com',
    thumbnail: null
  },
  {
    id: 'pulau-senja',
    title: 'Pulau Senja',
    scene: 'island',
    description: 'Low-poly island generator with procedural terrain',
    tech: ['Canvas', 'Perlin Noise', 'Vanilla JS'],
    demoUrl: 'https://pulau.example.com',
    thumbnail: null
  },
  {
    id: 'mining-depths',
    title: 'Mining Depths',
    scene: 'mining',
    description: 'Parallax mining visualization with ore simulation',
    tech: ['Canvas', 'Parallax', 'Web Workers'],
    demoUrl: 'https://mining.example.com',
    thumbnail: null
  },
  {
    id: 'portofolks',
    title: 'Portofolks',
    scene: 'wave',
    description: 'Interactive point-cloud wave visualization',
    tech: ['Canvas', 'Math.sin', 'RequestAnimationFrame'],
    demoUrl: 'https://portofolks.example.com',
    thumbnail: null
  },
  {
    id: 'portfolio-3d-mobil',
    title: 'Portofolio 3D Mobil',
    scene: 'car',
    description: 'Wireframe 3D car with perspective projection',
    tech: ['Canvas', '3D Math', 'Vanilla JS'],
    demoUrl: 'https://car3d.example.com',
    thumbnail: null
  }
];

// ============================================================================
// TESTIMONIALS & DEVELOPER PROFILE
// ============================================================================
window.GSW_TESTIMONIALS = [
  { quote: "Prosesnya cepat, komunikasi jelas, hasilnya melebihi ekspektasi.", author: "Bpk. Andi", role: "Founder, Leckers Turi", avatar: null },
  { quote: "Canvas animasinya smooth banget, user engagement naik signifikan.", author: "Ibu Sari", role: "Marketing Lead, Jepara Mebelku", avatar: null },
  { quote: "Dari brief ke deploy cuma 3 minggu. Recommended untuk yang butuh cepat & rapi.", author: "Bpk. Rudi", role: "Owner, Miftyahlaun", avatar: null }
];

window.GSW_PROFILE = {
  github: 'https://github.com/ghaiyyazatha',
  linkedin: 'https://linkedin.com/in/ghaiyyazatha',
  tiktok: 'https://www.tiktok.com/@softwarehouse_bsdg'
};

// ============================================================================
// ANIMATION & PERFORMANCE SETTINGS
// ============================================================================
window.GSW_SETTINGS = {
  // Reduced motion respect
  respectReducedMotion: true,

  // Canvas rendering
  maxDevicePixelRatio: 2,
  canvasParticleCount: { mobile: 28, desktop: 45 },

  // Scroll animations
  revealRootMargin: '120px',
  revealThreshold: 0.12,
  railThreshold: 0.12,

  // Horizontal scroll (pinned showcase)
  pinProgressBarHeight: 1,

  // Quote builder preview
  previewTransitionDuration: 350,
  previewThumbAlpha: 0.6,
  previewMainAlpha: 1.0,
  previewHoverAlpha: 1.0,

  // Send flow animation
  sendOverlayAnimationDuration: 900,
  sendOverlayExitDuration: 1000,
  sendStepDurations: [1000, 3200, 1000],

  // Auto-rotate about section (ms)
  aboutAutoRotateInterval: 3600,

  // Background particles (CanvasParticles)
  particles: {
    color: '#2F7BFF',
    connectDistance: 150,
    relSpeed: 0.45,
    relSize: 1.1,
    maxWork: 20,
    mobile: 20,
    desktop: 30
  }
};

// ============================================================================
// VALIDATION RULES
// ============================================================================
window.GSW_VALIDATION = {
  // Contact field: accept email or Indonesian phone number
  contactPatterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^(\+62|62|0)8[1-9][0-9]{7,10}$/  // Indonesian mobile
  },
  contactErrorMessage: 'Masukkan email atau nomor WhatsApp yang valid (contoh: 081234567890 atau email@domain.com)'
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================
window.GSW_UTILS = {
  /**
   * Validate contact input (email or Indonesian phone)
   * @param {string} value
   * @returns {boolean}
   */
  validateContact: function (value) {
    var v = (value || '').trim();
    if (!v) return false;
    return GSW_VALIDATION.contactPatterns.email.test(v) ||
           GSW_VALIDATION.contactPatterns.phone.test(v);
  },

  /**
   * Format phone number to international format (62xxxx)
   * @param {string} phone
   * @returns {string}
   */
  formatPhone: function (phone) {
    return String(phone || '').replace(/\D/g, '').replace(/^0/, '62').replace(/^\+62/, '62');
  },

  /**
   * Get project type from summary text
   * @param {string} text
   * @returns {string|null}
   */
  detectProjectType: function (text) {
    var s = (text || '').toLowerCase();
    for (var i = 0; i < GSW_TEXT.projectKeywords.length; i++) {
      if (GSW_TEXT.projectKeywords[i][1].test(s)) return GSW_TEXT.projectKeywords[i][0];
    }
    return null;
  },

  /**
   * Detect features from summary text
   * @param {string} text
   * @returns {Object}
   */
  detectFeatures: function (text) {
    var s = (text || '').toLowerCase();
    var f = {};
    for (var k in GSW_TEXT.featureKeywords) {
      f[k] = GSW_TEXT.featureKeywords[k].test(s);
    }
    return f;
  }
};

/* ---------- bagian 2 ---------- */
/**
 * Mobile Navigation - full-screen overlay (tombol tutup sendiri, fokus terkunci, Escape, backdrop)
 */
(function () {
  'use strict';
  var overlay = document.getElementById('mobile-overlay');
  var hamburger = document.querySelector('.nav-hamburger');
  if (!overlay || !hamburger) return;
  var closeBtn = overlay.querySelector('.mo-close');
  var T = window.GSW_TEXT || {};
  var body = document.body, lastFocused = null, isOpen = false, timer = null;

  function openOverlay() {
    lastFocused = document.activeElement;
    isOpen = true;
    clearTimeout(timer);
    overlay.hidden = false;
    overlay.offsetHeight; // reflow agar transisi jalan
    overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', T.mobileMenuClose || 'Tutup menu navigasi');
    body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    setTimeout(function () { if (closeBtn) closeBtn.focus(); }, 120);
  }

  function closeOverlay(restoreFocus) {
    if (!isOpen) return;
    isOpen = false;
    overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', T.mobileMenuOpen || 'Buka menu navigasi');
    body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
    timer = setTimeout(function () { if (!isOpen) overlay.hidden = true; }, 420);
    if (restoreFocus !== false && lastFocused && lastFocused.focus) lastFocused.focus();
  }

  function onKey(e) {
    if (e.key === 'Escape') { closeOverlay(); return; }
    if (e.key !== 'Tab') return;
    var f = overlay.querySelectorAll('a[href], button'), first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function goToOffer() {
    var s = document.getElementById('penawaran'), c = document.getElementById('kontak');
    if (s) s.scrollIntoView({ behavior: 'smooth' });
    setTimeout(function () { if (c) c.focus({ preventScroll: true }); }, 700);
  }

  hamburger.addEventListener('click', function () { isOpen ? closeOverlay() : openOverlay(); });
  if (closeBtn) closeBtn.addEventListener('click', function () { closeOverlay(); });
  overlay.querySelector('.mobile-overlay-backdrop').addEventListener('click', function () { closeOverlay(); });

  overlay.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || !overlay.contains(a)) return;
    if (a.hasAttribute('data-send-trigger')) { e.preventDefault(); closeOverlay(false); goToOffer(); return; }
    if (a.getAttribute('href').charAt(0) === '#') closeOverlay(false); // scroll-lock dilepas sebelum lompat ke anchor
  });

  window.addEventListener('resize', function () { if (window.innerWidth > 640 && isOpen) closeOverlay(false); });
})();

/* ---------- bagian 3 ---------- */
/* Scenes, pinned horizontal scroll, process rail, request builder. No dependencies. */
(function () {
  if (window.__ga) return;
  window.__ga = 1;
  var root = document.documentElement;
  root.classList.add('js-on');
  var reduce = false;
  try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function ease(t) { t = clamp(t, 0, 1); return 1 - Math.pow(1 - t, 3); }
  function css(n) { return getComputedStyle(root).getPropertyValue(n).trim(); }
  function hx(h) {
    h = (h || '#000').replace('#', '');
    if (h.length === 3) h = h.replace(/./g, '$&$&');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  var P = { bg: [250, 250, 249], fg: [14, 14, 14] };
  function pal() { P = { bg: hx(css('--bg')), fg: hx(css('--fg')) }; }
  function mix(a, b, t) {
    t = clamp(t, 0, 1);
    return 'rgb(' + Math.round(a[0] + (b[0] - a[0]) * t) + ',' + Math.round(a[1] + (b[1] - a[1]) * t) + ',' + Math.round(a[2] + (b[2] - a[2]) * t) + ')';
  }
  function rgba(c, a) { return 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + a + ')'; }
  function hash(i, j) { var s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453; return s - Math.floor(s); }
  function rr(c, x, y, w, h, r) {
    r = Math.max(0, Math.min(r, w / 2, h / 2));
    c.beginPath(); c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
  }
  function fit(cv) {
    var d = Math.min(window.devicePixelRatio || 1, 2), w = cv.clientWidth, h = cv.clientHeight;
    if (!w || !h) return null;
    var W = Math.round(w * d), H = Math.round(h * d);
    if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; }
    var x = cv.getContext('2d');
    x.setTransform(d, 0, 0, d, 0, 0);
    x.clearRect(0, 0, w, h);
    return { x: x, w: w, h: h };
  }

  /* ---------- Scene 1: serat kayu ---------- */
  function wood(c, w, h, t) {
    var cx = w * (.5 + .14 * Math.sin(t * .35)), cy = h * (.5 + .12 * Math.cos(t * .27));
    var sg = Math.min(w, h) * .2, n = 38, i, x, by, dy0, g0, dx, dy, g, y;
    c.lineWidth = 1.2;
    for (i = 0; i < n; i++) {
      by = (i + .5) / n * h; dy0 = by - cy; g0 = Math.exp(-dy0 * dy0 / (2 * sg * sg));
      c.strokeStyle = mix(P.bg, P.fg, .28 + .6 * g0); c.beginPath();
      for (x = 0; x <= w + 4; x += 4) {
        dx = x - cx; dy = by - cy; g = Math.exp(-(dx * dx + dy * dy) / (2 * sg * sg));
        y = by + Math.sin(x * .012 + i * .45 + t * .5) * 2.5 + dy * g * 1.15;
        if (x) c.lineTo(x, y); else c.moveTo(x, y);
      }
      c.stroke();
    }
  }

  /* ---------- Scene 2: Pulau Senja (low-poly) ---------- */
  function tri(c, a, b, d, s) {
    c.fillStyle = mix(P.bg, P.fg, s); c.strokeStyle = c.fillStyle; c.lineWidth = .6;
    c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineTo(d[0], d[1]); c.closePath(); c.fill(); c.stroke();
  }
  function island(c, w, h, t) {
    var hz = h * .66, r, i, k, x, y, sky = c.createLinearGradient(0, 0, 0, hz);
    sky.addColorStop(0, mix(P.bg, P.fg, 0)); sky.addColorStop(1, mix(P.bg, P.fg, .14));
    c.fillStyle = sky; c.fillRect(0, 0, w, hz);
    c.fillStyle = mix(P.bg, P.fg, .9); c.beginPath(); c.arc(w * .76, hz - h * .2 + Math.sin(t * .4) * 4, h * .07, 0, 7); c.fill();
    c.fillStyle = mix(P.bg, P.fg, .07); c.fillRect(0, hz, w, h - hz);
    var cols = 12, rows = 4, W = w * .54, H = h * .36, x0 = w * .42 - W / 2, base = hz + h * .05 + Math.sin(t * .8) * 1.5, pts = [];
    for (r = 0; r <= rows; r++) {
      pts[r] = [];
      for (i = 0; i <= cols; i++) {
        var u = i / cols, kk = Math.abs(u - .5) * 2, rh = H * Math.max(0, 1 - Math.pow(kk, 1.5)) * (.78 + .22 * Math.sin(i * 1.9 + .6)), f = r / rows, inner = r > 0 && r < rows;
        pts[r][i] = [x0 + u * W + (inner ? (hash(i, r) - .5) * 10 : 0), base - rh * (1 - f) + (inner ? (hash(r, i) - .5) * 8 : 0)];
      }
    }
    for (r = 0; r < rows; r++) for (i = 0; i < cols; i++) {
      var a = pts[r][i], b = pts[r][i + 1], d = pts[r + 1][i], e = pts[r + 1][i + 1], lit = i < cols / 2 ? .12 : 0;
      tri(c, a, b, d, .2 + .5 * hash(i * 2, r) + lit);
      tri(c, b, e, d, .16 + .5 * hash(i * 2 + 1, r) + lit);
    }
    c.lineWidth = 1;
    for (k = 0; k < 6; k++) {
      var yy = hz + (h - hz) * (.26 + k * .14), amp = 2 + k;
      c.strokeStyle = mix(P.bg, P.fg, .2 + .09 * k); c.beginPath();
      for (x = 0; x <= w + 6; x += 6) {
        y = yy + Math.sin(x * .02 + t * (1 + k * .28) + k) * amp;
        if (x) c.lineTo(x, y); else c.moveTo(x, y);
      }
      c.stroke();
    }
  }

  /* ---------- Scene 3: Mining Depths (parallax) ---------- */
  function mining(c, w, h, t) {
    var n = 6, top0 = h * .08, th = (h - top0) / n, k, j, x;
    c.font = '11px "IBM Plex Mono",ui-monospace,monospace';
    for (k = 0; k < n; k++) {
      var sp = 46 - k * 7, off = t * sp, yt = top0 + k * th;
      c.fillStyle = mix(P.bg, P.fg, .05 + .075 * k); c.beginPath(); c.moveTo(0, h);
      for (x = 0; x <= w + 6; x += 6) c.lineTo(x, yt + Math.sin((x + off) * .016 + k * 1.7) * 7 + Math.sin((x + off) * .047 + k) * 3);
      c.lineTo(w + 6, h); c.closePath(); c.fill();
      for (j = 0; j < 7; j++) {
        var span = w + 60, x0 = hash(j, k) * span, px = ((x0 - off) % span + span) % span - 30,
            py = yt + th * (.3 + .5 * hash(k, j)), r = 1.5 + 2.2 * hash(j + 3, k), gl = .6 + .4 * Math.sin(t * 2 + j * 2 + k);
        c.fillStyle = mix(P.bg, P.fg, .55 + .4 * gl); c.strokeStyle = mix(P.bg, P.fg, 0);
        c.lineWidth = 1.2; c.beginPath(); c.arc(px, py, r, 0, 7); c.fill(); c.stroke();
      }
      c.fillStyle = mix(P.bg, P.fg, .7); c.fillText('-' + (k * 120) + ' m', 14, yt + th * .5 + 4);
    }
  }

  /* ---------- Scene 4: Portofolks (point-cloud wave) ---------- */
  function wave(c, w, h, t) {
    var cols = 44, rows = 24, r, i;
    for (r = 0; r < rows; r++) {
      var d = r / (rows - 1);
      for (i = 0; i < cols; i++) {
        var gx = i / (cols - 1) - .5,
            z = Math.sin(i * .42 + t * 1.3) * Math.cos(r * .42 - t * .9) + .5 * Math.sin(i * .17 - r * .21 + t * .7),
            sx = w * .5 + gx * w * (.55 + .4 * d), sy = h * .2 + d * h * .62 - z * (6 + 16 * d), rad = .8 + 1.6 * d;
        c.fillStyle = mix(P.bg, P.fg, .2 + .7 * d + .1 * z);
        c.beginPath(); c.arc(sx, sy, rad, 0, 7); c.fill();
      }
    }
  }

  /* ---------- Scene 5: wireframe 3D mobil ---------- */
  var CAR;
  function mkcar() {
    var L = [];
    function ln(a, b, al) { L.push([a, b, al || 1]); }
    function box(x0, x1, y0, y1, z0, z1) {
      var p = [], i, j, m;
      for (i = 0; i < 8; i++) p.push([i & 4 ? x1 : x0, i & 2 ? y1 : y0, i & 1 ? z1 : z0]);
      for (i = 0; i < 8; i++) for (j = 0; j < 3; j++) { m = 1 << j; if (!(i & m)) ln(p[i], p[i | m]); }
    }
    box(-2, 2, .25, .8, -.9, .9);
    var bt = [[-1.1, .8, -.8], [-1.1, .8, .8], [.9, .8, .8], [.9, .8, -.8]], tp = [[-.7, 1.3, -.62], [-.7, 1.3, .62], [.35, 1.3, .62], [.35, 1.3, -.62]], k, g;
    for (k = 0; k < 4; k++) { ln(bt[k], bt[(k + 1) % 4]); ln(tp[k], tp[(k + 1) % 4]); ln(bt[k], tp[k]); }
    [-1.3, 1.3].forEach(function (cx) {
      [-.95, .95].forEach(function (cz) {
        for (var s = 0; s < 20; s++) {
          var a1 = s / 20 * 6.2832, a2 = (s + 1) / 20 * 6.2832;
          ln([cx + Math.cos(a1) * .48, .48 + Math.sin(a1) * .48, cz], [cx + Math.cos(a2) * .48, .48 + Math.sin(a2) * .48, cz]);
          ln([cx + Math.cos(a1) * .2, .48 + Math.sin(a1) * .2, cz], [cx + Math.cos(a2) * .2, .48 + Math.sin(a2) * .2, cz], .7);
        }
      });
    });
    for (g = -4; g <= 4; g++) { ln([g * .8, 0, -3.2], [g * .8, 0, 3.2], .25); ln([-3.2, 0, g * .8], [3.2, 0, g * .8], .25); }
    return L;
  }
  function car(c, w, h, t) {
    if (!CAR) CAR = mkcar();
    var a = t * .5, ca = Math.cos(a), sa = Math.sin(a), tb = .32, ct = Math.cos(tb), st = Math.sin(tb), f = Math.min(w * 1.4, h * 2.1);
    function pr(p) {
      var x = p[0], y = p[1] - .65, z = p[2], x1 = x * ca + z * sa, z1 = -x * sa + z * ca, y2 = y * ct - z1 * st, z2 = y * st + z1 * ct + 7;
      return [w / 2 + x1 * f / z2, h * .56 - y2 * f / z2, z2];
    }
    c.lineWidth = 1.1; c.lineCap = 'round';
    CAR.forEach(function (l) {
      var p = pr(l[0]), q = pr(l[1]), dz = ((p[2] + q[2]) / 2 - 5.2) / 3.6;
      c.strokeStyle = rgba(P.fg, clamp(.9 - dz * .55, .15, .95) * l[2]);
      c.beginPath(); c.moveTo(p[0], p[1]); c.lineTo(q[0], q[1]); c.stroke();
    });
  }

  /* ---------- Karya baru: Billiard Hub ---------- */
  function pool(c, w, h, t) {
    var tw = Math.min(w * .88, h * 1.7), th = tw * .54, x = (w - tw) / 2, y = (h - th) / 2 - h * .02, b = tw * .045, cy = y + th / 2;
    var r = th * .05, ax = x + tw * .66, sx = x + tw * .2, p = (t % 5.5) / 5.5, i, j, n = 0, k;
    c.fillStyle = mix(P.bg, P.fg, .07); rr(c, x, y, tw, th, 18); c.fill();
    c.strokeStyle = mix(P.bg, P.fg, .5); c.lineWidth = 2; rr(c, x, y, tw, th, 18); c.stroke();
    c.strokeStyle = mix(P.bg, P.fg, .2); c.lineWidth = 1; rr(c, x + b, y + b, tw - 2 * b, th - 2 * b, 10); c.stroke();
    [[x + b * .4, y + b * .4], [x + tw / 2, y + b * .2], [x + tw - b * .4, y + b * .4], [x + b * .4, y + th - b * .4], [x + tw / 2, y + th - b * .2], [x + tw - b * .4, y + th - b * .4]].forEach(function (q) {
      c.fillStyle = mix(P.bg, P.fg, 0); c.strokeStyle = mix(P.bg, P.fg, .6); c.beginPath(); c.arc(q[0], q[1], b * .8, 0, 7); c.fill(); c.stroke();
    });
    var reset = 1 - ease((p - .9) / .1), hit = ease((p - .52) / .38) * reset;
    for (i = 0; i < 5; i++) for (j = 0; j <= i; j++) {
      var bx = ax + i * r * 1.76, by = cy + (j - i / 2) * r * 2.04, ang = hash(i + 1, j + 2) * 6.28, d = (8 + 26 * hash(j + 4, i + 1)) * hit * (.4 + i * .2);
      c.fillStyle = mix(P.bg, P.fg, .2 + .5 * hash(n, 7)); c.strokeStyle = mix(P.bg, P.fg, .8); c.lineWidth = 1;
      c.beginPath(); c.arc(bx + Math.cos(ang) * d + i * hit * 6, by + Math.sin(ang) * d, r, 0, 7); c.fill(); c.stroke(); n++;
    }
    var cx0 = sx, touch = ax - r * 2.2;
    if (p >= .45 && p < .52) cx0 = sx + (touch - sx) * ease((p - .45) / .07);
    else if (p >= .52) cx0 = touch - ease((p - .52) / .4) * tw * .14 * reset + (1 - reset) * 0 ;
    if (p >= .9) cx0 = (touch - tw * .14 * 0) + (sx - touch) * ease((p - .9) / .1) + 0;
    var pull = p < .35 ? ease(p / .35) * tw * .1 : p < .45 ? tw * .1 * (1 - ease((p - .35) / .1)) : 0, sa = p < .5 ? 1 : p < .62 ? 1 - (p - .5) / .12 : 0;
    if (sa > 0) {
      c.strokeStyle = rgba(P.fg, .8 * sa); c.lineWidth = 3; c.lineCap = 'round';
      c.beginPath(); c.moveTo(sx - r * 1.6 - pull, cy); c.lineTo(sx - r * 1.6 - pull - tw * .42, cy); c.stroke();
    }
    c.fillStyle = rgba(P.fg, .95); c.beginPath(); c.arc(cx0, cy, r, 0, 7); c.fill();
  }

  /* ---------- Karya baru: Leckers Turi ---------- */
  function food(c, w, h, t) {
    var cx = w / 2, m = Math.min(w, h), bw = m * .36, by = h * .6, i, k, x;
    c.lineCap = 'round'; c.lineWidth = 1.2;
    for (k = 0; k < 4; k++) {
      c.strokeStyle = rgba(P.fg, .5 - k * .08); c.beginPath();
      for (i = 0; i <= 40; i++) {
        var u = i / 40, ph = u * 5 - t * 1.4 + k * 1.7, sxp = cx + (k - 1.5) * bw * .38 + Math.sin(ph) * m * (.02 + .04 * u), syp = by - m * .12 - u * m * .34;
        if (i) c.lineTo(sxp, syp); else c.moveTo(sxp, syp);
      }
      c.stroke();
    }
    c.strokeStyle = rgba(P.fg, .75); c.lineWidth = 2.5;
    c.beginPath(); c.moveTo(cx + bw * .55, by - m * .02); c.lineTo(cx + bw * 1.15, by - m * .4); c.moveTo(cx + bw * .75, by - m * .02); c.lineTo(cx + bw * 1.3, by - m * .36); c.stroke();
    c.fillStyle = mix(P.bg, P.fg, .08); c.strokeStyle = rgba(P.fg, .85); c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(cx - bw, by); c.bezierCurveTo(cx - bw, by + bw * .95, cx + bw, by + bw * .95, cx + bw, by); c.closePath(); c.fill(); c.stroke();
    c.beginPath(); c.ellipse(cx, by, bw, bw * .22, 0, 0, 7); c.fillStyle = mix(P.bg, P.fg, .14); c.fill(); c.stroke();
    c.lineWidth = 1.2;
    for (k = 0; k < 4; k++) {
      c.strokeStyle = rgba(P.fg, .45 + .08 * k); c.beginPath();
      for (x = -bw * .8; x <= bw * .8; x += 4) { var yy = by + Math.sin(x * .05 + t * 1.2 + k) * 2.2 + (k - 1.5) * bw * .09; if (x === -bw * .8) c.moveTo(cx + x, yy); else c.lineTo(cx + x, yy); }
      c.stroke();
    }
    c.strokeStyle = rgba(P.fg, .5); c.lineWidth = 1.5; c.beginPath(); c.moveTo(cx - bw * .45, by + bw * 1.0); c.lineTo(cx + bw * .45, by + bw * 1.0); c.stroke();
    for (k = 0; k < 5; k++) { var tw2 = (Math.sin(t * 1.6 + k * 1.9) + 1) / 2; c.fillStyle = rgba(P.fg, .15 + .6 * tw2); c.beginPath(); c.arc(w * (.14 + .72 * hash(k, 3)), h * (.14 + .3 * hash(k, 9)), 1.2 + 1.6 * tw2, 0, 7); c.fill(); }
  }

  /* ---------- Karya baru: Miftyahlaun (monogram) ---------- */
  function mono(c, w, h, t) {
    var cx = w / 2, cy = h / 2, R = Math.min(w, h) * .42, k, a, sz = R * 1.1;
    c.lineWidth = 1;
    for (k = 0; k < 4; k++) {
      var rad = R * (1 - k * .2), dir = k % 2 ? -1 : 1;
      c.strokeStyle = rgba(P.fg, .55 - k * .1); c.setLineDash(k % 2 ? [3, 7] : [26, 10, 3, 10]); c.lineDashOffset = -t * 14 * dir;
      c.beginPath(); c.arc(cx, cy, rad, 0, 7); c.stroke(); c.setLineDash([]);
      a = t * (.5 + k * .22) * dir + k * 1.4;
      c.fillStyle = rgba(P.fg, .9); c.beginPath(); c.arc(cx + Math.cos(a) * rad, cy + Math.sin(a) * rad, 3 - k * .3, 0, 7); c.fill();
    }
    c.fillStyle = rgba(P.fg, .95); c.textAlign = 'center'; c.textBaseline = 'middle';
    c.font = '800 ' + sz + 'px Fraunces, Georgia, serif'; c.fillText('M', cx, cy + sz * .04);
    c.textAlign = 'start'; c.textBaseline = 'alphabetic';
  }

  /* ---------- Karya baru: Jepara Mebelku (kursi ukir) ---------- */
  function chair(c, w, h, t) {
    var cx = w / 2, m = Math.min(w * .9, h * 1.05), fy = h * .88, top = h * .1, seat = h * .6, bw = m * .46, k, i;
    c.lineCap = 'round'; c.lineJoin = 'round';
    c.fillStyle = rgba(P.fg, .06); c.beginPath(); c.ellipse(cx, fy + 4, bw * 1.1, 7, 0, 0, 7); c.fill();
    c.strokeStyle = rgba(P.fg, .85); c.lineWidth = 1.6;
    rr(c, cx - bw * .8, top, bw * 1.6, seat - top, bw * .35); c.stroke();
    c.strokeStyle = rgba(P.fg, .35); c.lineWidth = 1; rr(c, cx - bw * .8 + 10, top + 10, bw * 1.6 - 20, seat - top - 20, bw * .28); c.stroke();
    var rx = cx, ry = top + (seat - top) * .46, R = bw * .5;
    for (k = 0; k < 2; k++) {
      c.strokeStyle = rgba(P.fg, .6); c.beginPath();
      for (i = 0; i <= 30; i++) { var u = i / 30, vx = cx + (k ? 1 : -1) * (R * 1.05 + u * (bw * .8 - R * 1.4)), vy = ry + Math.sin(u * 7 + t * .8 + k * 2) * 7; if (i) c.lineTo(vx, vy); else c.moveTo(vx, vy); }
      c.stroke();
    }
    var rot = t * .3;
    for (k = 0; k < 12; k++) {
      var an = rot + k / 12 * 6.2832, ca = Math.cos(an), sa = Math.sin(an), pn = -sa, qn = ca;
      c.strokeStyle = rgba(P.fg, .55 + .3 * (k % 2)); c.beginPath(); c.moveTo(rx + ca * R * .22, ry + sa * R * .22);
      c.bezierCurveTo(rx + ca * R * .6 + pn * R * .22, ry + sa * R * .6 + qn * R * .22, rx + ca * R * .85 + pn * R * .1, ry + sa * R * .85 + qn * R * .1, rx + ca * R, ry + sa * R);
      c.bezierCurveTo(rx + ca * R * .85 - pn * R * .1, ry + sa * R * .85 - qn * R * .1, rx + ca * R * .6 - pn * R * .22, ry + sa * R * .6 - qn * R * .22, rx + ca * R * .22, ry + sa * R * .22);
      c.stroke();
    }
    c.strokeStyle = rgba(P.fg, .8); c.beginPath(); c.arc(rx, ry, R * .12, 0, 7); c.stroke(); c.beginPath(); c.arc(rx, ry, R * 1.08, 0, 7); c.stroke();
    c.strokeStyle = rgba(P.fg, .85); c.lineWidth = 1.6;
    rr(c, cx - bw * .95, seat, bw * 1.9, h * .06, 6); c.fillStyle = rgba(P.fg, .08); c.fill(); c.stroke();
    [-1, 1].forEach(function (s) {
      var lx = cx + s * bw * .8, y0 = seat + h * .06, ll = fy - y0;
      c.beginPath(); c.moveTo(lx - 7, y0); c.bezierCurveTo(lx - 7, y0 + ll * .3, lx - 3, y0 + ll * .35, lx - 3, y0 + ll * .5); c.lineTo(lx - 5, fy);
      c.moveTo(lx + 7, y0); c.bezierCurveTo(lx + 7, y0 + ll * .3, lx + 3, y0 + ll * .35, lx + 3, y0 + ll * .5); c.lineTo(lx + 5, fy); c.stroke();
      c.beginPath(); c.arc(lx, y0 + ll * .42, 5, 0, 7); c.stroke();
    });
    c.strokeStyle = rgba(P.fg, .4); c.lineWidth = 1; c.beginPath(); c.moveTo(cx - bw * .8, seat + h * .24); c.lineTo(cx + bw * .8, seat + h * .24); c.stroke();
  }

  /* ---------- Leckers Turi: kue leker (tuang, isi, lipat) ---------- */
  function leker(c, w, h, t) {
    var m = Math.min(w, h), R = m * .36, cx = w * .46, cy = h * .54, p = (t % 7) / 7, i, k, a, cr, fp, tp, fo, st;
    function half(s) { c.beginPath(); c.arc(0, 0, cr, s ? -1.5708 : 1.5708, s ? 1.5708 : 4.7124); c.closePath(); }
    c.lineCap = 'round'; c.lineJoin = 'round';
    c.strokeStyle = rgba(P.fg, .7); c.lineWidth = 7; c.beginPath(); c.moveTo(cx + R, cy); c.lineTo(cx + R * 1.45, cy); c.stroke();
    c.fillStyle = rgba(P.fg, .05); c.lineWidth = 2; c.beginPath(); c.arc(cx, cy, R, 0, 7); c.fill(); c.stroke();
    c.strokeStyle = rgba(P.fg, .22); c.lineWidth = 1; c.beginPath(); c.arc(cx, cy, R * .88, 0, 7); c.stroke();
    cr = R * .8 * ease(p / .26); fp = ease((p - .52) / .2); tp = ease((p - .28) / .22); fo = 1 - ease((p - .93) / .07); st = ease((p - .74) / .1);
    c.save(); c.globalAlpha = fo; c.translate(cx, cy);
    if (cr > 1) {
      for (k = 0; k < 2; k++) {
        c.save();
        if (k) c.scale(1 - 2 * fp, 1);
        half(k); c.fillStyle = mix(P.bg, P.fg, k && fp > .5 ? .34 : .24); c.fill();
        c.save(); c.clip();
        if (tp > 0) {
          c.strokeStyle = rgba(P.fg, .95); c.lineWidth = 3;
          for (i = 0; i < 6; i++) {
            var yy = -cr * .62 + i * cr * .25, xe = -cr + 2 * cr * tp, yv;
            c.beginPath();
            for (a = -cr; a <= xe; a += 6) { yv = yy + Math.sin(a * .06 + i) * 4; if (a === -cr) c.moveTo(a, yv); else c.lineTo(a, yv); }
            c.stroke();
          }
          c.fillStyle = rgba(P.fg, .6);
          for (i = 0; i < 16; i++) c.fillRect(-cr * .8 + hash(i, 5) * cr * 1.6, -cr * .8 + hash(i, 8) * cr * 1.6, 4 * tp, 4 * tp);
        }
        c.restore();
        half(k); c.strokeStyle = rgba(P.fg, .85); c.lineWidth = 1.5; c.stroke();
        c.restore();
      }
    }
    if (p < .32) {
      a = p * 28; i = ease(p / .26);
      c.strokeStyle = rgba(P.fg, .85 * (1 - ease((p - .24) / .08))); c.lineWidth = 4;
      c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.cos(a) * R * .8 * i, Math.sin(a) * R * .8 * i); c.stroke();
    }
    if (st > 0) {
      c.lineWidth = 1.4;
      for (k = 0; k < 3; k++) {
        c.beginPath();
        for (i = 0; i <= 20; i++) { var u = i / 20, sx = (k - 1) * cr * .45 + Math.sin(u * 5 - t * 1.6 + k * 2) * 8 * u, sy = -cr * .3 - u * R * .7 * st; if (i) c.lineTo(sx, sy); else c.moveTo(sx, sy); }
        c.strokeStyle = rgba(P.fg, .5 * st); c.stroke();
      }
    }
    c.restore();
  }

  /* ---------- Miftah Laundr: laundry berbasis web ---------- */
  function laundry(c, w, h, t) {
    var fw = Math.min(w * .88, 470), fh = Math.min(h * .9, fw * .86), x0 = (w - fw) / 2, y0 = (h - fh) / 2, bar = 28, foot = 48, i, k, ang;
    var ma = fh - bar - foot, mh = Math.min(fw * .5, ma * .98), mw = mh * .84, cx = w / 2, cy = y0 + bar + ma / 2, dr = mw * .36, dcy = cy + mh * .12, act = Math.floor((t / 2.4) % 4);
    var labels = ['Jemput', 'Cuci', 'Setrika', 'Antar'];
    c.lineCap = 'round'; c.lineJoin = 'round';
    c.strokeStyle = rgba(P.fg, .5); c.lineWidth = 1; rr(c, x0 + .5, y0 + .5, fw - 1, fh - 1, 16); c.stroke();
    c.beginPath(); c.moveTo(x0, y0 + bar + .5); c.lineTo(x0 + fw, y0 + bar + .5); c.stroke();
    c.fillStyle = rgba(P.fg, .3); for (i = 0; i < 3; i++) { c.beginPath(); c.arc(x0 + 16 + i * 12, y0 + bar / 2, 3, 0, 7); c.fill(); }
    c.strokeStyle = rgba(P.fg, .3); rr(c, x0 + fw * .28, y0 + 8, fw * .44, 12, 6); c.stroke();
    c.fillStyle = rgba(P.fg, .04); c.strokeStyle = rgba(P.fg, .8); c.lineWidth = 1.6; rr(c, cx - mw / 2, cy - mh / 2, mw, mh, 12); c.fill(); c.stroke();
    c.lineWidth = 1; c.strokeStyle = rgba(P.fg, .3); c.beginPath(); c.moveTo(cx - mw / 2, cy - mh / 2 + mh * .2); c.lineTo(cx + mw / 2, cy - mh / 2 + mh * .2); c.stroke();
    var kx = cx - mw * .3, ky = cy - mh / 2 + mh * .1;
    c.strokeStyle = rgba(P.fg, .8); c.beginPath(); c.arc(kx, ky, mh * .05, 0, 7); c.stroke();
    c.beginPath(); c.moveTo(kx, ky); c.lineTo(kx + Math.cos(t * .9) * mh * .05, ky + Math.sin(t * .9) * mh * .05); c.stroke();
    R2(c, cx + mw * .05, ky - 5, mw * .3, 10, 5, .3 + .2 * Math.sin(t * 3));
    c.strokeStyle = rgba(P.fg, .85); c.lineWidth = 1.6; c.beginPath(); c.arc(cx, dcy, dr, 0, 7); c.stroke();
    c.strokeStyle = rgba(P.fg, .3); c.lineWidth = 1; c.beginPath(); c.arc(cx, dcy, dr * .84, 0, 7); c.stroke();
    c.save(); c.beginPath(); c.arc(cx, dcy, dr * .84, 0, 7); c.clip();
    var lvl = dcy + dr * .84 - dr * 1.68 * .5;
    c.fillStyle = rgba(P.fg, .12); c.beginPath(); c.moveTo(cx - dr, dcy + dr);
    for (i = -dr; i <= dr; i += 4) c.lineTo(cx + i, lvl + Math.sin(i * .12 + t * 2.5) * 3);
    c.lineTo(cx + dr, dcy + dr); c.closePath(); c.fill();
    for (k = 0; k < 4; k++) {
      ang = t * 1.1 + k * 1.5708;
      c.save(); c.translate(cx + Math.cos(ang) * dr * .5, dcy + Math.sin(ang) * dr * .5); c.rotate(ang * 1.3 + k);
      c.fillStyle = rgba(P.fg, .25 + .1 * k); c.strokeStyle = rgba(P.fg, .7); rr(c, -10, -7, 20, 14, 3); c.fill(); c.stroke(); c.restore();
    }
    for (k = 0; k < 8; k++) {
      var u = (t * .4 + hash(k, 2)) % 1;
      c.strokeStyle = rgba(P.fg, .5 * (1 - u)); c.beginPath(); c.arc(cx + (hash(k, 5) - .5) * dr * 1.2, dcy + dr * .8 - u * dr * 1.2, 1.5 + 2 * hash(k, 7), 0, 7); c.stroke();
    }
    c.restore();
    c.font = '11px "IBM Plex Mono",ui-monospace,monospace'; c.textAlign = 'center';
    var sy = y0 + fh - foot + 14;
    for (k = 0; k < 4; k++) {
      var sx = x0 + fw * (.125 + .25 * k);
      if (k < 3) { c.strokeStyle = rgba(P.fg, k < act ? .6 : .2); c.lineWidth = 1.5; c.beginPath(); c.moveTo(sx + 8, sy); c.lineTo(sx + fw * .25 - 8, sy); c.stroke(); }
      c.fillStyle = rgba(P.fg, k <= act ? .95 : .25); c.beginPath(); c.arc(sx, sy, 4, 0, 7); c.fill();
      if (k === act) { c.strokeStyle = rgba(P.fg, .5 - .4 * ((t * 1.2) % 1)); c.lineWidth = 1; c.beginPath(); c.arc(sx, sy, 6 + 6 * ((t * 1.2) % 1), 0, 7); c.stroke(); }
      c.fillStyle = rgba(P.fg, k === act ? .95 : .45); c.fillText(labels[k].toUpperCase(), sx, sy + 20);
    }
    c.textAlign = 'start';
  }
  function R2(c, x, y, w, h, r, a) { c.fillStyle = rgba(P.fg, a); rr(c, x, y, w, h, r); c.fill(); }

  /* ---------- Jepara Mebelku: katalog mebel digambar satu per satu ---------- */
  var FURN;
  function mkfurn() {
    function circ(x, y, r) { var a = [], i; for (i = 0; i <= 24; i++) a.push([x + Math.cos(i / 24 * 6.2832) * r, y + Math.sin(i / 24 * 6.2832) * r]); return a; }
    function rc(x0, y0, x1, y1) { return [[x0, y0], [x1, y0], [x1, y1], [x0, y1], [x0, y0]]; }
    function sc(x0, x1, y, n, d) { var a = [], i, j; for (i = 0; i < n; i++) for (j = 0; j <= 8; j++) a.push([x0 + (i + j / 8) * (x1 - x0) / n, y + Math.sin(j / 8 * 3.1416) * d]); return a; }
    return [
      { n: 'Kursi ukir', s: [rc(.3, .1, .7, .5), [[.4, .16], [.4, .44]], [[.5, .16], [.5, .44]], [[.6, .16], [.6, .44]], circ(.5, .3, .07), rc(.25, .5, .75, .58), [[.28, .58], [.28, .9]], [[.72, .58], [.72, .9]], [[.28, .78], [.72, .78]]] },
      { n: 'Meja ukir', s: [rc(.12, .4, .88, .47), [[.2, .47], [.2, .9]], [[.8, .47], [.8, .9]], sc(.2, .8, .47, 6, .08), [[.2, .78], [.8, .78]], circ(.5, .43, .025)] },
      { n: 'Lemari ukir', s: [rc(.25, .1, .75, .9), [[.5, .12], [.5, .88]], rc(.29, .15, .47, .5), rc(.53, .15, .71, .5), circ(.38, .32, .05), circ(.62, .32, .05), rc(.29, .56, .47, .84), rc(.53, .56, .71, .84), [[.22, .1], [.78, .1]], [[.27, .9], [.27, .95]], [[.73, .9], [.73, .95]]] }
    ];
  }
  function part(c, pts, fr) {
    var n = pts.length - 1, e = fr * n, k = Math.floor(e), f = e - k, i;
    if (fr <= 0) return;
    c.beginPath(); c.moveTo(pts[0][0], pts[0][1]);
    for (i = 1; i <= n && i <= k; i++) c.lineTo(pts[i][0], pts[i][1]);
    if (k < n) c.lineTo(pts[k][0] + (pts[k + 1][0] - pts[k][0]) * f, pts[k][1] + (pts[k + 1][1] - pts[k][1]) * f);
    c.stroke();
  }
  function furniture(c, w, h, t) {
    if (!FURN) FURN = mkfurn();
    var fw = Math.min(w * .88, 470), fh = Math.min(h * .92, fw * .9), x0 = (w - fw) / 2, y0 = (h - fh) / 2, bar = 28, foot = 44, i, k, lf;
    var side = Math.min(fh - bar - foot - 8, fw * .6), ax = w / 2 - side / 2, ay = y0 + bar + 4;
    var it = Math.floor(t / 4) % FURN.length, q = (t % 4) / 4, f = ease(q / .62), fo = 1 - ease((q - .86) / .14), S = FURN[it].s, n = S.length;
    function mp(p) { return [ax + p[0] * side, ay + p[1] * side]; }
    c.lineCap = 'round'; c.lineJoin = 'round';
    c.strokeStyle = rgba(P.fg, .5); c.lineWidth = 1; rr(c, x0 + .5, y0 + .5, fw - 1, fh - 1, 16); c.stroke();
    c.beginPath(); c.moveTo(x0, y0 + bar + .5); c.lineTo(x0 + fw, y0 + bar + .5); c.stroke();
    c.fillStyle = rgba(P.fg, .3); for (i = 0; i < 3; i++) { c.beginPath(); c.arc(x0 + 16 + i * 12, y0 + bar / 2, 3, 0, 7); c.fill(); }
    c.strokeStyle = rgba(P.fg, .3); rr(c, x0 + fw * .28, y0 + 8, fw * .44, 12, 6); c.stroke();
    c.save(); c.globalAlpha = fo;
    c.fillStyle = rgba(P.fg, .08); c.beginPath(); c.ellipse(w / 2, ay + side * .93, side * .4, 4, 0, 0, 7); c.fill();
    c.strokeStyle = rgba(P.fg, .9); c.lineWidth = 1.6;
    for (i = 0; i < n; i++) { lf = clamp(f * n - i, 0, 1); if (lf > 0) part(c, S[i].map(mp), lf); }
    c.restore();
    c.font = '11px "IBM Plex Mono",ui-monospace,monospace'; c.textAlign = 'center';
    var sy = y0 + fh - foot + 22;
    for (k = 0; k < FURN.length; k++) {
      var sx = x0 + fw * (.5 + (k - 1) * .3);
      if (k === it) { c.strokeStyle = rgba(P.fg, .9); c.lineWidth = 1.5; c.beginPath(); c.moveTo(sx - 30, sy - 16); c.lineTo(sx + 30, sy - 16); c.stroke(); }
      c.fillStyle = rgba(P.fg, k === it ? .95 : .4); c.fillText(FURN[k].n.toUpperCase(), sx, sy);
    }
    c.textAlign = 'start';
  }

  var SCENES = { pool: pool, food: leker, mono: laundry, chair: furniture, wood: wood, island: island, mining: mining, wave: wave, car: car };

  /* ---------- Process rail ---------- */
  var rcur = null;
  function rail() {
    var el = document.querySelector('[data-rail]');
    if (!el) return;
    var r = el.getBoundingClientRect(), vh = window.innerHeight || 800;
    var p = clamp((vh * .85 - r.top) / Math.min(560, vh * .8), 0, 1);
    rcur = rcur === null ? p : rcur + (p - rcur) * (reduce ? 1 : .1);
    el.style.setProperty('--p', rcur.toFixed(4));
    var steps = el.querySelectorAll('[data-step]'), n = steps.length;
    for (var i = 0; i < n; i++) {
      var on = rcur >= .04 + (i / Math.max(1, n - 1)) * .9 ? '1' : '0';
      if (steps[i].getAttribute('data-on') !== on) steps[i].setAttribute('data-on', on);
    }
  }

  /* ---------- Pinned horizontal scroll ---------- */
  var pcur = null;
  var pinDrag = null;

  function pin() {
    var tr = document.querySelector('[data-pin]');
    if (!tr) return;
    var vw = tr.querySelector('[data-pin-view]'), inn = tr.querySelector('[data-pin-inner]');
    if (!vw || !inn) return;
    var dist = Math.max(0, inn.scrollWidth - vw.clientWidth), vh = vw.offsetHeight, th = Math.round(vh + dist);
    if (tr.__th !== th) { tr.style.height = th + 'px'; tr.__th = th; }
    var tb = tr.getBoundingClientRect(), vb = vw.getBoundingClientRect();
    var sc = tr.offsetHeight ? tb.height / tr.offsetHeight : 1;
    var p = clamp((vb.top - tb.top) / (((th - vh) * sc) || 1), 0, 1);
    pcur = pcur === null ? p : pcur + (p - pcur) * (reduce ? 1 : .12);
    inn.style.transform = 'translate3d(' + (-pcur * dist).toFixed(2) + 'px,0,0)';
    var bar = tr.querySelector('[data-pin-bar]');
    if (bar) bar.style.transform = 'scaleX(' + pcur.toFixed(4) + ')';
    var ct = tr.querySelector('[data-pin-count]');
    if (ct) {
      var n = tr.querySelectorAll('[data-clip]').length, i = Math.min(n, Math.round(pcur * (n - 1)) + 1);
      var s = ('0' + i).slice(-2) + ' / ' + ('0' + n).slice(-2);
      if (ct.textContent !== s) ct.textContent = s;
    }
  }

  // Keyboard: panah kiri/kanan menggeser karya lewat gulir halaman (satu sumber gerak, tanpa tabrakan)
  (function () {
    var tr = document.querySelector('[data-pin]');
    if (!tr) return;
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      var t = e.target;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      var r = tr.getBoundingClientRect(), n = tr.querySelectorAll('[data-clip]').length;
      if (!n || r.bottom < 0 || r.top > window.innerHeight) return;
      e.preventDefault();
      var step = Math.max(1, (tr.offsetHeight - window.innerHeight) / n);
      window.scrollBy({ top: e.key === 'ArrowRight' ? step : -step, behavior: reduce ? 'auto' : 'smooth' });
    });
  })();

  /* ---------- Request builder ---------- */
  // Text/config loaded from config.js (window.GSW_TEXT, window.GSW_UTILS)
  var BT = window.GSW_TEXT.projectTypes;
  var BF = window.GSW_TEXT.features;
  var DT = window.GSW_TEXT.projectKeywords;
  var DF = window.GSW_TEXT.featureKeywords;
  var BASE = window.GSW_TEXT.basePages;
  var B = { type: null, feats: {}, text: '', auto: true, up: 0, lastGen: 0, pick: 0, set: 0, rects: [], main: null, hover: -1, hoverMain: false, wired: false, t0: 0, sig: '', pageH: 0, sc: 0, dir: 1, man: -99, lt: 0, mx: 0 };

  function bdet() {
    var s = B.text.toLowerCase(), ty = null, f = {}, i, k;
    for (i = 0; i < DT.length; i++) if (DT[i][1].test(s)) { ty = DT[i][0]; break; }
    for (k in DF) f[k] = DF[k].test(s);
    if (ty === 'blog') f.blog = false;
    return { type: ty, f: f };
  }
  function beff() {
    var d = bdet(), f = {}, k, ty = B.type || d.type;
    for (k in BF) f[k] = (k in B.feats) ? !!B.feats[k] : !!d.f[k];
    if (ty === 'blog') f.blog = false;
    return { type: ty, f: f, d: d };
  }
  function pages(E) {
    if (B.up) return B.up;
    var f = E.f;
    return (BASE[E.type] || 1) + (f.blog ? 2 : 0) + (f.form ? 1 : 0) + (f.login ? 2 : 0) + (f.pay ? 2 : 0) + (f.price ? 1 : 0) + (f.gallery ? 1 : 0);
  }
  var BODYN = { portofolio: ['grid proyek', 'tentang'], landing: ['kartu layanan', 'statistik'], company: ['tentang', 'kartu layanan', 'tim'], booking: ['kalender', 'kartu layanan'], undangan: ['hitung mundur', 'kartu acara'] };
  function gen(E) {
    if (!E.type) return '';
    var fl = [], k, s;
    for (k in BF) if (E.f[k] && k !== 'dark' && k !== 'anim') fl.push(BF[k].toLowerCase());
    s = BT[E.type] + ', ± ' + pages(E) + ' halaman' + (fl.length ? ', dengan ' + fl.join(', ') : '') + '.';
    if (E.f.dark) s += ' Tampilan gelap.';
    if (E.f.anim) s += ' Ada animasi.';
    var bn = window.GSW_TEXT.bodyNames[E.type] || [], r, o = '';
    if (bn.length > 1) { r = B.set % bn.length; o = ' Urutan: hero, ' + bn.slice(r).concat(bn.slice(0, r)).join(', ') + '.'; }
    return s + ' Tata letak ' + 'ABCDEF'.charAt(B.pick) + '.' + o;
  }
  function chipHTML(attr, map) {
    var k, h = '';
    for (k in map) h += '<button type="button" class="chip" data-' + attr + '="' + k + '" aria-pressed="false">' + map[k] + '</button>';
    return h;
  }
  function initB() {
    var a = document.getElementById('bld-types'), b = document.getElementById('bld-feats');
    if (a && !a.children.length) a.innerHTML = chipHTML('b-type', BT);
    if (b && !b.children.length) b.innerHTML = chipHTML('b-feat', BF);
  }
  // Dynamic estimator calculation
  function calcEstimate(E) {
    var pricing = window.GSW_PRICING || {
      basePrice: { portofolio: 8, landing: 5, company: 12, toko: 18, booking: 15, dashboard: 25 },
      featureMultiplier: { form: 0.15, pay: 0.35, login: 0.25, search: 0.2, chat: 0.1, gallery: 0.1, cms: 0.3 },
      baseWeeks: { portofolio: 3, landing: 2, company: 4, toko: 6, booking: 5, dashboard: 8 },
      featureWeeks: { form: 0.5, pay: 1.5, login: 1, search: 0.5, chat: 0.5, gallery: 0.5, cms: 1 }
    };
    var type = E.type || 'portofolio';
    var features = E.f || {};
    var base = pricing.basePrice[type] || 10;
    var mult = 1 + Object.keys(features).reduce(function (sum, k) { return sum + (features[k] ? (pricing.featureMultiplier[k] || 0) : 0); }, 0);
    var priceMin = Math.round(base * mult * 0.8);
    var priceMax = Math.round(base * mult * 1.3);
    var weeks = Math.round((pricing.baseWeeks[type] || 4) + Object.keys(features).reduce(function (sum, k) { return sum + (features[k] ? (pricing.featureWeeks[k] || 0) : 0); }, 0));
    var confidence = Object.keys(features).filter(function (k) { return features[k]; }).length > 2 ? 'Tinggi' : 'Sedang';
    return { priceMin: priceMin, priceMax: priceMax, weeks: weeks, confidence: confidence };
  }
  function updateEstimateDisplay(est) {
    var priceEl = document.getElementById('est-price');
    var timeEl = document.getElementById('est-time');
    var confEl = document.getElementById('est-conf');
    if (priceEl) priceEl.textContent = 'Rp ' + est.priceMin + '–' + est.priceMax + ' Juta';
    if (timeEl) timeEl.textContent = est.weeks + ' Minggu';
    if (confEl) confEl.textContent = est.confidence;
  }
  function sync(follow) {
    initB();
    var E = beff(), els, i, k, v, on, ta, g;
    els = document.querySelectorAll('[data-b-type]');
    for (i = 0; i < els.length; i++) {
      v = els[i].getAttribute('data-b-type'); on = B.type === v;
      els[i].setAttribute('aria-pressed', on ? 'true' : 'false'); els[i].setAttribute('data-auto', !on && B.text && E.d.type === v ? '1' : '0');
    }
    els = document.querySelectorAll('[data-b-feat]');
    for (i = 0; i < els.length; i++) {
      k = els[i].getAttribute('data-b-feat'); on = !!E.f[k];
      els[i].setAttribute('aria-pressed', on ? 'true' : 'false'); els[i].setAttribute('data-auto', '0');
    }
    if (B.auto || follow) {
      g = gen(E);
      if (g || B.auto) {
        ta = document.getElementById('ringkasan');
        if (ta && ta.value !== g) ta.value = g;
        B.text = g; B.auto = true; B.lastGen = g ? pages(E) : 0;
      }
    }
    // Update estimator display
    var est = calcEstimate(E);
    updateEstimateDisplay(est);
  }

  /* --- gambar pratinjau: semua koordinat dibulatkan ke piksel agar garis tajam --- */
  var ACC = [31, 111, 235], FG = [14, 14, 14], K = null, C = null, TT = 0;
  function R(x, y, w, h, r, a) { x = Math.round(x); y = Math.round(y); w = Math.max(1, Math.round(w)); h = Math.max(1, Math.round(h)); C.fillStyle = rgba(FG, a); rr(C, x, y, w, h, Math.min(r, h / 2, w / 2)); C.fill(); }
  function S(x, y, w, h, r, a) { w = Math.max(2, Math.round(w)); h = Math.max(2, Math.round(h)); C.strokeStyle = rgba(FG, a); C.lineWidth = 1; rr(C, Math.round(x) + .5, Math.round(y) + .5, w - 1, h - 1, Math.min(r, h / 2, w / 2)); C.stroke(); }
  function bars(x, y, w, n, h, gap, a, last) { for (var i = 0; i < n; i++) R(x, y + i * (h + gap), i === n - 1 ? w * (last || .6) : w, h, h / 2, a); return n * h + (n - 1) * gap; }
  function RA(x, y, w, h, r, a) { x = Math.round(x); y = Math.round(y); w = Math.max(1, Math.round(w)); h = Math.max(1, Math.round(h)); C.fillStyle = rgba(ACC, a); rr(C, x, y, w, h, Math.min(r, h / 2, w / 2)); C.fill(); }
  function IMG(x, y, w, h) {
    x = Math.round(x); y = Math.round(y); w = Math.round(w); h = Math.round(h);
    var g = C.createLinearGradient(x, y, x + w, y + h);
    g.addColorStop(0, rgba(ACC, .22)); g.addColorStop(1, rgba(ACC, .06));
    C.fillStyle = g; rr(C, x, y, w, h, 6); C.fill();
    if (w > 28 && h > 24) {
      var s = Math.min(w, h) * .2, cx = x + w * .5, cy = y + h * .56;
      C.fillStyle = rgba(ACC, .3); C.beginPath(); C.moveTo(x + w * .16, y + h * .86); C.lineTo(cx - s * .6, cy - s * .5); C.lineTo(cx + s * .3, y + h * .86); C.closePath(); C.fill();
      C.beginPath(); C.moveTo(x + w * .4, y + h * .86); C.lineTo(cx + s * .9, cy - s * .9); C.lineTo(x + w * .86, y + h * .86); C.closePath(); C.fill();
      C.fillStyle = rgba(ACC, .5); C.beginPath(); C.arc(x + w * .76, y + h * .26, Math.max(2, s * .35), 0, 7); C.fill();
    }
  }
  function BTN(x, y, w, h, solid) { if (solid) RA(x, y, w, h, h / 2, 1); else { C.strokeStyle = rgba(ACC, .7); C.lineWidth = 1; rr(C, Math.round(x) + .5, Math.round(y) + .5, Math.max(2, Math.round(w)) - 1, Math.max(2, Math.round(h)) - 1, h / 2); C.stroke(); } }
  function DOT(x, y, r, a) { C.beginPath(); C.arc(Math.round(x) + .5, Math.round(y) + .5, r, 0, 7); C.fillStyle = rgba(FG, a); C.fill(); }
  function CARD(x, y, w, h, price) {
    y += K.f.anim ? Math.round(Math.sin(TT * 1.6 + x * .03) * 1.5) : 0;
    S(x, y, w, h, 8, .28); IMG(x + 6, y + 6, w - 12, Math.round(h * .56));
    bars(x + 8, y + Math.round(h * .56) + 16, w - 16, 2, 5, 5, .32, .6);
    if (price) RA(x + w - 36, y + h - 16, 28, 6, 3, 1);
  }
  function sHero(v, x, y, w) {
    var i, sw;
    if (v === 0) { bars(x + w * .2, y + 8, w * .6, 2, 12, 8, .9, .7); bars(x + w * .3, y + 54, w * .4, 2, 5, 6, .3, .7); BTN(x + w / 2 - 34, y + 84, 68, 22, true); return 118; }
    if (v === 1) { bars(x, y + 10, w * .46, 2, 13, 8, .9, .7); bars(x, y + 58, w * .4, 3, 5, 6, .3, .6); BTN(x, y + 96, 70, 22, true); IMG(x + w * .54, y, w * .46, 126); return 126; }
    if (v === 2) { IMG(x, y, w, 132); bars(x + 16, y + 84, w * .5, 2, 11, 7, .9, .65); return 132; }
    if (v === 3) { bars(x, y + 4, w * .56, 2, 13, 8, .9, .7); sw = (w - 24) / 4; for (i = 0; i < 4; i++) { S(x + i * (sw + 8), y + 56, sw, 46, 8, .28); R(x + i * (sw + 8) + 8, y + 68, sw * .4, 8, 4, .85); R(x + i * (sw + 8) + 8, y + 86, sw * .6, 4, 2, .28); } return 104; }
    if (v === 4) { bars(x, y, w * .5, 1, 12, 0, .9); IMG(x, y + 28, w * .56, 120); IMG(x + w * .6, y + 28, w * .4, 56); IMG(x + w * .6, y + 92, w * .4, 56); return 148; }
    bars(x, y + 4, w * .74, 2, 20, 10, .9, .6); R(x, y + 62, w, 1, 1, .2); bars(x + w * .5, y + 74, w * .5, 3, 5, 6, .3, .6); return 96;
  }
  function sCards(n, h, price) { return function (x, y, w) { var g = 10, cw = (w - g * (n - 1)) / n, i; for (i = 0; i < n; i++) CARD(x + i * (cw + g), y, cw, h, price); return h; }; }
  function sGrid(cols, rows, ch) { return function (x, y, w) { var g = 8, cw = (w - g * (cols - 1)) / cols, i, j; for (j = 0; j < rows; j++) for (i = 0; i < cols; i++) IMG(x + i * (cw + g), y + j * (ch + g), cw, ch); return rows * ch + (rows - 1) * g; }; }
  function sProducts(x, y, w) {
    var cols = w < 420 ? 2 : 4, g = 8, cw = (w - g * (cols - 1)) / cols, ch = Math.round(cw * 1.2), i, j;
    for (i = 0; i < 4; i++) { if (i) S(x + i * 54, y, 46, 18, 9, .3); else R(x, y, 46, 18, 9, .9); }
    for (j = 0; j < 2; j++) for (i = 0; i < cols; i++) CARD(x + i * (cw + g), y + 30 + j * (ch + g), cw, ch, true);
    return 30 + 2 * ch + g;
  }
  function sList(n) { return function (x, y, w) { var i, rh = 52; for (i = 0; i < n; i++) { IMG(x, y + i * (rh + 10), 68, rh); bars(x + 80, y + i * (rh + 10) + 6, w - 80, 3, 5, 7, i ? .4 : .8, .55); } return n * rh + (n - 1) * 10; }; }
  function sStats(x, y, w) { var sw = (w - 24) / 4, i; for (i = 0; i < 4; i++) { S(x + i * (sw + 8), y, sw, 52, 8, .28); R(x + i * (sw + 8) + 8, y + 12, sw * .4, 9, 4, .85); R(x + i * (sw + 8) + 8, y + 32, sw * .6, 4, 2, .28); } return 52; }
  function sAbout(x, y, w) { IMG(x, y, w * .42, 100); bars(x + w * .48, y + 4, w * .5, 1, 10, 0, .85, .7); bars(x + w * .48, y + 28, w * .5, 4, 5, 7, .3, .6); return 100; }
  function sTeam(x, y, w) { var i, s = w / 4; for (i = 0; i < 4; i++) { DOT(x + s * i + s / 2, y + 20, 19, .08); C.strokeStyle = rgba(FG, .25); C.beginPath(); C.arc(Math.round(x + s * i + s / 2) + .5, y + 20.5, 19, 0, 7); C.stroke(); bars(x + s * i + s / 2 - 22, y + 50, 44, 2, 4, 5, .35, .6); } return 66; }
  function sCal(x, y, w) {
    var g = 4, cw = (w - g * 6) / 7, ch = 22, i, j;
    for (j = 0; j < 4; j++) for (i = 0; i < 7; i++) { if (j === 1 && i === 3) RA(x + i * (cw + g), y + j * (ch + g), cw, ch, 5, 1); else S(x + i * (cw + g), y + j * (ch + g), cw, ch, 5, .22); }
    for (i = 0; i < 4; i++) { if (i === 1) BTN(x + i * 62, y + 4 * (ch + g) + 8, 54, 22, true); else BTN(x + i * 62, y + 4 * (ch + g) + 8, 54, 22, false); }
    return 4 * (ch + g) + 38;
  }
  function sCount(x, y, w) { var i, bw = Math.min(54, (w - 24) / 4), sx = x + (w - (bw * 4 + 24)) / 2; bars(x + w * .3, y, w * .4, 1, 12, 0, .9); bars(x + w * .36, y + 22, w * .28, 1, 5, 0, .3); for (i = 0; i < 4; i++) { S(sx + i * (bw + 8), y + 44, bw, 46, 8, .3); R(sx + i * (bw + 8) + bw * .25, y + 58, bw * .5, 9, 4, .85); R(sx + i * (bw + 8) + bw * .3, y + 76, bw * .4, 4, 2, .28); } return 92; }
  function sTesti(x, y, w) { var n = w < 420 ? 2 : 3, g = 10, cw = (w - g * (n - 1)) / n, i; for (i = 0; i < n; i++) { S(x + i * (cw + g), y, cw, 78, 8, .28); DOT(x + i * (cw + g) + 20, y + 20, 8, .12); bars(x + i * (cw + g) + 36, y + 15, cw - 48, 2, 4, 4, .5, .6); bars(x + i * (cw + g) + 10, y + 42, cw - 20, 3, 4, 5, .26, .6); } return 78; }
  function sFaq(x, y, w) { var i; for (i = 0; i < 4; i++) { S(x, y + i * 30, w, 22, 6, .24); R(x + 10, y + i * 30 + 9, w * (i % 2 ? .4 : .55), 4, 2, .5); R(x + w - 20, y + i * 30 + 10, 8, 1, 1, .6); if (!i) R(x + w - 17, y + 7, 1, 8, 1, .6); } return 112; }
  function sPrice(x, y, w) { var g = 10, cw = (w - g * 2) / 3, i, cx; for (i = 0; i < 3; i++) { cx = x + i * (cw + g); S(x, y, 1, 1, 0, 0); if (i === 1) { R(cx, y, cw, 126, 8, .1); S(cx, y, cw, 126, 8, .8); } else S(cx, y, cw, 126, 8, .26); bars(cx + 10, y + 12, cw * .4, 1, 5, 0, .5); R(cx + 10, y + 30, cw * .5, 12, 4, .88); bars(cx + 10, y + 56, cw - 20, 3, 4, 6, .28, .6); BTN(cx + 10, y + 96, cw - 20, 20, i === 1); } return 126; }
  function sMap(x, y, w) { IMG(x, y, w, 96); DOT(x + w * .5, y + 44, 7, .85); R(x + w * .5 - 1, y + 51, 3, 10, 1, .85); bars(x + 10, y + 74, w * .3, 1, 5, 0, .5); return 96; }
  function sNews(x, y, w) { bars(x + w * .25, y, w * .5, 1, 11, 0, .85); S(x + w * .15, y + 26, w * .52, 28, 14, .4); R(x + w * .15 + 14, y + 38, w * .22, 4, 2, .3); BTN(x + w * .15 + w * .52 + 8, y + 26, w * .18, 28, true); return 54; }
  function sForm(x, y, w) { S(x, y, w * .48, 26, 6, .3); S(x + w * .52, y, w * .48, 26, 6, .3); S(x, y + 34, w, 56, 6, .3); BTN(x, y + 98, 80, 24, true); return 122; }
  function sFoot(x, y, w) { var i; R(x, y, w, 1, 1, .2); for (i = 0; i < 3; i++) bars(x + i * (w / 3), y + 16, w / 3 - 16, 3, 4, 6, .3, .6); return 56; }
  function sDash(v) {
    return function (x, y, w) {
      var side = v % 2 === 0, sw = side ? Math.round(w * .18) : 0, ix = x + sw + (side ? 10 : 0), iw = w - sw - (side ? 10 : 0), yy = y, n = side ? 3 : 4, bw = (iw - 8 * (n - 1)) / n, i, m = v % 3, j;
      function chart(cx, cy, cw, chh) { S(cx, cy, cw, chh, 8, .28); C.strokeStyle = rgba(FG, .85); C.beginPath(); for (j = 0; j <= 24; j++) { var px = cx + 8 + (cw - 16) * j / 24, py = cy + chh * .62 - Math.sin(j * .5 + (K.f.anim ? TT : 0)) * chh * .14 - (j / 24) * chh * .2; if (j) C.lineTo(px, py); else C.moveTo(px, py); } C.stroke(); }
      for (i = 0; i < n; i++) { S(ix + i * (bw + 8), yy, bw, 46, 8, .28); R(ix + i * (bw + 8) + 8, yy + 12, bw * .4, 9, 4, .85); R(ix + i * (bw + 8) + 8, yy + 32, bw * .6, 4, 2, .28); }
      yy += 56;
      if (m === 0) { chart(ix, yy, iw, 112); yy += 122; S(ix, yy, iw, 92, 8, .28); for (i = 0; i < 4; i++) R(ix + 10, yy + 10 + i * 20, iw - 20, 8, 3, i ? .2 : .4); yy += 92; }
      else if (m === 1) { chart(ix, yy, iw / 2 - 5, 124); chart(ix + iw / 2 + 5, yy, iw / 2 - 5, 124); yy += 134; for (i = 0; i < 3; i++) { R(ix, yy + i * 22, iw * (i % 2 ? .7 : .9), 8, 3, .26); } yy += 66; }
      else { n = 3; bw = (iw - 16) / 3; for (i = 0; i < 3; i++) { S(ix + i * (bw + 8), yy, bw, 150, 8, .28); R(ix + i * (bw + 8) + 8, yy + 10, bw * .4, 5, 2, .6); for (j = 0; j < 3 - (i % 2); j++) S(ix + i * (bw + 8) + 8, yy + 28 + j * 38, bw - 16, 30, 6, .3); } yy += 150; }
      if (side) R(x, y, sw, Math.max(yy - y, 200), 6, .06), (function () { for (i = 0; i < 6; i++) R(x + 8, y + 12 + i * 20, sw - 16, 5, 2, i ? .3 : .85); })();
      return yy - y;
    };
  }
  function pageFns(E, v, set) {
    var f = E.f, hv = (v + set) % 6, L, body, r;
    if (E.type === 'dashboard') L = [sDash(hv)];
    else {
      body = { portofolio: [sGrid(3, 2, 88), sAbout], landing: [sCards(3, 108), sStats], company: [sAbout, sCards(3, 108), sTeam], toko: [sProducts], blog: [sList(4)], booking: [sCal, sCards(3, 84)], undangan: [sCount, sCards(2, 96)] }[E.type];
      r = set % body.length; body = body.slice(r).concat(body.slice(0, r));
      L = [function (x, y, w) { return sHero(hv, x, y, w); }].concat(body);
      if (f.price) L.push(sPrice);
      if (f.gallery && E.type !== 'portofolio') L.push(sGrid(3, 1, 80));
      if (f.testi) L.push(sTesti);
      if (f.faq) L.push(sFaq);
      if (f.map) L.push(sMap);
      if (f.blog) L.push(sList(2));
      if (f.news) L.push(sNews);
      if (f.form) L.push(sForm);
    }
    L.push(sFoot);
    return L;
  }
  function nav(x, y, w) {
    var rx = x + w - 14, h = 30, i, lx;
    C.fillStyle = rgba(K.bg, 1); C.fillRect(Math.round(x), Math.round(y), Math.round(w), h);
    R(x, y + h, w, 1, 0, .1);
    RA(x + 14, y + 8, 14, 14, 4, 1); R(x + 33, y + 12, 28, 6, 3, .85);
    RA(rx - 40, y + 8, 40, 14, 7, 1); rx -= 50;
    if (K.f.login) { DOT(rx - 8, y + 15, 8, .14); rx -= 24; }
    if (K.f.pay) { S(rx - 16, y + 9, 16, 12, 3, .7); rx -= 26; }
    if (K.f.lang) { S(rx - 30, y + 8, 30, 14, 7, .5); rx -= 38; }
    if (K.f.search) { S(rx - 44, y + 8, 44, 14, 7, .4); R(rx - 36, y + 14, 16, 3, 1, .3); rx -= 52; }
    for (i = 0; i < 3; i++) { lx = rx - 22 - i * 30; if (lx > x + 72) R(lx, y + 13, 20, 4, 2, .3); }
    return h;
  }
  function site(x, y, w, h, v, E, o) {
    var dark = E.f.dark, y0 = o.thumb ? y : y + 22, navH = 30, vh = h - (y0 - y) - navH, px = o.thumb ? 14 : 16, yy, i, fns, hh, u, sc = 0;
    K = { f: E.f, bg: dark ? [10, 18, 40] : [255, 255, 255] }; FG = dark ? [226, 236, 255] : [11, 31, 75]; ACC = dark ? [96, 160, 255] : [31, 111, 235];
    C.save(); C.globalAlpha = o.alpha;
    C.fillStyle = rgba(K.bg, 1); rr(C, x, y, w, h, o.thumb ? 6 : 10); C.save(); if (!o.thumb) { C.shadowColor = 'rgba(15,60,160,.24)'; C.shadowBlur = 22; C.shadowOffsetY = 8; } C.fill(); C.restore(); C.clip();
    if (!o.thumb) { C.fillStyle = rgba(ACC, .07); C.fillRect(Math.round(x), Math.round(y), Math.round(w), 22); for (i = 0; i < 3; i++) DOT(x + 14 + i * 12, y + 11, 3, .22); R(x + w * .3, y + 6, w * .4, 11, 5, .08); }
    if (!o.thumb) B.mx = Math.max(0, B.pageH - vh);
    if (!o.thumb && B.pageH > vh) {
      var mx = B.pageH - vh, dt = clamp(TT - (B.lt || TT), 0, .1);
      B.lt = TT;
      if (!B.hoverMain && TT - B.man > 2.5 && dt) {
        B.sc += B.dir * 30 * dt;
        if (B.sc >= mx) { B.sc = mx; B.dir = -1; } else if (B.sc <= 0) { B.sc = 0; B.dir = 1; }
      }
      B.sc = clamp(B.sc, 0, mx); sc = Math.round(B.sc);
    }
    C.save(); C.beginPath(); C.rect(x, y0 + navH, w, vh); C.clip();
    yy = y0 + navH + 16 - sc; fns = pageFns(E, v, B.set);
    for (i = 0; i < fns.length; i++) { if (i === 0) { var gr = C.createLinearGradient(0, yy - 16, 0, yy + 150); gr.addColorStop(0, rgba(ACC, .13)); gr.addColorStop(1, rgba(ACC, 0)); C.fillStyle = gr; C.fillRect(Math.round(x), Math.round(yy - 16), Math.round(w), 166); }
      hh = fns[i](x + px, Math.round(yy), w - px * 2); yy += hh + 16;
      if (i < fns.length - 2) R(x + px, yy, w - px * 2, 1, 0, .08);
      yy += 17; }
    if (!o.thumb) B.pageH = yy - (y0 + navH - sc);
    if (E.f.anim && !o.thumb) { C.fillStyle = rgba(FG, .06); C.fillRect(x + ((TT * 70) % (w + 80)) - 40, y0 + navH, 36, vh); }
    C.restore();
    nav(x, y0, w);
    if (E.f.chat) { C.beginPath(); C.arc(x + w - 24, y + h - 24, 12, 0, 7); C.fillStyle = rgba(ACC, 1); C.fill(); R(x + w - 28, y + h - 27, 8, 2, 1, 0); C.fillStyle = rgba(K.bg, 1); C.fillRect(Math.round(x + w - 28), Math.round(y + h - 26), 8, 2); C.fillRect(Math.round(x + w - 28), Math.round(y + h - 22), 5, 2); }
    C.restore();
  }

  function drawB(g, t) {
    var E = beff(), c = g.x, W = g.w, H = g.h, pad = 12, gap = 8, tw, th, ty, mh, i, sig, alpha;
    C = c; TT = t;
    c.font = '11px "IBM Plex Mono",ui-monospace,monospace'; c.textBaseline = 'alphabetic';
    B.rects = []; B.main = null;
    if (!E.type) {
      var bw = Math.min(W - pad * 2, 420), bh = Math.min(H - pad * 2, bw * .7), bx = Math.round((W - bw) / 2), by = Math.round((H - bh) / 2);
      c.setLineDash([5, 5]); c.strokeStyle = rgba(P.fg, .32); c.lineWidth = 1; rr(c, bx + .5, by + .5, bw, bh, 10); c.stroke(); c.setLineDash([]);
      c.fillStyle = rgba(P.fg, .25); for (i = 0; i < 3; i++) { c.beginPath(); c.arc(bx + 14 + i * 12, by + 14, 3, 0, 7); c.fill(); }
      var cy = by + bh / 2, fs = Math.max(16, Math.min(24, bw / 15));
      c.textAlign = 'center';
      c.fillStyle = rgba(P.fg, .92); c.font = '600 ' + fs + 'px Fraunces, Georgia, serif';
      c.fillText('Pratinjau halamanmu', W / 2, cy - 14); c.fillText('akan muncul di sini', W / 2, cy - 14 + fs * 1.25);
      c.fillStyle = rgba(P.fg, .55); c.font = '400 13px Karla, -apple-system, sans-serif';
      c.fillText('Pilih jenis proyek dulu untuk mulai.', W / 2, cy + fs * 1.25 + 14);
      c.font = '11px "IBM Plex Mono",ui-monospace,monospace'; c.textAlign = 'left';
      return;
    }
    sig = E.type + '|' + JSON.stringify(E.f) + '|' + B.pick + '|' + B.set;
    if (B.sig !== sig) { B.sig = sig; B.t0 = t; B.sc = 0; B.dir = 1; B.pageH = 0; }
    alpha = ease((t - B.t0) / .35);
    tw = Math.floor((W - pad * 2 - gap * 5) / 6); th = Math.round(Math.min(W < 420 ? 52 : 62, tw * 1.25)); ty = H - pad - th;
    mh = Math.max(120, ty - pad * 2);
    B.main = { x: pad, y: pad, w: W - pad * 2, h: mh };
    site(pad, pad, W - pad * 2, mh, B.pick, E, { alpha: alpha, thumb: false });
    c.lineWidth = 1; c.strokeStyle = rgba(ACC, .25); rr(c, pad + .5, pad + .5, W - pad * 2 - 1, mh - 1, 10); c.stroke();
    for (i = 0; i < 6; i++) {
      var tx = pad + i * (tw + gap), sel = i === B.pick, s = tw / 280;
      B.rects[i] = { x: tx, y: ty, w: tw, h: th };
      c.save(); c.translate(tx, ty); c.scale(s, s); site(0, 0, 280, th / s, i, E, { alpha: sel || B.hover === i ? 1 : .6, thumb: true }); c.restore();
      c.lineWidth = sel ? 2 : 1; c.strokeStyle = rgba(sel || B.hover === i ? ACC : P.fg, sel ? 1 : (B.hover === i ? .8 : .22)); rr(c, tx + .5, ty + .5, tw - 1, th - 1, 6); c.stroke();
    }
  }

  function wireBuilder(cv) {
    if (B.wired) return;
    B.wired = true; var dr = null;
    function pos(e) { var r = cv.getBoundingClientRect(), sx = r.width ? cv.clientWidth / r.width : 1; return { x: (e.clientX - r.left) * sx, y: (e.clientY - r.top) * sx }; }
    function idx(p) { for (var i = 0; i < B.rects.length; i++) { var q = B.rects[i]; if (p.x >= q.x && p.x <= q.x + q.w && p.y >= q.y && p.y <= q.y + q.h) return i; } return -1; }
    cv.addEventListener('pointermove', function (e) {
      var p = pos(e), m = B.main; B.hover = idx(p);
      if (dr) { B.sc = clamp(dr.s - (p.y - dr.y), 0, B.mx); B.man = TT; }
      B.hoverMain = !!(m && p.x >= m.x && p.x <= m.x + m.w && p.y >= m.y && p.y <= m.y + m.h);
      cv.style.cursor = B.hover >= 0 ? 'pointer' : 'default';
    });
    cv.addEventListener('pointerleave', function () { B.hover = -1; B.hoverMain = false; });
    cv.addEventListener('pointerdown', function (e) {
      var p = pos(e), m = B.main;
      if (m && B.mx > 0 && p.x >= m.x && p.x <= m.x + m.w && p.y >= m.y && p.y <= m.y + m.h) { dr = { y: p.y, s: B.sc }; B.man = TT; try { cv.setPointerCapture(e.pointerId); } catch (x) {} }
    });
    cv.addEventListener('pointerup', function () { dr = null; });
    cv.addEventListener('pointercancel', function () { dr = null; });
    cv.addEventListener('wheel', function (e) {
      var p = pos(e), m = B.main;
      if (!m || !(B.mx > 0) || !(p.x >= m.x && p.x <= m.x + m.w && p.y >= m.y && p.y <= m.y + m.h)) return;
      var n = clamp(B.sc + e.deltaY, 0, B.mx);
      if (n === B.sc) return;
      B.sc = n; B.man = TT; e.preventDefault();
    }, { passive: false });
    cv.addEventListener('click', function (e) { var i = idx(pos(e)); if (i >= 0) { B.pick = i; sync(true); } });
  }

  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-b-type],[data-b-feat],[data-b-send],[data-b-idea],[data-b-tab]') : null;
    if (!el) return;
    if (el.hasAttribute('data-b-type')) {
      var v = el.getAttribute('data-b-type');
      B.type = B.type === v ? null : v; B.pick = 0; B.set = 0; sync(true);
    } else if (el.hasAttribute('data-b-feat')) {
      var k = el.getAttribute('data-b-feat'); B.feats[k] = !beff().f[k]; sync(true);
    } else if (el.hasAttribute('data-b-idea')) {
      B.set++; B.pick = (B.pick + 1 + Math.floor(Math.random() * 5)) % 6; sync(true);
    } else if (el.hasAttribute('data-b-tab')) {
      var tb = el.getAttribute('data-b-tab'), gr = document.querySelector('.bgrid'), bs = document.querySelectorAll('[data-b-tab]'), j;
      if (gr) gr.setAttribute('data-tab', tb);
      for (j = 0; j < bs.length; j++) bs[j].setAttribute('aria-selected', bs[j] === el ? 'true' : 'false');
    } else {
      e.preventDefault();
      var st = document.getElementById('bld-status'), ct = document.getElementById('kontak');
      var validation = window.GSW_UTILS || {};
      var validationConfig = window.GSW_VALIDATION || {};
      var textObj = window.GSW_TEXT || {};
      if (ct && !ct.value.trim()) {
        if (st) st.textContent = textObj.statusRequiredContact || 'Isi email atau WhatsApp dulu.';
        ct.focus();
      } else if (ct && validation.validateContact && !validation.validateContact(ct.value.trim())) {
        if (st) st.textContent = textObj.validationError || validationConfig.contactErrorMessage || 'Masukkan email atau nomor WhatsApp yang valid.';
        ct.focus();
      } else {
        if (st) st.textContent = '';
        sendFlow(ct ? ct.value.trim() : '');
      }
    }
  });
  document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'ringkasan') { var pd = bdet().f, nd, kk; B.text = e.target.value || ''; B.auto = !B.text.trim(); nd = bdet().f; for (kk in nd) if (nd[kk] !== pd[kk]) delete B.feats[kk]; var pm = B.text.match(/(\d+)\s*(halaman|page)/i); B.up = pm ? (parseInt(pm[1], 10) !== B.lastGen ? parseInt(pm[1], 10) : B.up) : 0; sync(); }
  });

  /* ---------- Alur kirim: pesawat + halaman pergantian ---------- */
  function doSend(E, fl, contact) {
    var cfg = window.GSW_CONFIG || {};
    var textObj = window.GSW_TEXT;
    var text = 'Halo, saya ingin merancang web.\nJenis proyek: ' + (E.type ? BT[E.type] : '-') + '\nDetail tambahan: ' + (fl.length ? fl.join(', ') : '-') + '\nRingkasan: ' + (B.text || '-') + '\nKontak: ' + (contact || '-');
    var payload = { contact: contact, type: E.type ? BT[E.type] : '', features: fl, summary: B.text || '', text: text, sentAt: new Date().toISOString() };
    if (cfg.sendEndpoint) {
      try {
        return fetch(cfg.sendEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
          .then(function (r) { return r.ok ? 'ok' : 'fail'; }, function () { return 'fail'; });
      } catch (x) { return Promise.resolve('fail'); }
    }
    if (cfg.waNumber || !cfg.sendEndpoint) {
      try { window.open('https://wa.me/' + String(cfg.waNumber).replace(/\D/g, '') + '?text=' + encodeURIComponent(text), '_blank', 'noopener'); } catch (x) {}
      return Promise.resolve('wa');
    }
    try { return navigator.clipboard.writeText(text).then(function () { return 'copied'; }, function () { return 'nocfg'; }); } catch (x) { return Promise.resolve('nocfg'); }
  }
  function sendFlow(contact) {
    if (document.getElementById('sendov')) return;
    var E = beff(), fl = [], k, rm = false, ov, box, i = 0, body = document.body, PL, steps;
    try { rm = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (x) {}
    for (k in BF) if (E.f[k]) fl.push(BF[k]);
    var res = doSend(E, fl, contact || ''), fin = '';
    var textObj = window.GSW_TEXT;
    if (!document.getElementById('sendov-css')) {
      var cs = document.createElement('style'); cs.id = 'sendov-css';
      cs.textContent = '#sendov{position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:24px;text-align:center;background:var(--bg);color:var(--fg)}' +
        '#sendov .so-box{max-width:620px;max-height:100%;overflow:auto;opacity:0;transform:translateY(12px);transition:opacity .4s var(--ease),transform .4s var(--ease)}' +
        '#sendov .so-box.on{opacity:1;transform:none}' +
        '#sendov .so-t{font-family:var(--disp);font-weight:600;font-size:clamp(28px,6vw,52px);line-height:1.1;letter-spacing:-.02em;margin:0}' +
        '#sendov .so-d{margin-top:28px;display:grid;gap:16px;text-align:left}' +
        '#sendov .so-k{font-family:var(--mono);font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin:0 0 4px}' +
        '#sendov .so-v{font-size:16px;line-height:1.5;margin:0}' +
        '#sendov .pl{position:absolute;left:50%;width:56px;height:56px;margin-left:-28px;transform:rotate(-45deg)}' +
        '#sendov .pl-in{top:-76px}#sendov .pl-out{bottom:-76px}';
      document.head.appendChild(cs);
    }
    PL = '<svg class="pl PLC" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 2 11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
    ov = document.createElement('div'); ov.id = 'sendov'; ov.setAttribute('role', 'status'); ov.setAttribute('aria-live', 'polite');
    ov.innerHTML = '<div class="so-box"><h2 class="so-t"></h2><div class="so-d" hidden></div></div>' + PL.replace('PLC', 'pl-in') + PL.replace('PLC', 'pl-out');
    box = ov.firstChild;
    if (!rm) ov.style.transform = 'translateY(100%)';
    body.appendChild(ov); body.style.overflow = 'hidden';
    function row(label, text) {
      var w = document.createElement('div'), a = document.createElement('p'), b = document.createElement('p');
      a.className = 'so-k'; a.textContent = label; b.className = 'so-v'; b.textContent = text; w.appendChild(a); w.appendChild(b); return w;
    }
    function show(s) {
      var t = box.querySelector('.so-t'), d = box.querySelector('.so-d');
      box.classList.remove('on');
      setTimeout(function () {
        t.textContent = s[1]; d.textContent = '';
        if (s[2]) {
          d.appendChild(row('Jenis proyek', E.type ? BT[E.type] : textObj.sendResult.ok));  // placeholder, actual handled below
          d.appendChild(row('Detail tambahan', fl.length ? fl.join(', ') : 'Tidak ada'));
          d.appendChild(row('Ringkasan kebutuhan', B.text || '-'));
          d.hidden = false;
        } else d.hidden = true;
        box.classList.add('on');
        setTimeout(next, s[0]);
      }, 380);
    }
    // Use config values for send flow steps and messages
    var durations = window.GSW_SETTINGS.sendStepDurations || [1000, 3200, 1000];
    steps = [
      [durations[0], textObj.sendStatusSending],
      [durations[1], textObj.sendStatusReceived, 1],
      [durations[2], textObj.sendStatusDelivering]
    ];
    steps.push(null);
    function done() {
      body.style.overflow = '';
      var st = document.getElementById('bld-status');
      if (st && fin) st.textContent = fin;
      if (ov.parentNode) ov.parentNode.removeChild(ov);
    }
    function next() {
      if (i === 3) {
        i++;
        Promise.race([res, new Promise(function (ok) { setTimeout(function () { ok('fail'); }, 8000); })]).then(function (r) {
          var M = textObj.sendResult;
          if (r === 'fail') fin = textObj.sendErrorConnection;
          else if (r === 'copied' || r === 'nocfg') fin = textObj.sendErrorNoConfig;
          show([r === 'ok' || r === 'wa' ? 1500 : 2200, M[r] || M.fail]);
        });
        return;
      }
      if (i < steps.length) { show(steps[i++]); return; }
      box.classList.remove('on');
      if (rm || !ov.animate) { done(); return; }
      var a = ov.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }], { duration: window.GSW_SETTINGS.sendOverlayExitDuration || 1000, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'both' });
      a.onfinish = done;
    }
    if (rm || !ov.animate) { next(); return; }
    var a0 = ov.animate([{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }], { duration: window.GSW_SETTINGS.sendOverlayAnimationDuration || 900, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' });
    a0.onfinish = function () { a0.commitStyles && a0.commitStyles(); a0.cancel(); ov.style.transform = 'none'; setTimeout(next, 150); };
  }

  /* ---------- Registry, observers, main loop ---------- */
  var canvases = [], seen = typeof WeakSet !== 'undefined' ? new WeakSet() : null, io, rio;
  try {
    io = new IntersectionObserver(function (es) { es.forEach(function (en) { en.target.__vis = en.isIntersecting; }); }, { rootMargin: '120px' });
    rio = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) en.target.classList.add('is-in'); }); }, { threshold: .12 });
  } catch (e) {}

  var scanQ = false;
  function scan() {
    scanQ = false;
    var list = document.querySelectorAll('canvas[data-scene]'), i, el;
    for (i = 0; i < list.length; i++) {
      el = list[i];
      if (el.__reg) continue;
      el.__reg = 1; el.__vis = !io; canvases.push(el);
      if (io) io.observe(el);
      if (el.getAttribute('data-scene') === 'builder') wireBuilder(el);
    }
    var rv = document.querySelectorAll('[data-reveal]');
    for (i = 0; i < rv.length; i++) {
      el = rv[i];
      if (el.__rv) continue;
      el.__rv = 1;
      if (rio) rio.observe(el); else el.classList.add('is-in');
    }
    sync();
    renderTestimonials();
  }

  // Render testimonials from config
  function renderTestimonials() {
    var track = document.querySelector('[data-testimonials]');
    var testimonials = window.GSW_TESTIMONIALS || [];
    if (!track || !testimonials.length) return;
    track.innerHTML = testimonials.map(function (t) {
      return '<div class="testimonial-card" role="listitem">' +
        '<p class="testimonial-quote">' + t.quote + '</p>' +
        '<div class="testimonial-author">' +
        '<div class="testimonial-avatar" aria-hidden="true"></div>' +
        '<div>' +
        '<p class="testimonial-name">' + t.author + '</p>' +
        '<p class="testimonial-role">' + t.role + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';
    }).join('');
  }
  function queueScan() { if (!scanQ) { scanQ = true; requestAnimationFrame(scan); } }
  try { new MutationObserver(queueScan).observe(root, { childList: true, subtree: true }); } catch (e) {}
  document.addEventListener('DOMContentLoaded', queueScan);
  queueScan();

  // Pause animations when tab is hidden (P1-4)
  var isTabVisible = !document.hidden;
  document.addEventListener('visibilitychange', function () {
    isTabVisible = !document.hidden;
    if (isTabVisible) {
      requestAnimationFrame(tick);
    }
  });

  function tick(now) {
    if (!isTabVisible) return;
    var t = reduce ? 3 : now / 1000, i;
    pal();
    try { pin(); rail(); } catch (e) {}
    for (i = 0; i < canvases.length; i++) {
      var cv = canvases[i];
      if (!cv.isConnected || !cv.__vis) continue;
      var g = fit(cv);
      if (!g) continue;
      var s = cv.getAttribute('data-scene');
      try {
        if (s === 'builder') { g.cv = cv; drawB(g, t); }
        else if (SCENES[s]) SCENES[s](g.x, g.w, g.h, t);
      } catch (e) {}
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();



(function () {
  var root = document.getElementById('sysflow');
  if (!root) return;
  var nodes = [].slice.call(root.querySelectorAll('.sysnode'));
  var desc = document.getElementById('sysdesc');
  var cur = 0, manual = false, vis = false, reduce = false, swap = null;
  try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  function show(i) {
    cur = i;
    nodes.forEach(function (n, k) {
      n.setAttribute('aria-pressed', k === i ? 'true' : 'false');
      n.setAttribute('data-done', k < i ? '1' : '0');
    });
    var t = nodes[i].getAttribute('data-text') || '';
    clearTimeout(swap);
    desc.classList.add('out');
    swap = setTimeout(function () { desc.textContent = t; desc.classList.remove('out'); }, 200);
  }
  nodes.forEach(function (n, i) {
    n.addEventListener('click', function () { manual = true; show(i); });
  });
  try {
    new IntersectionObserver(function (es) { vis = es[0].isIntersecting; }, { threshold: .3 }).observe(root);
  } catch (e) { vis = true; }
  var aboutInterval = window.GSW_SETTINGS.aboutAutoRotateInterval || 3600;
  if (!reduce) setInterval(function () { if (vis && !manual) show((cur + 1) % nodes.length); }, aboutInterval);
})();




(function () {
  var cv = document.getElementById('pbg'), alur = document.getElementById('alur'), cp, on = false, rm = false;
  if (!cv || !alur || typeof CanvasParticles === 'undefined') { if (cv) cv.style.display = 'none'; return; }
  try { rm = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  if (rm) { cv.style.display = 'none'; return; }
  var particleCfg = window.GSW_SETTINGS.particles || {};
  try {
    cp = new CanvasParticles('#pbg', {
      mouse: { interactionType: 1, distRatio: .6 },
      particles: {
        color: particleCfg.color || '#2F7BFF',
        ppm: window.innerWidth < 640 ? (particleCfg.mobile || 20) : (particleCfg.desktop || 30),
        maxWork: particleCfg.maxWork || 20,
        connectDistance: particleCfg.connectDistance || 150,
        relSpeed: particleCfg.relSpeed || .45,
        relSize: particleCfg.relSize || 1.1
      },
      animation: { startOnEnter: false, stopOnLeave: false }
    });
  } catch (e) { cv.style.display = 'none'; return; }
  function upd() {
    var r = alur.getBoundingClientRect(), vh = window.innerHeight || 800, vis = r.bottom > 0;
    cv.style.opacity = vis ? .75 * Math.max(0, Math.min(1, r.bottom / (vh * .5))) : 0;
    if (vis && !on) { cp.start(); on = true; } else if (!vis && on) { cp.stop(); on = false; }
  }
  window.addEventListener('scroll', upd, { passive: true });
  window.addEventListener('resize', upd);
  upd();
})();

/* ---------- bagian 4 ---------- */
(function () {
  var INFO = {
    'Canvas': 'Elemen HTML untuk menggambar grafis 2D lewat JavaScript. Dipakai untuk animasi tanpa gambar atau video.',
    'WebSocket': 'Koneksi dua arah yang tetap terbuka antara browser dan server. Cocok untuk data real-time seperti game multiplayer.',
    'Node.js': 'Lingkungan untuk menjalankan JavaScript di sisi server.',
    'Next.js': 'Framework berbasis React untuk membuat situs cepat, dengan render di server dan routing bawaan.',
    'Tailwind': 'Framework CSS berbasis kelas utilitas. Tampilan diatur langsung di markup tanpa banyak file CSS.',
    'React': 'Library JavaScript untuk membangun antarmuka dari komponen yang bisa dipakai ulang.',
    'Firebase': 'Layanan backend dari Google: database, login, dan hosting tanpa mengelola server sendiri.',
    'PWA': 'Progressive Web App: situs yang bisa dipasang seperti aplikasi dan tetap berjalan saat koneksi buruk.',
    'Three.js': 'Library JavaScript untuk menampilkan grafis 3D di browser.',
    'GSAP': 'Library animasi JavaScript untuk gerakan yang halus dan mudah dikontrol.',
    'WebGL': 'API browser untuk grafis 2D dan 3D yang dipercepat GPU. Dasar dari banyak visual 3D di web.',
    'Vite': 'Alat build dan server pengembangan yang cepat untuk proyek web modern.',
    'Perlin Noise': 'Algoritma acak yang halus, dipakai untuk membuat medan, awan, atau tekstur yang terlihat alami.',
    'Vanilla JS': 'JavaScript murni, tanpa framework atau library tambahan.',
    'Parallax': 'Efek kedalaman: lapisan depan bergerak lebih cepat daripada lapisan belakang.',
    'Web Workers': 'Menjalankan JavaScript di thread terpisah supaya perhitungan berat tidak membuat halaman macet.',
    'Math.sin': 'Fungsi sinus di JavaScript, dasar untuk membuat gerakan bergelombang.',
    'RequestAnimationFrame': 'API browser untuk menjalankan animasi selaras dengan refresh layar, sehingga mulus dan hemat baterai.',
    '3D Math': 'Perhitungan vektor, matriks, dan proyeksi perspektif untuk menampilkan objek 3D di layar 2D.'
  };
  var tip = document.createElement('div'), cur = null;
  tip.className = 'techtip'; tip.setAttribute('role', 'tooltip'); tip.id = 'techtip';
  document.body.appendChild(tip);

  function prep() {
    var cs = document.querySelectorAll('.clip-tech .chip');
    for (var i = 0; i < cs.length; i++) {
      if (cs[i].__tt) continue;
      cs[i].__tt = 1;
      cs[i].setAttribute('role', 'button'); cs[i].setAttribute('tabindex', '0');
      cs[i].setAttribute('aria-expanded', 'false'); cs[i].setAttribute('aria-describedby', 'techtip');
    }
  }
  function hide() {
    tip.classList.remove('on');
    if (cur) cur.setAttribute('aria-expanded', 'false');
    cur = null;
  }
  function show(chip) {
    var name = chip.textContent.trim();
    tip.innerHTML = '<b></b><p></p>';
    tip.firstChild.textContent = name;
    tip.lastChild.textContent = INFO[name] || 'Teknologi yang dipakai di proyek ini.';
    tip.style.left = '0px'; tip.style.top = '0px';
    var r = chip.getBoundingClientRect(), w = tip.offsetWidth, h = tip.offsetHeight;
    var left = Math.max(12, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 12));
    var top = r.top - h - 10;
    if (top < 12) top = r.bottom + 10;
    tip.style.left = Math.round(left) + 'px'; tip.style.top = Math.round(top) + 'px';
    if (cur) cur.setAttribute('aria-expanded', 'false');
    cur = chip; chip.setAttribute('aria-expanded', 'true');
    tip.classList.add('on');
  }
  function toggle(chip) { cur === chip ? hide() : show(chip); }

  document.addEventListener('click', function (e) {
    var chip = e.target.closest ? e.target.closest('.clip-tech .chip') : null;
    if (chip) { e.preventDefault(); e.stopPropagation(); toggle(chip); return; }
    if (!e.target.closest || !e.target.closest('.techtip')) hide();
  }, true);
  document.addEventListener('keydown', function (e) {
    var chip = e.target.closest ? e.target.closest('.clip-tech .chip') : null;
    if (chip && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); toggle(chip); }
    else if (e.key === 'Escape') hide();
  });
  window.addEventListener('scroll', hide, { passive: true });
  window.addEventListener('resize', hide);
  prep();
  try { new MutationObserver(prep).observe(document.body, { childList: true, subtree: true }); } catch (x) {}
})();

/* ---------- bagian 5 ---------- */
(function () {
  var box = document.querySelector('.logic'), cv = box && box.querySelector('.logic-bg');
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext('2d'), pts = [], W = 0, H = 0, raf = 0, vis = false, i;
  var red = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr = Math.min(window.devicePixelRatio || 1, 2), LINK = 120;

  function size() {
    var r = box.getBoundingClientRect();
    W = Math.max(1, r.width); H = Math.max(1, r.height);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.round(Math.max(14, Math.min(34, W * H / 22000)));
    while (pts.length < n) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .2, vy: (Math.random() - .5) * .2 });
    pts.length = n;
    for (i = 0; i < n; i++) { if (pts[i].x > W) pts[i].x = Math.random() * W; if (pts[i].y > H) pts[i].y = Math.random() * H; }
    draw(false);
  }
  function draw(move) {
    ctx.clearRect(0, 0, W, H);
    var a, b, d, p, j;
    for (i = 0; i < pts.length; i++) {
      p = pts[i];
      if (move) {
        p.vx += (Math.random() - .5) * .018; p.vy += (Math.random() - .5) * .018;
        var sp = Math.hypot(p.vx, p.vy);
        if (sp > .26) { p.vx *= .26 / sp; p.vy *= .26 / sp; } else if (sp < .05) { p.vx *= 1.4; p.vy *= 1.4; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); } else if (p.x > W) { p.x = W; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); } else if (p.y > H) { p.y = H; p.vy = -Math.abs(p.vy); }
      }
    }
    ctx.lineWidth = 1;
    for (i = 0; i < pts.length; i++) {
      a = pts[i];
      for (j = i + 1; j < pts.length; j++) {
        b = pts[j]; d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK) { ctx.strokeStyle = 'rgba(31,111,235,' + ((1 - d / LINK) * .16).toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
    }
    ctx.fillStyle = 'rgba(31,111,235,.28)';
    for (i = 0; i < pts.length; i++) { ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, 1.6, 0, 6.2832); ctx.fill(); }
  }
  function loop() { if (!vis) return; draw(true); raf = requestAnimationFrame(loop); }

  size();
  if (window.ResizeObserver) new ResizeObserver(size).observe(box); else window.addEventListener('resize', size);
  if (!red && window.IntersectionObserver) {
    new IntersectionObserver(function (es) {
      vis = es[0].isIntersecting; cancelAnimationFrame(raf); if (vis) loop();
    }).observe(box);
  }

  // Parallax sangat halus untuk kartu (tidak jalan jika reduced motion)
  var g = box.querySelector('.logic-g'), tick = false;
  if (g && !red) {
    var upd = function () {
      tick = false;
      var r = g.getBoundingClientRect(), p = ((r.top + r.height / 2) - window.innerHeight / 2) / window.innerHeight;
      g.style.setProperty('--py', (Math.max(-1, Math.min(1, p)) * 10).toFixed(2));
    };
    window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }
})();
