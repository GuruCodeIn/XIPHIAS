import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import { navigationLinks } from "../constants/navigation";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-[90px]">

          {/* Logo */}
          <Link
            to="/"
            className="text-4xl font-black tracking-wide text-white"
          >
            XIPHIAS
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">

            {navigationLinks.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="flex items-center gap-2 text-white/80 hover:text-white transition duration-300 font-medium">

                      {item.title}

                      <ChevronDown
                        size={18}
                        className={`transition duration-300 ${
                          activeDropdown === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute top-[45px] left-0 w-[260px]
                      rounded-3xl border border-white/10
                      bg-[#0b1020]/95 backdrop-blur-2xl
                      shadow-[0_20px_80px_rgba(0,0,0,0.5)]
                      overflow-hidden transition-all duration-300
                      ${
                        activeDropdown === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-3"
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          className="w-full text-left px-6 py-4
                          text-white/70 hover:text-white
                          hover:bg-white/5 transition duration-300"
                        >
                          {subItem}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white transition duration-300 font-medium relative group"
                  >
                    {item.title}

                    <span
                      className="absolute left-0 -bottom-2
                      w-0 h-[2px]
                      bg-gradient-to-r from-blue-400 to-purple-500
                      transition-all duration-300
                      group-hover:w-full"
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <button
            className="hidden lg:flex
            px-6 py-3 rounded-2xl
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white font-semibold
            hover:scale-105 transition duration-300
            shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            Free Consultation
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenu
            ? "max-h-[700px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="mx-6 mb-6 rounded-3xl
          bg-[#0b1020]/95 backdrop-blur-2xl
          border border-white/10 p-6"
        >
          {navigationLinks.map((item, index) => (
            <div key={index} className="mb-5">

              <button
                className="text-white text-lg font-medium"
              >
                {item.title}
              </button>

              {item.submenu && (
                <div className="mt-3 ml-4 flex flex-col gap-3">

                  {item.submenu.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      className="text-left text-white/60 hover:text-white"
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;