# Preloved by Petra

Website statis untuk jual barang pribadi (preloved), dibangun pakai Astro.

## Cara jalanin di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:4321

## Cara nambah / edit barang

Edit file `src/data/products.js`. Setiap barang formatnya:

```js
{
  id: "nama-unik-tanpa-spasi",       // dipakai sebagai URL halaman detail: /produk/nama-unik-tanpa-spasi
  name: "Nama Barang",
  price: 100000,
  condition: "Bagus, 85%",
  description: "Deskripsi singkat, muncul di kartu daftar barang.",
  longDescription: "Deskripsi panjang, muncul di halaman detail barang. Opsional — kalau dikosongkan, akan pakai description.",
  image: "/products/nama-file.jpg",
  gallery: [],                        // opsional, array foto tambahan untuk halaman detail
  details: [                          // opsional, spesifikasi tambahan di halaman detail
    { label: "Ukuran", value: "L" },
    { label: "Warna", value: "Biru" },
  ],
  soldOut: false,
}
```

- **Nambah barang baru**: copy salah satu blok, ganti isinya.
- **Tandai sold out**: ubah `soldOut: false` jadi `soldOut: true`. Barang otomatis pindah ke bawah dan dapat label "Sold out" di kartu maupun halaman detail.
- **Foto**: taruh file gambar di folder `public/products/`, lalu isi `image` dengan path-nya, contoh `/products/kamera.jpg`. Bisa juga pakai link foto dari internet.
- **Halaman detail**: tiap barang otomatis punya halaman sendiri di `/produk/<id>`, bisa diakses dengan klik kartu barang di halaman utama.

## Cara ganti nomor WhatsApp / nama toko

Edit file `src/data/config.js`.

## Cara build & deploy (contoh: Vercel / Netlify)

```bash
npm run build
```

Hasil build ada di folder `dist/`. Tinggal upload folder itu, atau hubungkan repo GitHub ke Vercel/Netlify — mereka otomatis detect Astro dan build sendiri (build command: `npm run build`, output dir: `dist`).
