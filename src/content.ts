/*
 * All site copy and data in one place.
 *
 * Values wrapped in [square brackets] are placeholders: replace them with real
 * Mandarin Academy Semarang data (numbers, names, testimonials, address, contacts).
 * Every `image` without a `src` renders as a labelled placeholder — drop a file in
 * /public/images and set `src: '/images/<file>'` to show the real photo.
 */

export interface ImageRef {
  alt: string
  src?: string
}

export const brand = {
  name: 'Mandarin Academy Semarang',
  shortName: 'Mandarin Academy',
  tagline: 'Pusat Belajar Bahasa Mandarin di Semarang',
  // TODO: real WhatsApp number in international format, digits only
  whatsapp: '6280000000000',
  phone: '[+62 800-0000-0000]',
  email: '[email@mandarinacademysemarang.com]',
  instagram: { handle: '[@mandarinacademysemarang]', url: 'https://www.instagram.com/' },
}

export const waLink = (message = `Halo ${brand.name}, saya ingin bertanya tentang kelas Mandarin.`) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Tentang', to: '/tentang' },
  { label: 'Program', to: '/program' },
]

export const hero = {
  eyebrow: brand.tagline,
  title: 'Kuasai Bahasa Mandarin, Raih Peluang yang Lebih Luas',
  description:
    'Kelas Mandarin untuk anak, remaja, dan dewasa — tatap muka di Semarang atau online dari mana saja, bersama pengajar yang berpengalaman.',
  image: {
    alt: 'Ilustrasi guru dan siswa belajar bahasa Mandarin secara online',
    src: '/images/hero-home.webp',
  } as ImageRef,
}

// TODO: replace with real figures
export const stats = [
  { icon: 'school', value: '[000]+', label: 'Siswa Terdaftar' },
  { icon: 'sentiment_satisfied', value: '[00]%', label: 'Siswa Puas' },
  { icon: 'trending_up', value: '[00]%', label: 'Peningkatan Kemampuan' },
]

export const about = {
  title: 'Tentang Kami',
  paragraphs: [
    `${brand.name} adalah lembaga kursus bahasa Mandarin untuk anak-anak, remaja, dan dewasa. Kami membuka kelas tatap muka di Semarang serta kelas online yang bisa diikuti dari mana saja.`,
    'Pengajar kami berpengalaman dan membawakan materi secara interaktif, sehingga belajar terasa menyenangkan — bukan sekadar menghafal.',
    'Kami percaya kemampuan berbahasa Mandarin adalah bekal penting untuk menghadapi masa depan yang terus berubah, baik untuk sekolah, karier, maupun bisnis.',
  ],
  image: {
    alt: 'Ilustrasi anak, remaja, dan dewasa belajar bahasa Mandarin bersama',
    src: '/images/about.webp',
  } as ImageRef,
}

export const whyUs = {
  title: `Mengapa Harus ${brand.name}?`,
  items: [
    {
      icon: 'tune',
      title: 'Program Fleksibel',
      description:
        'Materi dan jadwal menyesuaikan kebutuhan serta kemampuan setiap siswa, mulai dari anak-anak hingga profesional.',
    },
    {
      icon: 'groups',
      title: 'Kelas Kecil',
      description:
        'Satu kelas reguler hanya berisi sedikit siswa, sehingga guru bisa memperhatikan perkembangan setiap siswa.',
    },
    {
      icon: 'record_voice_over',
      title: 'Metode Interaktif',
      description:
        'Pembelajaran berfokus pada praktik berbicara agar siswa berani dan percaya diri menggunakan bahasa Mandarin.',
    },
  ],
}

export const reasons = {
  title: 'Alasan Kenapa Harus Belajar Bahasa Mandarin',
  image: {
    alt: 'Ilustrasi siswa belajar bahasa Mandarin dengan laptop',
    src: '/images/reasons.webp',
  } as ImageRef,
  items: [
    { icon: 'language', text: 'Bahasa Mandarin termasuk bahasa dengan jumlah penutur terbanyak di dunia.' },
    { icon: 'public', text: 'Tiongkok memegang peran besar dalam perekonomian dan perdagangan global.' },
    { icon: 'business', text: 'Tiongkok termasuk sumber investasi asing terbesar di Indonesia.' },
    { icon: 'work', text: 'Kemampuan berbahasa Mandarin membuka peluang karier dan bisnis yang lebih luas.' },
  ],
}

