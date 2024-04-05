"use client"

import { useCopyStore } from "@/store";

const Footer = () => {

  const footerCopy = useCopyStore((state) => state.creatorCopy)  
  return (
    <footer class="relative bg-blueGray-200 pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left"></div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
             <p>{footerCopy}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
