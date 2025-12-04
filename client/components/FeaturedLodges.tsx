import { useState, useEffect } from "react";
import { FeaturedLodges } from "@/lib/types/Listings";
import { fetchListings } from "@/lib/api/FetchListings";
import { IoLocationOutline } from "react-icons/io5";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "motion/react";
import { ListingSkeleton } from "@/components/ListingSkeleton";
import { staggerItem } from "@/components/animation/motion";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";

const FeaturedLodge = () => {
  const [data, setData] = useState<FeaturedLodges[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getListing = async (): Promise<void> => {
    setLoading(true);
    try {
      const listings = await fetchListings();
      setData(listings.featured_lodges ?? []);
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
      <Carousel
        opts={{ align: "start" }}
        orientation="vertical"
        className="w-full max-w-full md:hidden"
      >
        <CarouselContent>
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <CarouselItem key={`skeleton-${i}`} className="basis-1 max-w-[315px] mx-auto">
                  <ListingSkeleton />
                </CarouselItem>
              ))
            : data.map((item, index) => (
                <CarouselItem key={item.id ?? index} className="basis-1 pb-10">
                  <motion.div
                    variants={staggerItem}
                    initial="hidden"
                    animate="show"
                    viewport={{ once: true, amount: 0.1 }}
                    custom={index}
                    className="w-full max-w-[315px] mx-auto"
                  >
                    <Card className="bg-transparent">
                      <CardHeader className="relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={100}
                          width={100}
                          className="w-full max-w-[315px]"
                        />
                        <FaHeart
                          className="absolute right-4 top-2 text-(--dark-grey)"
                          size={22}
                        />
                        <p className="absolute bottom-4 left-2 bg-black text-(--light-green) font-medium text-[13px] px-2 rounded-[56px]">
                          2 room apartment
                        </p>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-1.5">
                        <h4 className="font-medium leading-normal text-base text-(--gold-yellow)">
                          {item.name}
                        </h4>
                        <p className="flex items-center text-(--gold-yellow) text-[13px] font-normal leading-normal">
                          <IoLocationOutline />
                          <span>{item.location}</span>
                        </p>
                        <p className="text-(--gold-yellow) font-275 text-sm italic">
                          {item.description}
                        </p>
                        <p className="flex items-center text-(--gold-yellow) text-sm font-medium leading-normal">
                          Price: {item.price}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
        </CarouselContent>
      </Carousel>

      {/* ---------------- DESKTOP GRID ---------------- */}
      <div className="w-full hidden md:grid grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={`skeleton-grid-${i}`} className="max-w-[273px]">
                <ListingSkeleton />
              </div>
            ))
          : data.map((item, index) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                className="max-w-[273px]"
              >
                <Card className="bg-transparent">
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
                    <h4 className="font-medium leading-normal text-[20px] text-(--gold-yellow)">
                      {truncate(item.name, 16)}
                    </h4>
                    <p className="flex items-center text-(--gold-yellow) text-sm font-normal leading-normal">
                      <IoLocationOutline />
                      <span>{truncate(item.location, 11)}</span>
                    </p>
                    <p className="flex items-center text-(--gold-yellow) text-sm font-normal leading-normal">
                      Price: {truncate(item.price, 11)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default FeaturedLodge;
