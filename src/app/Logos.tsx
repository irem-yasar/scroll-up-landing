import React from "react";
import Image from "next/image";

interface LogoCard {
  name: string;
  logoUrl: string;
}

const Logos: React.FC<LogoCard> = ({ name, logoUrl }) => {
  return (
    <div className="flex h-[150px] w-[150px] rounded-md p-4  justify-center items-center">
      <div className="w-full h-full flex justify-center items-center">
        <Image src={logoUrl} alt="Image" width={128} height={128} />
      </div>
    </div>
  );
};

export default Logos;
