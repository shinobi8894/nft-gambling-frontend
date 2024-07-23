"use client";

import { useContext } from "react";
import { AppContext } from "@/context/context";
import Close from "@/components/basic/icons/close";

const MobileMenu = () => {
  const { isFeatureEnabled, toggleFeatureFlag } = useContext(AppContext);

  return (
    <div
      className={`fixed z-50 w-full ${
        isFeatureEnabled("isOpenMenu") ? "h-full" : "h-0"
      } top-0 bg-main flex flex-col transition-height duration-300 ease-in-out overflow-hidden`}
    >
      <CloseButton onClick={() => toggleFeatureFlag("isOpenMenu")} />
      <MenuList />
    </div>
  );
};

const MenuList = () => (
  <ul className="font-agrandir p-5 text-xl flex flex-col gap-6 font-medium items-start text-primary">
    <li>About</li>
    <li>Casinos</li>
    <li>Whitepaper</li>
    <li>Contact us</li>
    <li>Connect Wallet</li>
  </ul>
);

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <div className="flex w-full justify-end mb-10 p-5">
    <Close onClick={onClick} />
  </div>
);

export default MobileMenu;
