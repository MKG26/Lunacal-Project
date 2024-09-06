"use client";
import { GoQuestion } from "react-icons/go";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import PhotoFrame from "./photoframe";
import { useState } from "react";
import { ChangeEvent } from "react";

interface PhotoFrameProps {
  imageUrl: string;
}

const SecondCard: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative mt-[350px]">
      <div className="absolute right-0">
        <div className="relative mt-[120px] mr-20 w-[720px] h-[316px] bg-[#363c44] rounded-2xl card-shadow">
          <div className="flex mx-3 pt-5">
            <GoQuestion size={24} />
            <button className="ml-5 bg-[#161616] py-4 px-10 rounded-2xl poppins btn-second">
              Gallery
            </button>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="btn-top-shadow ml-[210px] mb-1 mt-2 bg-[#41474f] text-sm font-bold px-6 pt-[11px] rounded-full cursor-pointer"
            >
              + ADD IMAGE
            </label>

            <button className="bg-[#24272a] h-10 w-10 text-gray-400 rounded-full ml-8 mt-2 flex justify-center items-center btn-arrow">
              <FaArrowLeft />
            </button>
            <button className="bg-[#24272a] h-10 w-10 text-gray-400 rounded-full ml-4 mt-2 flex justify-center items-center btn-arrow">
              <FaArrowRight />
            </button>
          </div>

          <div className="flex">
            <BsGrid3X2GapFill
              size={30}
              className="text-gray-600 shadow-2xl rotate-90 mt-[80px] ml-2"
            />
            <PhotoFrame imageUrl={imageUrl} />
            <PhotoFrame imageUrl={imageUrl} />
            <PhotoFrame imageUrl={imageUrl} />
          </div>
        </div>
        <div className="w-[652px] h-1 mt-6 mx-8 bg-[#363c44] rounded-sm hr-line-shadow"></div>
      </div>
    </div>
  );
};

export default SecondCard;
