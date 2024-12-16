"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ImageModal from "./ImageModel";

const PhotoGallery = ({ photoId }: { photoId: string }) => {
  const pId = Number(photoId);
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();
  const handleClose = () => {
    setIsOpen(false);
    router.back();
  };

  return <ImageModal photoId={pId} isOpen={isOpen} onClose={handleClose} />;
};

export default PhotoGallery;
