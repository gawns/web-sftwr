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
  sendEndpoint: '',  // e.g., 'https://your-server.com/api/leads'
  waNumber: ''       // e.g., '6281234567890'
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
  sendStatusSending: 'Mengirim Pesan ke Ghaiyyaz Atha',
  sendStatusReceived: 'Menerima Ide',
  sendStatusDelivering: 'Mengirim pesan ke Ghaiyyaz Atha',
  sendResult: {
    ok: 'Terkirim, Terima Kasih',
    wa: 'Lanjut di WhatsApp, Terima Kasih',
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
    color: '#D32030',
    connectDistance: 150,
    relSpeed: 0.45,
    relSize: 1.1,
    maxWork: 20
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