"use client"

import { useCopyStore } from "@/store";

const Footer = () => {

  const footerCopy = useCopyStore((state) => state.creatorCopy)  
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left"></div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
             <p>{footerCopy}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
