export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-[#F5F0E8] mb-1"
              style={{ textShadow: "0 0 20px rgba(201,150,58,0.25)" }}>
              Sugar Suite
            </h3>
            <p className="text-white font-bold text-[0.6rem] tracking-[0.25em] uppercase mb-4">Granada Hills, CA</p>
            <p className="text-white font-bold text-xs leading-relaxed max-w-xs">
              Cocktails, karaoke, and cold beer in the heart of Granada Hills. Your neighborhood&rsquo;s late-night spot.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#C9963A] text-[0.6rem] tracking-[0.25em] uppercase mb-4">Contact</p>
            <div className="flex flex-col gap-2 text-xs text-white font-bold">
              <span>11858 Balboa Blvd</span>
              <span>Granada Hills, CA 91344</span>
              <span>Knollwood Plaza</span>
              <a href="tel:+18183669600" className="hover:text-[#C9963A] transition-colors duration-200 cursor-pointer mt-1">
                (818) 366-9600
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="text-[#C9963A] text-[0.6rem] tracking-[0.25em] uppercase mb-4">Hours</p>
            <div className="flex flex-col gap-1.5 text-xs text-white font-bold">
              <span>Open Every Day</span>
              <span className="text-white font-bold">7:00 AM – 2:00 AM</span>
              <span className="text-white font-bold text-[0.6rem] mt-1">Hours may vary on holidays</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e1e] to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-bold text-xs">
            &copy; {year} Sugar Suite. All rights reserved.
          </p>
          <p className="text-[#1e1e1e] text-xs">Granada Hills, CA 91344</p>
        </div>
      </div>
    </footer>
  );
}
