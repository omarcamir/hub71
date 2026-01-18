"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useLocale } from "next-intl";

export default function ContactMotion({
  children,
}: {
  children: ReactNode[];
}) {
  const isRTL = useLocale() === "ar";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Title */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        {children[0]}
      </motion.div>

      {/* Form */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: isRTL ? 40 : -40,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        transition={{ duration: 0.5 }}
      >
        {children[1]}
      </motion.div>
    </motion.div>
  );
}
