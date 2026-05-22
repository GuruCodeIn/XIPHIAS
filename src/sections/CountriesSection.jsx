import { motion } from "framer-motion";

const countries = [
  {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Portugal",
    image:
      "https://images.unsplash.com/photo-1513735492246-483525079686?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
  },
];

function CountriesSection() {
  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/10 blur-[140px]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-blue-400 uppercase tracking-[0.35em] text-sm mb-6">
            Explore Destinations
          </p>

          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">

            Discover Premium

            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500">
              Immigration Opportunities
            </span>

          </h2>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group relative h-[520px] rounded-[36px] overflow-hidden border border-white/10 bg-white/[0.03]"
            >

              {/* Image */}
              <img
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-b from-blue-500/10 to-purple-500/10" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">

                {/* Tag */}
                <div className="inline-flex w-fit px-4 py-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-xl text-xs uppercase tracking-[0.25em] text-white/70 mb-5">

                  Premium Destination

                </div>

                {/* Title */}
                <h3 className="text-4xl font-black text-white leading-tight">
                  {country.name}
                </h3>

                {/* Hidden Content */}
                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[220px] group-hover:opacity-100 transition-all duration-500">

                  <p className="mt-5 text-white/70 leading-relaxed">

                    Explore residency, citizenship, and investment migration pathways with expert global advisory services.

                  </p>

                  <button className="mt-6 px-6 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white hover:bg-white/20 transition duration-300">

                    Explore Programs

                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CountriesSection;