export interface Product {
    id: string;
    name: string;
    title: string; // compatibility with home.ts
    price: number;
    description: string;
    category: string;
    subcategory?: string;
    brand?: string; // <-- TAMBAHAN UNTUK FILTER MEREK
    stock: number;
    images: string[];
    slug: string;
    badge?: string;
    discount?: number;
    specs?: { label: string; value: string }[];
}

export const products: Product[] = [
    // ==========================================
    // KATEGORI: UNDANGAN
    // ==========================================
    {
        id: "u1",
        name: "E.23.1 (XH) - Undangan Hardcover Elegan",
        title: "Undangan Hardcover Elegan",
        price: 12700,
        description: "Undangan pernikahan premium dengan hardcover tebal dan sentuhan akhir yang mewah. Cocok untuk pernikahan dengan tema elegan dan klasik. Desain custom sesuai keinginan Anda.",
        category: "undangan",
        subcategory: "hardcover-amplop",
        stock: 999,
        images: [
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "undangan-hardcover-elegan-e231",
        badge: "Best Seller",
        discount: 0,
        specs: [
            { label: "Jenis", value: "Hardcover (Rectangle)" },
            { label: "Bahan", value: "Yellow Board K30 & Buffalo White" },
            { label: "Ukuran", value: "12.5 x 18.5 cm" },
            { label: "Amplop", value: "Aster Olive Green" },
            { label: "Aksesoris", value: "Vellum Belt, Waxseal, Dried Flower" }
        ]
    },
    {
        id: "u2",
        name: "S.01.2 - Undangan Softcover Minimalis",
        title: "Undangan Softcover Minimalis",
        price: 5500,
        description: "Pilihan hemat untuk undangan pernikahan Anda. Menggunakan kertas berkualitas dengan desain modern dan minimalis.",
        category: "undangan",
        subcategory: "softcover",
        stock: 999,
        images: [
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "undangan-softcover-minimalis-s012",
        badge: "Hemat",
        specs: [
            { label: "Jenis", value: "Softcover" },
            { label: "Bahan", value: "Art Carton 260gsm" },
            { label: "Ukuran", value: "11 x 21 cm" },
            { label: "Finishing", value: "Doff / Glossy" }
        ]
    },

    // ==========================================
    // KATEGORI: BLANGKO (BARU)
    // ==========================================
    {
        id: "blangko-raffa-001",
        name: "Raffa 003",
        title: "Undangan Blangko Raffa 003",
        price: 1500,
        description: "Undangan blangko merek Raffa model 003. Bisa custom nama dan tanggal saat dicetak nanti.",
        category: "blangko",
        subcategory: "blangko-softcover",
        brand: "Raffa", // <-- Merek
        stock: 500,
        images: [
            "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "blangko-raffa-003",
        badge: "Murah",
        specs: [
            { label: "Jenis", value: "Softcover" },
            { label: "Bahan", value: "HVS 80gsm" },
            { label: "Ukuran", value: "10 x 20 cm" }
        ]
    },
    {
        id: "blangko-raffa-002",
        name: "Raffa 004",
        title: "Undangan Blangko Raffa 004",
        price: 1500,
        description: "Undangan blangko merek Raffa model 004 dengan desain floral minimalis.",
        category: "blangko",
        subcategory: "blangko-softcover",
        brand: "Raffa",
        stock: 500,
        images: [
            "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "blangko-raffa-004",
        specs: [
            { label: "Jenis", value: "Softcover" },
            { label: "Bahan", value: "HVS 80gsm" },
            { label: "Ukuran", value: "10 x 20 cm" }
        ]
    },
    {
        id: "blangko-mira-001",
        name: "Mira 99",
        title: "Undangan Blangko Mira 99",
        price: 1200,
        description: "Undangan blangko merek Mira model 99. Cocok untuk undangan syukuran atau acara formal.",
        category: "blangko",
        subcategory: "blangko-softcover",
        brand: "Mira",
        stock: 300,
        images: [
            "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "blangko-mira-99",
        specs: [
            { label: "Jenis", value: "Softcover" },
            { label: "Bahan", value: "HVS 70gsm" },
            { label: "Ukuran", value: "10 x 20 cm" }
        ]
    },
    {
        id: "blangko-cantik99-001",
        name: "Cantik99 Premium 01",
        title: "Undangan Blangko Cantik99 Premium 01",
        price: 2500,
        description: "Undangan blangko hardcover dari Cantik99 dengan bahan tebal dan mewah.",
        category: "blangko",
        subcategory: "blangko-hardcover",
        brand: "Cantik99",
        stock: 200,
        images: [
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "blangko-cantik99-premium-01",
        badge: "Premium",
        specs: [
            { label: "Jenis", value: "Hardcover" },
            { label: "Bahan", value: "Yellow Board" },
            { label: "Ukuran", value: "12 x 18 cm" }
        ]
    },

    // ==========================================
    // KATEGORI: SOUVENIR
    // ==========================================
    {
        id: "s1",
        name: "Tumbler Custom Exclusive",
        title: "Tumbler Custom",
        price: 45000,
        description: "Souvenir pernikahan atau perusahaan berupa tumbler stainless dengan cetak logo atau nama custom. Tahan panas dan dingin.",
        category: "souvenir",
        subcategory: "tumbler",
        stock: 500,
        images: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "tumbler-custom-exclusive",
        badge: "Favorit",
        specs: [
            { label: "Bahan", value: "Stainless Steel 304" },
            { label: "Kapasitas", value: "500 ml" },
            { label: "Cetak", value: "UV Print / Laser Engrave" },
            { label: "Minimal Order", value: "50 Pcs" }
        ]
    },
    {
        id: "s2",
        name: "Tote Bag Kanvas Custom",
        title: "Tote Bag Kanvas",
        price: 25000,
        description: "Tas kanvas serbaguna yang cocok untuk souvenir seminar, pernikahan, atau merchandise perusahaan. Bahan tebal dan kuat.",
        category: "souvenir",
        subcategory: "tote-bag",
        stock: 300,
        images: [
            "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "tote-bag-kanvas-custom",
        specs: [
            { label: "Bahan", value: "Kanvas Cotton 12oz" },
            { label: "Ukuran", value: "30 x 40 cm" },
            { label: "Handle", value: "Tali Kanvas / Webing" },
            { label: "Cetak", value: "Sablon Manual / DTF" }
        ]
    },
    {
        id: "s3",
        name: "Payung Lipat Custom Logo",
        title: "Payung Custom",
        price: 65000,
        description: "Payung lipat premium untuk souvenir perusahaan. Cetak logo full color di seluruh bagian kanopi.",
        category: "souvenir",
        subcategory: "payung",
        stock: 150,
        images: [
            "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "payung-lipat-custom",
        specs: [
            { label: "Bahan", value: "Pongee / Parasut" },
            { label: "Rangka", value: "Fiberglass Anti Angin" },
            { label: "Cetak", value: "Sablon Full Color" }
        ]
    },

    // ==========================================
    // KATEGORI: PERCETAKAN
    // ==========================================
    {
        id: "p1",
        name: "Buku Kenangan (Yearbook) Premium",
        title: "Buku Kenangan Premium",
        price: 150000,
        description: "Cetak buku kenangan sekolah atau komunitas dengan kualitas cetak offset terbaik. Jilid hardcover tebal dan tahan lama.",
        category: "percetakan",
        subcategory: "buku-kenangan",
        stock: 100,
        images: [
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "buku-kenangan-premium",
        badge: "Premium",
        specs: [
            { label: "Ukuran", value: "A4 / B5 Custom" },
            { label: "Isi", value: "Art Paper 150gsm (Full Color)" },
            { label: "Cover", value: "Hardcover + Spot UV" },
            { label: "Jilid", value: "Lemb / Jahit Benang" }
        ]
    },
    {
        id: "p2",
        name: "Brosur Lipat 3 (Trifold)",
        title: "Cetak Brosur Lipat 3",
        price: 1500,
        description: "Cetak brosur promosi produk atau jasa dengan lipatan 3. Harga sangat ekonomis untuk pemesanan dalam jumlah banyak.",
        category: "percetakan",
        subcategory: "brosur",
        stock: 5000,
        images: [
            "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "brosur-lipat-3-trifold",
        specs: [
            { label: "Bahan", value: "Art Paper 120gsm / 150gsm" },
            { label: "Ukuran", value: "A4 (dilipat jadi A5)" },
            { label: "Cetak", value: "Full Color 2 Sisi" },
            { label: "Finishing", value: "Lipat 3 / Lipat 2" }
        ]
    },
    {
        id: "p3",
        name: "Box Packaging Makanan Custom",
        title: "Packaging Makanan Custom",
        price: 2500,
        description: "Kemasan makanan (food grade) yang bisa dicetak sesuai brand Anda. Cocok untuk kue, snack, atau katering.",
        category: "percetakan",
        subcategory: "packaging-makanan",
        stock: 1000,
        images: [
            "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "box-packaging-makanan",
        specs: [
            { label: "Bahan", value: "Food Grade Ivory / Kraft" },
            { label: "Ukuran", value: "Custom" },
            { label: "Cetak", value: "Offset Full Color" },
            { label: "Minimal Order", value: "500 Pcs" }
        ]
    },

    // ==========================================
    // KATEGORI: DIGITAL
    // ==========================================
    {
        id: "d1",
        name: "Undangan Digital Web Interaktif",
        title: "Undangan Web Interaktif",
        price: 150000,
        description: "Undangan pernikahan digital berbasis website dengan animasi, musik, RSVP, dan galeri foto. Bisa dibagikan via WhatsApp.",
        category: "digital",
        stock: 999,
        images: [
            "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "undangan-digital-web",
        badge: "Trending",
        specs: [
            { label: "Platform", value: "Website Responsive" },
            { label: "Fitur", value: "RSVP, Maps, Galeri, Musik" },
            { label: "Masa Aktif", value: "Selamanya (1 Tahun)" },
            { label: "Revisi", value: "Unlimited (maks 3 hari)" }
        ]
    }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);