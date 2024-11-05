import { useEffect, useState } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

import Card from "./Card";
import bg1 from "@/assets/images/bg1.jpg";
import bg2 from "@/assets/images/bg2.jpg";
import bg3 from "@/assets/images/bg3.jpg";
import bg4 from "@/assets/images/bg4.jpg";
import bg5 from "@/assets/images/bg5.jpg";

const list = [
  {
    imgUrl: bg1,
    title: "Title 1",
    description: "Description 1",
    createdAt: "2m ago",
  },
  {
    imgUrl: bg2,
    title: "Title 2",
    description: "Description 2",
    createdAt: "3m ago",
  },
  {
    imgUrl: bg3,
    title: "Title 3",
    description: "Description 3",
    createdAt: "4m ago",
  },
  {
    imgUrl: bg4,
    title: "Title 4",
    description: "Description 4",
    createdAt: "5m ago",
  },
  {
    imgUrl: bg5,
    title: "Title 5",
    description: "Description 5",
    createdAt: "6m ago",
  },
];

const Trending = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(1);

  const handleNext = () => {
    api?.scrollNext();
  };

  const handlePrev = () => {
    api?.scrollPrev();
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold mb-6">Trending</h3>

        <div className="flex items-center gap-4">
          <MdOutlineNavigateBefore
            className={`text-2xl cursor-pointer ${
              current === 1 ? "opacity-50" : ""
            }`}
            onClick={handlePrev}
          />
          <MdOutlineNavigateNext
            className={`text-2xl cursor-pointer ${
              current === count ? "opacity-50" : ""
            }`}
            onClick={handleNext}
          />
        </div>
      </div>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {list.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Trending;
