import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David Thompson",
    country: "Canada PR",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    review:
      "XIPHIAS made the entire immigration process seamless. Their professionalism and strategic guidance helped me secure my residency faster than expected.",
  },

  {
    name: "Sophia Williams",
    country: "Portugal Golden Visa",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    review:
      "Exceptional experience from consultation to approval. The team handled everything with precision and complete transparency.",
  },

  {
    name: "Michael Anderson",
    country: "UK Investor Route",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    review:
      "Their expertise in investment migration is outstanding. The process felt premium, organized, and highly professional throughout.",
  },
];

function TestimonialsSection() {
  return (
    <section className="relative pt-8 pb-32 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[160px]" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <p className="text-blue-400 uppercase tracking-[0.35em] text-sm mb-5">
            Client Success Stories
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">

            Trusted By

            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
              Global Citizens
            </span>

          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

              {/* Profile */}
              <div className="relative z-10 flex items-center gap-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-2xl object-cover border border-white/10"
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-white/60 mt-1">
                    {item.country}
                  </p>

                </div>

              </div>

              {/* Stars */}
              <div className="relative z-10 flex gap-1 mt-7">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}
              <p className="relative z-10 mt-7 text-white/70 leading-relaxed text-lg">

                “{item.review}”

              </p>

              {/* Bottom Line */}
              <div className="relative z-10 mt-8 h-[2px] w-24 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TestimonialsSection;