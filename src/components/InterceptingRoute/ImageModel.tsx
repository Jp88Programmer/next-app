"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { imageData } from "@/data/imageData";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ImageModalProps {
  photoId: number;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  photoId,
  isOpen,
  onClose,
}) => {
  const ImageComponent = imageData[photoId].Icon;
  const name = imageData[photoId].name;
  const codeSnippet = `${imageData[photoId].codeSnippet}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[500px] px-4 py-6">
        <div className="flex flex-col items-center">
          <ImageComponent size={40} color="black" />
        </div>
        <DialogHeader className="flex items-center justify-center gap-2">
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
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
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
