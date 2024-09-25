"use client";
import { useState, useEffect, FC } from "react";
import Image from "next/image";

export interface ImageData {
  src: string;
}

interface ImageSliderProps {
  images: ImageData[];
}
const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (!isHovered) {
      const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="relative h-[560px] group "
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          priority={true}
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-all duration-400 ease-in-out cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
