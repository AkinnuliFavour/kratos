"use client";

import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { fetchListings } from "@/lib/api/FetchListings";
import { SavedListing } from "@/lib/types/Listings";
import { ListingSkeleton } from "@/components/ListingSkeleton";
import { staggerItem } from "@/components/animation/motion";
import { FaHeart } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

export function SavedListings() {
  const [data, setData] = useState<SavedListing[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAll, setShowAll] = useState<boolean>(false);

  const getListing = async (): Promise<void> => {
    setLoading(true);
    try {
      const listings = await fetchListings();
      setData(listings.saved_listings ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getListing();
  }, []);

  function truncate(text: string, maxLength: number) {
    return text.length > maxLength ? text.substring(0, maxLength) + "…" : text;
  }

  return (
    <div className="w-full">
      {/* ---------------- MOBILE CAROUSEL ---------------- */}
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-full md:hidden"
      >
        <CarouselContent>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <CarouselItem
                  key={`skeleton-${i}`}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4"
                >
                  <ListingSkeleton />
                </CarouselItem>
              ))
            : data.map((item, index) => (
                <CarouselItem
                  key={item.id ?? index}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4"
                >
                  <motion.div
                    variants={staggerItem}
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={index} // index used for stagger delay
                    className="w-full max-w-[273px] pr-2.5"
                  >
                    <Card>
                      <CardHeader className="relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={100}
                          width={100}
                          className="w-full"
                        />
                        <FaHeart
                          className="absolute right-4 top-2 text-(--dark-grey)"
                          size={22}
                        />
                        <p className="absolute bottom-4 left-2 bg-black text-(--light-green) font-medium text-[13px] px-2 rounded-[56px]">
                          2 room apartment
                        </p>
                      </CardHeader>
                      <CardContent className="flex flex-col">
                        <h4 className="font-medium leading-normal text-[15px] lg:text-[20px]">
                          {truncate(item.name, 16)}
                        </h4>
                        <p className="flex items-center text-(--dark-grey) text-[12px] lg:text-sm">
                          <IoLocationOutline />
                          <span>{truncate(item.location, 11)}</span>
                        </p>
                        <p className="flex items-center text-(--dark-grey) text-[12px] lg:text-sm">
                          Price: {truncate(item.price, 11)}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>

      {/* ---------------- DESKTOP GRID ---------------- */}
      <div className="w-full hidden md:block">
        <div className="grid grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div key={`skeleton-grid-${i}`} className="max-w-[273px]">
                  <ListingSkeleton />
                </div>
              ))
            : (showAll ? data : data.slice(0, 7)).map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index} // stagger delay
                  className="max-w-[273px]"
                >
                  <Card>
                    <CardHeader className="relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={100}
                        width={100}
                        className="w-full max-w-[273px]"
                      />
                      <FaHeart
                        className="absolute right-4 top-2 text-(--dark-grey)"
                        size={22}
                      />
                      <p className="absolute bottom-4 left-2 bg-black text-(--light-green) font-medium text-[13px] px-2 rounded-[56px]">
                        2 room apartment
                      </p>
                    </CardHeader>
                    <CardContent className="flex flex-col">
                      <h4 className="font-medium leading-normal text-[15px] lg:text-[20px]">
                        {truncate(item.name, 16)}
                      </h4>
                      <p className="flex items-center text-(--dark-grey) text-[12px] lg:text-sm">
                        <IoLocationOutline />
                        <span>{truncate(item.location, 11)}</span>
                      </p>
                      <p className="flex items-center text-(--dark-grey) text-[12px] lg:text-sm">
                        Price: {truncate(item.price, 11)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          {!loading && !showAll && data.length > 7 && (
            <div className="max-w-[273px]">
              <div
                className="cursor-pointer h-full flex items-center justify-center"
                onClick={() => setShowAll(true)}
              >
                <div className="flex flex-col items-center justify-center h-full gap-[31px]">
                  <div className="w-[89px] h-[89px] bg-(--dark-green) rounded-full flex items-center justify-center">
                    <FaAngleDoubleRight className="text-[33px]"/>
                  </div>
                  <p className="text-[23px] font-normal">View All </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
