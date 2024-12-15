import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { imageData } from "@/data/imageData";

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
  const usecase = imageData[photoId].usecase;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>{usecase}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <ImageComponent size={100} color="blue" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
