import { Photos } from "@/types/photos";
import Image from "next/image";
import { IoSearch, IoSettings } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export default async function Home() {
  const data = await fetch(process.env.NEXT_PUBLIC_API_URL + "/photos");
  const photos = await data.json();
  return (
    <div className="h-screen px-4 py-4 md:px-8 lg:px-16">
      <header className="flex h-16 items-center justify-between">
        <div>
          <IoSettings className="text-4xl" />
        </div>
        <div className="relative w-1/3">
          <IoSearch className="absolute z-1 ml-4 -translate-y-1/2 text-2xl" />
          <input
            type="text"
            placeholder="search for images by name, descriptions, or tags"
            autoFocus
            className="absolute h-12 w-full min-w-3xs -translate-y-1/2 rounded-full bg-stone-800 pr-4 pl-12 inset-shadow-xs inset-shadow-gray-600 focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-stone-800 focus:outline-none"
          />
        </div>
        <form className="toggle-switch">
          <input type="checkbox" id="toggle" className="hidden h-0 w-0" />
          <label
            className="block h-9 w-18 cursor-pointer rounded-full bg-pink-400 inset-shadow-sm inset-shadow-gray-600 duration-300 after:block after:h-8 after:w-8 after:translate-x-[2.5px] after:translate-y-[2.5px] after:rounded-full after:bg-stone-800 after:shadow-md after:duration-300 after:content-['']"
            htmlFor="toggle"
          ></label>
        </form>
      </header>
      <main className="mt-8">
        <div className="masonry auto-rows-[40px]">
          {photos?.map((photo: Photos) => {
            const spanList = [6, 7, 8];
            const i = Math.floor(Math.random() * 3);
            const rowSpan = `row-span-${spanList[i]}`;
            return (
              <div
                key={photo.photoId}
                className={twMerge(
                  "masonry-item row-span-8 rounded-md",
                  rowSpan,
                )}
              >
                <Image
                  src={photo.image.thumb}
                  alt={photo.slug}
                  width={photo.width}
                  height={photo.height}
                  className="h-full w-full rounded-md object-cover object-center"
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
