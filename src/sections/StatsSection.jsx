import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    title: "Years Experience",
    description: "Global immigration expertise",
  },
  {
    number: "50K+",
    title: "Applications Processed",
    description: "Trusted by clients worldwide",
  },
  {
    number: "98%",
    title: "Success Rate",
    description: "High visa approval record",
  },
  {
    number: "25+",
    title: "Countries",
    description: "Immigration pathways available",
  },
];

function StatsSection() {
  return (
    <section className="relative bg-[#050816] py-24 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-[120px]" />

      {/* Full Width Container */}
      <div className="relative z-10 w-full px-8 2xl:px-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-5">
            Trusted Worldwide
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            Delivering Global

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-3">
              Immigration Excellence
            </span>
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="relative w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition duration-500" />

              <div className="relative z-10">

                <h3 className="text-5xl font-black text-white">
                  {item.number}
                </h3>

                <h4 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-4 text-white/60 leading-relaxed">
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