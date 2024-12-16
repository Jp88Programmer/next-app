import { imageData } from "@/data/imageData";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

const page = ({ params }: { params: { photoId: string } }) => {
  const photoId = Number(params.photoId);
  const ImageComponent = imageData[photoId].Icon;
  const name = imageData[photoId].name;
  const codeSnippet = `${imageData[photoId].codeSnippet}`;
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4 w-[550px] p-10 border-2 rounded-lg shadow-box m-10">
        <div className="flex items-center justify-center w-full">
          <ImageComponent size={30} color="black" />
        </div>
        <div className="flex flex-col">
          <div className="text-base font-bold text-center">{name}</div>
          <SyntaxHighlighter
            language="javascript"
            style={darcula}
            customStyle={{
              fontSize: "1rem",
              borderRadius: "0.5rem",
              padding: "1rem",
            }}
          >
            {codeSnippet}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default page;
