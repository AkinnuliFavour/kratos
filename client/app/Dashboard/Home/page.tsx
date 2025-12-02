"use client";
import { inter } from "@/lib/font";
import { FaHeart } from "react-icons/fa";
import { SavedListings } from "@/components/SavedListings";
import RecommendedListing from "@/components/RecommendedListing";
import { FaCaretRight } from "react-icons/fa6";

const Homepage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full px-4 xl:px-[82px] mt-8 max-w-[1440px] mx-auto">
        <div
          style={{ backgroundImage: "url('/images/hero-img-mobile.svg')" }}
          className="w-full h-[164px] md:h-[300px] xl:h-[439px] pl-[13px] relative bg-cover bg-no-repeat bg-center rounded-[10px]"
        >
          <div className="absolute bottom-[35px] lg:top-1/2 lg:space-y-4">
            <h1 className="font-semibold text-[26px] leading-7 text-white shadow-lg lg:font-semibold lg:text-[66px] max-w-[204px] lg:max-w-full">
              Welcome Back, Chiamaka
            </h1>
            <p className="hidden lg:block font-medium text-[34px] shadow-lg text-white">Find your next apartment</p>
          </div>
        </div>
      </div>

      <section className="w-full max-w-[1440px] mx-auto mt-[37px] px-4 xl:px-[82px] md:grid grid-cols-[3fr_1fr] gap-6">
        <div>
          <div className="w-full space-y-[9px]">
            <h2
              className={`${inter.variable} flex items-center gap-1 text-(--dark-green)`}
            >
              <FaHeart className="lg:text-[40px]"/>{" "}
              <span className="font-medium text-xl lg:text-[40px]">Saved Listings</span>
            </h2>
            <div className="h-0.5 bg-[#2A9821]"></div>
          </div>

          <div className="mt-[25px]">
            <SavedListings />
          </div>
        </div>

        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat hidden md:block rounded-[14px]"
          style={{
            backgroundImage: "url('/images/saved-listings-aside.svg')",
          }}
        ></div>
      </section>

      <section className="w-full max-w-[1440px] mx-auto mt-[69px] px-4 xl:px-[82px] md:grid grid-cols-[1fr_3fr] gap-6">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat hidden md:block rounded-[14px]"
          style={{
            backgroundImage: "url('/images/recommended-listings-aside.svg')",
          }}
        ></div>

        <div>
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
            <button className="lg:py-[17px] py-2.5 text-(--dark-grey) text-base cursor-pointer lg:text-[23px] font-semibold w-full bg-(--gold-yellow) rounded-[13px] flex items-center gap-4 justify-center"><span>Keep Exploring </span> <FaCaretRight size={20}/> </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
