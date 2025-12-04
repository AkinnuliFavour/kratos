"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  staggerContainer,
  staggerItem,
  footerReveal,
} from "@/components/animation/motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={footerReveal}
        className="bg-cover bg-no-repeat w-full min-h-[367px] relative overflow-hidden xl:hidden"
        style={{ backgroundImage: "url('/images/footer-mobile-bg.svg')" }}
      >
        <motion.div
          variants={staggerItem}
          className="absolute -bottom-4 right-0 flex items-center"
        >
          <motion.div variants={staggerItem} custom={0}>
            <Image
              src="/images/radar-icon.svg"
              alt="Room Radar Icon"
              height={100}
              width={100}
              className="w-[53px] h-[53px]"
            />
          </motion.div>

          <motion.h2
            variants={staggerItem}
            custom={1}
            className="font-extrabold text-[40px] leading-[66px] text-white"
          >
            RoomRadar
          </motion.h2>
        </motion.div>
      </motion.div>

      <motion.div
        variants={footerReveal}
        className="bg-cover bg-no-repeat w-full min-h-[500px] relative overflow-hidden hidden xl:block"
        style={{
          backgroundImage: "url('/images/footer-desktop-bg.svg')",
        }}
      >
        <motion.div
          variants={staggerItem}
          className="absolute -bottom-15 right-0 flex items-center"
        >
          <motion.div variants={staggerItem} custom={0}>
            <Image
              src="/images/radar-icon.svg"
              alt="Room Radar Icon"
              height={100}
              width={100}
              className="w-[263px] h-[263px]"
            />
          </motion.div>

          <motion.h2
            variants={staggerItem}
            custom={1}
            className="font-extrabold text-[160px] leading-[66px] text-white"
          >
            RoomRadar
          </motion.h2>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
