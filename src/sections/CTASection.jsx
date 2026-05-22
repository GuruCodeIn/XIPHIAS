import { motion } from "framer-motion";

function CTASection() {
  return (
    <section className="relative w-full bg-[#050816] pt-10 pb-32 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-500/10 blur-[160px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px]" />

      {/* Main Wrapper */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-10">

        {/* CTA Container */}
        <div className="relative w-full overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] backdrop-blur-2xl">

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start px-8 py-14 lg:px-16 lg:py-16">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="h-full flex flex-col justify-center"
            >

              <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10 backdrop-blur-xl mb-8 w-fit">

                <span className="text-blue-300 uppercase tracking-[0.28em] text-xs font-semibold">
                  Start Your Journey
                </span>

              </div>

              <h2 className="text-5xl lg:text-6xl font-black leading-[1.05] text-white">

                Begin Your

                <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
                  Global Future Today
                </span>

              </h2>

              <p className="mt-7 text-lg leading-relaxed text-white/65 max-w-2xl">

                Unlock premium residency and citizenship opportunities with expert guidance tailored for investors, entrepreneurs, and global citizens.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.35)] hover:scale-105 transition duration-300">

                  Book Free Consultation

                </button>

                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-white hover:bg-white/[0.08] transition duration-300">

                  Explore Programs

                </button>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end h-full"
            >

              <div className="relative w-full max-w-[420px] h-full rounded-[34px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 shadow-[0_0_80px_rgba(59,130,246,0.18)]">

                <div className="absolute inset-5 rounded-[26px] border border-white/10" />

                <div className="relative z-10">

                  {/* Globe */}
                  <div className="flex justify-center mb-10">

                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-5xl shadow-2xl">

                      🌍

                    </div>

                  </div>

                  {/* Stats */}
                  <div className="space-y-5">

                    {[
                      ["Residency Programs", "25+"],
                      ["Citizenship Routes", "100+"],
                      ["Client Success Rate", "98%"],
                      ["Global Support", "24/7"],
                    ].map(([label, value], index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-white/10 pb-4 last:border-none"
                      >

                        <span className="text-white/60">
                          {label}
                        </span>

                        <span className="text-white text-xl font-bold">
                          {value}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;