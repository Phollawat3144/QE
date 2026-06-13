import React from "react";
import Link from "next/link";

// 1. จำลองข้อมูลชื่อมหาวิทยาลัยอิงตาม ID
const universityNames: Record<string, string> = {
  cu: "Chulalongkorn University",
  tu: "Thammasat University",
  mu: "Mahidol University",
  ku: "Kasetsart University",
  cmu: "Chiang Mai University",
  kku: "Khon Kaen University",
};

// 2. จำลองข้อมูลรูป Banner ตาม ID
const universityBanners: Record<string, string> = {
  cu: "https://www.prachachat.net/wp-content/uploads/2022/06/faculty-hero-1440x900-1.jpg",
  tu: "https://tu.ac.th/app/uploads/2026/05/69-354-scaled.jpg",
  mu: "https://www.prachachat.net/wp-content/uploads/2024/03/mihidol.jpg",
  ku: "https://f.ptcdn.info/707/069/000/qbjrn78d1eOU4sP98rxe-o.jpg",
  cmu: "https://thaipublica.org/wp-content/uploads/2019/02/IMG_6332.jpg",
  kku: "https://www.kku.ac.th/wp-content/uploads/2021/02/sc.jpg",
};

// 3. จำลองข้อมูลสินค้า (Mock Products)
const products = [
  {
    id: 1,
    name: "Men's Long Sleeve Shirt",
    category: "UNIVERSAL",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&auto=format&fit=crop&q=60", 
  },
  {
    id: 2,
    name: "Official Pleated Navy Skirt",
    category: "UNIVERSAL",
    price: 380.00,
    image: "https://images.unsplash.com/photo-1583496661160-c588c25a5573?w=500&auto=format&fit=crop&q=60", 
  },
  {
    id: 3,
    name: "Official Engineering Pin",
    category: "FACULTY GEAR",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1614362705353-8515cecf3fa4?w=500&auto=format&fit=crop&q=60", 
  },
  {
    id: 4,
    name: "Premium Leather Belt Set",
    category: "ACCESSORIES",
    price: 590.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60", 
  },
  {
    id: 5,
    name: "Official University Silk Tie",
    category: "INSIGNIA & ACCESSORIES",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=500&auto=format&fit=crop&q=60", 
  },
  {
    id: 6,
    name: "Freshman Leather Shoes",
    category: "SHOES",
    price: 1200.00,
    image: "https://images.unsplash.com/photo-1614252232525-a14a3d2e66c9?w=500&auto=format&fit=crop&q=60", 
  },
  {
    id: 7,
    name: "Faculty of Engineering Polo",
    category: "SHIRTS & POLOS",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60", 
  },
  {
    id: 8,
    name: "Standard Faculty Trousers - Black",
    category: "PANTS & SKIRTS",
    price: 650.00,
    image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=500&auto=format&fit=crop&q=60", 
  },
];

export default async function UniversityShopPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const uniId = resolvedParams.id;
  
  const uniName = universityNames[uniId] || "University";
  const bannerImage = universityBanners[uniId] || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&auto=format&fit=crop&q=80";

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      
      {/* --- NAVBAR SECTION --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight hover:opacity-80 transition-opacity">
          ThaiUniform Direct
        </Link>

        <div className="flex items-center gap-4 md:gap-8 text-gray-600 text-sm font-medium">
          <button className="hover:text-blue-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          
          <button className="flex items-center gap-2 hover:text-blue-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="hidden sm:inline">Cart</span>
          </button>
          
          <button className="flex items-center gap-2 hover:text-blue-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span className="hidden sm:inline">Account</span>
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col justify-center h-[400px] bg-slate-800">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${bannerImage}')` }}
        />
        <div className="relative z-10 w-full mx-auto px-6 md:px-12 text-white max-w-[1600px]">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider bg-blue-600 rounded-md mb-4 uppercase">
            Official Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            {uniName} <br />
            Official Collection
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-100 drop-shadow-sm">
            Excellence in every stitch. Explore the premium selection of official uniforms, accessories, and faculty-specific apparel.
          </p>
        </div>
      </section>

      {/* --- CATEGORY FILTERS --- */}
      <section className="w-full mx-auto px-6 md:px-12 max-w-[1600px] mt-8">
        <div className="flex flex-wrap gap-3">
          {["All Items", "Shirts & Polos", "Pants & Skirts", "Insignia & Accessories", "Shoes"].map((cat, index) => (
            <button 
              key={index} 
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                index === 0 
                  ? "bg-slate-900 text-white border-slate-900" 
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- PRODUCT GRID SECTION --- */}
      <section className="w-full mx-auto px-6 md:px-12 max-w-[1600px] mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Featured Apparel</h2>
          <span className="text-sm text-gray-500 font-medium flex items-center gap-2">
            Showing {products.length} products
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
              
              {/* 1. ส่วนรูปภาพและชื่อสินค้า (คลุมด้วย Link เพื่อให้กดไปหน้าถัดไปได้) */}
              <Link href={`/university/${uniId}/product/${product.id}`} className="block cursor-pointer">
                <div className="relative h-64 mb-4 overflow-hidden rounded-xl bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <p className="text-[10px] text-gray-400 font-bold tracking-wider mb-1 uppercase">
                  {product.category}
                </p>
                <h3 className="text-sm font-semibold text-gray-800 h-10 mb-2 line-clamp-2">
                  {product.name}
                </h3>
              </Link>
              
              {/* 2. ส่วนราคาและปุ่ม Add to Cart (อยู่นอก Link จะได้ไม่เกิด Error) */}
              <div className="flex justify-between items-center mt-auto pt-2">
                <span className="font-bold text-lg text-slate-900">
                  ฿ {product.price.toFixed(2)}
                </span>
                <button className="bg-blue-900 text-white p-2.5 rounded-full hover:bg-blue-800 transition-colors shadow-sm cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
}