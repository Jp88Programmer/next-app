import { IconType, imageData } from "@/data/imageData";
import Link from "next/link";
import React from "react";

const PhotoPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full p-12 gap-4">
      <h1>Photo Gallry</h1>
      <div className="grid grid-cols-3 gap-4">
        {imageData.map(({ Icon }: { Icon: IconType }, index) => (
          <Link href={`/photo/${index}`} key={index}>
            <div
              key={index}
              className="flex w-full p-12 border-2 border-blue-400 rounded-lg shadow-blue-400 shadow-md"
            >
              <Icon size={100} color="blue" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoPage;
