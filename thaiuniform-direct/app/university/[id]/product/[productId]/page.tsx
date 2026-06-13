"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string; productId: string }>;
}) {
  // ใน Next.js 15 Client Component หาก params เป็น Promise ให้ใช้ React.use() แทน await
  const resolvedParams = React.use(params);
  const uniId = resolvedParams.id;
  const productId = resolvedParams.productId;

  const product = {
    id: productId,
    inStock: true,
  };

  // --- State สำหรับระบบคำนวณไซส์ ---
  const [chest, setChest] = useState<string>("38");
  const [waist, setWaist] = useState<string>("32");
  const [sleeve, setSleeve] = useState<string>("33");
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);
  
  // State สำหรับ Dropdown เลือกไซส์ (ตั้งค่าเริ่มต้นเป็น M)
  const [selectedSize, setSelectedSize] = useState<string>("M - Regular Fit");

  // ฟังก์ชันคำนวณไซส์อย่างง่าย (อิงจากรอบอก)
  const handleCalculateSize = () => {
    const chestSize = parseFloat(chest);
    if (isNaN(chestSize)) return;

    let calcSize = "M ";
    if (chestSize < 36) {
      calcSize = "S ";
    } else if (chestSize >= 36 && chestSize <= 38) {
      calcSize = "M ";
    } else if (chestSize >= 39 && chestSize <= 41) {
      calcSize = "L ";
    } else if (chestSize >= 42 && chestSize <= 44) {
      calcSize = "XL ";
    } else if (chestSize > 44) {
      calcSize = "XXL ";
    }

    setRecommendedSize(calcSize);
    setSelectedSize(calcSize); // อัปเดตค่าใน Dropdown อัตโนมัติ
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans pb-10">
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-[#0f172a] tracking-tight">
          ThaiUniform Direct
        </Link>
        <div className="flex items-center gap-4 md:gap-8 text-gray-600 text-sm font-medium">
          <button className="hover:text-blue-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <Link href="/cart" className="flex items-center gap-2 hover:text-blue-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="hidden sm:inline">Cart</span>
          </Link>
          <button className="flex items-center gap-2 hover:text-blue-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span className="hidden sm:inline">Account</span>
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTAINER --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Breadcrumbs & Top Actions */}
        <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mb-6 uppercase tracking-wider">
          <div className="flex gap-2 items-center">
            <Link href={`/university/${uniId}`} className="hover:text-blue-900 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Chulalongkorn University
            </Link>
            <span>/</span>
            <span className="text-gray-900">Engineering Faculty</span>
          </div>
          <div className="flex gap-4">
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></button>
          </div>
        </div>

        {/* --- PRODUCT DETAIL SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100">
          
          {/* Left: Images */}
          <div className="flex flex-col gap-4">
            <div className="relative w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden group">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 bg-[#0f172a] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 uppercase">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                Official Licensed
              </div>
              <div className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur text-[#0f172a] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 cursor-pointer hover:bg-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
                360° VIEW
              </div>
              
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=800&auto=format&fit=crop&q=80" 
                alt="White Shirt" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=200&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=200&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1589902860314-e910cb05d683?w=200&auto=format&fit=crop&q=60",
                "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200&auto=format&fit=crop&q=60"
              ].map((img, i) => (
                <div key={i} className={`aspect-square rounded-xl overflow-hidden border-2 cursor-pointer ${i === 0 ? 'border-blue-900' : 'border-transparent hover:border-gray-300'}`}>
                  <img src={img} alt={`detail-${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col pt-2">
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Chulalongkorn Approved</span>
              <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Faculty of Engineering</span>
            </div>

            {/* Title & Price */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight mb-2">
              Official University<br/>White Shirt
            </h1>
            <p className="text-2xl font-bold text-[#0f172a] mb-8">฿750.00</p>

            {/* Size Calculator Box */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-2 mb-4 font-bold text-[#0f172a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900"><path d="M21 21H3V3"></path><path d="M21 9H7"></path><path d="M21 15H7"></path><path d="M11 3v18"></path><path d="M15 3v18"></path><path d="M19 3v18"></path></svg>
                Find Your Size
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Chest (Inches)</label>
                  <input 
                    type="number" 
                    value={chest} 
                    onChange={(e) => setChest(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-semibold outline-none focus:border-blue-900 bg-white" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Waist (Inches)</label>
                  <input 
                    type="number" 
                    value={waist} 
                    onChange={(e) => setWaist(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-semibold outline-none focus:border-blue-900 bg-white" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">Sleeve (Inches)</label>
                  <input 
                    type="number" 
                    value={sleeve} 
                    onChange={(e) => setSleeve(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm font-semibold outline-none focus:border-blue-900 bg-white" 
                  />
                </div>
              </div>
              <button 
                onClick={handleCalculateSize}
                className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-bold py-3 rounded-xl transition-colors"
              >
                Calculate Recommendation
              </button>

              {/* ข้อความแจ้งเตือนเมื่อคำนวณเสร็จ */}
              {recommendedSize && (
                <div className="mt-4 p-3 bg-green-100/50 border border-green-200 text-green-700 text-xl font-bold text-center rounded-xl flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  {recommendedSize} 
                </div>
              )}
            </div>

            {/* Select Size & Gender */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Select Size</label>
                <div className="relative">
                  <select 
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full appearance-none border border-gray-200 rounded-xl p-3.5 text-sm font-semibold text-[#0f172a] bg-white outline-none focus:border-blue-900"
                  >
                    <option value="S ">S </option>
                    <option value="M ">M </option>
                    <option value="L ">L </option>
                    <option value="XL ">XL </option>
                    <option value="XXL ">XXL </option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"></path></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Gender</label>
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  <button className="flex-1 bg-white text-[#0f172a] text-sm font-bold py-2.5 rounded-lg shadow-sm">Men</button>
                  <button className="flex-1 text-gray-500 text-sm font-bold py-2.5 rounded-lg hover:text-[#0f172a]">Women</button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6 mt-auto">
              {product.inStock ? (
                <Link 
                  href="/cart"
                  className="flex-1 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-md text-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  Add to Cart
                </Link>
              ) : (
                <button 
                  className="flex-1 py-4 rounded-2xl text-lg font-bold transition-all shadow-sm flex justify-center items-center gap-2 bg-gray-200 text-gray-500 cursor-not-allowed"
                  disabled
                >
                  Out of Stock
                </button>
              )}
              {/* ปุ่ม Wishlist */}
              <button className="w-14 border border-gray-200 hover:border-gray-300 rounded-2xl flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </button>
            </div>

            {/* Info Text */}
            <div className="flex justify-between text-[11px] font-semibold text-gray-500 border-t border-gray-100 pt-4">
              <div className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                Estimated Delivery: 2-3 Days
              </div>
              <div className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Secure Student Checkout
              </div>
            </div>

          </div>
        </div>

        {/* --- COMPLETE YOUR LOOK SECTION --- */}
        <div className="mt-20 mb-12">
          <h2 className="text-xl font-bold text-[#0f172a] mb-6">Complete Your Look</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Look Item 1 */}
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
                <img src="https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400&auto=format&fit=crop&q=60" alt="Tie" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <button className="absolute bottom-2 right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
              <h3 className="text-sm font-bold text-[#0f172a]">University Silk Tie</h3>
              <p className="text-sm font-semibold text-gray-500 mt-1">฿250.00</p>
            </div>

            {/* Look Item 2 */}
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
                <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&auto=format&fit=crop&q=60" alt="Belt" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <button className="absolute bottom-2 right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
              <h3 className="text-sm font-bold text-[#0f172a]">Eng. Faculty Belt</h3>
              <p className="text-sm font-semibold text-gray-500 mt-1">฿390.00</p>
            </div>

            {/* Look Item 3 */}
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
                <img src="https://images.unsplash.com/photo-1614362705353-8515cecf3fa4?w=400&auto=format&fit=crop&q=60" alt="Pins" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <button className="absolute bottom-2 right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
              <h3 className="text-sm font-bold text-[#0f172a]">Gold Crest Lapel Pins</h3>
              <p className="text-sm font-semibold text-gray-500 mt-1">฿120.00</p>
            </div>

            {/* Look Item 4 */}
            <div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm group">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3">
                <img src="https://images.unsplash.com/photo-1588722881768-466d15b021d7?w=400&auto=format&fit=crop&q=60" alt="Buttons" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <button className="absolute bottom-2 right-2 bg-white w-8 h-8 rounded-full flex items-center justify-center shadow text-[#0f172a] hover:bg-[#0f172a] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
              </div>
              <h3 className="text-sm font-bold text-[#0f172a]">Faculty Buttons (5pc)</h3>
              <p className="text-sm font-semibold text-gray-500 mt-1">฿85.00</p>
            </div>

          </div>
        </div>

      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-gray-200 mt-12 pt-12 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-[#0f172a] mb-4">ThaiUniform Direct</h4>
            <p className="text-xs text-gray-500 pr-4">The Future of Tradition. Premium academic apparel for the modern Thai scholar.</p>
          </div>
          <div>
            <h4 className="font-bold text-[#0f172a] mb-4 text-sm">Customer Service</h4>
            <ul className="text-xs text-gray-500 space-y-2">
              <li><a href="#" className="hover:text-blue-900">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-900">Size Guide</a></li>
              <li><a href="#" className="hover:text-blue-900">Order Tracking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#0f172a] mb-4 text-sm">Information</h4>
            <ul className="text-xs text-gray-500 space-y-2">
              <li><a href="#" className="hover:text-blue-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-900">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-900">Bulk Orders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#0f172a] mb-4 text-sm">Stay Connected</h4>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-[#0f172a]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" className="hover:text-[#0f172a]"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            </div>
            <p className="text-[10px] text-gray-400 mt-6">© 2024 ThaiUniform Direct. Official University Licensed Distributor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}