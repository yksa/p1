import { useEffect, useState } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

import bg1 from "@/assets/images/bg1.jpg";
import bg2 from "@/assets/images/bg2.jpg";
import bg3 from "@/assets/images/bg3.jpg";
import bg4 from "@/assets/images/bg4.jpg";
import bg5 from "@/assets/images/bg5.jpg";
import bg6 from "@/assets/images/bg6.jpg";
import bg7 from "@/assets/images/bg7.jpg";
import HappeingCard from "./HappeingCard";
import Card from "./Card";

const list = [
  [
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
  ],
  [
    {
      imgUrl: bg6,
      title: "Title 6",
      description: "Description 6",
      createdAt: "7m ago",
    },
    {
      imgUrl: bg7,
      title: "Title 7",
      description: "Description 7",
      createdAt: "8m ago",
    },
    {
      imgUrl: bg1,
      title: "Title 8",
      description: "Description 8",
      createdAt: "9m ago",
    },
    {
      imgUrl: bg2,
      title: "Title 9",
      description: "Description 9",
      createdAt: "10m ago",
    },
    {
      imgUrl: bg3,
      title: "Title 10",
      description: "Description 10",
      createdAt: "11m ago",
    },
  ],
];

const mobileList = [...list[0], ...list[1]];

const Happening = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [mobileApi, setMobileApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(1);
  const [mobileCount, setMobileCount] = useState(0);
  const [mobileCurrent, setMobileCurrent] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleNext = () => {
    if (screenWidth <= 425) {
      mobileApi?.scrollNext();
      return;
    }
    api?.scrollNext();
  };

  const handlePrev = () => {
    if (screenWidth <= 425) {
      mobileApi?.scrollPrev();
      return;
    }
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

  useEffect(() => {
    if (!mobileApi) {
      return;
    }

    setMobileCount(mobileApi.scrollSnapList().length);

    mobileApi.on("select", () => {
      setMobileCurrent(mobileApi.selectedScrollSnap() + 1);
    });
  }, [mobileApi]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold mb-6">Happening</h3>

        <div className="flex items-center gap-4">
          <MdOutlineNavigateBefore
            className={`text-2xl cursor-pointer   
            ${
              screenWidth <= 425
                ? mobileCurrent === 1
                  ? "opacity-50"
                  : ""
                : current === 1
                ? "opacity-50"
                : ""
            }
            `}
            onClick={handlePrev}
          />
          <MdOutlineNavigateNext
            className={`text-2xl cursor-pointer ${
              screenWidth <= 425
                ? mobileCurrent === mobileCount
                  ? "opacity-50"
                  : ""
                : current === count
                ? "opacity-50"
                : ""
            }`}
            onClick={handleNext}
          />
        </div>
      </div>

      {screenWidth <= 425 ? (
        <Carousel className="w-full" setApi={setMobileApi}>
          <CarouselContent>
            {mobileList.map((item, index) => (
              <CarouselItem key={index}>
                <Card {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {list.map((item, index) => (
              <CarouselItem key={index}>
                <HappeingCard cards={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </section>
  );
};

export default Happening;
