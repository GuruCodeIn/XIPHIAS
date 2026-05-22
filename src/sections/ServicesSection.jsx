import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Landmark,
  Plane,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Residency Programs",
    description:
      "Secure residency opportunities in top global destinations with expert guidance.",
  },

  {
    icon: Landmark,
    title: "Citizenship Solutions",
    description:
      "Fast-track citizenship pathways tailored for investors and global entrepreneurs.",
  },

  {
    icon: Building2,
    title: "Investment Migration",
    description:
      "Expand your global portfolio with premium investment migration strategies.",
  },

  {
    icon: Plane,
    title: "Global Mobility",
    description:
      "Experience seamless international movement for business, family, and lifestyle.",
  },
];

function ServicesSection() {
  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />

      {/* Full Width Container */}
      <div className="relative z-10 w-full px-8 2xl:px-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm mb-6">
            Premium Services
          </p>

          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">

            Immigration Solutions

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-3">
              Designed For Global Citizens
            </span>

          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group relative w-full rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl">

                  <Icon className="text-white" size={30} />

                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-5 text-white/60 leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom Line */}
                <div className="relative z-10 mt-8 w-16 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default ServicesSection;