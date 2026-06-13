// app/tracking/page.tsx
import React from "react";
import Link from "next/link";

export default function TrackingPage() {
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
          </Link>
          <button className="hover:text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>
        </div>
      </nav>

      {/* --- SUB NAVBAR (Selected University) --- */}
      <div className="w-full bg-white border-b border-gray-100 px-6 md:px-12 py-3 flex justify-between items-center text-xs text-gray-600 font-medium">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10"></path><path d="M22 4H2v6h20V4z"></path></svg>
          <span>Selected University</span>
        </div>
        <div className="flex gap-4">
          <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></button>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></button>
          <button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></button>
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="w-full mx-auto px-6 md:px-12 max-w-[1200px] mt-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <p className="text-[11px] font-extrabold tracking-widest text-gray-500 uppercase mb-1">Order Tracking</p>
            <h1 className="text-4xl md:text-5xl font-black text-[#0F2241] tracking-tight">#TU-84920155</h1>
            <p className="text-sm text-gray-500 mt-2 font-medium">Placed on October 24, 2023 • 2 Items</p>
          </div>
          <button className="bg-[#0F2241] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Invoice
          </button>
        </div>

        {/* PROGRESS BAR */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-8 overflow-x-auto">
          <div className="min-w-[600px] flex items-center justify-between relative">
            {/* เส้นเชื่อม Background */}
            <div className="absolute top-5 left-[5%] right-[5%] h-1 bg-gray-100 z-0"></div>
            {/* เส้นเชื่อม Active */}
            <div className="absolute top-5 left-[5%] right-[25%] h-1 bg-[#0F2241] z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center w-1/4">
              <div className="w-10 h-10 bg-[#0F2241] text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="text-xs font-bold text-[#0F2241]">Order Placed</p>
              <p className="text-[10px] text-gray-400 mt-1">Oct 24, 10:30 AM</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center w-1/4">
              <div className="w-10 h-10 bg-[#0F2241] text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <p className="text-xs font-bold text-[#0F2241]">Processing</p>
              <p className="text-[10px] text-gray-400 mt-1">Oct 24, 02:15 PM</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center w-1/4">
              <div className="w-10 h-10 bg-[#0F2241] text-white rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <p className="text-xs font-bold text-[#0F2241]">Shipping</p>
              <p className="text-[10px] text-gray-400 mt-1">Oct 25, 09:00 AM</p>
            </div>

            {/* Step 4 (Current) */}
            <div className="relative z-10 flex flex-col items-center w-1/4">
              <div className="w-10 h-10 bg-white text-[#0F2241] border-2 border-[#0F2241] rounded-full flex items-center justify-center shadow-sm mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <p className="text-xs font-bold text-[#0F2241]">Out for Delivery</p>
              <p className="text-[10px] font-semibold text-blue-600 mt-1">Today, Expected 2PM</p>
            </div>

            {/* Step 5 */}
            <div className="relative z-10 flex flex-col items-center w-1/4 opacity-40">
              <div className="w-10 h-10 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center border-4 border-white shadow-sm mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <p className="text-xs font-bold text-gray-500">Delivered</p>
              <p className="text-[10px] text-gray-400 mt-1">—</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Delivery Information */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Delivery Information</h3>
                  <p className="text-xs text-gray-500">Method: Campus Pickup</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-50">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Pickup Location</p>
                  <p className="text-sm font-bold text-slate-900">Faculty of Engineering</p>
                  <p className="text-xs text-gray-600 mt-1">Building 4, Room 102</p>
                  <p className="text-xs text-gray-600">Service Hours: 9:00 - 16:30</p>
                </div>
                <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-50">
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">Recipient Contact</p>
                  <p className="text-sm font-bold text-slate-900">Somchai Rakthai</p>
                  <p className="text-xs text-gray-600 mt-1">+66 81-234-5678</p>
                  <p className="text-xs text-gray-600">Student ID: 641029384</p>
                </div>
              </div>
            </div>

            {/* Order Content */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Order Content</h3>
              
              <div className="flex flex-col gap-6">
                {/* Item 1 */}
                <div className="flex gap-5 items-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=150" className="w-full h-full object-cover" alt="Shirt" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Official Academic Series</p>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">Men's Premium Oxford Shirt</h4>
                    <p className="text-xs text-gray-500 mt-1">Size: L • Quantity: 1</p>
                    <p className="text-lg font-extrabold text-[#0F2241] mt-1">฿450.00</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gray-100"></div>

                {/* Item 2 */}
                <div className="flex gap-5 items-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150" className="w-full h-full object-cover" alt="Trousers" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Official Academic Series</p>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">Standard Fit Trousers - Navy</h4>
                    <p className="text-xs text-gray-500 mt-1">Size: 32 • Quantity: 1</p>
                    <p className="text-lg font-extrabold text-[#0F2241] mt-1">฿850.00</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">
            
            {/* Live Update Map (Placeholder) */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4 overflow-hidden relative">
                {/* ใส่รูปแผนที่จำลอง */}
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500" className="w-full h-full object-cover opacity-80 grayscale" alt="Map" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                   <div className="w-12 h-12 bg-[#0F2241] text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-bounce">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                   </div>
                </div>
              </div>
              <div className="px-2 pb-2">
                <h4 className="text-sm font-bold text-slate-900">Live Update</h4>
                <p className="text-base font-extrabold text-[#0F2241] mt-0.5">Courier is 1.2km away</p>
                <p className="text-[11px] text-gray-500 mt-1">Current: Phayathai Road, near Main Gate</p>
              </div>
            </div>

            {/* Tracking History */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Tracking History</h3>
              
              <div className="ml-2 border-l-2 border-gray-100 pl-6 relative flex flex-col gap-6">
                
                {/* Status 1 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-[#0F2241] rounded-full -left-[31px] top-1.5 border-2 border-white"></div>
                  <h4 className="text-sm font-bold text-[#0F2241]">Out for delivery</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Oct 26, 2023 • 11:45 AM</p>
                </div>

                {/* Status 2 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[31px] top-1.5 border-2 border-white"></div>
                  <h4 className="text-sm font-bold text-gray-500">Arrived at Faculty Sorting Center</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Oct 26, 2023 • 08:30 AM</p>
                </div>

                {/* Status 3 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[31px] top-1.5 border-2 border-white"></div>
                  <h4 className="text-sm font-bold text-gray-500">Package shipped from warehouse</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Oct 25, 2023 • 04:00 PM</p>
                </div>

                {/* Status 4 */}
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[31px] top-1.5 border-2 border-white"></div>
                  <h4 className="text-sm font-bold text-gray-500">Quality check completed</h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">Oct 25, 2023 • 09:15 AM</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* --- FOOTER (Simplified match) --- */}
      <footer className="w-full max-w-[1200px] mx-auto px-6 md:px-12 mt-20 pt-10 border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold text-slate-900 mb-4">ThaiUniform Direct</h2>
          <p className="text-xs text-gray-500 leading-relaxed pr-4">Official University Licensed Distributor providing high-quality academic uniforms with precision and care for the next generation of leaders.</p>
          <p className="text-[10px] text-gray-400 mt-6">© 2024 ThaiUniform Direct. Official University Licensed Distributor.</p>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Customer Service</h4>
          <ul className="text-xs text-gray-500 space-y-3">
            <li><a href="#" className="hover:text-[#0F2241]">Help Center</a></li>
            <li><a href="#" className="hover:text-[#0F2241]">Size Guide</a></li>
            <li><a href="#" className="hover:text-[#0F2241]">Order Tracking</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Platform</h4>
          <ul className="text-xs text-gray-500 space-y-3">
            <li><a href="#" className="hover:text-[#0F2241]">Security</a></li>
            <li><a href="#" className="hover:text-[#0F2241]">Official Status</a></li>
            <li><a href="#" className="hover:text-[#0F2241]">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}