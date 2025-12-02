import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { fetchListings } from "@/lib/api/FetchListings";
import { Recommendedlisting } from "@/lib/types/Listings";

const RecommendedListing = () => {
  const [data, setData] = useState<Recommendedlisting[]>([]);

  const getListing = async (): Promise<void> => {
    const listings = await fetchListings();
    setData(listings.recommended_listings ?? []);
  };

  useEffect(() => {
    getListing();
  }, []);

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full md:hidden"
      >
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={item.id ?? index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4"
            >
              <div className="w-full max-w-[273px] pr-2.5">
                <Card>
                  <CardHeader>
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={100}
                      width={100}
                      className="w-full"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col">
                    <h4 className="font-medium leading-normal text-[15px]">
                      {item.name}
                    </h4>
                    <p className="flex items-center text-(--dark-grey) text-[12px] font-normal leading-normal">
                      <IoLocationOutline />
                      <span>{item.location}</span>
                    </p>
                    <p className="flex items-center text-(--dark-grey) text-[12px] font-normal leading-normal">
                      Price: {item.price}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="w-full hidden md:block">
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div className="max-w-[273px]" key={item.id}>
              <Card>
                <CardHeader>
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={100}
                    width={100}
                    className="w-full max-w-[273px]"
                  />
                </CardHeader>
                <CardContent className="flex flex-col">
                  <h4 className="font-medium leading-normal text-[15px] lg:text-[20px]">
                    {item.name}
                  </h4>
                  <p className="flex items-center text-(--dark-grey) text-[12px] lg:text-sm font-normal leading-normal">
                    <IoLocationOutline />
                    <span>{item.location}</span>
                  </p>
                  <p className="flex items-center text-(--dark-grey) text-[12px] font-normal leading-normal lg:text-sm">
                    Price: {item.price}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedListing;
