import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

type ImageCarouselProps = {
  images: ReadonlyArray<{
    src: string;
    alt: string;
  }>;
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const [isTransition, setIsTransition] = useState(false);

  const [currIndex, setCurrIndex] = useState(0);
  const handleNext = () => {
    setIsTransition(true);
    setCurrIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = () => {
    setIsTransition(true);
    setCurrIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  const handleClick = (index: number) => {
    if (index === currIndex) return; // No need to transition if the same index is clicked
    setIsTransition(true);
    setCurrIndex(index);
  };

  const updateImageWidth = () =>
    setImageWidth(ref.current?.getBoundingClientRect()?.width ?? 0);

  useEffect(() => {
    updateImageWidth();
    window.addEventListener("resize", updateImageWidth);
    return () => window.removeEventListener("resize", updateImageWidth);
  }, []);

  return (
    <div>
      <h1 className="pb-4 text-2xl font-bold">Image Carousel</h1>
      <div
        ref={ref}
        className="relative h-auto w-full max-w-[600px] overflow-hidden bg-black/90 py-4"
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currIndex * (imageWidth ?? 0)}px)`,
            transition: isTransition ? "transform 0.7s ease-in-out" : "none",
            zIndex: 1,
          }}
          onTransitionEnd={() => setIsTransition(false)}
        >
          {images.map((image) => (
            <img
              src={image.src}
              alt={image.alt}
              key={image.src}
              className="h-[400px] w-full object-cover object-center"
            />
          ))}
        </div>

        <button
          aria-label="Previous image"
          className="absolute inset-y-1/2 left-4 z-10 h-8 w-8 rounded-full bg-black/85 hover:bg-black/25"
          onClick={handlePrev}
        >
          &#10094;
        </button>

        <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-8 justify-center gap-2 rounded-xl bg-black p-2">
          {images.map((image, idx) => (
            <button
              key={image.src}
              aria-label={`Navigate to ${image.alt}`}
              className={twMerge(
                "h-2 w-2 rounded-full bg-white/30 hover:cursor-pointer hover:bg-white/70",
                idx == currIndex && "bg-white",
              )}
              onClick={() => handleClick(idx)}
            ></button>
          ))}
        </div>

        <button
          aria-label="Next image"
          className="absolute inset-y-1/2 right-4 z-10 h-8 w-8 rounded-full bg-black/85 hover:bg-black/25"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
