import { motion } from "framer-motion";
import { statsData } from "../constants/statsData";

function StatsSection() {
  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm mb-6">
            Trusted Worldwide
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            Delivering Global
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Immigration Excellence
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden
              rounded-[32px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              p-10
              hover:border-blue-400/30
              transition duration-500"
            >

              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-gradient-to-br
                from-blue-500/10
                to-purple-500/10"
              />

              <div className="relative z-10">

                <h3 className="text-6xl font-black text-white mb-4">
                  {item.number}
                </h3>

                <h4 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h4>

                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;