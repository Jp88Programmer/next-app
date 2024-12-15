import { imageData } from "@/data/imageData";
import React from "react";

const page = ({ params }: { params: { photoId: string } }) => {
  const photoId = Number(params.photoId);
  const ImageComponent = imageData[photoId].Icon;
  const name = imageData[photoId].name;
  const usecase = imageData[photoId].usecase;
  return (
    <div className="flex w-full p-24 border-2 border-blue-400 rounded-lg shadow-blue-400 shadow-md">
      <ImageComponent size={100} color="blue" />
      <div className="flex flex-col gap-2 ml-4">
        <div className="text-base font-bold">{name}</div>
        <div className="text-sm">{usecase}</div>
      </div>
    </div>
  );
};

export default page;
