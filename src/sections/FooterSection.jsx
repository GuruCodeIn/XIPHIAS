function FooterSection() {
  return (
    <footer className="relative bg-[#050816] pt-32 pb-10 overflow-hidden border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-[140px]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Footer Box */}
        <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 lg:p-14">

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 pb-14 border-b border-white/10">

            {/* Brand */}
            <div>

              <h2 className="text-4xl font-black text-white">
                XIPHIAS
              </h2>

              <p className="mt-6 text-white/60 leading-relaxed">

                Premium immigration and global mobility solutions
                for investors, entrepreneurs, and global citizens.

              </p>

            </div>

            {/* Services */}
            <div>

              <h3 className="text-white font-bold text-lg mb-6">
                Services
              </h3>

              <ul className="space-y-4 text-white/60">

                <li className="hover:text-white transition cursor-pointer">
                  Residency Programs
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Citizenship Solutions
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Investment Migration
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Global Mobility
                </li>

              </ul>

            </div>

            {/* Company */}
            <div>

              <h3 className="text-white font-bold text-lg mb-6">
                Company
              </h3>

              <ul className="space-y-4 text-white/60">

                <li className="hover:text-white transition cursor-pointer">
                  About Us
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Success Stories
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Careers
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Contact
                </li>

              </ul>

            </div>

            {/* Contact */}
            <div>

              <h3 className="text-white font-bold text-lg mb-6">
                Contact
              </h3>

              <div className="space-y-4 text-white/60">

                <p>hello@xiphias.com</p>

                <p>+1 (800) 123-4567</p>

                <p>London, United Kingdom</p>

              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-8">

                {["IG", "IN", "X", "f"].map((item, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.04] flex items-center justify-center text-white hover:bg-white/[0.08] transition duration-300 cursor-pointer"
                  >

                    {item}

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Bottom */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-white/40 text-sm text-center md:text-left">

              © 2026 XIPHIAS. All rights reserved.

            </p>

            <div className="flex gap-8 text-sm text-white/40">

              <span className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </span>

              <span className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default FooterSection;