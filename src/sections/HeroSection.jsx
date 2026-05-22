import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative min-h-screen pt-[140px] bg-[#050816] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Left Glow */}
        <div className="absolute top-[-220px] left-[-120px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

        {/* Right Glow */}
        <div className="absolute bottom-[-220px] right-[-120px] w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full" />

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 xl:px-12 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Tag */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl mb-8">

            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />

            <p className="text-blue-300 uppercase tracking-[0.25em] text-xs font-semibold">
              Global Immigration Platform
            </p>

          </div>

          {/* Heading */}
          <h1 className="text-6xl lg:text-7xl xl:text-[92px] font-black leading-[0.95] text-white">

            Your Gateway

            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">

              To Global Citizenship

            </span>

          </h1>

          {/* Description */}
          <p className="mt-10 text-xl text-white/60 leading-relaxed max-w-2xl">

            Premium immigration solutions for residency,
            citizenship, investment migration,
            and global mobility opportunities.

          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">

            <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-[0_10px_50px_rgba(59,130,246,0.35)] transition duration-300 hover:scale-105">

              <span className="relative z-10">
                Explore Programs
              </span>

            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition duration-300">

              Free Consultation

            </button>

          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-12">

            <div>
              <h3 className="text-5xl font-black text-white">
                25+
              </h3>

              <p className="text-white/50 mt-2">
                Countries
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                100K+
              </h3>

              <p className="text-white/50 mt-2">
                Clients Guided
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                98%
              </h3>

              <p className="text-white/50 mt-2">
                Success Rate
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Glow */}
          <div className="absolute w-[520px] h-[520px] bg-blue-500/20 blur-[140px] rounded-full" />

          {/* Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[460px] h-[460px] rounded-[42px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(59,130,246,0.3)] flex items-center justify-center overflow-hidden"
          >

            {/* Inner Border */}
            <div className="absolute inset-6 rounded-[34px] border border-white/10" />

            {/* Floating Labels */}
            <div className="absolute top-8 left-8 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-white/70">
                Residency Programs
              </p>

            </div>

            <div className="absolute bottom-8 right-8 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">

              <p className="text-sm text-white/70">
                Global Mobility
              </p>

            </div>

            {/* Center */}
            <div className="text-center relative z-10">

              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="text-8xl mb-8"
              >

                🌍

              </motion.div>

              <h3 className="text-6xl font-black text-white">
                100+
              </h3>

              <p className="text-white/60 mt-3 text-xl">
                Immigration Pathways
              </p>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection;