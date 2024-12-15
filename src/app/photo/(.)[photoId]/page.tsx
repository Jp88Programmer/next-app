import PhotoGallery from "@/components/InterceptingRoute/PhotoGallery";
// import { imageData } from "@/data/imageData";
import React from "react";

const page =  ({ params }: { params: { photoId: string } }) => {
  const photoId = params.photoId;
  console.log("🚀 ~ page ~ photoId:", photoId)
  return <PhotoGallery photoId={photoId} />;
};

export default page;
