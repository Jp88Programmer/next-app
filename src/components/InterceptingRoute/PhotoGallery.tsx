"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ImageModal from "./ImageModel";

const PhotoGallery = ({ photoId }: { photoId: string }) => {
  const pId = Number(photoId);
  const [isOpen, setIsOpen] = useState(true);
  
  // const router = useRouter();
  const handleClose = () => {
    setIsOpen(false);
    // router.back();
  };

  // useEffect(() => {
  //   if (!isOpen) {
  //     router.back();
  //   }
  // }, [isOpen]);

  return <ImageModal photoId={pId} isOpen={isOpen} onClose={handleClose} />;
};

export default PhotoGallery;
