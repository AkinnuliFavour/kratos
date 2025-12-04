import { Variants } from "motion";

// Fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut", // ✅ camelCase
    },
  },
};

// Slide in (directional)
export const slideIn = (
  direction: "left" | "right" | "up" | "down" = "up"
): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
});

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (custom: number = 0) => ({
    // accept `custom` (index) when used so items can stagger themselves
    // usage: <motion.div variants={staggerItem} custom={index} />
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: custom * 0.06,
    },
  }),
};

// Zoom in
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

// Soft reveal
export const softReveal: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// Footer reveal (slower, subtle scale and lift)
export const footerReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