// TODO: keep only the programs you actually offer
export const programs = {
  title: 'Program Kami',
  description: 'Pilih program yang sesuai dengan usia, tujuan, dan jadwalmu.',
  items: [
    {
      title: 'Mandarin untuk Anak',
      badge: '4–15 tahun',
      description: 'Bangun fondasi bahasa Mandarin sejak dini lewat kelas yang seru dan sesuai usia.',
      image: {
        alt: 'Ilustrasi guru mengajar kosakata Mandarin kepada anak-anak dengan kartu bergambar',
        src: '/images/program-kids.webp',
      } as ImageRef,
    },
    {
      title: 'Mandarin untuk Dewasa',
      badge: 'Dewasa',
      description: 'Bahasa Mandarin praktis untuk menunjang karier, bisnis, dan perjalanan.',
      image: {
        alt: 'Ilustrasi dua orang dewasa berlatih percakapan bahasa Mandarin',
        src: '/images/program-adult.webp',
      } as ImageRef,
    },
    {
      title: 'Program Mandarin Private',
      badge: 'Semua usia',
      description: 'Belajar satu-satu dengan guru, jadwal mengikuti kesibukanmu.',
      image: {
        alt: 'Ilustrasi guru membimbing siswa menulis aksara Mandarin secara private',
        src: '/images/program-private.webp',
      } as ImageRef,
    },
    {
      title: 'Persiapan Kuliah di Tiongkok',
      badge: 'Calon Mahasiswa',
      description: 'Persiapan bahasa Mandarin untuk calon mahasiswa yang akan melanjutkan studi di Tiongkok.',
      image: {
        alt: 'Ilustrasi siswa siap berangkat kuliah ke universitas di Tiongkok',
        src: '/images/program-study-china.webp',
      } as ImageRef,
    },
    {
      title: 'Company Training',
      badge: 'Perusahaan',
      description: 'Pelatihan Mandarin untuk karyawan, dengan materi, jadwal, dan lokasi yang disesuaikan.',
      image: {
        alt: 'Ilustrasi pelatihan bahasa Mandarin bisnis untuk karyawan perusahaan',
        src: '/images/program-company.webp',
      } as ImageRef,
    },
    {
      title: 'Persiapan Ujian HSK',
      badge: 'HSK 1–6',
      description: 'Pendalaman kosakata, strategi, dan latihan soal untuk ujian HSK level 1 sampai 6.',
      image: {
        alt: 'Ilustrasi siswa berlatih soal ujian HSK dengan buku dan pengatur waktu',
        src: '/images/program-hsk.webp',
      } as ImageRef,
    },
  ],
}

export const onlinePackages = {
  title: 'Paket Online Eksklusif',
  description: 'Belajar Mandarin dari rumah dengan paket yang bisa kamu pilih sesuai gaya belajarmu.',
  items: [
    { icon: 'person', title: 'Private 1-on-1', description: 'Satu guru, satu siswa, fokus penuh pada target belajarmu.' },
    { icon: 'video_call', title: 'Group Video Call', description: 'Belajar bersama teman dalam kelompok kecil secara live.' },
    { icon: 'auto_stories', title: 'Semi Self Study', description: 'Belajar mandiri dengan materi lengkap dan pendampingan guru.' },
    { icon: 'home', title: 'Belajar dari Rumah', description: 'Tetap produktif belajar Mandarin tanpa harus keluar rumah.' },
  ],
}

