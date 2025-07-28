import { useState } from "react";
import { twMerge } from "tailwind-merge";

type ImageCarouselProps = {
  images: ReadonlyArray<{
    src: string;
    alt: string;
  }>;
};

export default function ImageCarouselOptimize({ images }: ImageCarouselProps) {
  const [currIndex, setCurrIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(1);
  const currImage = images[currIndex];
  const nextImage = nextIndex !== null ? images[nextIndex] : null;
  const [isTransition, setIsTransition] = useState(false);

  const changeImage = (index: number, dir: number) => {
    setNextIndex(index);
    setDirection(dir);
    // Allow the next image to be set before the transition starts
    requestAnimationFrame(() => {
      setIsTransition(true);
    });
  };

  const handleNext = () => {
    const nextIndex = (currIndex + 1) % images.length;
    changeImage(nextIndex, -1);
  };

  const handlePrev = () => {
    const prevIndex = (currIndex - 1 + images.length) % images.length;
    changeImage(prevIndex, 1);
  };

  // const handleClick = (index: number) => {
  //   if (index === currIndex) return; // No need to transition if the same index is clicked
  //   setIsTransition(true);
  //   setCurrIndex(index);
  // };

  return (
    <div>
      <h1 className="pb-4 text-2xl font-bold">Image Carousel</h1>
      <div className="relative h-auto w-full max-w-[600px] bg-black/90 py-4">
        <img
          src={currImage.src}
          alt={currImage.alt}
          key={currImage.src}
          className={twMerge(
            "z-10 h-[400px] w-full object-cover object-center transition-transform duration-700 ease-in-out",
            nextIndex && isTransition && `translateX(${direction * 100}%)`,
          )}
        />
        {nextImage && (
          <img
            src={nextImage.src}
            alt={nextImage.alt}
            key={nextImage.src}
            onTransitionEnd={() => {
              setCurrIndex(nextIndex!);
              setNextIndex(null);
              setIsTransition(false);
              setDirection(1);
            }}
            className={twMerge(
              "absolute inset-0 top-4 z-10 h-[400px] w-full object-cover object-center transition-transform duration-700 ease-in-out",
              !isTransition && `translateX(-${direction * 100}%)`,
            )}
          />
        )}

        <button
          aria-label="Previous image"
          className="absolute inset-y-1/2 left-4 z-10 h-8 w-8 rounded-full bg-black/85 hover:bg-black/25"
          onClick={handlePrev}
          disabled={isTransition}
        >
          &#10094;
        </button>

        {/* <div className="absolute left-1/2 flex -translate-x-1/2 -translate-y-8 justify-center gap-2 rounded-xl bg-black p-2">
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
        </div> */}

        <button
          aria-label="Next image"
          className="absolute inset-y-1/2 right-4 z-10 h-8 w-8 rounded-full bg-black/85 hover:bg-black/25"
          onClick={handleNext}
          disabled={isTransition}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
