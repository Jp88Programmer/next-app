import PhotoGallery from "@/components/InterceptingRoute/PhotoGallery";
import React from "react";

const page = ({ params }: { params: { photoId: string } }) => {
  const photoId = params.photoId;
  return <PhotoGallery photoId={photoId} />;
};

export default page;
