import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ImageCarouselProps = {
  images: ReadonlyArray<{
    src: string;
    alt: string;
  }>;
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currIndex, setCurrIndex] = useState(0);
  const handleNext = () => setCurrIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrIndex((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="">
      <h1 className="pb-4 text-2xl font-bold">Image Carousel</h1>
      <div className="relative h-[400px]">
        {images.map((image, idx) => {
          console.log("Rendering image:", image.src, "at index:", idx);
          return (
            <img
              src={image.src}
              alt={image.alt}
              key={image.src}
              className={twMerge(
                "absolute w-full",
                idx == currIndex
                  ? "opacity-100"
                  : "opacity-0 transition-opacity duration-500",
              )}
            />
          );
        })}
        <button
          className="absolute inset-y-1/2 left-4 z-10 h-8 w-8 rounded-full bg-black/85 hover:bg-black/25"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="absolute inset-y-1/2 right-4 z-10 h-8 w-8 rounded-full bg-black/85 hover:bg-black/25"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
