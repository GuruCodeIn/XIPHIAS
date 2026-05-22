import { motion, AnimatePresence } from "framer-motion";

function MegaMenu({ isOpen, items }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.25 }}
          className="
            absolute
            top-full
            left-0
            mt-4
            w-[320px]
            rounded-3xl
            border
            border-white/10
            bg-black/60
            backdrop-blur-2xl
            shadow-2xl
            p-6
          "
        >
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="
                  p-4
                  rounded-2xl
                  bg-white/5
                  hover:bg-white/10
                  transition
                  duration-300
                  cursor-pointer
                  text-white/80
                  hover:text-white
                "
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MegaMenu;