export const onlineClasses = {
  title: 'Alternatif Kelas Online',
  description: 'Tiga pilihan format kelas online yang bisa diikuti dari mana saja.',
  items: [
    {
      id: 'group',
      title: 'Group Video Call',
      image: {
        alt: 'Ilustrasi siswa mengikuti kelas Mandarin online lewat video call bersama guru dan teman',
        src: '/images/online-group.webp',
      } as ImageRef,
      features: [
        'Tersedia dari level pemula hingga mahir',
        'Kelompok kecil, 3–6 peserta per kelas',
        'Melalui Google Meet atau Zoom',
        'Interaksi langsung dengan guru dan teman sekelas',
        'Rekaman kelas bisa diputar ulang',
      ],
    },
    {
      id: 'private',
      title: 'Private Video Call',
      image: {
        alt: 'Ilustrasi siswa belajar Mandarin satu-satu dengan guru lewat video call',
        src: '/images/online-private.webp',
      } as ImageRef,
      features: [
        'Materi disesuaikan dengan level dan tujuanmu',
        'Melalui Google Meet atau Zoom',
        'Belajar lebih fokus dan efisien',
        'Interaksi langsung satu-satu dengan guru',
        'Jadwal dan jumlah pertemuan fleksibel',
        'Rekaman kelas bisa diputar ulang',
      ],
    },
    {
      id: 'semi',
      title: 'Semi Self Study',
      image: {
        alt: 'Ilustrasi siswa belajar Mandarin mandiri dengan video pelajaran di laptop',
        src: '/images/online-semi.webp',
      } as ImageRef,
      features: [
        'Biaya lebih terjangkau',
        'Materi berupa video, eBook, audio, kuis, dan latihan',
        'Semua materi tersedia di platform belajar online (LMS)',
        'Bisa diakses kapan saja dan di mana saja',
        'Konsultasi dengan guru melalui WhatsApp',
        'Cocok untuk pemula',
      ],
    },
  ],
}

export const schedules = {
  title: 'Jadwal Kelas',
  description: 'Lihat jadwal kelas terbaru dan pilih waktu yang paling cocok untukmu.',
  items: [
    {
      title: 'Jadwal Kelas Baru — Mandarin Anak',
      description: 'Jadwal kelas reguler untuk anak usia 4–15 tahun, offline dan online.',
      image: {
        alt: 'Ilustrasi guru mengajar kosakata Mandarin kepada anak-anak dengan kartu bergambar',
        src: '/images/program-kids.webp',
      } as ImageRef,
    },
    {
      title: 'Jadwal Kelas Baru — Mandarin Dewasa',
      description: 'Jadwal kelas reguler untuk dewasa, tersedia pilihan pagi, sore, dan malam.',
      image: {
        alt: 'Ilustrasi dua orang dewasa berlatih percakapan bahasa Mandarin',
        src: '/images/program-adult.webp',
      } as ImageRef,
    },
  ],
}

// TODO: replace with your real teachers
export const teachers = {
  title: 'Guru yang Profesional di Bidangnya',
  description:
    'Pengajar kami berpengalaman dan terlatih membimbing siswa dari nol, sehingga siapa pun bisa mulai belajar dengan nyaman.',
  items: [1, 2, 3, 4, 5].map((n) => ({
    name: '[Nama Guru] Laoshi',
    university: '[Universitas]',
    image: { alt: 'Foto guru', src: `/images/teacher-${n}.webp` } as ImageRef,
  })),
}

// TODO: replace with real, permission-given student testimonials
export const testimonials = {
  title: 'Apa Kata Mereka?',
  items: Array.from({ length: 3 }, () => ({
    name: '[Nama Siswa]',
    role: '[Pekerjaan / Program]',
    quote: '[Tulis testimoni asli dari siswa di sini.]',
  })),
}

// TODO: real address and map query
export const location = {
  title: `Lokasi ${brand.name}`,
  name: brand.name,
  address: '[Alamat lengkap], Semarang, Jawa Tengah',
  mapsQuery: 'Semarang, Jawa Tengah',
}

export const cta = {
  title: 'Siap Mulai Belajar Mandarin?',
  description: 'Hubungi kami dan temukan kelas yang paling cocok untukmu.',
  button: 'Daftar Sekarang',
  image: {
    alt: 'Ilustrasi guru Mandarin menyapa sambil memegang buku pelajaran',
    src: '/images/cta.webp',
  } as ImageRef,
}

export const tentangHero = {
  title: `Tentang ${brand.name}`,
  description: 'Tempat belajar bahasa Mandarin yang menyenangkan untuk semua usia, di Semarang dan online.',
  image: {
    alt: 'Ilustrasi anak, remaja, dan dewasa belajar bahasa Mandarin bersama',
    src: '/images/tentang-hero.webp',
  } as ImageRef,
}

export const footer = {
  blurb: `${brand.name} adalah tempat belajar bahasa Mandarin untuk anak, remaja, dan dewasa, dengan kelas tatap muka di Semarang dan kelas online.`,
}
