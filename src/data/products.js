// ============================================
// DAFTAR PRODUK
// ============================================
// Cara pakai:
// - Tambah barang baru: copy salah satu blok { ... } lalu isi datanya
// - Sold out: ubah soldOut: false jadi soldOut: true
// - Foto utama: taruh file gambar di folder public/products/ lalu isi
//   image: "/products/nama-file.jpg"
//   (boleh juga pakai link foto dari luar, contoh: "https://...")
// - gallery: array foto tambahan (opsional), boleh dikosongkan []
// - details: daftar spesifikasi/info tambahan (opsional), format { label, value }
// - longDescription: deskripsi panjang untuk halaman detail (opsional,
//   kalau dikosongkan akan pakai "description")
// - condition: kondisi barang, bebas isi teksnya
// ============================================
// ALCHA DESKMAT JAPAN MOON FISH MOUSEPAD MOUSE PAD DESK MAT 90 X 40 CM - WHITE - 250k (Bisa Nego)

export const products = [
  {
    id: "alcha-deskmat-japan-moon-fish",
    name: "Alcha Deskmat Japan Moon Fish Mousepad 90 X 40 CM - WHITE",
    price: 250000,
    condition: "Like new, 95%",
    description: "Mulus, hanya kusam sedikit dan bisa dibersihkan.",
    longDescription:
      "Dibeli tahun 2023 dan dipakai untuk gaming ringan. Kondisi masih bagus, hanya ada sedikit kusam karena pemakaian.",
    image: "/products/Deskmate-White.webp",
    gallery: [],
    details: [
      { label: "Merek", value: "Alcha" },
      { label: "Ukuran", value: "90 X 40 CM" },
      { label: "Tahun beli", value: "2025" },
      { label: "Kelengkapan", value: "Mousepad, tas kain" },
      { label: "Alasan jual", value: "Upgrade ke deskmat lain" },
    ],
    soldOut: false,
  },
  {
    id: "keyboard-leaven",
    name: "Keyboard Leaven K620 RGB Mechanical",
    price: 150000,
    condition: "Sold",
    description: "Unit bekas, masih bisa dipakai untuk kebutuhan dasar.",
    longDescription:
      "Keyboard bekas yang dijual karena sudah tidak terpakai lagi. Kondisinya cukup layak untuk dipakai sehari-hari.",
    image: "/products/Leaven.webp",
    gallery: [],
    details: [
      { label: "Merek", value: "Leaven" },
      { label: "Model", value: "K620 RGB Mechanical" },
      { label: "Jenis", value: "60%" },
      { label: "Konektivitas", value: "Wired, USB" },
      { label: "Kelengkapan", value: "Keyboard, kabel USB, Box" },
      { label: "Kondisi", value: "90%" },
      {
        label: "Alasan jual",
        value: "Sudah Upgrade dan tidak terpakai lagi",
      },
    ],
    soldOut: true,
  },
  {
    id: "vr-shinecon",
    name: "VR Shinecon",
    price: 50000,
    condition: "Bagus, 80%",
    description: "Headset VR untuk smartphone, cocok untuk hiburan ringan.",
    longDescription:
      "VR Shinecon masih berfungsi dengan baik untuk menonton video atau bermain konten VR sederhana. Cocok untuk pengguna yang ingin mencoba pengalaman VR dengan budget terjangkau.",
    image: "/products/VR-BOX.webp",
    gallery: [],
    details: [
      { label: "Jenis", value: "VR headset" },
      { label: "Kesesuaian", value: "Smartphone" },
      { label: "Kondisi", value: "Bagus, masih layak pakai" },
    ],
    soldOut: false,
  },
  {
    id: "gamepad-machenike-g3-v2",
    name: "Gamepad Machenike G3 V2",
    price: 350000,
    condition: "Bagus, 85%",
    description: "Gamepad cocok untuk PC dan Android, bisa nego.",
    longDescription:
      "Gamepad Machenike G3 V2 masih berfungsi baik dan nyaman dipakai untuk bermain game. Cocok untuk kebutuhan gaming ringan sampai menengah.",
    image: "/products/Machenike.webp",
    gallery: [],
    details: [
      { label: "Merk", value: "Machenike" },
      {
        label: "Konektivitas",
        value: "Wired, Wireless(Bluetooth), Dongle USB",
      },
      { label: "Kelengkapan", value: "Kabel USB, Box, Docking (lengkap)" },
      { label: "Kompatibilitas", value: "PC, Android" },
      { label: "Kondisi", value: "Bagus, 100%" },
    ],
    soldOut: false,
  },
  {
    id: "casio-fx-991ex",
    name: "Casio FX-991EX",
    price: 100000,
    condition: "Bagus, 90%",
    description: "Calculator scientific, masih normal dan siap pakai.",
    longDescription:
      "Casio FX-991EX adalah kalkulator scientific yang cocok untuk pelajar maupun kerja hitung cepat. Unit masih berfungsi dengan baik dan siap digunakan.",
    image: "/products/Casio.webp",
    gallery: [],
    details: [
      { label: "Merek", value: "Casio" },
      { label: "Model", value: "FX-991EX" },
      { label: "Fungsi", value: "Scientific calculator" },
      { label: "Kondisi", value: "Bagus, 90%" },
    ],
    soldOut: false,
  },
  {
    id: "speaker-jete-sm3",
    name: "Speaker JETE SM3",
    price: 100000,
    condition: "Unit only",
    description: "Speaker bekas, dijual unit only tanpa aksesoris tambahan.",
    longDescription:
      "Speaker JETE SM3 dijual dalam kondisi unit saja. Masih bisa dipakai untuk kebutuhan audio dasar, namun tidak termasuk aksesoris tambahan.",
    image: "/products/JETE.webp",
    gallery: [],
    details: [
      { label: "Merek", value: "JETE" },
      { label: "Model", value: "SM3" },
      { label: "Status", value: "Unit only" },
      { label: "Koneksi", value: "Bluetooth" },
      { label: "Catatan", value: "Tanpa aksesoris tambahan" },
    ],
    soldOut: false,
  },
  {
    id: "ram-4gb-ddr4-lenovo",
    name: "RAM 4GB DDR4 Original Part Laptop Lenovo",
    price: 250000,
    condition: "Original part, 90%",
    description:
      "RAM 4GB DDR4 original part laptop Lenovo, dijual karena sudah upgrade.",
    longDescription:
      "RAM 4GB DDR4 original part untuk laptop Lenovo. Dijual karena sudah dilakukan upgrade ke kapasitas yang lebih besar, namun masih layak dipakai untuk kebutuhan dasar.",
    image: "/products/RAM.jpg",
    gallery: [],
    details: [
      { label: "Jenis", value: "RAM DDR4" },
      { label: "Kapasitas", value: "4GB" },
      { label: "Kesesuaian", value: "Original part laptop Lenovo" },
      { label: "Alasan jual", value: "Sudah upgrade" },
    ],
    soldOut: false,
  },
];
