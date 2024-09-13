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
  const galleryHeight = type === GalleryTypes.Desctop ? 295 : 250;
  const galleryHeightPx = `${galleryHeight}px`;
  const imagesForGallery = images.map((image) => {
    if (image.videoId)
      return {
        original: image.large,
        thumbnail: image.thumb,
        renderItem: () => (
          <div className="video-wrapper">
            <YouTube
              videoId={image.videoId}
              opts={{
                width: "100%",
                height: galleryHeightPx,
                playerVars: { autoplay: 0 },
              }}
            />
          </div>
        ),
      };
    return {
      original: image.large,
      thumbnail: image.thumb,
      renderItem: () => (
        <div className={`h-[${galleryHeightPx}] object-cover`}>
          <img
            src={image.large}
            className={`max-h-[${galleryHeightPx}] object-cover`}
          />
        </div>
      ),
    };
  });
  return (
    <div className={`rounded-md overflow-hidden h-[${galleryHeightPx}]`}>
      <ImageGallery
        items={imagesForGallery}
        lazyLoad={true}
        thumbnailPosition={type === GalleryTypes.Desctop ? "right" : "bottom"}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </div>
  );
};
export default Gallery;
