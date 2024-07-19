import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  color: "white" | "grey";
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, color }) => {
  const getCardColor = () => {
    switch (color) {
      case "white":
        return "bg-white text-black";
      case "grey":
        return "bg-grey text-black";

      default:
        return "";
    }
  };

  return (
    <div
      className={`flex h-[230px] w-[250px] border rounded-md p-4 ${getCardColor()}`}
    >
      <div className="w-1/3 justify-center pt-2">
        <Image src={imageUrl} alt="Image" width={150} height={150} />
      </div>
      <div className="flex flex-col w-2/3 font-sans px-1 justify-center">
        <div className="mb-4 text-[#030407] font-medium text-base">{title}</div>
        <div className="text-[#606476]">{description}</div>
      </div>
    </div>
  );
};

export default Card;
