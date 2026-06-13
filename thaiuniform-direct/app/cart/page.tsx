import React from "react";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          ThaiUniform Direct
        </Link>
        <div className="flex items-center gap-6 text-gray-600 text-sm font-medium">
          <div className="relative cursor-pointer flex items-center gap-1 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>Cart</span>
            <span className="bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center absolute -top-2 -right-2">2</span>
          </div>
          <span className="text-gray-400">|</span>
          <button className="hover:text-slate-900">Account</button>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="w-full mx-auto px-6 md:px-12 max-w-[1400px] mt-8">
        <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <span className="font-medium text-slate-800">🎓 Chulalongkorn University</span>
        </div>
        
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ฝั่งซ้าย: รายการสินค้าในรถเข็น */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* ชิ้นที่ 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=300" className="w-full h-full object-cover" alt="Shirt" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Premium White Cotton Shirt</h3>
                  <div className="flex gap-2 my-1">
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">Engineering</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Standard Fit</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Size: <span className="font-semibold text-slate-800">XL</span></p>
                </div>
              </div>
              <div className="flex sm:flex-col justify-between items-end mt-4 sm:mt-0">
                <span className="font-bold text-xl text-slate-900">฿450.00</span>
                <div className="flex items-center gap-3 mt-2 border border-gray-200 rounded-lg p-1">
                  <button className="px-2 text-gray-500 hover:text-slate-900">-</button>
                  <span className="font-medium text-sm w-4 text-center">1</span>
                  <button className="px-2 text-gray-500 hover:text-slate-900">+</button>
                </div>
                <button className="text-xs text-red-500 mt-3 hover:underline">🗑 Remove</button>
              </div>
            </div>

            {/* ชิ้นที่ 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-4 justify-between">
              <div className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1583496661160-c588c25a5573?w=300" className="w-full h-full object-cover" alt="Skirt" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Pleated Navy Skirt</h3>
                  <div className="flex gap-2 my-1">
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-medium">Chulalongkorn</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Length 22"</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Size: <span className="font-semibold text-slate-800">M</span></p>
                </div>
              </div>
              <div className="flex sm:flex-col justify-between items-end mt-4 sm:mt-0">
                <span className="font-bold text-xl text-slate-900">฿520.00</span>
                <div className="flex items-center gap-3 mt-2 border border-gray-200 rounded-lg p-1">
                  <button className="px-2 text-gray-500 hover:text-slate-900">-</button>
                  <span className="font-medium text-sm w-4 text-center">1</span>
                  <button className="px-2 text-gray-500 hover:text-slate-900">+</button>
                </div>
                <button className="text-xs text-red-500 mt-3 hover:underline">🗑 Remove</button>
              </div>
            </div>

            {/* --- Frequently Bought Together --- */}
            <div className="mt-6">
              <h3 className="font-bold text-slate-800 text-lg mb-4">Frequently Bought Together</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                  <div className="w-full aspect-square bg-gray-50 rounded-lg mb-2 flex items-center justify-center font-bold text-gray-400">Pin Pic</div>
                  <p className="text-xs font-semibold text-slate-800 line-clamp-1">Official Crest Pin</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">฿120</p>
                </div>
                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                  <div className="w-full aspect-square bg-gray-50 rounded-lg mb-2 flex items-center justify-center font-bold text-gray-400">Belt Pic</div>
                  <p className="text-xs font-semibold text-slate-800 line-clamp-1">Leather Uniform Belt</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">฿280</p>
                </div>
                <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                  <div className="w-full aspect-square bg-gray-50 rounded-lg mb-2 flex items-center justify-center font-bold text-gray-400">Socks Pic</div>
                  <p className="text-xs font-semibold text-slate-800 line-clamp-1">Premium Sock Pack</p>
                  <p className="text-sm font-bold text-slate-900 mt-1">฿150</p>
                </div>
              </div>
            </div>
          </div>

          {/* ฝั่งขวา: Cart Summary */}
          <div className="bg-blue-50/60 border border-blue-100/80 p-6 rounded-3xl lg:sticky lg:top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Cart Summary</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-600 border-b border-blue-200/50 pb-4 mb-4">
              <div className="flex justify-between">
                <span>Subtotal (2 items)</span>
                <span className="font-semibold text-slate-800">฿970.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Estimate</span>
                <span className="font-bold text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (7%)</span>
                <span className="font-semibold text-slate-800">฿67.90</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline mb-6">
              <span className="text-lg font-bold text-slate-900">Total</span>
              <span className="text-2xl font-extrabold text-slate-900">฿1,037.90</span>
            </div>

            <Link 
              href="/checkout" 
              className="w-full bg-[#0F2241] text-white py-4 rounded-xl font-bold text-center hover:bg-slate-800 transition-colors mb-4 flex justify-center items-center gap-2"
            >
              Proceed to Checkout &rarr;
            </Link>
            <p className="text-center text-xs text-gray-400 mb-6">Taxes and shipping calculated at checkout.</p>

            <div className="bg-white p-3 rounded-xl border border-gray-200 flex gap-2">
              <input type="text" placeholder="CODE123" className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm flex-grow focus:outline-none" />
              <button className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-200">Apply</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}