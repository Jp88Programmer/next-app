import { IconType, imageData } from "@/data/imageData";
import Link from "next/link";
import React from "react";

const PhotoPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full p-12 gap-8">
      <span className="text-2xl font-bold text-center">Icons Gallery</span>
      <div className="grid grid-cols-6 gap-4">
        {imageData.map(
          ({ Icon, name }: { Icon: IconType; name: string }, index) => (
            <Link href={`/photo/${index}`} key={index}>
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 w-full p-12 border-1 rounded-lg shadow-box"
              >
                <Icon size={40} color="black" />
                <div className="text-sm font-medium">{name}</div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default PhotoPage;
