import React from "react";
import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm px-6 md:px-12 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          ThaiUniform Direct
        </Link>
        <div className="flex items-center gap-6 text-gray-600 text-sm font-medium">
          <Link href="/cart" className="relative cursor-pointer flex items-center gap-1 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="hidden sm:inline">Cart</span>
          </Link>
          <span className="text-gray-400">|</span>
          <button className="hover:text-slate-900">Account</button>
        </div>
      </nav>

      {/* --- CHECKOUT STEPS --- */}
      <div className="flex justify-center items-center gap-4 mt-8 mb-10 text-xs font-bold uppercase tracking-wider">
        <div className="flex items-center gap-2 text-[#0F2241]">
          <span className="w-6 h-6 bg-[#0F2241] text-white rounded-full flex items-center justify-center text-[10px]">1</span>
          <span>Delivery</span>
        </div>
        <div className="w-12 h-[2px] bg-gray-200"></div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="w-6 h-6 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-[10px]">2</span>
          <span>Payment</span>
        </div>
        <div className="w-12 h-[2px] bg-gray-200"></div>
        <div className="flex items-center gap-2 text-gray-400">
          <span className="w-6 h-6 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-[10px]">3</span>
          <span>Review</span>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="w-full mx-auto px-6 md:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ฝั่งซ้าย: วิธีจัดส่งและชำระเงิน */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Delivery Method Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                Delivery Method
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Option 1: Deliver to Faculty */}
                <label className="border-2 border-[#0F2241] bg-blue-50/20 p-5 rounded-xl cursor-pointer flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="mt-1 text-slate-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10"></path><path d="M22 4H2v6h20V4z"></path></svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Deliver to Faculty</p>
                      <p className="text-xs text-gray-500 mt-1">Free pickup at your university campus office.</p>
                    </div>
                  </div>
                  <input type="radio" name="delivery" defaultChecked className="mt-1 accent-[#0F2241] w-4 h-4" />
                </label>

                {/* Option 2: Home Delivery */}
                <label className="border border-gray-200 hover:border-gray-300 p-5 rounded-xl cursor-pointer flex justify-between items-start">
                  <div className="flex gap-3">
                    <div className="mt-1 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">Home Delivery</p>
                      <p className="text-xs text-gray-400 mt-1">Standard shipping to your doorstep (+40 THB).</p>
                    </div>
                  </div>
                  <input type="radio" name="delivery" className="mt-1 accent-[#0F2241] w-4 h-4" />
                </label>
              </div>

              {/* Dropdowns ตัวเลือกมหาวิทยาลัย */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">Select University</label>
                  <select className="w-full border border-gray-200 rounded-xl p-3 text-sm font-semibold text-slate-800 bg-white focus:outline-none focus:border-[#0F2241]">
                    <option>Chulalongkorn University</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">Select Faculty</label>
                  <select className="w-full border border-gray-200 rounded-xl p-3 text-sm font-semibold text-slate-800 bg-white focus:outline-none focus:border-[#0F2241]">
                    <option>Faculty of Engineering</option>
                  </select>
                </div>
              </div>
              <p className="text-xs text-gray-400 italic">ⓘ Orders usually arrive at the Faculty Office within 3-5 business days.</p>
            </div>

            {/* Payment Method Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                Payment Method
              </h2>
              
              <div className="border border-gray-100 bg-slate-50/50 rounded-2xl p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <input type="radio" defaultChecked className="accent-[#0F2241] w-4 h-4" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">QR PromptPay</p>
                    <p className="text-xs text-gray-500">Scan to pay instantly via any banking app.</p>
                  </div>
                </div>
                <div className="bg-[#002D62] text-white px-3 py-1 rounded text-[10px] font-extrabold tracking-tight">
                  PROMPT PAY
                </div>
              </div>
            </div>

          </div>

          {/* ฝั่งขวา: Order Summary บล็อกสรุปราคา */}
          <div className="bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-sm lg:sticky lg:top-24">
            <h3 className="text-xl font-extrabold text-slate-900 mb-6">Order Summary</h3>
            
            <div className="flex flex-col gap-4 border-b border-gray-100 pb-5 mb-5">
              <div className="flex justify-between gap-3">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=150" className="w-full h-full object-cover" alt="shirt" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">Standard Faculty Shirt (Male)</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">Size: L | Qty: 2</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-900">350฿</span>
              </div>

              <div className="flex justify-between gap-3">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150" className="w-full h-full object-cover" alt="belt" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 line-clamp-1">Engraved University Belt</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">Qty: 1</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-slate-900">220฿</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-xs font-semibold text-gray-500 border-b border-gray-100 pb-4 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-slate-800">920฿</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">Free</span>
              </div>
              <div className="flex justify-between">
                <span>VAT (7%)</span>
                <span className="text-slate-800">64.4฿</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mb-6">
              <span className="text-sm font-bold text-slate-900">Total</span>
              <span className="text-2xl font-black text-[#0F2241]">984.4฿</span>
            </div>

            <Link 
              href="/tracking"
              className="w-full bg-[#0F2241] text-white py-3.5 rounded-xl font-bold text-center hover:bg-slate-800 transition-colors mb-4 text-sm flex justify-center items-center"
            >
              Confirm Order
            </Link>
            
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Encrypted Secure Payment
            </div>

            <div className="mt-6 border-t border-gray-100 pt-4 flex items-center gap-2.5 text-left">
              <div className="bg-slate-900 text-white p-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-900">Official Licensed Distributor</p>
                <p className="text-[9px] text-gray-400">Verified by Thai Higher Education Standards.</p>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}