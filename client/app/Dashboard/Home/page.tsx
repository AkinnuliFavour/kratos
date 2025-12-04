"use client";
import { inter } from "@/lib/font";
import { FaHeart } from "react-icons/fa";
import { SavedListings } from "@/components/SavedListings";
import RecommendedListing from "@/components/RecommendedListing";
import { RxCaretDown } from "react-icons/rx";
import { FaCaretRight } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { motion } from "motion/react";
import FeaturedLodge from "@/components/FeaturedLodges";
import {
  softReveal,
  slideIn,
  fadeIn,
  staggerContainer,
  staggerItem,
} from "@/components/animation/motion";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full px-4 xl:px-[82px] mt-8 max-w-[1440px] mx-auto">
        <motion.div
          variants={slideIn("up")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ backgroundImage: "url('/images/hero-img-mobile.svg')" }}
          className="w-full h-[164px] md:h-[300px] xl:h-[439px] pl-[13px] bg-cover bg-no-repeat bg-center rounded-[10px] relative"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="absolute bottom-[35px] lg:top-1/2 lg:space-y-4"
          >
            <h1 className="font-semibold text-[26px] leading-7 text-white shadow-lg lg:font-semibold lg:text-[66px] max-w-[204px] lg:max-w-full">
              Welcome Back, Chiamaka
            </h1>
            <p className="hidden lg:block font-medium text-[34px] shadow-lg text-white">
              Find your next apartment
            </p>
          </motion.div>

          <div className=" w-full px-[150px] absolute -bottom-13 left-0">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className=" bg-white w-full hidden lg:flex lg:items-center lg:justify-between py-3 px-6 rounded-sm gap-5"
            >
              <motion.div
                variants={staggerItem}
                custom={0}
                className=" flex-1 bg-[#767676B2] px-3.5 py-3 rounded-[5px]"
              >
                <p className="flex items-center justify-between font-medium text-[15px] text-white">
                  <span>Location</span>
                  <IoLocationOutline size={24} />
                </p>
              </motion.div>

              <motion.div
                variants={staggerItem}
                custom={1}
                className="flex-1 bg-[#767676B2] px-3.5 py-3 rounded-[5px]"
              >
                <p className="flex items-center justify-between font-medium text-[15px] text-white">
                  <span className="truncate">Apartment type</span>
                  <RxCaretDown size={24} />
                </p>
              </motion.div>

              <motion.div
                variants={staggerItem}
                custom={2}
                className="flex-2 bg-[#111111CC] px-3.5 py-3 rounded-[5px] flex items-center justify-between"
              >
                <input
                  type="text"
                  className="font-medium text-[15px] text-white/60 outline-none border-none w-full pr-4"
                  placeholder="Search"
                ></input>
                <CiSearch
                  size={20}
                  className="font-medium text-[15px] text-white/60"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <section className="w-full max-w-[1440px] mx-auto mt-[37px] lg:mt-[90px] px-4 xl:px-[82px] md:grid grid-cols-[3fr_1fr] gap-6">
        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className=""
        >
          <div className="w-full space-y-[9px]">
            <h2
              className={`${inter.variable} flex items-center gap-4 text-(--dark-green)`}
            >
              <FaHeart className="lg:text-[40px]" />{" "}
              <span className="font-medium text-xl lg:text-[40px]">
                Saved Listings
              </span>
            </h2>
            <div className="h-0.5 bg-[#2A9821]"></div>
          </div>

          <div className="mt-[25px]">
            <SavedListings />
          </div>
        </motion.div>

        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="h-full w-full bg-cover bg-center bg-no-repeat hidden md:block rounded-[14px]"
          style={{
            backgroundImage: "url('/images/saved-listings-aside.svg')",
          }}
        />
      </section>

      <section className="w-full max-w-[1440px] mx-auto mt-[69px] lg:mt-[139px] px-4 xl:px-[82px] md:grid grid-cols-[1fr_3fr] gap-6">
        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="h-full w-full bg-cover bg-center bg-no-repeat hidden md:block rounded-[14px]"
          style={{
            backgroundImage: "url('/images/recommended-listings-aside.svg')",
          }}
        />

        <motion.div
          variants={softReveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full space-y-[9px]">
            <h2
              className={`${inter.variable} font-medium text-xl text-(--gold-yellow) lg:text-[40px]`}
            >
              🏡 Recommended For You
            </h2>
            <div className="h-0.5 bg-(--gold-yellow)"></div>
          </div>

          <div className="mt-[25px]">
            <RecommendedListing />
          </div>

          <div className="w-full mt-[29px] lg:mt-[33px]">
            <button className="lg:py-[17px] py-2.5 text-(--dark-grey) text-base cursor-pointer lg:text-[23px] font-semibold w-full bg-(--gold-yellow) rounded-[13px] flex items-center gap-4 justify-center">
              <span>Keep Exploring </span> <FaCaretRight size={20} />{" "}
            </button>
          </div>
        </motion.div>
      </section>

      <div className="w-full bg-[#383838]">
        <section className="w-full mt-[37px] lg:mt-[172px] max-w-[1440px] mx-auto px-4 xl:px-[82px] py-[54px]">
          <div className="w-full space-y-[9px]">
            <h2
              className={`${inter.variable} font-medium text-xl text-(--gold-yellow) lg:text-[40px]`}
            >
              ✨ Featured Lodges
            </h2>
            <div className="h-0.5 bg-(--gold-yellow)"></div>
          </div>
          <div className="mt-[42px]">
            <FeaturedLodge />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
