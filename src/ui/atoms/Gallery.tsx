"use client";
import ImageGallery from "react-image-gallery";
import type { FC } from "react";
import { GalleryTypes, Image } from "@/entities/image";
import YouTube from "react-youtube";

interface ImageGalleryProps {
  images: Image[];
  type: GalleryTypes;
}

const Gallery: FC<ImageGalleryProps> = ({ images, type }) => {
  const galleryHeight =
    type === GalleryTypes.Desktop ? "h-[450px]" : "h-[250px]";
  const thumbnailPosition = type === GalleryTypes.Desktop ? "right" : "bottom";

  const imagesForGallery = images.map((image) => {
    if (image.videoId) {
      return {
        original: image.large,
        thumbnail: image.thumb,
        renderItem: () => (
          <div className={`w-full ${galleryHeight}`}>
            <YouTube
              videoId={image.videoId}
              opts={{
                width: "100%",
                height: type === GalleryTypes.Desktop ? "450px" : "250px",
                playerVars: { autoplay: 0 },
              }}
            />
          </div>
        ),
      };
    }
    return {
      original: image.large,
      thumbnail: image.thumb,
      renderItem: () => (
        <div
          className={`w-full ${galleryHeight} flex items-center justify-center`}
        >
          <img src={image.large} className={`h-full w-full`} alt="" />
        </div>
      ),
    };
  });

  return (
    <div className={`overflow-hidden rounded-md`}>
      <ImageGallery
        items={imagesForGallery}
        lazyLoad={true}
        thumbnailPosition={thumbnailPosition}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
};

export default Gallery;
